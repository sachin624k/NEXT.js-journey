# Route Groups (Next.js App Router)

---

# Why Route Groups?

Suppose our application has these routes:

```
app
├── about/
├── blogs/
├── files/
└── services/
```

We can logically divide them into two categories.

### Marketing

- About
- Services

### Application

- Blogs
- Files

This keeps the project organized.

---

# Without Route Groups

Suppose we create a folder named

```
app
└── marketing
     ├── about
     └── services
```

Now the URL becomes

```
/marketing/about
```

instead of

```
/about
```

Similarly,

```
/marketing/services
```

instead of

```
/services
```

The folder name becomes part of the URL, which we don't want.

---

# Route Groups

Simply wrap the folder name in parentheses.

```
app
└── (marketing)
     ├── about
     └── services
```

Now the URLs remain

```
/about
```

and

```
/services
```

The folder is used **only for organizing the project**.

---

# Another Route Group

Similarly,

```
app
└── (application)
     ├── blogs
     └── files
```

URLs remain

```
/blogs
```

```
/files
```

No extra route is added.

---

# Real-world Example

Authentication pages are usually grouped together.

```
app
└── (auth)
     ├── login
     ├── register
     └── forgot-password
```

URLs

```
/login
/register
/forgot-password
```

The `(auth)` folder never appears in the URL.

---

# Route Group Layouts

Each Route Group can have its own layout.

Example

```
app
└── (application)
      ├── layout.js
      ├── blogs
      └── files
```

```jsx
export default function ApplicationLayout({ children }) {
  return (
    <>
      <header style={{ background: "lightgreen" }}>
        Header - Application
      </header>

      {children}

      <footer style={{ background: "skyblue" }}>
        Footer - Application
      </footer>
    </>
  );
}
```

Similarly,

```
app
└── (marketing)
      ├── layout.js
      ├── about
      └── services
```

can have its own Header and Footer.

---

# Root Layout

Since every Route Group now has its own layout,

the Root Layout only needs to render the page.

```jsx
export const metadata = {
  title: {
    template: "%s | Technical Agency",
    default: "Technical Agency",
  },
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
```

---

# How Layouts Work

```
Root Layout

        │

        ▼

Route Group Layout

        │

        ▼

Current Page
```

Example

```
/about

↓

Root Layout

↓

Marketing Layout

↓

About Page
```

```
/blogs

↓

Root Layout

↓

Application Layout

↓

Blogs Page
```

---

# Choosing a Layout

The layout depends on the Route Group where the page is placed.

Example

```
(marketing)
```

↓

Uses

```
Marketing Layout
```

Example

```
(application)
```

↓

Uses

```
Application Layout
```

If you need another design,

simply create another Route Group.

```
(admin)
```

↓

Admin Layout

---

# Folder Structure

```
app
│
├── layout.js
│
├── (marketing)
│   ├── layout.js
│   ├── about
│   └── services
│
└── (application)
    ├── layout.js
    ├── blogs
    └── files
```

---

# Key Takeaways

- Route Groups organize related routes without changing the URL.
- Wrap the folder name in parentheses: `(folderName)`.
- Route Group names never appear in the browser URL.
- Use Route Groups to organize large applications.
- Each Route Group can have its own `layout.js`.
- The Root Layout is shared by the whole application.
- Moving a page into a Route Group automatically applies that group's layout.
- Create additional Route Groups whenever different sections need different layouts.