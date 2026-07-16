# Incremental Static Regeneration (ISR) in Next.js

## What is Incremental Static Regeneration (ISR)?

Incremental Static Regeneration (ISR) allows a statically generated page to be updated automatically after a specified amount of time without rebuilding the entire application.

It combines the speed of **Static Site Generation (SSG)** with the ability to keep data fresh.

---

# Why Do We Need ISR?

In SSG,

pages are generated only once during build.

```
npm run build
```

↓

```
HTML Generated
```

↓

```
Deploy
```

↓

```
Same HTML served forever
```

If the data changes,

the page remains outdated until we rebuild the application.

```
npm run build
```

again.

---

# The Problem

Suppose a blog page displays

```
Current Time

Latest News

Stock Prices

Weather

Product Prices
```

These values keep changing.

If we use SSG,

users continue seeing the old HTML.

Rebuilding the application every few minutes is not practical.

This is where ISR becomes useful.

---

# Using `revalidate`

ISR is enabled by exporting

```jsx
export const revalidate = 5;
```

Example

```jsx
export const dynamicParams = false;
export const revalidate = 5;
```

This means

> "Regenerate this page at most once every 5 seconds when a new request arrives."

---

# Example

```jsx
<h2>Date: {new Date().toLocaleString()}</h2>
```

This timestamp changes every second.

During development

```bash
npm run dev
```

the value updates on every refresh because pages are rendered dynamically for development.

---

# Production

Create a production build.

```bash
npm run build

npm start
```

Now open

```
/blogs/1
```

Initially,

suppose the page shows

```
12:00:00 PM
```

---

# What Happens Next?

The page is cached.

For the next **5 seconds**,

everyone receives the same page.

```
12:00:00 PM
```

No regeneration occurs.

---

# After 5 Seconds

Suppose

5 seconds have passed.

Does Next.js regenerate the page automatically?

No.

Nothing happens until another request arrives.

When the next user requests the page,

Next.js does the following:

1. Serves the existing cached page immediately.
2. Regenerates the page in the background.
3. Updates the cache.
4. Future visitors receive the new page.

This process is called **Incremental Static Regeneration (ISR)**.

---

# ISR Flow

```
Build

↓

Static HTML Generated

↓

User visits page

↓

Cached page returned

↓

Revalidate time expires

↓

Nothing happens yet

↓

Next request arrives

↓

Background regeneration starts

↓

Cache updated

↓

Future visitors receive updated page
```

---

# Development vs Production

## Development

```bash
npm run dev
```

- Changes appear immediately.
- Revalidation is not noticeable because development always prioritizes the latest code.

---

## Production

```bash
npm run build

npm start
```

- Static pages are served from cache.
- `revalidate` controls how often the cached page can be regenerated.
- Regeneration only happens after the interval has expired **and** a new request is made.

---

# SSG vs ISR

| SSG                                | ISR                                                   |
| ---------------------------------- | ----------------------------------------------------- |
| Generated during build             | Generated during build                                |
| Never updates automatically        | Updates automatically after the revalidation interval |
| Requires rebuilding                | No rebuild required                                   |
| Best for completely static content | Best for occasionally changing content                |

---

# When Should We Use ISR?

ISR is ideal for pages whose content changes occasionally.

Examples:

- Blog posts
- News articles
- Product pages
- Documentation
- Weather reports
- Stock prices
- E-commerce websites

---

# Advantages

- Fast like SSG
- Fresh data without rebuilding
- Better SEO
- Reduced server load
- Automatically updates stale pages
- Excellent for large websites

---

# Key Takeaways

- ISR is built on top of Static Site Generation.
- `revalidate` enables Incremental Static Regeneration.
- Pages are generated during build and updated later without rebuilding the application.
- Regeneration does **not** happen automatically when the timer expires.
- A new request is required before regeneration starts.
- The first request after the revalidation interval receives the existing cached page while regeneration happens in the background.
- Future requests receive the newly regenerated page.
