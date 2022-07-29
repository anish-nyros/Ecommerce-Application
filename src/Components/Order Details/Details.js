import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import { Rate } from "antd";

export const Details = (props) => {
  let history = useNavigate();
  const { itemId } = useParams();
  const location = useLocation();
  const [datas, setDatas] = useState(location.state.data);
  const [cart, setcart] = useState([]);
  const [updatedCart , setUpdatedCart] = useState([]);
  const navigate = useNavigate();
  
  const handleCart = (item) => {
    let products = [];
    if(localStorage.getItem("Items")){
      products = JSON.parse(localStorage.getItem("Items"));
      console.log("printing inside if condition ",products);
    }
    const ProductExist = products.find((items) => items.id === item.id);
    if (ProductExist) {
      ProductExist.quantity += 1;
    }else {
      products.push({
        id: item.id,
        image: item.image,
        price: item.price,
        title: item.title,
        quantity: 1,
      });
    }
  localStorage.setItem("Items", JSON.stringify(products));
  navigate({ pathname : "/cart" });
  };
    
  // setUpdatedCart( JSON.parse(localStorage.getItem("Items"))


  console.log( "locala storage data ", JSON.parse(localStorage.getItem("Items")) );

  return (
    <div>
      <Navbar />
      <section class="bg-white py-10">
        <div class="container max-w-screen-xl mx-auto px-4">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <aside>
              {/* gallery  */}
              <div class="border border-gray-200 shadow-sm p-3 text-center rounded mb-5">
                <img
                  class="object-cover inline-block"
                  width="400"
                  src={datas.image}
                  alt={datas.id}
                />
              </div>
              <div class="space-x-2 overflow-auto text-center whitespace-nowrap">
                <a
                  href="#"
                  class="inline-block border border-gray-200 p-1 rounded-md hover:border-blue-500"
                >
                  <img
                    class="w-14 h-14"
                    src="images/items/detail/thumb.jpg"
                    alt="Product title"
                  />
                </a>
                <a
                  href="#"
                  class="inline-block border border-gray-200 p-1 rounded-md hover:border-blue-500 "
                >
                  <img
                    class="w-14 h-14 object-cover"
                    src="images/items/detail/thumb1.jpg"
                    alt="Product title"
                  />
                </a>
                <a
                  href="#"
                  class="inline-block border border-gray-200 p-1 rounded-md hover:border-blue-500"
                >
                  <img
                    class="w-14 h-14 object-cover"
                    src="images/items/detail/thumb2.jpg"
                    alt="Product title"
                  />
                </a>
                <a
                  href="#"
                  class="inline-block border border-gray-200 p-1 rounded-md hover:border-blue-500"
                >
                  <img
                    class="w-14 h-14 object-cover"
                    src="images/items/detail/thumb3.jpg"
                    alt="Product title"
                  />
                </a>
                <a
                  href="#"
                  class="inline-block border border-gray-200 p-1 rounded-md hover:border-blue-500"
                >
                  <img
                    class="w-14 h-14 object-cover"
                    src="images/items/detail/thumb4.jpg"
                    alt="Product title"
                  />
                </a>
              </div>
              {/* gallery end.//  */}
            </aside>
            <main>
              <h2 class="font-semibold text-2xl mb-4">{datas.title}</h2>

              <div class="flex flex-wrap items-center space-x-2 mb-2">
                <img
                  class="d-inline-block h-4"
                  src={datas.image}
                  alt="Rating"
                />
                <Rate allowHalf defaultValue={datas.rating.rate} />{" "}
                <svg
                  width="6px"
                  height="6px"
                  viewbox="0 0 6 6"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="3" cy="3" r="3" fill="#DBDBDB" />
                </svg>
                <span class="text-gray-400">
                  <i class="fa fa-shopping-bag mr-2"></i>
                  {datas.rating.count}
                </span>
                <svg
                  width="6px"
                  height="6px"
                  viewbox="0 0 6 6"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="3" cy="3" r="3" fill="#DBDBDB" />
                </svg>
                <span class="text-green-500">Verified</span>
              </div>

              <p class="mb-4 font-semibold text-xl">
                {" "}
                $ {datas.price}
                <span class="text-base font-normal">/1 box</span>
              </p>

              <p class="mb-4 text-gray-500">{datas.description}</p>

              <ul class="mb-5">
                <li class="mb-1">
                  {" "}
                  <b class="font-medium w-36 inline-block">Model#:</b>
                  <span class="text-gray-500">{datas.category}</span>
                </li>
                <li class="mb-1">
                  {" "}
                  <b class="font-medium w-36 inline-block">Color:</b>
                  <span class="text-gray-500">Brown</span>
                </li>
                <li class="mb-1">
                  {" "}
                  <b class="font-medium w-36 inline-block">Delivery:</b>
                  <span class="text-gray-500">Russia, USA & Europe</span>
                </li>
                <li class="mb-1">
                  {" "}
                  <b class="font-medium w-36 inline-block">Color:</b>
                  <span class="text-gray-500">Brown</span>
                </li>
              </ul>

              <div class="flex flex-wrap mb-4">
                {/* select-custom  */}
                <div class="relative w-1/3 lg:w-1/4 mr-2 mb-4">
                  <select class="block appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 pr-5 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full">
                    <option>Select size</option>
                    <option>Extra large</option>
                    <option>Medium size</option>
                    <option>Normal size</option>
                  </select>
                  <i class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                    <svg
                      width="24"
                      height="24"
                      class="fill-current h-5 w-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7 10l5 5 5-5H7z" />
                    </svg>
                  </i>
                </div>
                {/* select-custom .//end   */}

                {/* select-custom  */}
                <div class="relative w-1/3 lg:w-1/4 mr-2 mb-4">
                  <select class="block appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 pr-5 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full">
                    <option>Select color</option>
                    <option>Lightblue</option>
                    <option>Green</option>
                    <option>Black</option>
                  </select>
                  <i class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                    <svg
                      width="24"
                      height="24"
                      class="fill-current h-5 w-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7 10l5 5 5-5H7z" />
                    </svg>
                  </i>
                </div>
                {/* select-custom .//end   */}
              </div>
              {/* action buttons  */}
              <div class="flex flex-wrap gap-2">
                <a
                  class="px-4 py-2 inline-block text-white bg-yellow-500 border border-transparent rounded-md hover:bg-yellow-600"
                  href="#"
                >
                  Buy now
                </a>
                <button
                  class="px-3 py-1.5 mx-3.5 my-1 inline-block text-white text-center bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
                  onClick={() => handleCart(datas)}
                >
                  Add to cart
                </button>
                <a
                  class="px-4 py-2 inline-block text-blue-600 border border-gray-300 rounded-md hover:bg-gray-100"
                  href="#"
                >
                  <i class="fa fa-heart mr-2"></i>
                  Save for later
                </a>
              </div>
              {/* action buttons .//end  */}
            </main>
          </div>
          {/* grid .//  */}
        </div>
        {/* container .//  */}
      </section>
    </div>
  );
};
