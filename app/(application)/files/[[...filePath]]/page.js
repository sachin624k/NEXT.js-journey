export const metadata = {
  title: {
    absolute: "My Files",
  },
};

export default async function FilePath({ params }) {
  //   console.log(await params);
  const { filePath } = await params; //Destructure
  return <h1>File /{filePath?.join("/")} </h1>;
}
