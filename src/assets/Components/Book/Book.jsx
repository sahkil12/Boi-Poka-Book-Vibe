const Book = ({ book }) => {
  const { bookName, author, image, tags, rating, category } = book;

  return (
    <div className="card shadow-sm p-6 border border-gray-200">
      <figure className="bg-gray-200 py-10 rounded-xl">
        <img
          src={image}
          className="object-cover w-fit h-[250px] shadow-2xl"
          alt={bookName}
        />
      </figure>
      <div className="space-y-3 mt-5">
        <div className="flex gap-7 my-5">
          {tags.map((tag) => (
            <button className=" py-2 px-7 rounded-full font-medium text-green-500 border-none bg-green-50">
              {tag}
            </button>
          ))}
        </div>
        <h2 className="card-title text-2xl Playfair">{bookName}</h2>
        <p className="text-start font-medium text-neutral-600">By : {author}</p>
        {/* divider */}
        <div className="border-b border-dashed my-5 border-neutral-300 w-[95%] mx-auto"></div>
        <div className="card-actions justify-between">
          <div className="text-neutral-600 font-semibold">{category}</div>
          {/* ratting */}
          <div className="flex gap-3 text-neutral-600 items-center">
            <h2 className="font-semibold text-xl">{rating}</h2>
            <div className="rating gap-1 ">
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
                aria-label="1 star"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
                aria-label="2 star"
                defaultChecked
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
