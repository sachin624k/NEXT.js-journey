export default async function Blog({ params }) {
  console.log(await params);
  const { blogId } = await params; // Desturcting blogId it from params
  return <div>Blog: {blogId}</div>;
}
