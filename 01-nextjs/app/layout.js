// This metadata is shared by the entire application because it is defined
// in the Root Layout (app/layout.js). Every page inherits it unless it
// overrides the metadata in its own file.
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
