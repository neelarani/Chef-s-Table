const Banner = () => {
  return (
    <div
      className="hero min-h-screen w-11/12 mx-auto rounded-2xl"
      style={{
        backgroundImage:
          'url(https://media.gettyimages.com/id/2103887059/photo/chef-serving-food.jpg?s=612x612&w=0&k=20&c=zQNfKCDVOcM1bm0xsEyOBfsJkaYZXJEkNL-CHyHjnL4=)',
      }}
    >
      <div className="hero-overlay bg-opacity-60 rounded-2xl"></div>
      <div className="hero-content text-neutral-content text-center ">
        <div className="max-w-md ">
          <h1 className="mb-5 text-3xl font-bold">
            Discover an exceptional cooking class tailored for you!
          </h1>
          <p className="mb-5">
            Whether you are beginner or a seasond chef, our expart-led session
            offer personalized guidance and inspiration. Join us for an
            enriching culinary experience that is sure to ignite your passion
            for food and cooking.
          </p>
          <div className="space-x-4">
            <button className="px-8 py-2 text-black bg-green-500 rounded-full font-bold">
              Explore New
            </button>
            <button className="px-8 py-2 text-black bg-green-500 rounded-full font-bold bg-transparent border-[1px] text-white">
              Our Feedback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
