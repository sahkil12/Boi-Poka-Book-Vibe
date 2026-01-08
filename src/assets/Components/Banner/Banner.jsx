import bannerImg from '../../Image/books.jpg'

const Banner = () => {
    
    return (
        <div className="hero bg-[#22222213] min-h-[calc(100vh-200px)] rounded-2xl">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={bannerImg}
      className="lg:max-w-md rounded-lg shadow-md lg:h-[500px]"
    />
    <div className='text-start space-y-8'>
      <h1 className="text-4xl/snug lg:text-6xl/snug font-bold Playfair">Books to freshen up your bookshelf</h1>
     
      <button className="btn border-none text-white bg-green-500 font-bold text-xl px-7 py-6 work-sans">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;