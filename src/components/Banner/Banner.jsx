import { Link } from 'react-router-dom';
import books from './images/book.png'

const Banner = () => {
    return (
        <div className='lg:flex lg:flex-row lg:justify-around items-center border rounded-xl p-6 mt-4 bg-[#1313130d]'>
            <div>
                <h1 className="text-[#131313] text-4xl font-semibold leading-[3rem]">Books to freshen<br />up your bookshelf</h1>
               <Link to="/listedBooks"> <button  className="mt-7 mr-2 border rounded-md hover:bg-[#ffffff] hover:text-black border-green-500 bg-[#23be0a] py-2 px-4 text-base font-medium text-[#ffffff]">View the list</button></Link>
            </div>
            <div>
                <img src={books} alt="" />
            </div>

        </div>
    );
};

export default Banner;