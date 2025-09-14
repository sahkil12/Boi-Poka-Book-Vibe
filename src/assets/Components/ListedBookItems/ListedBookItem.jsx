import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from '../MyDataBase/addToDataBase';
import Book from '../Book/Book';
import ReadBookItem from '../ReadBookItem/ReadBookItem';

const ListedBookItem = () => {
    const [readList, setReadList] = useState()
const allBooks = useLoaderData()

 useEffect(()=>{
    const storedReadBook = getStoredReadList();
    const storedReadBookNum = storedReadBook.map(id => parseInt(id));

        const bookList = allBooks.filter(book => storedReadBookNum.includes(book.bookId))
        setReadList(bookList)
      
 },[])

  return (
    <div>
        {/* heading text part */}
      <div className="text-center work-sans">
        <h2 className="text-4xl font-bold my-10">Books</h2>
        <select
          defaultValue="Pick a text editor"
          className=" my-10 select select-primary bg-green-500 text-white font-bold text-lg border-none outline-none rounded-md ">
          <option disabled={true}>Sort By</option>
          <option>Rating</option>
          <option>Number of pages</option>
          <option>Publisher year</option>
        </select>
      </div>
    {/* tabs */}
    <Tabs>
    <TabList >
         <Tab>Read Books</Tab>
        <Tab>Wishlist Books</Tab>
    </TabList>

    <TabPanel>
      
      <div>
        {
        readList?.map(book => <ReadBookItem key={book.bookId} book={book}></ReadBookItem>)
      }
      </div>
    </TabPanel>
    <TabPanel> 
      <h2 className='py-20 border rounded-md px-2 my-2 border-gray-300 text-4xl'>My Wish List</h2>
    </TabPanel>
  </Tabs>
    </div>
  );
};

export default ListedBookItem;
