export default async function FilePath({ params }) {
  //   console.log(await params);
  const { filePath } = await params; //Destructure
  return <h1>File /{filePath?.join("/")} </h1>;
}
