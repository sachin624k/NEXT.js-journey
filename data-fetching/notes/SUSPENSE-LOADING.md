# Using Suspense to Handle Loading State in Next.js

## Why Do We Need Suspense?

Suppose our page fetches data from multiple APIs.

Some APIs respond instantly,

while others take several seconds.

Without Suspense,

the user has to wait until **every API finishes** before seeing anything.

This leads to a poor user experience.

React Suspense solves this problem by allowing different parts of the page to load independently.

---

# Problem

Suppose we have

```
Todos API        → Fast
API 1            → 2 Seconds
API 2            → 3 Seconds
```

Initially we wrote everything inside the page itself.

```jsx
const Todos = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=5",
  );
  const todos = await response.json();

  const slowResponse1 = await fetch("https://procodrr.vercel.app/?sleep=2000");
  const data1 = await slowResponse1.json();

  const slowResponse2 = await fetch("https://procodrr.vercel.app/?sleep=3000");
  const data2 = await slowResponse2.json();

  return <>...</>;
};
```

---

# What's the Problem Here?

Since everything is fetched inside one Server Component,

the browser must wait until **all fetches finish** before receiving the page.

```
Todos

↓

API 1

↓

API 2

↓

Render Page
```

Even if Todos data is ready immediately,

the user still waits.

---

# Better Approach

Instead of fetching everything inside one page,

split every blocking task into its own component.

```
Todos Page

│

├── TodoItem
├── SlowComponent2s
└── SlowComponent3s
```

Each component is now responsible for fetching its own data.

---

# Todo Component

```jsx
export default async function TodoItem() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=5",
  );

  const todos = await response.json();

  return (
    <div className="todos-container">
      {todos.map(({ id, title, completed }) => (
        <div className="todo-item" key={id}>
          <input type="checkbox" checked={completed} readOnly />
          <p>{title}</p>
        </div>
      ))}
    </div>
  );
}
```

---

# Slow Component (2 Seconds)

```jsx
export default async function SlowComponent2s() {
  const response = await fetch("https://procodrr.vercel.app/?sleep=2000");

  const data = await response.json();

  return <div>{JSON.stringify(data)}</div>;
}
```

---

# Slow Component (3 Seconds)

```jsx
export default async function SlowComponent3s() {
  const response = await fetch("https://procodrr.vercel.app/?sleep=3000");

  const data = await response.json();

  return <div>{JSON.stringify(data)}</div>;
}
```

---

# Wrapping Components with Suspense

```jsx
import { Suspense } from "react";

<Suspense fallback="Loading Todos...">
    <TodoItem />
</Suspense>

<Suspense fallback="Loading Data 1...">
    <SlowComponent2s />
</Suspense>

<Suspense fallback="Loading Data 2...">
    <SlowComponent3s />
</Suspense>
```

Each component now has its own loading UI.

---

# What Happens Now?

When the user opens the page,

all components start fetching **at the same time**.

```
Todos API

↓

Running
```

```
2 Second API

↓

Running
```

```
3 Second API

↓

Running
```

All three requests execute simultaneously.

---

# Streaming Begins

Instead of waiting for everything,

Next.js streams each component as soon as it becomes ready.

Timeline

```
0 sec

↓

Page + Loading UI
```

```
0.2 sec

↓

Todos Loaded
```

```
2 sec

↓

SlowComponent2s Loaded
```

```
3 sec

↓

SlowComponent3s Loaded
```

Notice

The user starts seeing content immediately.

---

# Why is This Better?

Without Suspense

```
Wait 3 Seconds

↓

Everything Appears Together
```

With Suspense

```
Todos

↓

Immediately

↓

Data 1

↓

2 Seconds

↓

Data 2

↓

3 Seconds
```

The page feels much faster because content appears progressively.

---

# Custom Loading UI

Instead of showing plain text,

we can display skeleton loaders.

```jsx
<Suspense
  fallback={
    <div className="todos-container">
      {[...Array(5)].map((_, index) => (
        <div className="todo-item" key={index}>
          <div className="shimmer-checkbox shimmer"></div>
          <div className="shimmer-text shimmer"></div>
        </div>
      ))}
    </div>
  }
>
  <TodoItem />
</Suspense>
```

This creates a much better loading experience.

Users see a layout similar to the final UI while the data is loading.

---

# Why Does This Work?

Each Suspense boundary acts independently.

If one component is slow,

only that component waits.

The rest of the page continues rendering.

---

# Parallel Requests

This is one of the biggest advantages.

```
Todos API

↓

Running
```

```
API 1

↓

Running
```

```
API 2

↓

Running
```

All requests start together.

No request waits for another.

---

# Important Difference

Suppose you want

```
Show data

↓

As soon as it arrives
```

Use

```
Suspense
```

But suppose you want

```
Wait for every API

↓

Show everything together
```

Don't split them into separate components.

Fetch everything inside the same Server Component.

---

# Suspense vs loading.js

## loading.js

- Route-level loading
- Entire page waits
- Automatically handled by Next.js

---

## Suspense

- Component-level loading
- Individual components load independently
- Better user experience
- Enables Streaming

---

# loading.js vs Suspense

```
Whole page is loading

↓

loading.js
```

```
Only one component is slow

↓

Suspense
```

---

# Suspense + Streaming

Remember,

Suspense is what makes **Streaming** possible.

Without Suspense,

Next.js waits for the entire page.

With Suspense,

Next.js streams each completed component to the browser.

---

# Next Topic

Until now,

we improved loading by splitting our page into multiple components.

But what if we don't want to split the page?

Can we still make multiple API calls run in parallel?

Yes.

In the next chapter we'll learn **Parallel Data Fetching**, where multiple API requests execute simultaneously even without breaking the page into separate components.

---

# Key Takeaways

- Suspense is used for **component-level loading states**.
- Break slow sections into separate Server Components.
- Wrap each slow component inside its own `<Suspense>` boundary.
- Every Suspense boundary has its own fallback UI.
- Components are streamed to the browser as soon as they finish rendering.
- Multiple fetch requests start in parallel when components are rendered together.
- Suspense improves perceived performance because users don't wait for the slowest request before seeing content.
- Use `loading.js` for route-level loading and `Suspense` for component-level loading.
