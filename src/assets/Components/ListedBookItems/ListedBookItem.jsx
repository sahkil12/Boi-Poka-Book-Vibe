import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList } from "../MyDataBase/addToDataBase";
import ReadBookItem from "../ReadBookItem/ReadBookItem";
import { getStoredWishList } from "../MyDataBase/addWishListToDB";
import WishListItems from "../WishListItems/WishListItems";
import { Helmet } from "react-helmet";

const ListedBookItem = () => {
  const [readList, setReadList] = useState([]);
  const [wishList, setWishList] = useState([])
  const allBooks = useLoaderData();
// read List data ---->
  useEffect(() => {
    const storedReadBook = getStoredReadList();
    const storedReadBookNum = storedReadBook.map((id) => parseInt(id));

    const bookList = allBooks.filter((book) =>
      storedReadBookNum.includes(book.bookId)
    );
    setReadList(bookList);
  }, []);
  // wish list data -----> 
    useEffect(() => {
        const storedWishList = getStoredWishList();
        const storedWishListNum = storedWishList.map(id => parseInt(id));

        const bookList = allBooks.filter((book)=> 
        storedWishListNum.includes(book.bookId)
        );
        setWishList(bookList)
    }, []);
  return (
    <div>
      <Helmet>
          <title>Boi Poka | Listed Book Item</title>
        </Helmet>
      {/* heading text part */}
      <div className="text-center work-sans">
        <h2 className="text-4xl font-bold my-10">Books</h2>
{/* sort by */}
        <div className="dropdown dropdown-center  my-10 mb-15">
  <div tabIndex={0} role="button" className="btn w-60 flex justify-between bg-green-500 text-white text-lg">Sort By<span>⬇</span></div>
  <ul tabIndex={0} className="dropdown-content bg-green-400 menu text-white  font-medium text-lg rounded-box z-1 w-56 p-2 shadow-sm">
    <li><a>Rating</a></li>
    <li><a>Number of pages</a></li>
    <li><a>Publisher year</a></li>
  </ul>
</div>
      </div>
      {/* tabs */}
      <Tabs>
        <TabList className={"font-medium text-lg space-x-5 text-neutral-600"}>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          {/* read list tabs */}
          <div className="my-10">
            {readList.length === 0 && <h2 className="md:w-2/5 mx-auto text-4xl/normal md:text-6xl/normal font-bold text-center my-40">You haven’t added any books to your Read list yet.</h2>}
            {readList?.map((book) => (
              <ReadBookItem key={book.bookId} book={book}></ReadBookItem>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          {/* wish list tab */}
        <div className="my-10">
          {
            wishList.length === 0 && <h2 className="md:w-2/5 mx-auto text-4xl/normal md:text-6xl/normal font-bold text-center my-40">You haven’t added any books to your Wish list yet.</h2>
          }
          {
            wishList?.map((book)=>
               <WishListItems key={book.bookId} book={book}></WishListItems> )
          }
        </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBookItem;
