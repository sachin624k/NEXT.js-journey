# Recovering from Errors in Next.js

Sometimes errors are **temporary**.

For example,

```jsx
const randomNumber = Math.random();

if (randomNumber > 0.5) {
  throw new Error("Error occurred");
}
```

Sometimes the page works,

sometimes it throws an error.

Instead of asking users to manually refresh the page, Next.js provides a better way to recover from errors.

---

# Method 1 - Hard Reload

The simplest approach is to reload the page.

```jsx
"use client";

export default function Error() {
  return (
    <>
      <p>Something went wrong!</p>

      <button
        onClick={() => {
          window.location.reload();
        }}
      >
        Try Again
      </button>
    </>
  );
}
```

Clicking the button performs a **hard reload** of the entire page.

### Disadvantage

- Reloads the complete page.
- Loses the current UI state.
- Makes another full page request.
- Not the recommended approach.

---

# Method 2 - Using `router.refresh()`

Next.js provides the `useRouter()` hook.

```jsx
"use client";

import { useRouter } from "next/navigation";

export default function Error({ error, reset }) {
  const router = useRouter();

  return (
    <>
      <p>Something went wrong!</p>

      <button
        onClick={() => {
          router.refresh();
          reset();
        }}
      >
        Try Again
      </button>
    </>
  );
}
```

---

# What Does `router.refresh()` Do?

```jsx
router.refresh();
```

It sends a **new request to the server** and fetches fresh Server Component data.

Unlike

```jsx
window.location.reload();
```

it **doesn't perform a full browser reload**.

Only the current route is refreshed.

---

# What Does `reset()` Do?

`reset()` tells the Error Boundary to try rendering the page again.

```
Error

↓

Error Boundary

↓

reset()

↓

Try rendering again
```

Without calling `reset()`,

the error UI remains visible.

---

# Better Approach

Instead of

```jsx
router.refresh();
reset();
```

wrap them inside

```jsx
startTransition();
```

```jsx
"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function Error({ error, reset }) {
  const router = useRouter();

  return (
    <>
      <p>Something went wrong!</p>

      <button
        onClick={() => {
          startTransition(() => {
            router.refresh();
            reset();
          });
        }}
      >
        Try Again
      </button>
    </>
  );
}
```

---

# Why `startTransition()`?

Without

```jsx
startTransition();
```

React immediately removes the error UI by calling

```jsx
reset();
```

even before the new data has arrived.

This can briefly show an empty or loading state.

With

```jsx
startTransition();
```

React treats the update as a **non-urgent transition**.

It waits for the refreshed Server Component data and then updates the UI more smoothly.

---

# Flow

Without `startTransition()`

```
Click Button

↓

reset()

↓

Error UI disappears

↓

Fetch Data

↓

Render Again
```

---

With `startTransition()`

```
Click Button

↓

Fetch Fresh Data

↓

Data Ready

↓

reset()

↓

Render Updated UI
```

This provides a smoother user experience.

---

# Comparison

| Hard Reload            | `router.refresh()`                         |
| ---------------------- | ------------------------------------------ |
| Reloads the whole page | Refreshes the current route                |
| Browser reload         | No browser reload                          |
| Loses page state       | Preserves client-side state where possible |
| Slower                 | Faster                                     |
| Not Recommended        | Recommended                                |

---

# Key Takeaways

- Use `window.location.reload()` only as a last resort.
- `router.refresh()` requests fresh Server Component data without a full page reload.
- `reset()` tells the Error Boundary to attempt rendering the page again.
- Wrapping `router.refresh()` and `reset()` inside `startTransition()` provides a smoother recovery experience.
- This is the recommended way to recover from temporary Server Component errors in Next.js.
