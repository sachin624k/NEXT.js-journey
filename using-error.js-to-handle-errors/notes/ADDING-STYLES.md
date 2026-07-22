# Adding Styles in Next.js Apps

Next.js allows you to add CSS in different ways. In this section, we'll understand what happens when we import a CSS file directly into a page.

---

# Creating a CSS File

Create a CSS file inside the `app` directory.

```text
app/
├── home.css
└── page.js
```

```css
/* app/home.css */

body {
  background-color: darkcyan;
}
```

---

# Importing CSS

Import the CSS file into the Home page.

```jsx
import "./home.css";

export default function Home() {
  return <h1>Home Page</h1>;
}
```

---

# What Happens?

When the Home page is rendered, `home.css` is loaded and applied.

As a result, the background color becomes:

```css
darkcyan
```

---

# Client-side Navigation

Suppose we navigate like this:

```
Home
   ↓
About
   ↓
Blogs
```

The background color remains the same because the CSS has already been loaded into the browser.

---

# Hard Refresh

Now refresh the About page directly.

```
About
↓

Hard Reload (Ctrl + Shift + R)
```

The background color disappears.

The same happens for:

- `/blogs`
- `/blogs/[blogID]`

Why?

Because `home.css` is only imported inside `app/page.js`.

If the Home page is never rendered, that CSS file is never loaded.

---

# Why Does This Happen?

Next.js loads CSS only for the routes that import it.

Since only the Home page imports:

```jsx
import "./home.css";
```

the stylesheet is downloaded only when the Home page is visited.

Refreshing another route starts the application from that route, so `home.css` is never loaded.

---

# Route-Based CSS Loading

```
Home Page
│
├── imports home.css
│
└── CSS Loaded
      │
      ▼
Background becomes darkcyan
```

```
About Page
│
├── doesn't import home.css
│
└── CSS Not Loaded
```

---

# Important Note

Importing a CSS file inside a page **does not make it global**.

The CSS is available only when that page is rendered.

If another route is opened directly, the stylesheet won't be loaded.

---

# Best Practice

- Use page-specific CSS only for styles that belong to a single page.
- For styles that should be available throughout the application, use `globals.css` imported in `app/layout.js`.
- Prefer CSS Modules for component-specific styling to avoid style conflicts.

---

# Key Takeaways

- CSS imported inside `page.js` is loaded only when that page is rendered.
- Client-side navigation keeps the loaded CSS in memory.
- Hard refreshing another route does not load CSS from the Home page.
- Page-level CSS is **not** global.
- Use `globals.css` for application-wide styles.
