export const metadata = {
  title: {
    template: "%s | Services",
    default: "Services",
  },
};

export default function ServicesLayout({ children }) {
  return (
    <section>
      <h3>Services Layout</h3>
      {children}
    </section>
  );
}
