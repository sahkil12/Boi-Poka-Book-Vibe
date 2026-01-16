import { Link, useLoaderData, useParams } from "react-router-dom";
import { addStoredReadList } from "../MyDataBase/addToDataBase";
import { addStoredWishList } from "../MyDataBase/addWishListToDB";
import { Helmet } from "react-helmet";
import { FaArrowLeftLong } from "react-icons/fa6";

const BookDetail = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId)
  const data = useLoaderData()

  const book = data.find(book => book.bookId === id)

  const { image, author, bookName, category, review, tags, totalPages, publisher, yearOfPublishing, rating } = book;

  const handleMarkAsRead = (id) => {
    addStoredReadList(id)
  }
  const handleAddWishList = (id) => {
    addStoredWishList(id)
  }
  return (
    // card //
    <div className=" w-full my-8 py-5">
      <Helmet>
        <title>Book Details For {bookName}</title>
      </Helmet>
      <Link to={'/'} className="flex items-center gap-2 text-xl font-semibold mx-2"><FaArrowLeftLong /> Back</Link>
      <div className="flex mt-5 gap-6 p-2 flex-col lg:flex-row rounded-xl">
        {/* image */}
        <div className="flex-1 p-5 flex justify-center items-center bg-gray-100 rounded-xl">
          <img
            src={image}
            className="w-fit sm:max-w-sm h-fit rounded-lg shadow-2xl"
          />
        </div>
        <div className="flex-1 p-2 md:p-8 rounded-xl work-sans">
          {/* header details */}
          <h1 className="text-2xl md:text-[40px] font-bold Playfair">{bookName}</h1>
          <p className="py-4 text-neutral-700 font-semibold text-base md:text-xl">By : {author}</p>
          <div className="border-b border my-4 border-neutral-300 mx-auto"></div>
          <h3 className="text-xl font-semibold text-neutral-700"> {category}</h3>
          <div className="border-b border my-4 border-neutral-300 mx-auto"></div>
          <div>
            {/* review */}
            <h2 className="font-bold text-xl">Review :
              <p><small className="text-base font-medium text-neutral-600">{review}</small></p>
            </h2>
            {/* tags */}
            <div className="flex gap-5 font-bold my-8">
              <h2>Tag</h2>
              {
                tags?.map((tag, idx) => <p
                  key={idx}
                  className="text-green-400"
                >#{tag}</p>)
              }
            </div>
            <div className="border-b border my-5 border-neutral-300 mx-auto"></div>
          </div>
          {/* details book */}
          <div className="space-y-3">
            <h2 className="font-semibold flex gap-5 text-gray-500">Number of Pages: <p className="font-bold text-black">{totalPages}</p></h2>
            <h2 className="font-semibold flex gap-5 text-gray-500">Publisher:
              <p className="font-bold text-black">{publisher}</p></h2>
            <h2 className="font-semibold flex gap-5 text-gray-500">Year of Publishing: <p className="font-bold text-black">{yearOfPublishing}</p></h2>
            <h2 className="font-semibold flex gap-5 text-gray-500">Rating:
              <p className="font-bold text-black">{rating}</p></h2>
          </div>
          {/* button */}
          <div className="flex flex-wrap gap-4 mt-7">
            <button
              onClick={() => handleMarkAsRead(bookId)}
              className="border-2 border-gray-400 rounded-md py-2 px-6 font-bold">Mark As Read</button>
            <button
              onClick={() => handleAddWishList(bookId)}
              className="text-white rounded-md py-2 px-6 font-bold bg-[#59C6D2]">Add To Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BookDetail;