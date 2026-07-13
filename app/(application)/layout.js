export default function ApplicationLayout({ children }) {
  return (
    <>
      <header style={{ background: "lightgreen" }}>Header - Application</header>
      {children}
      <footer style={{ background: "skyblue" }}>Footer - Application</footer>
    </>
  );
}
