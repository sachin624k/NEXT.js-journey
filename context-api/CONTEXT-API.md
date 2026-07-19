# Context API Theme Switcher (React & Next.js)

A beginner-friendly project demonstrating how to build a **Dark/Light Theme Switcher** using **React Context API** in both **React (Vite)** and **Next.js App Router**.

This repository contains two implementations of the same project so you can easily understand the differences between React and Next.js.

```
context-api-in-vite-app/
context-api-in-next-app/
```

---

# Folder Structure

```text
context-api-in-vite-app/
│
├── src
│   ├── components/
│   ├── context/
│   ├── pages/
│   ├── App.jsx
│   └── main.jsx
│

context-api-in-next-app/
│
├── app/
├── components/
├── context/
└── app/layout.js
```

---

# Context API Flow

```text
createContext()

        │
        ▼

ThemeContext

        │
        ▼

ThemeProvider

        │
        ▼

value={{ isDark, toggleTheme }}

        │
        ▼

Header
Home
About
Services

        │
        ▼

useTheme()

        │
        ▼

isDark
toggleTheme()
```

---

# React (Vite) Implementation

## Step 1 — Create Context

```jsx
const ThemeContext = createContext();
```

Creates a Context object that will be used to share theme-related data.

---

## Step 2 — Create Theme Provider

```jsx
export default function ThemeProvider({ children }) {
```

The Provider stores everything related to the theme.

- Theme State
- Toggle Function
- localStorage
- useEffect

Instead of managing theme in multiple components, everything stays inside the Provider.

---

## Step 3 — Share Global Data

```jsx
<ThemeContext.Provider
  value={{
    isDark,
    toggleTheme,
  }}
>
  {children}
</ThemeContext.Provider>
```

Everything inside the Provider can access:

- `isDark`
- `toggleTheme()`

---

## Step 4 — Wrap the Application

```jsx
<ThemeProvider>
  <App />
</ThemeProvider>
```

Now the complete application can access Theme Context.

---

## Step 5 — Create Custom Hook

Instead of writing

```jsx
const theme = useContext(ThemeContext);
```

everywhere, create a reusable hook.

```jsx
export function useTheme() {
  return useContext(ThemeContext);
}
```

Now simply use

```jsx
const { isDark, toggleTheme } = useTheme();
```

Cleaner and easier to read.

---

# Theme Logic

## Initial State

```jsx
const [isDark, setIsDark] = useState(true);
```

Stores whether Dark Mode is enabled.

---

## Toggle Theme

```jsx
function toggleTheme() {
  setIsDark((prev) => !prev);
}
```

Every click switches

```
true  → false

false → true
```

Using

```jsx
(prev) => !prev;
```

always updates the latest state safely.

---

## Restore Previous Theme

```jsx
useEffect(() => {
  setIsDark(localStorage.getItem("isDark") === "true");
}, []);
```

When the application loads,

- Read the previously saved value
- Restore Dark/Light mode automatically

---

## Save Theme

```jsx
localStorage.setItem("isDark", isDark);
```

Every time the theme changes, the latest value is stored inside the browser.

Refreshing the page keeps the selected theme.

---

## Apply Dark Mode

```jsx
if (isDark) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}
```

Dark Mode

```html
<html class="dark"></html>
```

Light Mode

```html
<html></html>
```

---

# Next.js Implementation

The Context API logic remains exactly the same.

Only a few Next.js-specific changes are required.

---

## ThemeContext becomes a Client Component

```jsx
"use client";
```

Required because ThemeContext uses

- useState
- useEffect
- useContext

React Hooks only work inside Client Components.

---

## Wrap the Application in Root Layout

Instead of

```jsx
<App />
```

Next.js uses

```jsx
<body>
  <ThemeProvider>{children}</ThemeProvider>
</body>
```

Every page automatically receives Theme Context.

---

## Components using Context must also be Client Components

Example

```jsx
"use client";

const { isDark, toggleTheme } = useTheme();
```

Since

```jsx
useTheme();
```

internally calls

```jsx
useContext();
```

the component must also be a Client Component.

---

## Routing

### React (Vite)

```jsx
<BrowserRouter>
```

### Next.js

Uses the **App Router**.

No BrowserRouter is required.

Instead,

```jsx
<Link href="/about" />
```

is used with the built-in App Router.

---

# React vs Next.js

| React (Vite)                    | Next.js                        |
| ------------------------------- | ------------------------------ |
| `BrowserRouter`                 | App Router                     |
| `App.jsx` is the root component | `layout.js` is the root layout |
| Client Components by default    | Server Components by default   |
| No `"use client"`               | Required for Context & Hooks   |
| Wrap `<App />`                  | Wrap `{children}`              |
| Uses `NavLink`                  | Uses `Link` + `usePathname()`  |

---

# Common Mistakes

### Forgetting

```jsx
"use client";
```

inside

- ThemeContext
- Header
- Any component using `useTheme()`

---

### Forgetting to pass value

```jsx
<ThemeContext.Provider
    value={{
        isDark,
        toggleTheme
    }}
>
```

Without `value`, Context will not provide any data.

---

### Forgetting to wrap the application

React

```jsx
<ThemeProvider>
  <App />
</ThemeProvider>
```

Next.js

```jsx
<ThemeProvider>{children}</ThemeProvider>
```

# Key Takeaways

- `createContext()` creates the Context.

- `ThemeProvider` stores the state and logic.

- `Provider` shares data globally.

- `useContext()` reads Context values.

- `useTheme()` keeps components clean.

- `localStorage` remembers the selected theme.

- Dark Mode is applied by adding/removing the `dark` class on the `<html>` element.

- The Context API implementation is almost identical in React and Next.js.

The only major difference is that **Next.js uses Server Components by default**, so any component using Context API or React Hooks must be marked with:

```jsx
"use client";
```
