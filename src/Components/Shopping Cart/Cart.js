import React, { useEffect, useState } from "react";
import { Navbar } from "../Navbar/Navbar";
import { useParams, useNavigate, useLocation, Link } from "react-router-dom";
import { SearchOutlined, HeartOutlined } from "@ant-design/icons";
import CustomCartHook from "./CustomCartHook";
import { InputNumber, Button } from "antd";
export const Cart = () => {
  const [cartData, setCartData] = useState(
    JSON.parse(localStorage.getItem("Items"))
  );
    const [quan , setQuan] = useState(1);
  const noData = "Cart is empty";
  const navigate = useNavigate();
  const itemsPrice =  cartData
    .reduce((sum, { price, quantity }) => {
      return sum + price * quantity;
    }, 0)
    .toFixed(2); 
  
  const cartdata = [...cartData];
  const [increment , decrement , remove, newCart] = CustomCartHook(cartdata);
  // useEffect(() => {
  //   setCartData([...newCart]);
  // },[increment , decrement])

  const handleRemove = ((id) => {
    console.log("printing itemId ", id);
    const remove = cartData.filter((item) => item.id !== id);
    setCartData([...remove]);
  })
  useEffect(() => {
    localStorage.setItem("Items", JSON.stringify(cartData));
    console.log("printing cart data ", cartData);
  },[cartData ])

  const handleWishlist = ((item)=>{
    let wishList = JSON.parse(localStorage.getItem("Items"));
    let filteredWishList = wishList.filter((item) => item.id !== item.id);
    localStorage.setItem("Items", JSON.stringify(filteredWishList));
    // const filteredData = JSON.parse(localStorage.getItem("Items"));
    // setCartData([filteredData]);

    let products = [];
    if (localStorage.getItem("wishlist")) {
      products = JSON.parse(localStorage.getItem("wishlist"));
    }
   let productExsist = products.find((items) => items.id === item.id);
   if(!productExsist){
    products.push({
      id: item.id,
      title: item.title,
      image: item.image,
      quantity: 1,
      price: item.price,
    });
   }
   localStorage.setItem("wishlist", JSON.stringify(products));
   navigate({ pathname: "/wishlist" });
  })

  return (
    <div>
      <Navbar />
      {/* <!--  PAGE HEADER --> */}
      <section class="py-5 sm:py-7 bg-blue-100">
        <div class="container max-w-screen-xl mx-auto px-4">
          {/* <!-- breadcrumbs start --> */}
          <h2 class="text-3xl font-semibold mb-2">Shopping cart</h2>
        </div>
        {/* <!-- /.container --> */}
      </section>
      {/* <!--  PAGE HEADER .//END  --> */}

      <section class="py-10">
        <div class="container max-w-screen-xl mx-auto px-4">
          <div class="flex flex-col md:flex-row gap-4">
            <main class="md:w-3/4">
              <article class="border border-gray-200 bg-white shadow-sm rounded mb-5 p-3 lg:p-5">
                {/* item-cart  */}
                {cartData === null ? (
                  <div class="flex flex-wrap lg:flex-row gap-5 mb-4">
                    {noData}
                  </div>
                ) : (
                  cartData.map((item, index) => {
                    return (
                      <div class="flex flex-wrap lg:flex-row gap-5 mb-4" key={index}>
                        <div class="w-full lg:w-2/5 xl:w-2/4">
                          <figure class="flex leading-5">
                            <div>
                              <div class="block w-16 h-16 rounded border border-gray-200 overflow-hidden">
                                <img src={item.image} alt="Title" />
                              </div>
                            </div>
                            <figcaption class="ml-3">
                              <p>
                                <Link
                                  to="/details: + {item.id}"
                                  class="hover:text-blue-600"
                                >
                                  {item.title}
                                </Link>
                              </p>
                              <p class="mt-1 text-gray-400">
                                Color: Yellow, Type: Jeans
                              </p>
                            </figcaption>
                          </figure>
                        </div>

                        <div class="">
                          {/* selection  */}
                          <div>
                            <button onClick={() => increment(item, -1)}>
                            <h1>-</h1>  
                            </button>
                            {item.quantity}
                            <button onClick={() => decrement(item, 1)}>
                            <h1>+</h1> 
                            </button>
                          </div>

                          {/* selection .//end  */}
                        </div>
                        <div>
                          <div class="leading-5">
                            <p class="font-semibold not-italic">
                              ${item.price * item.quantity}
                            </p>
                            <small class="text-gray-400">
                              {" "}
                              $ {item.price * 3} / per item{" "}
                            </small>
                          </div>
                        </div>
                        <div class="flex-auto">
                          <div class="float-right">
                            <button
                              class="px-2 py-1.5 mx-3.5 my-1 inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
                             onClick={() => handleWishlist(item)}
                            >
                              <HeartOutlined style={{ fontSize: "22px" }} />
                            </button>

                            {/* <a
                                  href="#"
                                  class="px-3 py-2 inline-block text-blue-600 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200"
                                >
                                  <i class="fa fa-heart"></i>
                                </a> */}
                            <button
                              class="px-4 py-2 inline-block text-red-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100"
                              onClick={() => handleRemove(item.id)}
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}

                {/* item-cart end//  */}

                <hr class="my-4" />

                <h6 class="font-bold">Free Delivery within 1-2 weeks</h6>
                <p class="text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip
                </p>
              </article>
              {/* <!-- card end.// --> */}
            </main>
            <aside class="md:w-1/4">
              <article class="border border-gray-200 bg-white shadow-sm rounded mb-5 p-3 lg:p-5">
                <ul class="mb-5">
                  <li class="flex justify-between text-gray-600 mb-1">
                    <span>Total price:</span>
                    <span>${itemsPrice}</span>
                  </li>
                  <li class="flex justify-between text-gray-600 mb-1">
                    <span>Discount:</span>
                    <span class="text-green-500">- $60.00</span>
                  </li>
                  <li class="flex justify-between text-gray-600 mb-1">
                    <span>TAX:</span>
                    <span>$14.00</span>
                  </li>
                  <li class="text-lg font-bold border-t flex justify-between mt-3 pt-3">
                    <span>Total price:</span>
                    <span>${(itemsPrice - 60 + 14).toFixed(2)}</span>
                  </li>
                </ul>

                <a
                  class="px-4 py-3 mb-2 inline-block text-lg w-full text-center font-medium text-white bg-green-600 border border-transparent rounded-md hover:bg-green-700"
                  href="/checkout"
                >
                  Checkout
                </a>

                <a
                  class="px-4 py-3 inline-block text-lg w-full text-center font-medium text-green-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100"
                  href="/"
                >
                  Back to shop
                </a>
              </article>
              {/* <!-- card end.// --> */}
            </aside>
            {/* <!-- col.// --> */}
          </div>
          {/* <!-- grid.// --> */}
        </div>
      </section>
    </div>
  );
};
