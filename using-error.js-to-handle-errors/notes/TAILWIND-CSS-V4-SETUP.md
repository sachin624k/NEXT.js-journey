# Setting Up Tailwind CSS v4 in an Existing Next.js Project

Tailwind CSS is a utility-first CSS framework that allows you to build modern, responsive user interfaces by composing utility classes directly in your HTML or JSX.

This guide explains how to install and configure **Tailwind CSS v4** in an existing **Next.js 15** project.

---

# Prerequisites

Before installing Tailwind CSS, ensure you have:

- An existing Next.js project
- Node.js installed
- npm or another package manager

---

# Step 1 - Install Tailwind CSS

Install Tailwind CSS along with the required PostCSS packages.

```bash
npm install tailwindcss @tailwindcss/postcss postcss
```

Once the installation is complete, you're ready to configure PostCSS.

---

# Step 2 - Configure PostCSS

Create a file named:

```text
postcss.config.mjs
```

Place it in the **root directory** of your project.

Example:

```text
my-next-app/
│
├── app/
├── public/
├── package.json
├── postcss.config.mjs
└── ...
```

Add the following configuration:

```js
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
```

This tells PostCSS to process Tailwind CSS during the build process.

---

# Step 3 - Import Tailwind CSS

Open your global stylesheet.

```text
app/globals.css
```

Import Tailwind CSS at the top of the file.

```css
@import "tailwindcss";
```

Example:

```css
@import "tailwindcss";

body {
  font-family: Arial, Helvetica, sans-serif;
}
```

After importing Tailwind, all of its utility classes become available throughout your application.

---

# Project Structure

```text
my-next-app/
│
├── app/
│   ├── globals.css
│   ├── layout.js
│   └── page.js
│
├── public/
│
├── package.json
├── postcss.config.mjs
└── ...
```

---

# How It Works

```
Install Tailwind

        │

        ▼

Configure PostCSS

        │

        ▼

Import Tailwind in globals.css

        │

        ▼

Start Development Server

        │

        ▼

Use Tailwind Utility Classes
```

---

# Verify the Installation

Open your Home page.

```jsx
export default function Home() {
  return (
    <h1 className="text-4xl font-bold text-blue-600">
      Tailwind CSS is Working!
    </h1>
  );
}
```

Start the development server.

```bash
npm run dev
```

If the heading appears as:

- Large
- Bold
- Blue

then Tailwind CSS has been configured successfully.

---

# Why Import Tailwind in `globals.css`?

The `globals.css` file is imported by the root layout (`app/layout.js`).

This means every page in your application automatically has access to Tailwind's utility classes.

```
app/layout.js
        │
        ▼
globals.css
        │
        ▼
@import "tailwindcss"
        │
        ▼
Tailwind Available Everywhere
```

---

# Best Practices

- Install only the required packages for Tailwind CSS v4.
- Keep the `postcss.config.mjs` file in the project root.
- Import Tailwind only once in `app/globals.css`.
- Use utility classes instead of writing custom CSS whenever possible.
- Organize reusable UI components for cleaner and more maintainable code.

---

# Key Takeaways

- Install Tailwind CSS using:

```bash
npm install tailwindcss @tailwindcss/postcss postcss
```

- Create a `postcss.config.mjs` file in the project root.

- Configure PostCSS with:

```js
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
```

- Import Tailwind in `app/globals.css`.

```css
@import "tailwindcss";
```

- Start the development server.

```bash
npm run dev
```

- Tailwind utility classes are now available throughout your Next.js application.
