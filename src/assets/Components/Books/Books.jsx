import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {

    const [books, setBooks] = useState([])

    useEffect(()=>{

        fetch('./booksData.json')
        .then(res => res.json())
        .then(data => setBooks(data))

    },[])

    return (
        <div className="mt-24 mb-10">

                <h2 className='text-center text-4xl md:text-5xl font-bold Playfair mb-10'>All Books</h2>

                <div className="mx-3 md:mx-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {
                        books?.map(book => <Book key={book.bookId} book={book}></Book>)
                    }
                </div>
        </div>
    );
};

export default Books;