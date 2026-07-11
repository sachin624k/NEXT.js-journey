export default async function Comments({ params }) {
  const paramsObj = await params;
  const { blogId } = paramsObj;
  console.log(paramsObj);
  return (
    <div>
      All Comments on <b>{blogId}</b> page.
    </div>
  );
}
