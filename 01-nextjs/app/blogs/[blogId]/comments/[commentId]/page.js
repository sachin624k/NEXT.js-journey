export default async function Comment({ params }) {
  const paramsObj = await params;
  const { blogId, commentId } = paramsObj;
  console.log(paramsObj);
  return (
    <div>
      Comment no. <i>{commentId}</i> on <b>{blogId}</b> page.
    </div>
  );
}
