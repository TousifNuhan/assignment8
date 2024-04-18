import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveBooks } from "../../utility/localstorage";
import { saveWishlist } from "../../utility/wishlist";

const BookDetails = () => {

    const loadData = useLoaderData();
    const { id } = useParams()
    const intId = parseInt(id)
    const book = loadData.find(book => book.bookId === intId)


    const handleReadBooks = () => {
        if (saveBooks(intId)) {
            toast.success('Books added to read list')
        }
        else {
            toast.error('You have already read this book')
        }
    }
    const handleWishlist = () => {
        if (saveWishlist(intId) ) {
            toast.success('Books added to Wishlist')
        }
        else {
            toast.error('You have already read to the Wishlist')
        }
    }

    return (
        <div className="lg:flex  p-5 justify-center " >
            <img className="max-h-[40rem] p-10 bg-[#1313130d] rounded-lg " src={book.image} alt="" />
            <div className=" p-10 ">
                <h1 className="text-[#131313] text-4xl font-bold mb-2">{book.bookName}</h1>
                <h4 className="font-medium text-lg text-[#131313cc] ">By : <span>{book.author}</span></h4>
                <p className="my-5 font-medium text-lg text-[#131313cc]">{book.category}</p>
                <p className="max-w-xl text-[#131313] font-bold text-base ">Review : <span className="text-[#131313b3] font-normal">{book.review}</span></p>
                <div className="flex my-10 ">
                    <h2 className="text-[#131313] mr-6 font-bold">Tag</h2>
                    <p className="mr-6 text-[#23be0a] font-medium">#<span>{book.tags[0]}</span></p>
                    <p className="mr-4 text-[#23be0a] font-medium">#<span>{book.tags[1]}</span></p>
                </div>
                <div className="flex">
                    <div className="text-[#131313b3] font-medium">
                        <p >Number of Pages:</p>
                        <p className="my-2">Publisher:</p>
                        <p>Year of Publishing:</p>
                        <p className="my-2">Rating:</p>
                    </div>

                    <div className="text-[#131313] ml-5 font-semibold">
                        <p>{book.totalPages}</p>
                        <p className="my-2">{book.publisher}</p>
                        <p>{book.yearOfPublishing}</p>
                        <p className="my-2">{book.rating}</p>
                    </div>
                </div>
                <div className="mt-5">

                    <button onClick={handleReadBooks} className="border rounded-md hover:bg-[#59c6d2] py-2 px-4 text-base font-medium border-[#59c6d2] hover:text-[#ffffff] bg-[#ffffff] text-black">Read</button>
                    <button onClick={handleWishlist} className="ml-4 border rounded-md bg-[#59c6d2] py-2 px-4 text-base font-medium border-[#59c6d2] text-[#ffffff] hover:bg-[#ffffff] hover:text-black">Wishlist</button>
                </div>
                <ToastContainer />
              
            </div>
        </div>
    );
};

export default BookDetails;