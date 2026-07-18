export default function Loading() {
  return (
    <>
      <h1>Todos</h1>

      <div className="todos-container">
        {[...Array(5)].map((_, index) => (
          <div className="todo-item" key={index}>
            <div className="shimmer-checkbox shimmer"></div>
            <div className="shimmer-text shimmer"></div>
          </div>
        ))}
      </div>
    </>
  );
}