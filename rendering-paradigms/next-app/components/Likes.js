// "use client";

export default function Likes() {
  // All are server compoents they'll give error
  // console.log(window);
  if (typeof localStorage !== "undefined") {
    console.log(localStorage);
  }
  console.log("Likes Component");
  return <div>2k Likes</div>;
}
