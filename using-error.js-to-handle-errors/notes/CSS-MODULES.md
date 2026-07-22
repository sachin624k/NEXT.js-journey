# Using CSS Modules in Next.js

CSS Modules provide **locally scoped CSS**, meaning styles are applied only to the component that imports them. This prevents class name conflicts and makes your styles easier to maintain.

---

# Problem with Normal CSS

Suppose we create a CSS file:

```text
app/
└── blogs/
    └── [blogID]/
        ├── page.js
        └── blogID.css
```

```css
/* blogID.css */

.title {
  font-family: cursive;
  font-size: 2rem;
}
```

Import it into the page.

```jsx
import "./blogID.css";

export default async function Blog({ params }) {
  const { blogID } = await params;

  return (
    <div className="blogID">
      <h1 className="title">Welcome to Our Blog {blogID}</h1>
    </div>
  );
}
```

---

# What Happens?

Now suppose multiple pages use the same class name.

```jsx
<h1 className="title">Home</h1>

<h1 className="title">About</h1>

<h1 className="title">Blog</h1>
```

Since normal CSS is **global**, the `.title` styles will be applied everywhere.

```
.title
   │
   ├── Home
   ├── About
   └── Blog
```

This can easily lead to style conflicts.

---

# Solution: CSS Modules

Rename the file:

```
blogID.css
```

to

```
blogID.module.css
```

Folder structure:

```text
app/
└── blogs/
    └── [blogID]/
        ├── page.js
        └── blogID.module.css
```

---

# Importing a CSS Module

This will **not** work.

```jsx
import "./blogID.module.css";
```

The component-specific classes won't be available.

Instead, import the module as an object.

```jsx
import styles from "./blogID.module.css";
```

---

# Using Classes

```css
/* blogID.module.css */

.title {
  font-family: cursive;
  font-size: 2rem;
}
```

```jsx
<h1 className={styles.title}>Welcome to Our Blog {blogID}</h1>
```

Next.js automatically generates a unique class name.

Example:

```css
.title
```

becomes something like

```css
.title__x7k91
```

Only this component can use that generated class.

---

# Global Selectors Still Work

Global selectors such as

```css
body {
  background-color: brown;
}
```

will still work because `body` is not a class selector.

However,

```css
.title {
  color: red;
}
```

will **not** apply unless it is accessed through the imported `styles` object.

---

# How CSS Modules Work

```
blogID.module.css
        │
        ▼
Imported as

styles

        │
        ▼
styles.title

        │
        ▼
Generated unique class name

.title__abc123
```

Every component gets its own unique class names, eliminating naming conflicts.

---

# Why Use CSS Modules?

- Prevents global CSS conflicts.
- Automatically generates unique class names.
- Keeps styles scoped to a component.
- Makes large applications easier to maintain.
- No need to invent unique class names manually.

---

# Best Practices

- Use CSS Modules for component-specific styling.
- Always import them as an object.

```jsx
import styles from "./Component.module.css";
```

- Apply styles using

```jsx
className={styles.className}
```

- Prefer styling **classes** instead of element selectors.
- Keep global styles inside `globals.css`.

---

# CSS vs CSS Modules

| Normal CSS                     | CSS Modules                     |
| ------------------------------ | ------------------------------- |
| Global scope                   | Local scope                     |
| Can cause class name conflicts | Generates unique class names    |
| Imported directly              | Imported as an object           |
| Uses `className="title"`       | Uses `className={styles.title}` |
| Best for global styles         | Best for component styles       |

---

# Key Takeaways

- Normal CSS is global.
- CSS Modules scope styles to a single component.
- Rename the file to `.module.css`.
- Import it as an object.

```jsx
import styles from "./Component.module.css";
```

- Access classes using

```jsx
className={styles.className}
```

- CSS Modules mainly work with **class selectors**, so prefer styling classes rather than element selectors.
- Use `globals.css` for application-wide styles and CSS Modules for reusable component styles.
