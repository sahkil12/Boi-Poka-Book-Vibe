import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookId, bookName, author, image, tags, rating, category } = book;

  return (
    <Link to={`book/${bookId}`} className="group">
      <div className="card h-full bg-base-100 border border-gray-200 rounded-2xl p-4 md:p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        {/* Image */}
        <figure className="bg-gray-200/60 rounded-xl py-8 overflow-hidden">
          <img
            src={image}
            alt={bookName}
            className="h-[260px] mx-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </figure>
        {/* Content */}
        <div className="mt-5 space-y-3">
          {/* Tags */}
          <div className="flex gap-2 flex-wrap">
            {tags.map((tag, ind) => (
              <span
                key={ind}
                className="px-4 py-1 text-sm rounded-full bg-green-100/60 text-green-600 font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          {/* Title */}
          <h2 className="text-xl md:text-2xl font-bold Playfair leading-snug line-clamp-2">
            {bookName}
          </h2>
          {/* Author */}
          <p className="text-neutral-500 text-sm md:text-base">
            By {author}
          </p>
          {/* Divider */}
          <div className="border-t border-dashed border-gray-300 my-4"></div>
          {/* Bottom */}
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-neutral-600">
              {category}
            </span>

            <div className="flex items-center gap-2">
              <span className="font-semibold text-neutral-700">
                {rating}
              </span>
              <div className="rating rating-sm gap-1">
                <input
                  type="radio"
                  className="mask mask-star-2 bg-green-500"
                  defaultChecked
                />
                <input
                  type="radio"
                  className="mask mask-star-2 bg-green-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
