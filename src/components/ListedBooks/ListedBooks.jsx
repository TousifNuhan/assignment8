import { IoLocationOutline } from "react-icons/io5";

const ListedBooks = ({ book }) => {

    const { bookId, image, bookName, author, rating, category, tags, yearOfPublishing, totalPages, publisher, review } = book
    return (


        <div className="border border-solid border-[#13131326] max-w-5xl lg:mx-auto mt-10 p-5 lg:flex  rounded-2xl lg:w-[80rem]">
            <div className="p-5 rounded-lg text-center flex justify-center">
                <img className="max-h-60 p-5 bg-[#1313130d]" src={image} alt="" />
            </div>
            <div className="p-5 w-4/5">
                <div className="flex lg:justify-start sm:justify-center">
                    <h1 className="text-[#131313] text-2xl font-bold ">{bookName}</h1>
                </div>
                <h4 className="font-medium text-base text-[#131313cc] my-5 flex justify-start">By : <span>{author}</span></h4>
                <div className="flex items-center justify-start mb-6">
                    <h2 className="text-[#131313] mr-6 font-bold ">Tag</h2>
                    <p className="mr-6 my-1 text-[#23be0a] font-medium ">#<span>{tags[0]}</span></p>
                    <p className="mr-6 mb-1 text-[#23be0a] font-medium ">#<span>{tags[1]}</span></p>
                    <p className="flex justify-center items-center text-base text-[#131313cc]"><IoLocationOutline className="lg:mr-2 text-4xl lg:text-lg" /> Year of publishing:   {yearOfPublishing}
                    </p>
                </div>

                <div className="lg:flex">
                    <div className="flex mr-6 my-3 lg:my-0  sm:justify-center ">
                        <img className="mr-2 w-5 h-5 " src="/src/assets/Vector (1).png" alt="" />

                        <p className="text-[#13131399]">Publisher : {publisher}</p>
                    </div>
                    <div className="flex">
                        <img className="mr-2 h-4 w-4" src="/src/assets/Vector.png" alt="" />

                        <p className="text-[#13131399]">Page {totalPages}</p>
                    </div>
                </div>

                <hr className="my-4 border border-solid border-[#13131326]" />

                <div className="flex items-center ">
                    <p className="mr-14 text-[#328eff] text-sm lg:text-base">Category : {category}</p>
                    <p className="mr-14 text-[#ffac33] text-sm lg:text-base">Rating : {rating}</p>
                    <button className="border rounded-lg py-1 px-3 lg:rounded-3xl hover:bg-[#ffffff] hover:text-black border-green-500 bg-[#23be0a] lg:py-2 lg:px-6  lg:text-base text-sm font-medium text-[#ffffff]">View Details</button>

                </div>
            </div>
        </div>

    );
};

export default ListedBooks;