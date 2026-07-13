import Link from "next/link";

export default function Services() {
  return (
    <div>
      <h1>Welcome to Services page!</h1>
      <p>
        <Link href="/">Home</Link>
      </p>
      <p>
        <Link href="/services/web-dev">Web Development</Link>
      </p>                                                                                                                                                                                                                                                                                                                                                             
      <p>
        <Link href="/services/app-dev">App Development</Link>
      </p>
    </div>
  );
}
