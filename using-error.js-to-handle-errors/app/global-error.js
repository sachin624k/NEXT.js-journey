"use client";
import "./globals.css";

export default function GlobalError() {
  return (
    <html lang="en" className="dark">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body>
        <div>
          <p>Something went wrong in Root Layout</p>
          <button
            onClick={() => {
              window.location.reload();
            }}
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}
