import Link from "next/link";

const About = async () => {
  return (
    <>
      <h1>About Page!</h1>
      <button>
        <Link href="/" className="underline">Home Page</Link>
      </button>
    </>
  );
};

export default About;
