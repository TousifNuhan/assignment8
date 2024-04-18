import { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Book from '../Book/Book';


const Home = () => {
    
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('books.json')
            .then(res => res.json())
        .then(data=>setBooks(data))
    },[])
    return (
        <div >
            <Banner></Banner>
            <div className='flex flex-col justify-center items-center mt-16'>
                <h1 className='text-[#131313] text-3xl font-semibold mb-10'>Books</h1>
                <div className='grid lg:grid-cols-3 gap-6 '>
                {
                    books.map(book=><Book key={book.bookId} book={book}></Book>)
                }

                </div>
            </div>
        </div>
    );
};

export default Home;