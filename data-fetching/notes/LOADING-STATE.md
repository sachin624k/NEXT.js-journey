# Handling Loading State in Next.js

## What is a Loading State?

Sometimes fetching data takes time.

For example,

- Slow API
- Large Database
- External Service
- Third-party API

Until the data is fetched, users should see a loading screen instead of a blank page.

Next.js provides a very simple and powerful way to handle this using a special file called

```
loading.js
```

No extra code is required.

---

# Example

Suppose we have a Server Component.

```
app
└── todos
      ├── page.js
      └── loading.js
```

Our page fetches data from two APIs.

- One normal API
- One intentionally slow API

The slow API delays the rendering of the entire page.

---

# page.js

```jsx
const Todos = async () => {
  // Fetch data from APIs

  return (
    <>
      <h1>Todos</h1>

      {/* Todos */}
    </>
  );
};

export default Todos;
```

Since this is a **Server Component**, the browser must wait until all data is fetched before receiving the page.

If one API is slow,

the whole page waits.

---

# Handling Loading State

Simply create

```
app/todos/loading.js
```

```jsx
export default function Loading() {
  return (
    <>
      <h1>Todos</h1>
      <p>Loading...</p>
    </>
  );
}
```

That's it.

No imports.

No configuration.

No routing changes.

Next.js automatically detects this file.

---

# How It Works

```
User visits

↓

/todos

↓

Server starts fetching data

↓

Data is still loading

↓

Next.js renders

loading.js

↓

Data finishes loading

↓

page.js replaces loading.js
```

Everything happens automatically.

---

# Folder Structure

```
app
│
└── todos
    ├── page.js
    └── loading.js
```

Whenever `page.js` is waiting for data,

Next.js automatically shows

```
loading.js
```

---

# Why is loading.js Useful?

Without

```
loading.js
```

the user waits for the entire page.

With

```
loading.js
```

the user immediately sees a loading UI.

This improves the overall user experience.

---

# loading.js vs Suspense

At first, both seem to solve the same problem,

but they are used in different situations.

### loading.js

- Works at the **route level**
- Replaces the entire page while it loads
- Automatically detected by Next.js
- No need to wrap components

### Suspense

- Works at the **component level**
- Only delays a specific component
- The rest of the page can render immediately
- Requires wrapping components inside `<Suspense>`

Example

```jsx
<Suspense fallback={<Loading />}>
  <Comments />
</Suspense>
```

Only

```
Comments
```

waits,

not the whole page.

---

# When Should We Use loading.js?

Use it when

- The whole page depends on slow data
- Initial page loading takes time
- You want a route-level loading screen

Examples

- Product Page
- Dashboard
- Profile Page
- Blog Details
- Todos Page

---

# When Should We Use Suspense?

Use it when

- Only one component is slow
- The rest of the page should appear immediately

Example

```
Profile Page

↓

Profile Info

Posts

Friends

Activity Feed (Slow)
```

Wrap only

```
Activity Feed
```

inside

```jsx
<Suspense>
```

instead of delaying the entire page.

---

# Which One Should I Use?

Think of it like this:

```
Entire page is loading

↓

loading.js
```

```
Only one component is slow

↓

Suspense
```

---

# Next Chapter

In the next topic, we'll compare

```
loading.js

vs

Suspense
```

and learn exactly when to use each one.

---

# Key Takeaways

- `loading.js` is a special Next.js file used for route-level loading UI.
- Simply creating `loading.js` inside a route enables automatic loading states.
- No imports, hooks, or configuration are required.
- `loading.js` is displayed while the server is fetching data for the page.
- Once the data is ready, Next.js replaces `loading.js` with `page.js`.
- Use `loading.js` when the **entire page** is waiting for data.
- Use **Suspense** when only a **specific component** is slow and the rest of the page can render immediately.
