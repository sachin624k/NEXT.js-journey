import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome to Technical Agency!</h1>
      <p>
        <Link href="/blogs">Blogs</Link>
      </p>
      <p>
        <Link href="/about">About</Link>
      </p>
      <p>
        <Link href="/services">Services</Link>
      </p>
    </div>
  );
}
