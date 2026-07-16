import Link from "next/link";

export const dynamicParams = false;
// Incremental Site Regeneration
// export const revalidate = 5;

// Static Site Generation
// export async function generateStaticParams() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos");
//   const data = await response.json();
//   console.log(data);
//   return data.map(({ id }) => ({ blogID: `${id}` }));
// }

const BlogDetails = async ({ params }) => {
  const { blogID } = await params;
  console.log("blogID: ", blogID);

  return (
    <>
      <nav>
        <ul className="navbar">
          <li>
            <Link href="/" className="nav-link">
              Home
            </Link>
          </li>

          <li>
            <Link href="/about" className="nav-link">
              About
            </Link>
          </li>

          <li>
            <Link href="/services" className="nav-link">
              Services
            </Link>
          </li>

          <li>
            <Link href="/blogs" className="nav-link active">
              Blogs
            </Link>
          </li>
        </ul>
      </nav>

      <div>
        <h1>Welcome to Our Blog {blogID}</h1>
        <h2 style={{ textAlign: "center" }}>
          Date: {new Date().toLocaleString()}
        </h2>
        <p>This is Blog {blogID} page.</p>

        <Link href="/blogs" style={{ color: "white" }}>
          Back to Blogs
        </Link>
      </div>
    </>
  );
};

export default BlogDetails;
