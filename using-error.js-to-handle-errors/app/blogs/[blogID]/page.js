import styles from "./blogID.module.css";

const Blog = async ({ params }) => {
  const { blogID } = await params;

  // if (blogID % 2 === 0) {
  //   throw new Error("BlogID can only be an ODD number");
  // }

  // const randomNumber = Math.random();
  // console.log(randomNumber);

  // if (randomNumber > 0.5) {
  //   throw new Error("Error occured");
  // }

  return (
    <>
      <div className="blogID">
        <h1 className={styles.title}>Welcome to Our Blog {blogID}</h1>
        <p>This is blog {blogID} page.</p>
      </div>
    </>
  );
};

export default Blog;
