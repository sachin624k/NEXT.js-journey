# Next.js Journey

Welcome to my **Next.js Journey** repository!

This repository contains my personal notes, code examples, diagrams, and practical implementations while learning **Next.js App Router** from basics to advanced concepts.

> Every topic has its own dedicated Markdown file for easy revision.

---

# Notes

| Topic                                  | Notes                                                                                                   |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| Dynamic Routing                        | [DYNAMIC-ROUTING.md](./notes/DYNAMIC-ROUTING.md)                                                        |
| Nested Dynamic Routing                 | [NESTED-DYNAMIC-ROUTING.md](./notes/NESTED-DYNAMIC-ROUTING.md)                                          |
| Catch-all Routes                       | [CATCH-ALL-ROUTES.md](./notes/CATCH-ALL-ROUTES.md)                                                      |
| Reusable Layouts                       | [REUSABLE-LAYOUTS.md](./notes/REUSABLE-LAYOUTS.md)                                                      |
| Metadata API                           | [METADATA.md](./notes/METADATA.md)                                                                      |
| Custom not found page                  | [NOT-FOUND.md](./notes/NOT-FOUND.md)                                                                    |
| Route Groups                           | [ROUTE-GROPUS.md](./notes/ROUTE-GROUPS.md)                                                              |
| Private Routes                         | [PRIVATE-ROUTE.md](./notes/PRIVATE-ROUTE.md)                                                            |
| Rendering Paradigms                    | [RENDERING-PARADIGMS.md](./rendering-paradigms/notes/RENDERING-PARADIGMS.md)                            |
| Static & Dynamic                       | [STATIC-DYNAMIC-RENDERING.md](./rendering-paradigms/notes/STATIC-DYNAMIC-RENDERING.md)                  |
| Static Site Generation                 | [STATIC-SITE-GENERATION.md](./rendering-paradigms/notes/STATIC-SITE-GENERATION.md)                      |
| Incremental Static Regeneration        | [ISR.md](./rendering-paradigms/notes/ISR.md)                                                            |
| Force Dynamic Rendering                | [FORCE-DYNAMIC-RENDERING.md](./rendering-paradigms/notes/FORCE-DYNAMIC-RENDERING.md)                    |
| Straming                               | [STREAMING.md](./rendering-paradigms/notes/STREAMING.md)                                                |
| Server vs Client Component             | [SERVER-VS-CLIENT-COMPONENTS.md](./rendering-paradigms/notes/SERVER-VS-CLIENT-COMPONENTS.md)            |
| Hydration Error                        | [HYDRATION.md](./rendering-paradigms/notes/HYDRATION.md)                                                |
| Client Data Fetching                   | [CLIENT-DATA-FETCHING.md](./data-fetching/notes/CLIENT-DATA-FETCHING.md)                                |
| Server Data Fetching                   | [SERVER-DATA-FETCHING.md](./data-fetching/notes/SERVER-DATA-FETCHING.md)                                |
| Loading State                          | [LOADING-STATE.md](./data-fetching/notes/LOADING-STATE.md)                                              |
| Suspense Loading                       | [SUSPENSE-LOADING.md](./data-fetching/notes/SUSPENSE-LOADING.md)                                        |
| Parallel Data Fetching                 | [PARALLEL-DATA-FETCHING.md](./data-fetching/notes/PARALLEL-DATA-FETCHING.md)                            |
| Rendering Server Comp. in Client Comp. | [SERVER-COMPONENTS-IN-CLIENT.md](./rendering-server-comp-in-client-comp/SERVER-COMPONENTS-IN-CLIENT.md) |
| Context API in NEXT.js                 | [CONTEXT-API.md](./context-api/CONTEXT-API.md)                                                          |
| Error Handling                         | [ERROR-HANDLING.md](./using-error.js-to-handle-errors/notes/ERROR-HANDLING.md)                          |
| Error Recovery                         | [ERROR-RECOVERY.md](./using-error.js-to-handle-errors/notes/ERROR-RECOVERY.md)                          |
| Error Handling in Nested Routes        | [NESTED-ERROR-HANDLING.md](./using-error.js-to-handle-errors/notes/NESTED-ERROR-HANDLING.md)            |
| Handling Client-Side Exceptions        | [CLIENT-SIDE-EXCEPTIONS.md](./using-error.js-to-handle-errors/notes/CLIENT-SIDE-EXCEPTIONS.md)          |
| Global Error Handling                  | [GLOBAL-ERROR-HANDLING.md](./using-error.js-to-handle-errors/notes/GLOBAL-ERROR-HANDLING.md)            |
| Adding Styles in Next.js               | [ADDING-STYLES.md](./using-error.js-to-handle-errors/notes/ADDING-STYLES.md)                            |
| Using CSS Modules                      | [CSS-MODULES.md](./using-error.js-to-handle-errors/notes/CSS-MODULES.md)                                |
| Using SCSS                             | [SCSS-IN-NEXTJS.md](./using-error.js-to-handle-errors/notes/SCSS-IN-NEXTJS.md)                          |
| Setting Up Tailwind CSS                | [TAILWIND-CSS-V4-SETUP.md](./using-error.js-to-handle-errors/notes/TAILWIND-CSS-V4-SETUP.md)            |
| Image Optimization | [IMAGE-OPTIMIZATION.md](./using-error.js-to-handle-errors/notes/IMAGE-OPTIMIZATION.md) |

> The `Frontend` section of the **Next.js** Journey concludes here.

---

## Project Structure

```text
nextjs-journey/
│
├── app/
├── notes/
├── images/
├── public/
│
├── rendering-paradigms/
│   ├── next-app/
│   ├── vite-app/
│   ├── images/
│   └── notes/
│       ├── RENDERING-PARADIGMS.md
│       ├── STATIC-DYNAMIC-RENDERING.md
│       ├── STATIC-SITE-GENERATION.md
│       ├── ISR.md
│       ├── FORCE-DYNAMIC-RENDERING.md
│       ├── STREAMING.md
│       ├── SERVER-VS-CLIENT-COMPONENTS.md
│       └── HYDRATION.md
│
├── data-fetching/
│   ├── app/
│   ├── components/
│   ├── public/
│   └── notes/
│       ├── CLIENT-DATA-FETCHING.md
│       ├── SERVER-DATA-FETCHING.md
│       ├── LOADING-STATE.md
│       ├── SUSPENSE-LOADING.md
│       └── PARALLEL-DATA-FETCHING.md
│
├── context-api/
│   ├── context-api-in-next-app/
│   ├── context-api-in-vite-app/
│   └── CONTEXT-API.md
│
├── rendering-server-comp-in-client-comp/
│   ├── app/
│   ├── components/
│   ├── images/
│   ├── public/
│   └── SERVER-COMPONENTS-IN-CLIENT.md
│
├── using-error.js-to-handle-errors/
│   ├── app/
│   ├── components/
│   ├── context/
│   ├── images/
│   ├── public/
│   └── notes/
│       ├── ERROR-HANDLING.md
│       ├── ERROR-RECOVERY.md
│       ├── NESTED-ERROR-HANDLING.md
│       ├── CLIENT-SIDE-EXCEPTIONS.md
│       ├── GLOBAL-ERROR-HANDLING.md
│       ├── ADDING-STYLES-IN-NEXTJS.md
│       ├── CSS-MODULES.md
│       ├── SCSS-IN-NEXTJS.md
│       ├── TAILWIND-CSS-V4-SETUP.md
│       └── IMAGE-OPTIMIZATION.md
│
├── README.md
├── package.json
├── next.config.mjs
└── .gitignore
```

----

> Covers the majority of **Next.js** App Router `Frontend` concepts learned so far.