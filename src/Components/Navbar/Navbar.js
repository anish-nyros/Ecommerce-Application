import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Rate, Input , Button} from "antd";
import { SearchOutlined, HeartOutlined } from "@ant-design/icons";
export const Navbar = ({handlechange}) => {
	// const handleSearch = (e)=>{
  //   let element = e.target.value;
  //   console.log("printing element : ", element);
  // }
  
  return (
    <div>
      <header class="bg-white py-3 border-b">
        <div class="container max-w-screen-xl mx-auto px-4">
          <div class="flex flex-wrap items-center">
            {/* Brand  */}
            <div class="flex-shrink-0 mr-5">
              <a href="/">
                {" "}
                <img src="images/logo.svg" height="38" alt="Brand" />{" "}
              </a>
            </div>
            {/* Brand .//end  */}

            {/* Search  */}
            <div class="flex flex-nowrap items-center w-full order-last md:order-none mt-5 md:mt-0 md:w-2/4 lg:w-2/4">
              <Input
                class="flex-grow appearance-none border border-gray-200 bg-gray-100 rounded-md mr-2 py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400"
                id="searching"
                type="search"
                placeholder="Search title or price"
                enterButton="Search"
                icon={<SearchOutlined />}
                onChange={(val)=> handlechange(val)}
              />
              <button
                type="button"
                class="px-4 py-2 inline-block text-white border border-transparent bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Search
              </button>
            </div>
            {/* Search .//end  */}

            {/* Actions  */}
            <div class="flex items-center space-x-2 ml-auto">
              <a
                class="px-3 py-2 inline-block text-center text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:border-gray-300"
                href="#"
              >
                <i class="text-gray-400 w-5 fa fa-user"></i>
                <span class="hidden lg:inline ml-1">Sign in</span>
              </a>

              <a
                class="px-3 py-2 inline-block text-center text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:border-gray-300"
                href="/wishlist"
              >
                <i class="text-gray-400 w-5 fa fa-heart"></i>
                <span class="hidden lg:inline ml-1">Wishlist</span>
              </a>

              <a
                class="px-3 py-2 inline-block text-center text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:border-gray-300"
                href="#"
              >
                <i class="text-gray-400 w-5 fa fa-shopping-cart"></i>
                {/* <span class="hidden lg:inline ml-1">My cart</span> */}
                <Link to="/cart">
                  <b className="text-blue-700">
					{/* My Cart {data.length} */}
					My Cart
					</b>{" "}
                </Link>
              </a>
            </div>
            {/* Actions .//end  */}

            {/* mobile-only  */}
            <div class="lg:hidden ml-2">
              <button
                type="button"
                class="bg-white p-3 inline-flex items-center rounded-md text-black hover:bg-gray-200 hover:text-gray-800 border border-transparent"
              >
                <span class="sr-only">Open menu</span>
                <i class="fa fa-bars fa-lg"></i>
              </button>
            </div>
            {/* mobile-only //end   */}
          </div>
          {/* flex grid //end  */}
        </div>
        {/* container //end  */}
      </header>
      {/* <nav class="border-b bg-gray-100">
		<div class="container max-w-screen-xl mx-auto px-4">
			  Bottom brgins from here  
			<div class="hidden lg:flex flex-1 items-center py-1">
				<a class="px-3 py-2 rounded-md hover:bg-gray-200" href="#"> Category </a>
				<a class="px-3 py-2 rounded-md hover:bg-gray-200" href="#"> About </a>
				<a class="px-3 py-2 rounded-md hover:bg-gray-200" href="#"> Services </a>
				<a class="px-3 py-2 rounded-md hover:bg-gray-200" href="#"> Projects </a>
				<a class="px-3 py-2 rounded-md hover:bg-gray-200" href="#"> Offers </a>
				<a class="px-3 py-2 rounded-md hover:bg-gray-200" href="#"> Others </a>
			</div>
			  Bottom //end 
		</div> 
         container //end  
	</nav>  */}
    </div>
  );
};
