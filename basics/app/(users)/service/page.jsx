import Image from "next/image";

const Service = async () => {
  return (
    <>
      <section className="py-12 text-black px-8 bg-gray-100 min-h-screen">
        <h1 className="text-4xl font-bold text-center mb-10">
          Our Team Members
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
            <div className="w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl font-bold text-purple-600">TT</span>
            </div>
            <h3 className="text-lg font-semibold text-center text-gray-800">
              Thapa Technical
            </h3>
            <p className="text-sm text-gray-600 text-center mt-2">
              Frontend Developer
            </p>
            <p className="text-xs text-gray-500 text-center mt-1">
              React & TypeScript
            </p>
          </div>

          {/* Team Member 2 */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
            <div className="w-24 h-24 bg-green-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Image
                src="/sachin.jpg"
                width={500}
                height={500}
                alt="sachin"
                className="w-full h-full rounded-full"
              />
            </div>
            <h3 className="text-lg font-semibold text-center text-gray-800">
              Sachin Kushwaha
            </h3>
            <p className="text-sm text-gray-600 text-center mt-2">
              Full Stack Developer
            </p>
            <p className="text-xs text-gray-500 text-center mt-1">MERN Stack</p>
          </div>

          {/* Team Member 3 */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
            <div className="w-24 h-24 bg-yellow-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl font-bold text-yellow-700">JD</span>
            </div>
            <h3 className="text-lg font-semibold text-center text-gray-800">
              John Doe
            </h3>
            <p className="text-sm text-gray-600 text-center mt-2">
              Backend Developer
            </p>
            <p className="text-xs text-gray-500 text-center mt-1">
              Node.js & Express
            </p>
          </div>

          {/* Team Member 4 */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
            <div className="w-24 h-24 bg-pink-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl font-bold text-pink-700">AS</span>
            </div>
            <h3 className="text-lg font-semibold text-center text-gray-800">
              Alice Smith
            </h3>
            <p className="text-sm text-gray-600 text-center mt-2">
              UI/UX Designer
            </p>
            <p className="text-xs text-gray-500 text-center mt-1">
              Figma & Tailwind CSS
            </p>
          </div>

          {/* Team Member 5 */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
            <div className="w-24 h-24 bg-red-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl font-bold text-red-700">MK</span>
            </div>
            <h3 className="text-lg font-semibold text-center text-gray-800">
              Michael King
            </h3>
            <p className="text-sm text-gray-600 text-center mt-2">
              DevOps Engineer
            </p>
            <p className="text-xs text-gray-500 text-center mt-1">
              Docker & AWS
            </p>
          </div>

          {/* Team Member 6 */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
            <div className="w-24 h-24 bg-indigo-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl font-bold text-indigo-700">EM</span>
            </div>
            <h3 className="text-lg font-semibold text-center text-gray-800">
              Emma Watson
            </h3>
            <p className="text-sm text-gray-600 text-center mt-2">
              QA Engineer
            </p>
            <p className="text-xs text-gray-500 text-center mt-1">
              Testing & Automation
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
