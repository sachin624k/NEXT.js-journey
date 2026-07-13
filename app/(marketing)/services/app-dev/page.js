import Link from "next/link";

export const metadata = {
  title: "App Dev",
};

export default function Web() {
  return (
    <div>
      <h1>Welcome to App service page!</h1>
      <p>
        <Link href="/services">Services</Link>
      </p>
    </div>
  );
}
