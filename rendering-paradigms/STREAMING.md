# Streaming in Next.js

## What is Streaming?

Streaming is a rendering technique that allows Next.js to send parts of the page to the browser as soon as they are ready instead of waiting for the entire page to finish rendering.

This improves the perceived performance and user experience.

---

# The Problem

Suppose our blog page contains three components.

```
Blogs Page

├── Views
├── Likes
└── Comments
```

Example

```jsx
<div className="center">
  <Views />
  <Likes />
  <Comments />
</div>
```

Initially all three components render immediately.

---

# Simulating a Slow Component

Suppose fetching the number of views takes 3 seconds.

```jsx
export default async function Views() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return <div>10k Views</div>;
}
```

Now,

the `Views` component becomes slow.

---

# Without Streaming

Without using Suspense,

the server waits until the slow component finishes before completing that part of the response.

```
Views

↓

3 Seconds

↓

HTML Generated

↓

Browser Receives Response
```

As a result,

the user waits longer before seeing the complete UI.

---

# Solution — Suspense

React provides

```jsx
<Suspense>
```

which allows slow components to render independently.

Example

```jsx
import { Suspense } from "react";

<Suspense fallback="Loading Views...">
  <Views />
</Suspense>;
```

Now,

Next.js immediately renders the rest of the page.

Only the `Views` component displays the fallback while its data is loading.

---

# Rendering Flow

Without Suspense

```
Page Request

↓

Views waits 3 seconds

↓

Likes waits

↓

Comments waits

↓

Entire response completed
```

With Suspense

```
Page Request

↓

Likes Rendered

↓

Comments Rendered

↓

Loading Views...

↓

3 Seconds

↓

Views Streamed

↓

UI Updated
```

The user can interact with the page much earlier.

---

# Multiple Suspense Boundaries

Each slow component can have its own Suspense boundary.

Example

```jsx
<Suspense fallback="Loading Views...">
    <Views />
</Suspense>

<Suspense fallback="Loading Likes...">
    <Likes />
</Suspense>

<Suspense fallback="Loading Comments...">
    <Comments />
</Suspense>
```

Each component loads independently.

A slow component no longer blocks the others.

---

# Why is Streaming Better?

Without Streaming

```
User waits

↓

Entire page appears together
```

With Streaming

```
User sees page immediately

↓

Slow sections show loading UI

↓

Components appear one by one
```

This significantly improves the perceived performance of the application.

---

# Real World Examples

Streaming is useful for pages where some sections take longer than others.

Examples:

- Product details
- Customer reviews
- Related products
- Blog comments
- Analytics dashboards
- User notifications
- Social media feeds

---

# Benefits

- Faster perceived loading
- Better user experience
- Independent component rendering
- Non-blocking UI
- Works seamlessly with Server Components
- Easy to implement using React Suspense

---

# Best Practice

Wrap only the components that may take longer to render.

Good examples:

- API requests
- Database queries
- AI responses
- Analytics
- Recommendations
- Comments
- Reviews

Avoid wrapping every component in Suspense unnecessarily.

---

# Key Takeaways

- Streaming allows Next.js to send HTML in chunks instead of waiting for the complete page.
- React Suspense creates a streaming boundary.
- Slow components no longer block the rest of the UI.
- Users see meaningful content much sooner.
- Each Suspense boundary streams independently.
- Wrap only slow or data-fetching components inside Suspense.
