import React, { useEffect, useState } from "react";
import { Card, Rate, Input , Button} from "antd";
import { SearchOutlined, HeartOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import{Link} from "react-router-dom"
import { Details } from "../Order Details/Details";
import { useNavigate  } from "react-router-dom";

export const Body = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const { Meta } = Card;
  let history = useNavigate ();

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("https://fakestoreapi.com/products");
      const resp = await result.json();
      setData(resp);
      setFilteredData(resp);
    };
    fetchData();
  }, []);
  console.log("printing data response ", data);

  const handleSearch = (val) => {
    const values = val.target.value;
    let querry = values.toLowerCase();
    console.log("inside handle search function printing querry : ", querry);
    let result = [];
    result = data.filter((item) => {
      return (
        item.price.toString().toLowerCase().indexOf(querry) >= 0 ||
        item.title.toString().toLowerCase().indexOf(querry) >= 0
      );
    });
    setFilteredData(result);
    console.log("printing filtered data : ", filteredData);
  };
const handleClick = (item) => {
  console.log("inside handleClick ",item.id);
  history(
             `/details:${item.id}`,
            { state: { data : item  } }
          );
}

const handleCart = (item) => {
  console.log("inside handleCart ",item.id);
  history(
             `/cart:${item.id}`,
            { state: { data : item  } }
          );
         
}

  return (
    <>
      <Input
        id="searching"
        type="search"
        placeholder="Search title or price"
        className="font-poppins font-medium text-xs rounded-lg leading-normal"
        style={{
          borderRadius: "20px",
          maxWidth: "285px",
          backgroundColor: "#f5f5f5",
          color: "#383A65",
          height: "40px",
          boxShadow: "0 1px 10px #00000012",
          margin: "0 0 20px 10px",
          textAlign: "left",
          cursor: "text",
        }}
        enterButton="Search"
        icon={<SearchOutlined />}
        onChange={handleSearch}
      />
      <div class="container max-w-screen-xl mx-auto px-4">
        <h3 className="text-3xl font-bold mb-8">New Product</h3>
        <div className="grid grid-rows-5 grid-flow-col gap-4">
          {filteredData.map((item, index) => {
            return (
              <div
                className="m-4"
                key={item.id}
              >
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
                      // className="mx-auto w-auto"
                      style={{ height: "240" }}
                    />
                  }
                >
                
                  <Meta
                    title={`Price : $ ${item.price}`}
                    description={(item.title).substring(0, 25)}
                  />
                  <Rate allowHalf defaultValue={item.rating.rate} />{" "}
                  {item.rating.rate}
                  <div>
                    <button
                      class="px-3 py-1.5 mx-3.5 my-1 inline-block text-white text-center bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
                      onClick={() => handleCart(item)}
                    >
                      Add to cart
                    </button>
                    <a
                      class="px-2 py-1.5 mx-3.5 my-1 inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
                      href="#"
                    >
                      {/* <i class="fa fa-heart"></i> */}
                      <HeartOutlined style={{ fontSize: "22px" }} />
                    </a>
                  </div>
                </Card>
                {/* </Link> */}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
