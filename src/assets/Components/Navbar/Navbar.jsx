import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
     <nav className="nav-bar flex gap-10">
       <li >
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/listedBook"}>Listed Books</NavLink> 
      </li>
      <li>
        <NavLink to={'/pageChart'}>Pages to Read</NavLink>
      </li>
     </nav>
    </>
  );
  return (
    <div className="navbar bg-white text-black shadow-sm py-10 lg:px-30 work-sans ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content  bg-white rounded-box z-1 mt-3 w-52 p-2 shadow text-lg font-semibold"
          >
            {links}
          </ul>
        </div>
        <a className="font-bold text-3xl">Boi Poka</a>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="px-1 text-lg font-semibold lg:gap-9">
        {links}
        </ul>
      </div>
      <div className="navbar-end gap-3 lg:gap-5 text-lg font-semibold">
        <a className="btn border-none bg-green-500 px-6">Sign In </a>
        <a className="btn border-none bg-[#59C6D2] px-6">Sign Up</a>
      </div>
    </div>
  );
};

export default Navbar;
