import React, { useEffect, useState, useCallback, useMemo} from "react";
import { Navbar } from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { Footer } from "../Footer/Footer";
const Wishlist = () => {
  const navigate = useNavigate();
  const [wishlistData, setWishlistData] = useState();

  useEffect(() => {
    if (localStorage.getItem("wishlist")) {
      setWishlistData(JSON.parse(localStorage.getItem("wishlist")));
    }
  },[]);
  console.log("printing wishlistData : ", wishlistData);

  const addCart = (item) => {
    let products = [];
    if (localStorage.getItem("Items")) {
      products = JSON.parse(localStorage.getItem("Items"));
    }
    let productExsist = products.find((items) => items.id === item.id);
    if (productExsist) {
      productExsist.quantity += 1;
    } else {
      products.push({
        id: item.id,
        title: item.title,
        image: item.image,
        quantity: 1,
        price: item.price,
      });
    }
    localStorage.setItem("Items", JSON.stringify(products));
    //removing item from whichlist
    let productId = item.id;
    let wishlist = JSON.parse(localStorage.getItem("wishlist"));
    let filteredWishlist = wishlist.filter((items) => items.id !== item.id);
    localStorage.setItem("wishlist", JSON.stringify(filteredWishlist));
    const filteredData = JSON.parse(localStorage.getItem("wishlist"));
    setWishlistData(filteredData);

    navigate({ pathname: "/cart/" });
  };

  const remove = (item) => {
    let wishlist = JSON.parse(localStorage.getItem("wishlist"));
    let filteredWishlist = wishlist.filter((items) => items.id !== item.id);
    localStorage.setItem("wishlist", JSON.stringify(filteredWishlist));
    let filteredData = JSON.parse(localStorage.getItem("wishlist"));
    setWishlistData(filteredData);
  };

  const listWishlist = wishlistData
    ? wishlistData.map((item,index) => {
        return (
          <div key={index}>
            <div class="flex flex-wrap lg:flex-row gap-5  mb-4">
              <div class="w-full lg:w-2/5 xl:w-2/4">
                <figure class="flex leading-5">
                  <div>
                    <div class="block w-16 h-16 rounded border border-gray-200 overflow-hidden">
                      <img src={item.image} alt={item.title} />
                    </div>
                  </div>
                  <figcaption class="ml-3">
                    <p>
                      <a href="#" class="hover:text-blue-600">
                        {item.title}{" "}
                      </a>
                    </p>
                    {/*<p class="mt-1 text-gray-400"> Color: Yellow, Type: Jeans </p>*/}
                  </figcaption>
                </figure>
              </div>
              <div class=""></div>
              <div>
                <div class="leading-5">
                  <p class="font-semibold not-italic">{item.price}</p>
                </div>
              </div>
              <div class="flex-auto">
                <div class="float-right">
                  <span
                    onClick={() => addCart(item)}
                    class="px-4 py-2 inline-block text-red-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100"
                  >
                    Add to cart
                  </span>
                  &nbsp;&nbsp;&nbsp;
                  <span
                    class="px-4 py-2 inline-block text-red-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100"
                    onClick={() => remove(item)}
                  >
                    {" "}
                    Remove{" "}
                  </span>
                </div>
              </div>
            </div>
            <hr class="my-4" />
          </div>
        );
      })
    : "No Products in Wishlist";

  return (
    <div>
      <Navbar />
      <section class="py-5 sm:py-7 bg-blue-100">
        <div class="container max-w-screen-xl mx-auto px-4">
          <h2 class="text-3xl font-semibold mb-2">Wishlist</h2>
        </div>
      </section>
      <div>{listWishlist}</div>
      <Footer />
    </div>
  );
};

export default React.memo(Wishlist);
