export default function MarketingLayout({ children }) {
  return (
    <>
      <header style={{ background: "pink" }}>Header - Marketing</header>
      {children}
      <footer style={{ background: "lime" }}>Footer - Marketing</footer>
    </>
  );
}
