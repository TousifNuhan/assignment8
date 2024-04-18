
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
    const { bookId, image, bookName, author, rating, category, tags } = book

    return (

        <div>
            <Link to={`/bookDetails/${bookId}`}>
                <div className="card w-96 bg-base-100 shadow-xl p-3">
                    <figure><img className="max-w-40 max-h-52 bg-[#f3f3f3]" src={image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className="flex mt-2 ml-3 text-[#23be0a] text-base font-medium">
                            <p>{tags[0]}</p>
                            <p>{tags[1]}</p>
                        </div>
                        <h2 className="card-title text-2xl font-bold mt-2">{bookName}</h2>
                        <p className="text-base font-medium mb-5">{author}</p>
                        <div className="flex justify-between ">
                            <p>{category}</p>
                            <div >
                                <p className="flex items-center">{rating} <CiStar className="text-xl ml-1"></CiStar></p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>

    );
};

export default Book;