import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import ytLogo from "../images/yt-logo.png";
import ytLogoMobile from "../images/yt-logo-mobile.png";

import { SlMenu } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import { CgClose } from "react-icons/cg";

import { Context } from "../context/ContextApi";
import Loader from "../Shared/loader";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { loading, MobileMenu, setMobileMenu } = useContext(Context);
  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    if ((event.key === "Enter" || event === "searchButton") && searchQuery?.length > 0) {
      navigate(`/searchResult/${searchQuery}`);
    }
  };

  const MobileMenuToggle = () => {
    setMobileMenu(!MobileMenu);
  };

  const { pathname } = useLocation();
  const pageName = pathname.split("/").filter(Boolean)?.[0];

  return (
    <div className="sticky top-0 z-10 flex flex-row items-center justify-between h-14 px-4 md:px-5 bg-white dark:bg-black"style={{ backgroundColor: "black" }}>
      {loading && <Loader />}

      <div className="flex h-5 items-center">
        {pageName === "video" && (
          <div className="sticky top-0 z-10 flex flex-row items-center justify-between h-14 px-4 md:px-5 bg-white dark:bg-black"
            onClick={MobileMenuToggle}
          >
            {MobileMenu ? <CgClose className="text-white text-xl" /> : <SlMenu className="text-white text-xl" />}
          </div>
        )}
        <Link to = "/" className = "flex h-5 items-center">
          <img className="h-full dark:md:block" src={ytLogo} alt="Youtube" />
          <img className="h-full md:hidden" src={ytLogoMobile} alt="Youtube" />
        </Link>
        <div className="group flex items-center">
          <div className="flex h-8 md:h-10 md:pl-5 border border-[#303030] rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0">
            <div className="w-10 h-full flex items-center justify-center"> {/* Centering container */}
              <IoIosSearch className="text-white text-xl"/>
          , </div>
            <input
              type="text"
              className="bg-transparent outline-none text-white pl-5 md:pl-0 w-44 md:group-focus-within:pl-0 md:w-64 lg:w-[500px]"
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
              value={searchQuery}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
