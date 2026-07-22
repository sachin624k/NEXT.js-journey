# Using SCSS in Next.js

SCSS (Sass) is a CSS preprocessor that adds powerful features like:

- Variables
- Nesting
- Mixins
- Functions
- Modules

Next.js has built-in support for SCSS. You only need to install the required package.

---

# Step 1 - Install Sass

Install Sass using npm.

```bash
npm install sass
```

You can also find the latest installation command in the official Next.js documentation.

After installing, Next.js automatically starts supporting `.scss` files.

---

# Step 2 - Create an SCSS File

Create

```text
app/
├── home.scss
└── page.js
```

```scss
$primary-color: #6f7170;

.para {
  background: $primary-color;
}
```

Notice the use of

```scss
$primary-color
```

Unlike CSS, SCSS allows us to create variables and reuse them throughout the stylesheet.

---

# Step 3 - Import SCSS

Import the file just like a normal CSS file.

```jsx
import "./home.scss";
```

Now the styles are applied globally.

---

# Using SCSS Modules

Just like CSS Modules, SCSS also supports locally scoped styles.

Rename

```
home.scss
```

to

```
home.module.scss
```

---

# Import SCSS Module

```jsx
import styles from "./home.module.scss";
```

---

# Use the Styles

```jsx
import "./home.css";
import styles from "./home.module.scss";

export default function Home() {
  return (
    <>
      <div>
        <h1 className="title">Home Page</h1>

        <p className={styles.para}>Welcome to our website!</p>
      </div>
    </>
  );
}
```

Notice

```jsx
styles.para;
```

works exactly like CSS Modules.

---

# Folder Structure

```text
app/
├── home.css
├── home.module.scss
└── page.js
```

---

# How SCSS Modules Work

```
home.module.scss

↓

Import as

styles

↓

styles.para

↓

Generated Unique Class Name

↓

Applied Only to This Component
```

---

# Advantages of SCSS

- Variables
- Nesting
- Reusable styles
- Better organization
- Easier maintenance
- Cleaner code

Example

```scss
$primary-color: #6f7170;

.button {
  background: $primary-color;
}
```

Instead of repeating the same color everywhere, we can reuse the variable.

---

# SCSS vs CSS

| CSS                       | SCSS                        |
| ------------------------- | --------------------------- |
| No variables              | Supports variables          |
| No nesting                | Supports nesting            |
| Simple syntax             | More powerful syntax        |
| Limited reusability       | Better code reuse           |
| No preprocessing features | Rich preprocessing features |

---

# CSS Modules vs SCSS Modules

| CSS Module            | SCSS Module           |
| --------------------- | --------------------- |
| `.module.css`         | `.module.scss`        |
| Supports local styles | Supports local styles |
| Plain CSS             | CSS + SCSS features   |
| Imported as an object | Imported as an object |

---

# Best Practices

- Install `sass` before using `.scss` files.
- Use `.module.scss` for component-specific styles.
- Import SCSS Modules as an object.

```jsx
import styles from "./Component.module.scss";
```

- Apply styles using

```jsx
className={styles.className}
```

- Keep global styles inside `globals.css`.
- Use SCSS variables, nesting, and other features to make styles more maintainable.

---

# Key Takeaways

- Next.js supports SCSS through the `sass` package.
- Install Sass using:

```bash
npm install sass
```

- `.scss` files behave like normal global CSS files.
- `.module.scss` files provide locally scoped styles.
- SCSS Modules are imported as an object.

```jsx
import styles from "./Component.module.scss";
```

- Use

```jsx
className={styles.className}
```

to apply module styles.

- SCSS offers additional features like variables and nesting, making it more powerful and maintainable than plain CSS.
