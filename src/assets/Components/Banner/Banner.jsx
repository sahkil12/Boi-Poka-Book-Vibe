import bannerImg from '../../Image/books.jpg';

const Banner = () => {
  return (
    <div className="hero pop bg-gradient-to-r from-[#f5f5f5] to-[#eaeaea] min-h-[calc(100vh-200px)] rounded-2xl px-6">
      <div className="hero-content flex-col-reverse lg:flex-row-reverse gap-12">
        
        {/* Image Section */}
        <div className="relative">
          <img
            src={bannerImg}
            className="lg:max-w-md rounded-2xl shadow-xl lg:h-[500px] object-cover"
            alt="Books"
          />
          <div className="absolute inset-0 rounded-2xl bg-black/10"></div>
        </div>

        {/* Text Content */}
        <div className="text-start space-y-6 max-w-xl">
          <p className="text-green-600 font-medium tracking-wide work-sans">
            Discover Your Next Read
          </p>

          <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-black/90">
            Books that freshen up your bookshelf
          </h1>

          <p className="text-gray-600 text-lg">
            Explore a wide collection of books that inspire, educate, and
            entertain. Find your perfect book today.
          </p>

          <button className="btn border-none text-white bg-green-500 hover:bg-green-600 font-semibold text-lg px-8 py-6 work-sans transition-all duration-300">
            Get Started
          </button>
        </div>

      </div>
    </div>
  );
};

export default Banner;
