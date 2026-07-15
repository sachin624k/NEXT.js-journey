import Link from "next/link";

const BlogDetails = async ({ params }) => {
  const { id } = await params;
  console.log(id);

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
        <h1>Welcome to Our Blog {id}</h1>
        <p>This is Blog {id} page.</p>

        <Link href="/blogs" style={{ color: "white" }}>
          Back to Blogs
        </Link>
      </div>
    </>
  );
};

export default BlogDetails;
