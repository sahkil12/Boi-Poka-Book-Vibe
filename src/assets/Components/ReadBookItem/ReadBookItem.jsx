import { CiLocationOn } from "react-icons/ci";
import { PiUsers } from "react-icons/pi";
import { FaRegFileAlt } from "react-icons/fa";

const ReadBookItem = ({ book }) => {
  const {
    image,
    author,
    bookName,
    category,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = book;
  return (
    <div className="border rounded-xl flex flex-col md:flex-row gap-7 border-gray-200 p-6 my-5">
      {/* image section */}
      <div className="flex-2 py-10 flex justify-center bg-gray-200 rounded-xl">
        <img className="w-[150px] object-cover " src={image} alt="" />
      </div>
      {/* text section */}
      <div className="flex-6 space-y-5 py-6 p-2 work-sans flex-col md:flex-row">
        <h2 className="card-title text-3xl Playfair">{bookName}</h2>
        <p className="text-start font-medium text-neutral-600">By : {author}</p>

        <div className="flex flex-col md:flex-row gap-7 font-semibold my-5 text-xl work-sans">
          {/* tags  */}
          <h2 className="">Tag</h2>
          {tags.map((tag, idx) => (
            <p key={idx} className="text-green-500">
              #{tag}
            </p>
          ))}
          <h2 className="lg:ml-5 font-medium flex text-neutral-600 items-center gap-2">
            <CiLocationOn className="font-bold text-2xl" />
            Year of Publishing : <p className="ml-4">{yearOfPublishing}</p>
          </h2>
        </div>

        <div className="flex gap-10 text-xl text-neutral-500">
          <h2 className="flex items-center gap-2">
            <PiUsers className="font-bold text-3xl" /> Publisher: {publisher}
          </h2>
          <h2 className="flex items-center gap-2">
            <FaRegFileAlt className="font-bold text-2xl" /> Page {totalPages}
          </h2>
        </div>
        {/* divider */}
        <div className="border-b border my-5 border-neutral-200 "></div>
        {/* button and text */}
        <div className="flex gap-7 items-center">
          <h3 className="rounded-full bg-blue-100 text-blue-500 font-medium py-2 text-lg px-7">Category : {category}</h3>
          <h3 className="rounded-full bg-orange-100 text-orange-500 font-medium py-2 text-lg px-7">Ratting : {rating}</h3>
          <button className="rounded-full btn text-white bg-green-500 border-none px-7 py-6 text-lg">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default ReadBookItem;
