# Server Data Fetching in Next.js

## What is Server Data Fetching?

Server Data Fetching means fetching data **on the server** before the page is sent to the browser.

Unlike React, we don't need

- `useEffect()`
- `useState()`
- `"use client"`

We simply make our component `async` and use `await fetch()`.

The server fetches the data first, generates the HTML, and then sends the fully rendered page to the browser.

---

# Example

```jsx
const Todos = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=5",
  );

  const todos = await response.json();

  return (
    <>
      <h1>Todos</h1>

      <div className="todos-container">
        {todos.map(({ id, title, completed }) => (
          <div className="todo-item" key={id}>
            <input type="checkbox" checked={completed} readOnly />
            <p>{title}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Todos;
```

---

# How Does It Work?

```
Browser requests page

↓

Next.js Server

↓

fetch()

↓

API returns data

↓

Generate HTML

↓

Send HTML to Browser

↓

User immediately sees data
```

Notice that

```
No JavaScript fetch runs inside the browser.
```

Everything happens on the server.

---

# Why No useEffect?

In React we write

```jsx
useEffect(() => {
    fetch(...)
}, [])
```

because fetching happens **after** the component is rendered.

In Next.js Server Components,

the component itself is already running on the server.

So we simply write

```jsx
const response = await fetch(...);
```

No hooks are needed.

---

# Why No useState?

The fetched data already exists before rendering starts.

There is no need to store it inside state.

```jsx
const todos = await response.json();
```

Now simply render

```jsx
todos.map(...)
```

---

# Complete Flow

```
Request

↓

Server Component

↓

fetch()

↓

API

↓

Data

↓

Generate HTML

↓

Browser

↓

Display Page
```

Everything happens before the browser receives the page.

---

# Client vs Server Data Fetching

## Client Fetching

```
Page Loads

↓

Empty UI

↓

fetch()

↓

API

↓

Data

↓

Re-render

↓

Show Data
```

---

## Server Fetching

```
Request

↓

fetch()

↓

API

↓

Generate HTML

↓

Browser

↓

Page Already Contains Data
```

No loading state is needed for the initial render.

---

# Next.js extends fetch()

One of the biggest advantages of Next.js is that its `fetch()` function is **enhanced** with additional features.

It is not exactly the same as the browser's `fetch()`.

For example,

```jsx
const response = await fetch(
  "https://jsonplaceholder.typicode.com/todos?_limit=5",
  {
    next: {
      revalidate: 5,
    },
  },
);
```

Notice

```jsx
next: {
}
```

This option does **not** exist in the browser's `fetch()`.

It is provided by Next.js.

---

# Revalidation

```jsx
next: {
  revalidate: 5;
}
```

means

```
Cache this fetched data.

After 5 seconds,

the cache becomes stale.

The next request will fetch fresh data
and update the cache.
```

This is part of **Incremental Static Regeneration (ISR)**.

> **Important:** `revalidate` is measured in **seconds**, not milliseconds.  
> So `revalidate: 5` means 5 seconds, while `revalidate: 5000` means 5000 seconds (about 83 minutes).

---

# Revalidation Flow

```
First User

↓

fetch()

↓

Store Response in Cache

↓

Serve Cached Data

↓

5 Seconds Pass

↓

Cache Becomes Stale

↓

Next Request Arrives

↓

Fetch Fresh Data

↓

Update Cache

↓

Serve Updated Data
```

---

# Why is Next.js fetch Awesome?

Because Next.js automatically provides features like

- Caching
- Revalidation
- Request deduplication (avoids duplicate fetches during a render)
- Static Rendering
- Dynamic Rendering
- Integration with ISR

without installing any extra libraries.

---

# Future Advantage

Currently,

we're fetching data from an API.

```jsx
fetch(...)
```

Later,

when working with databases,

we often won't need to create our own API endpoints just to fetch data for Server Components.

For example,

instead of

```
Browser

↓

API Route

↓

Database
```

we can directly do

```
Server Component

↓

Database
```

This removes one unnecessary network request and usually improves performance.

We'll learn this later when working with databases.

---

# Server Data Fetching vs React Data Fetching

| React               | Next.js Server Components          |
| ------------------- | ---------------------------------- |
| `useEffect()`       | `async` component                  |
| `useState()`        | No state needed for initial fetch  |
| Browser fetch       | Server fetch                       |
| Data after render   | Data before render                 |
| Loading UI required | Initial HTML already contains data |

---

# Advantages

- Better SEO
- Faster first page load
- No loading state for initial data
- No `useEffect()`
- No `useState()`
- Fetch runs on the server
- Supports caching and revalidation
- Can fetch directly from databases or backend services

---

# When Should We Use Server Data Fetching?

Use it when:

- Building blogs
- Documentation websites
- Product pages
- News websites
- Landing pages
- Dashboards with initial server-rendered data
- Any page where SEO matters

---

# Client Fetching vs Server Fetching

| Client Fetching            | Server Fetching                    |
| -------------------------- | ---------------------------------- |
| Runs in Browser            | Runs on Server                     |
| Uses `useEffect()`         | Uses `async` component             |
| Uses `useState()`          | No state needed for initial render |
| Shows loading first        | Data is already available          |
| Less SEO friendly          | Better SEO                         |
| Good for user interactions | Good for initial page rendering    |

---

# Key Takeaways

- Server Components can fetch data directly using `await fetch()`.
- No `useState()`, `useEffect()`, or `"use client"` is required.
- The server fetches the data before rendering the page.
- Next.js extends the native `fetch()` API with features like caching and revalidation.
- `next.revalidate` controls how long cached data remains fresh and is specified in **seconds**.
- Server Components can later fetch directly from databases, often eliminating the need for an API endpoint for internal data.
- Server-side data fetching improves SEO, performance, and the initial user experience.
