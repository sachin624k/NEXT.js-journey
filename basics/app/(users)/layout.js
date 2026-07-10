import "../globals.css";
import Navigation from "@/components/Navigation";

export default function UsersLayout({ children }) {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
}