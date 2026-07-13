# Custom Not Found Page (Next.js App Router)

---

# Why do we need a Custom Not Found Page?

Sometimes a user visits a page that doesn't exist.

Example

```
/blogs/abc
```

or

```
/blogs/999999
```

Instead of showing a broken page or an error, Next.js allows us to display a custom **Not Found (404)** page.

---

# Step 1: Trigger `notFound()`

Import `notFound` from `next/navigation`.

```jsx
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { blogId } = await params;

  return {
    title: `Blog ${blogId}`,
  };
}

export default async function Blog({ params }) {

  const { blogId } = await params;

  // Allow only positive integers
  if (!/^\d+$/.test(blogId)) {
    notFound();
  }

  return <div>Blog: {blogId}</div>;
}
```

When

```js
notFound();
```

is called,

Next.js immediately renders the nearest **`not-found.js`** file.

---

# Step 2: Global Not Found Page

Create

```
app
└── not-found.js
```

```jsx
export default function NotFoundPage() {
  return <h1>Page Not Found...</h1>;
}
```

This page is used whenever no route-specific `not-found.js` exists.

```
User

↓

notFound()

↓

app/not-found.js
```

---

# Route-specific Not Found Page

Sometimes one section of the application needs its own custom 404 page.

Example

```
app
└── blogs
      └── [blogId]
            ├── page.js
            └── not-found.js
```

```jsx
export default function NotFoundPage() {
  return (
    <>
      <h1>Blog Page Not Found!</h1>

      <p>
        Could not find the blog you're looking for.
      </p>
    </>
  );
}
```

Now

```js
notFound();
```

inside

```
blogs/[blogId]/page.js
```

renders

```
blogs/[blogId]/not-found.js
```

instead of

```
app/not-found.js
```

---

# How Next.js Chooses the Not Found Page

```
User visits

/blogs/abc

        │

        ▼

blogs/[blogId]/page.js

        │

        ▼

notFound()

        │

        ▼

blogs/[blogId]/not-found.js

(if it exists)

        │

        ▼

Otherwise

        │

        ▼

app/not-found.js
```

Next.js always uses the **nearest** `not-found.js`.

---

# Folder Structure

```
app
│
├── not-found.js
│
└── blogs
     └── [blogId]
          ├── page.js
          └── not-found.js
```

---

# Key Takeaways

- Import `notFound` from `next/navigation`.
- Calling `notFound()` immediately stops rendering the current page.
- `app/not-found.js` creates a global custom 404 page.
- A route can have its own `not-found.js` for a custom 404 experience.
- Next.js always renders the **nearest** `not-found.js`.
- Custom Not Found pages are commonly used with **dynamic routes** to handle invalid IDs or missing data.
