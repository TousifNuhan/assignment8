import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom'
import { getStoredBookRead } from "../../utility/localstorage";
import ListedBooks from '../ListedBooks/ListedBooks';
import { FaAngleDown } from "react-icons/fa6";
import { getStoredwishlist } from '../../utility/wishlist';
// import Pages from '../Pages/Pages';


const Listed = () => {

    const loadData2 = useLoaderData();
    
    const [readedBooks, setReadedBooks] = useState([])
    const [wishlistBooks, setWishlistBooks] = useState([])

    // const [displayWishlistBooks, setDisplayWishlistBooks] = useState([])
    // const [displayReadBooks, setDisplayReadBooks] = useState([])

    // const handleBookWishlist = filter => {
    //     if (filter === 'rating') {
    //         const rating=readedBooks.filter(book=> book.)
    //     }
    // }

    useEffect(() => {
        const storedJobIds = getStoredBookRead()
        if (loadData2.length) {
            const booksReaded = []
            for (const id of storedJobIds) {
                const book = loadData2.find(book => book.bookId === id)
                if (book) {
                    booksReaded.push(book)
                }
            }
            setReadedBooks(booksReaded)
            // setDisplayReadBooks(booksReaded)
        }
        const storedWishlistIds = getStoredwishlist()

        if (loadData2.length) {
            const wishlistBooks = []
            for (const id of storedWishlistIds) {
                const book = loadData2.find(book => book.bookId === id)
                if (book) {
                    wishlistBooks.push(book)
                }
            }
            setWishlistBooks(wishlistBooks)
            // setDisplayWishlistBooks(wishlistBooks)
        }



    }, [loadData2])



    return (
        <div className='mt-5'>

            <h1 className='text-[#131313] text-3xl font-semibold p-5 text-center bg-[#1313130d] P-16 rounded-xl '>Books</h1>
            <div className='flex justify-center mt-5'>
                <button className="dropdown dropdown-bottom">
                    <div tabIndex={0} role=" button" className="flex items-center border rounded-md hover:bg-[#ffffff] hover:text-black border-green-500 bg-[#23be0a] py-2 px-4 text-base font-medium text-[#ffffff]">Sort By<FaAngleDown className='ml-2' />
                    </div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Rating</a></li>
                        <li><a>Number of Pages</a></li>
                        <li><a>Publisher Year</a></li>
                    </ul>
                </button>
                {/* {
                    displayReadBooks.map(book => <ListedBooks key={book.bookId} book={book}></ListedBooks>)
                }

                {
                    displayWishlistBooks.map(book => <ListedBooks key={book.bookId} book={book}></ListedBooks>)

                } */}

            </div>
            <div >


                {/* <button className='ml-16 mt-8'>Read Books </button> */}

                {/* <div className='flex justify-center mt-5'> */}
                <button className="dropdown dropdown-bottom ">
                    <div tabIndex={0} role=" button" className="py-2 px-4 text-base font-medium text-black ">Read books
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box  ">
                            <div className='ml-10'>

                                {
                                    readedBooks.map(book => <ListedBooks key={book.bookId} book={book}></ListedBooks>)

                                }

                            </div>

                        </ul>
                    </div>
                </button>

                {/* </div> */}

                {/* <button className='ml-5'>Wishlist</button> */}


                <button className="dropdown dropdown-bottom ">
                    <div tabIndex={0} role=" button" className="py-2 px-4 text-base font-medium text-black   ">Wishlist books
                    </div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <div >

                            {
                                wishlistBooks.map(book => <ListedBooks key={book.bookId} book={book}></ListedBooks>)

                            }
                        </div>


                    </ul>
                </button>

                

                {/* {
                    wishlistBooks.map(book => <ListedBooks key={book.bookId} book={book}></ListedBooks>)

                } */}
            </div>

            

        </div>
    );
};

export default Listed;