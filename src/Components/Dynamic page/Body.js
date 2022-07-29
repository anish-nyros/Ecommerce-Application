import React, { useEffect, useState, useReducer } from "react";
import { Card, Rate, Input, Button } from "antd";
import { SearchOutlined, HeartOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";
import { Details } from "../Order Details/Details";
import { Navbar } from "../Navbar/Navbar";
import { Carousels } from "../Carousel/Carousels";
import { useNavigate } from "react-router-dom";

export const Body = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const navigate = useNavigate();
  const { Meta } = Card;
  let history = useNavigate();
  const initialState = {
    data: "",
    isDataFetched: false,
    error: null,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "data-fetched":
        return {
          data: action.data,
          isDataFetched: true,
          error: null,
        };
      case "data-fetch-error":
        return {
          data: null,
          isDataFetched: false,
          error: action.error,
        };
    }
  };
  const [item, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("https://fakestoreapi.com/products");
      const resp = await result.json();
      if (resp) {
        setData(resp);
        setFilteredData(resp);
        dispatch({ type: "data-fetched", data: resp });
      } else {
        dispatch({ type: "data-fetch-error", error: "Error in fetching data" });
      }
    };
    fetchData();
  }, []);
  // console.log("printing data response ", data);

  const handleSearch = (val) => {
    // console.log("printing val inside handleSearch : ", val);
    const values = val.target.value;
    let querry = values.toLowerCase();
    // console.log("inside handle search function printing querry : ", querry);
    let result = [];
    result = data.filter((item) => {
      return (
        item.price.toString().toLowerCase().indexOf(querry) >= 0 ||
        item.title.toString().toLowerCase().indexOf(querry) >= 0
      );
    });
    setFilteredData(result);
    dispatch({ type: "data-fetched", data: result });
    console.log("printing filtered data : ", filteredData);
  };
  const handleClick = (item) => {
    console.log("inside handleClick ", item.id);
    history(`/details:${item.id}`, { state: { data: item } });
  };

  const handleCart = (product) => {
    let products = [];
    if (localStorage.getItem("Items")) {
      products = JSON.parse(localStorage.getItem("Items"));
    }
    let productExsist = products.find((item) => item.id === product.id);
    if (productExsist) {
      productExsist.quantity += 1;
    } else {
      products.push({
        id: product.id,
        title: product.title,
        image: product.image,
        quantity: 1,
        price: product.price,
      });
    }
    localStorage.setItem("Items", JSON.stringify(products));
    navigate({ pathname: "/cart" });
  };

  const handleWishlist = (item) => {
    let products = [];
    if (localStorage.getItem("wishlist")) {
      products = JSON.parse(localStorage.getItem("wishlist"));
      console.log("inside if of body.js",products)
    }
    console.log("inside if of body.js",products)
    let productExsist = products.find((items) => items.id === item.id);
    if (productExsist) {
      productExsist.quantity += 1;
    } 
    // if (!productExsist) {
    else {
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
  };

  return (
    <>
      <Navbar handlechange={handleSearch} />
      <Carousels />
      <div class="container max-w-screen-xl mx-auto px-4">
        <h3 className="text-3xl font-bold mb-8">New Product</h3>
        <div className="grid grid-rows-5 grid-flow-col gap-4">
          {item.error ? (
            <h1 style={{ color: "red" }}>{item.error}</h1>
          ) : item.isDataFetched ? (
            item.data.map((item, index) => {
              return (
                <div className="m-4" key={item.id}>
                  <article class="shadow-sm rounded bg-white border border-gray-200">
                    {/* <Link to='/details' params={item}> */}
                    <Card
                      hoverable
                      onClick={() => handleClick(item)}
                      style={{
                        width: 250,
                        height: "240",
                        backgroundColor: "#f5f5f5",
                      }}
                      cover={
                        <img
                          alt={item.title}
                          src={item.image}
                          className="mx-auto w-auto h-64"
                          style={{ height: "240" }}
                        />
                      }
                    >
                      <Meta
                        title={`Price : $ ${item.price}`}
                        description={item.title.substring(0, 25)}
                      />
                      <Rate allowHalf defaultValue={item.rating.rate} />{" "}
                      {item.rating.rate}
                    </Card>
                    <div>
                      <button
                        class="px-3 py-1.5 mx-3.5 my-1 inline-block text-white text-center bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
                        onClick={() => handleCart(item)}
                      >
                        Add to cart
                      </button>
                      <button
                        class="px-2 py-1.5 mx-3.5 my-1 inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
                        onClick={() => handleWishlist(item)}
                      >
                        {/* <i class="fa fa-heart"></i> */}
                        <HeartOutlined style={{ fontSize: "22px" }} />
                      </button>
                    </div>
                    {/* </Card> */}
                    {/* </Link> */}
                  </article>
                </div>
              );
            })
          ) : (
            <h1>Loading .......</h1>
          )}
        </div>
      </div>
    </>
  );
};
