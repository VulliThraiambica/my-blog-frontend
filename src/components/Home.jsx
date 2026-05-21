function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-center px-4">
      
      <h1 className="text-5xl md:text-6xl font-bold text-blue-600 mb-6">
        Welcome to My Blog App 
      </h1>

      <p className="text-lg md:text-2xl text-gray-700 max-w-2xl">
        Explore articles, share ideas, and connect through creative blogging.
        Built using React.js, Node.js, Express.js, and MongoDB.
      </p>

      <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition">
        Explore Blogs..
      </button>

    </div>
  );
}

export default Home;
