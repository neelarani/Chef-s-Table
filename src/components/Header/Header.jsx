const Header = () => {
  return (
    <nav className="w-11/12 mx-auto py-5">
      <div className="navbar  bg-base-100 flex flex-col md:flex-row  justify-between items-center">
        <div className="">
          <a href="#" className="text-2xl font-extrabold">
            Chef's Table
          </a>
        </div>

        <div>
          <ul className="flex gap-7 text-sm md:text-base font-medium ">
            <li className="hover:bg-green-500 p-2 rounded-lg ">Home</li>
            <li className="hover:bg-green-500 p-2 rounded-lg ">Recipes</li>
            <li className="hover:bg-green-500 p-2 rounded-lg ">About</li>
            <li className="hover:bg-green-500 p-2 rounded-lg ">Search</li>
          </ul>
        </div>
        <div className="gap-5 ">
          <div className="border-2 bg-gray-200 rounded-3xl px-4">
            <i className="fa-solid fa-magnifying-glass py-3 px-2 rounded-l-lg"></i>
            <input
              className="flex-grow outline-none font-medium bg-gray-200"
              type="text"
              placeholder="Search"
            />
          </div>
          <div className="dropdown dropdown-end">
            <div className=" bg-green-500 btn rounded-full">
              <i className="fa-regular fa-user "></i>
            </div>

            <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
