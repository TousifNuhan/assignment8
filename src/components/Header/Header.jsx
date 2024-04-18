import { NavLink } from "react-router-dom";


const Header = () => {
    const links = <>
        <li className="text-[#131313cc] mr-5 "><NavLink to="/"  className={({ isActive }) => (isActive ? 'border-[#23be0a] border text-[#23be0a] rounded-md p-2' : '')}>Home</NavLink></li>
        <li className="text-[#131313cc] mr-5"><NavLink to="/listedBooks" className={({ isActive }) => (isActive ? 'border-[#23be0a] border text-[#23be0a] rounded-md p-2' : '')}>Listed Books</NavLink></li>
        <li className="text-[#131313cc] mr-5"><NavLink to="/pagesToRead" className={({ isActive }) => (isActive ? 'border-[#23be0a] border text-[#23be0a] rounded-md p-2' : '')}>Pages to Read</NavLink></li>
        <li className="text-[#131313cc] mr-5"><NavLink to="/demoBook" className={({ isActive }) => (isActive ? 'border-[#23be0a] border text-[#23be0a] rounded-md p-2' : '')}>Book Demo</NavLink></li>
        <li className="text-[#131313cc] mr-5"><NavLink to="/about" className={({ isActive }) => (isActive ? 'border-[#23be0a] border text-[#23be0a] rounded-md p-2' : '')}>About Us</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            links
                        }
                    </ul>
                </div>
                <h1 className="text-[#131313] font-bold text-2xl">Book Vibe</h1>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex px-1 ">
                    {
                        links
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <button className="mr-2 border rounded-md hover:bg-[#ffffff] hover:text-black border-green-500 bg-[#23be0a] py-2 px-4 text-base font-medium text-[#ffffff]">Sign In</button>
                <button className="border rounded-md bg-[#59c6d2] py-2 px-4 text-base font-medium border-[#59c6d2] text-[#ffffff] hover:bg-[#ffffff] hover:text-black">Sign Up</button>
            </div>

        </div>
    );
};

export default Header;