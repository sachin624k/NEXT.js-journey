# Parallel Data Fetching in Next.js

## Why Do We Need Parallel Data Fetching?

When fetching data from multiple APIs, there are two approaches:

1. Sequential Data Fetching
2. Parallel Data Fetching

Choosing the correct approach can significantly improve your application's performance.

---

# Sequential Data Fetching

Suppose we write

```jsx
const response = await fetch(
  "https://jsonplaceholder.typicode.com/todos?_limit=5",
);

const todos = await response.json();

const slowResponse2s = await fetch("https://procodrr.vercel.app/?sleep=2000");

const data2s = await slowResponse2s.json();

const slowResponse3s = await fetch("https://procodrr.vercel.app/?sleep=3000");

const data3s = await slowResponse3s.json();
```

Here,

every request waits for the previous request to finish.

```
Request 1

↓

Finished

↓

Request 2

↓

Finished

↓

Request 3

↓

Finished
```

This is called **Sequential Data Fetching**.

---

# Problem

In our example,

all three APIs are completely independent.

```
Todos API

↓

Independent
```

```
2 Second API

↓

Independent
```

```
3 Second API

↓

Independent
```

Since none of them depends on another,

waiting for each request is unnecessary.

This increases the total response time.

---

# Solution — Promise.all()

Instead of waiting for each request,

start them all together.

```jsx
const [todoResponse, slowResponse2s, slowResponse3s] = await Promise.all([
  fetch("https://jsonplaceholder.typicode.com/todos?_limit=5"),
  fetch("https://procodrr.vercel.app/?sleep=2000"),
  fetch("https://procodrr.vercel.app/?sleep=3000"),
]);

const [todos, data2s, data3s] = await Promise.all([
  todoResponse.json(),
  slowResponse2s.json(),
  slowResponse3s.json(),
]);
```

Now,

all three requests start at the same time.

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

No request waits for another.

---

# Cleaner Approach

Instead of calling

```jsx
response.json();
```

multiple times,

create a reusable helper.

```jsx
async function fetchData(url) {
  const response = await fetch(url);
  return response.json();
}
```

Now the code becomes much cleaner.

```jsx
const [todos, data2s, data3s] = await Promise.all([
  fetchData("https://jsonplaceholder.typicode.com/todos?_limit=5"),
  fetchData("https://procodrr.vercel.app/?sleep=2000"),
  fetchData("https://procodrr.vercel.app/?sleep=3000"),
]);
```

This is easier to read and maintain.

---

# Sequential vs Parallel

## Sequential

```
Start

↓

API 1

↓

API 2

↓

API 3

↓

Render
```

Total waiting time is approximately

```
API 1

+

API 2

+

API 3
```

---

## Parallel

```
Start

↓

API 1

↓

API 2

↓

API 3

↓

Render
```

All requests begin together.

The total waiting time is approximately equal to the **slowest request**, not the sum of all request times.

---

# When Should We Use Sequential Fetching?

Use Sequential Fetching only when one request depends on another.

Example

```
Login User

↓

Receive User ID

↓

Fetch User Profile

↓

Receive Organization ID

↓

Fetch Organization Data
```

Here,

each request needs data from the previous one.

Parallel fetching is not possible.

---

# When Should We Use Parallel Fetching?

Use Parallel Fetching when requests are completely independent.

Examples

- Blog Posts
- Comments
- Notifications
- User Profile
- Product Reviews
- Related Products

These can all be requested simultaneously.

---

# Parallel Fetching vs Suspense

Both improve performance,

but they solve different problems.

### Parallel Fetching

- Multiple requests start together.
- Reduces total waiting time.
- Entire page waits until all requests finish.

### Suspense

- Components render independently.
- Completed components stream immediately.
- Users see content progressively.

---

# Which One Should We Use?

### Best Approach

If possible,

break your page into multiple Server Components.

Wrap slow components with

```jsx
<Suspense>
```

This gives users the best experience because data appears as soon as it is ready.

---

### Alternative

If breaking the page into separate components is not practical,

use

```jsx
Promise.all();
```

to fetch independent data in parallel.

This reduces the overall waiting time while keeping the page structure unchanged.

---

# Best Practice

Independent APIs

```
Promise.all()
```

or even better,

```
Separate Components

+

Suspense
```

---

Dependent APIs

```
Sequential Fetching
```

using

```jsx
await
```

because later requests require data from earlier ones.

---

# Complete Flow

## Sequential

```
Request

↓

API 1

↓

Wait

↓

API 2

↓

Wait

↓

API 3

↓

Render
```

---

## Parallel

```
Request

↓

API 1

↓

API 2

↓

API 3

↓

All Running Together

↓

Render
```

---

# Comparison

| Sequential Fetching                   | Parallel Fetching                               |
| ------------------------------------- | ----------------------------------------------- |
| Requests execute one after another    | Requests execute simultaneously                 |
| Total time is the sum of all requests | Total time is approximately the slowest request |
| Used for dependent APIs               | Used for independent APIs                       |
| Simpler for chained operations        | Better performance for unrelated requests       |

---

# Recommended Order of Preference

For the best user experience, follow this order:

### 1. Split into Components + Suspense (Recommended)

```
Page

├── TodoList
├── UserProfile
├── Comments
└── Reviews
```

Each component fetches its own data and streams independently.

---

### 2. Promise.all()

If component splitting is not possible,

use

```jsx
Promise.all();
```

to execute independent requests in parallel.

---

### 3. Sequential Fetching

Use sequential fetching only when each request depends on the previous request.

---

# Key Takeaways

- Sequential fetching executes requests one after another.
- Parallel fetching executes independent requests simultaneously using `Promise.all()`.
- `Promise.all()` reduces the total waiting time to approximately the duration of the slowest request.
- Use sequential fetching only when API requests depend on each other.
- For the best user experience, prefer breaking the page into smaller Server Components and wrapping slow components with `Suspense`.
- If component splitting isn't practical, `Promise.all()` is an excellent alternative for independent requests.
