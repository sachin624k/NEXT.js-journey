"use client";

export default function Error({ error, reset }) {
  console.dir(error);

  return (
    <div>
      <p>Something went wrong in Client side</p>
      <button
        onClick={() => {
          reset();
        }}
      >
        Try again
      </button>
    </div>
  );
}
