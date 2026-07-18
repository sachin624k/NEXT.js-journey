# Client Data Fetching in Next.js

## What is Client Data Fetching?

Client Data Fetching means fetching data **inside the browser** after the page has been rendered.

This approach is exactly the same as React.

We use

- `useState()`
- `useEffect()`
- `fetch()`

to request data from an API.

---

# Example

```jsx
"use client";

import { useEffect, useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=5",
      );

      const data = await response.json();

      setPosts(data);
    }

    fetchPosts();
  }, []);

  return (
    <>
      <h1>Posts</h1>

      <div className="posts-container">
        {posts.map(({ id, title, body }) => (
          <div className="post-card" key={id}>
            <h2>{title}</h2>
            <p>{body}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Posts;
```

---

# Why "use client"?

Since we're using

- `useState()`
- `useEffect()`

this component must be a **Client Component**.

Without

```jsx
"use client";
```

Next.js will throw an error because these React hooks are only supported inside Client Components.

---

# How Does It Work?

```
Browser

↓

Page renders

↓

posts = []

↓

useEffect() runs

↓

fetch()

↓

API returns data

↓

setPosts()

↓

Component re-renders

↓

Posts displayed
```

---

# Step-by-Step Flow

### Initial Render

```jsx
const [posts, setPosts] = useState([]);
```

Initially

```
posts = []
```

So the page loads without any posts.

---

### useEffect()

```jsx
useEffect(() => {
  fetchPosts();
}, []);
```

The empty dependency array

```jsx
[];
```

means

```
Run only once
```

after the component mounts.

---

### Fetching Data

```jsx
const response = await fetch(url);
```

A request is sent to

```
jsonplaceholder.typicode.com
```

---

### Convert to JSON

```jsx
const data = await response.json();
```

The response is converted into a JavaScript array.

---

### Update State

```jsx
setPosts(data);
```

React updates

```
posts
```

and automatically re-renders the component.

---

### Display Data

```jsx
posts.map(...)
```

renders every post as a card.

---

# Why `_limit=5`?

```
?_limit=5
```

is a query parameter provided by the JSONPlaceholder API.

Instead of returning

```
100 posts
```

it returns only

```
5 posts
```

This is useful while learning or testing.

---

# Rendering Process

```
Component Loads

↓

posts = []

↓

Empty UI

↓

fetch()

↓

API Response

↓

setPosts()

↓

React Re-render

↓

Posts Visible
```

---

# Advantages

- Very easy to implement
- Same as React
- Great for user-specific data
- Supports real-time updates
- Easy to manage with React Hooks

---

# Limitations

Since fetching happens **after** the page loads,

the user first sees an empty page (or a loading state) and then the data appears.

This can:

- Delay content display
- Affect SEO
- Create loading states

For content that should be available immediately, fetching data on the **server** is usually a better choice.

---

# Client vs Server Data Fetching

| Client Fetching                                       | Server Fetching                                        |
| ----------------------------------------------------- | ------------------------------------------------------ |
| Runs in the browser                                   | Runs on the server                                     |
| Uses `useEffect()`                                    | Uses `async` Server Components                         |
| Requires `"use client"`                               | No `"use client"` needed                               |
| User sees loading first                               | Data is already available when the page loads          |
| Less SEO-friendly                                     | Better SEO                                             |
| Good for dashboards, user-specific data, live updates | Good for blogs, products, documentation, landing pages |

---

# When Should We Use Client Data Fetching?

Use it when:

- Data depends on the logged-in user
- Data updates frequently
- You need browser APIs
- User interactions trigger new requests
- Real-time updates are required

Examples:

- Notifications
- Shopping Cart
- Chat Applications
- Dashboards
- User Profile
- Live Search

---

# What's Next?

Client-side data fetching is exactly the same as React.

The real power of Next.js comes from **Server Data Fetching**, where data is fetched **before** the page is sent to the browser.

We'll learn that in the next chapter.

---

# Key Takeaways

- Client data fetching works exactly like React.
- Use `useState()` to store fetched data.
- Use `useEffect()` to fetch data after the component mounts.
- Client Components require the `"use client"` directive.
- The page renders first, then data is fetched and displayed.
- Client-side fetching is suitable for interactive and user-specific content, while server-side fetching is generally better for SEO and initial page load performance.
