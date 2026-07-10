import Link from "next/link";

export default async function Blog({ searchParams, params}) {
  console.log(await searchParams);
  console.log(await params);
  return (
    <div>
      <h1>Welcome to Blog page!</h1>
      <p>Blog 1</p>
      <p>Blog 2</p>
      <p>Blog 3</p>
    </div>
  );
}
