# Private Folders (Next.js App Router)

---

# What is a Private Folder?

A **Private Folder** is a folder that Next.js **ignores while creating routes**.

To make a folder private, simply prefix its name with an underscore (`_`).

```
_components
```

This is useful for storing:

- Reusable Components
- Hooks
- Utilities
- Helpers
- Constants

without exposing them as routes.

---

# Normal Folder

Suppose you create

```text
app/
└── components/
    └── test.js
```

```jsx
export default function Test() {
  return <div>Test Component</div>;
}
```

This **does not** create a route because there is no `page.js`.

---

# When Does It Become a Route?

If you add a `page.js`

```text
app/
└── components/
    └── page.js
```

```jsx
export default function ComponentPage() {
  return <div>Component Page</div>;
}
```

Now Next.js creates a new route.

```
/components
```

which may not be what you want.

---

# Create a Private Folder

Rename the folder

```text
components
```

to

```text
_components
```

Project Structure

```text
app/
└── _components/
    └── page.js
```

Now Next.js **ignores** this folder while creating routes.

So

```
/_components
```

does **not** exist.

---

# Importing from a Private Folder

Even though the folder is private, you can still import anything from it.

```jsx
import ComponentPage from "../_components/page";

export default function Home() {
  return <ComponentPage />;
}
```

Private folders only affect **routing**, not **imports**.

```
_components

↓

No Route

↓

Still Importable
```

---

# What if You Want a URL Starting with `_`?

Normally,

```
/_components
```

won't work because `_components` is treated as a private folder.

If you actually want a route beginning with `_`, use the URL-encoded underscore.

Folder

```text
app/
└── %5Fcomponents/
    └── page.js
```

Now the route becomes

```
/_components
```

because

```
%5F
```

is the URL-encoded value of `_`.

---

# Best Practice

In real-world projects, reusable components are usually **kept outside the `app` folder**.

Example

```text
project/
│
├── app/
├── components/
├── hooks/
├── utils/
└── lib/
```

Since the `components` folder is outside `app`, Next.js never considers it for routing.

This is the most common project structure.

---

# When Should You Use `_components`?

Use a private folder when:

- The folder must stay inside `app`.
- You don't want Next.js to generate routes from it.
- You still want to import files from it.

Otherwise, prefer placing shared components outside the `app` directory.

---

# Key Takeaways

- Prefix a folder with `_` to make it a **Private Folder**.
- Private folders are ignored by the Next.js App Router.
- Files inside private folders can still be imported normally.
- Use `%5F` if you want the actual route to start with an underscore (`_`).
- In most projects, shared components are placed **outside** the `app` folder, so private folders are usually unnecessary.
- Use private folders only when you need to keep non-route files inside the `app` directory.