import Image from "next/image";

const Home = () => {
  return (
    <>
      <div>
        {/* <img className="w-75" src="/boat.jpg" alt="" /> */}
        <Image
          src="https://images.unsplash.com/photo-1784652587186-868e0206b64f?q=80&w=2066&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={400}
          height={300}
          alt="boat"
        />
      </div>
    </>
  );
};

export default Home;
