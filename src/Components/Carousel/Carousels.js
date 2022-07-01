import React from "react";
import { Carousel } from "antd";

export const Carousels = () => {
  const contentStyle = {
    height: "260px",
    width: "200%",
    color: "#fff",
    // lineHeight: '160px',
    textAlign: "center",
    background: "#364d79",
  };

  return (
    <div className="mb-4 mt-2">
      <Carousel autoplay>
        <div className=" max-w-fit max-h-screen">
          <div>
            <img src="images/heart/flipkart12.jpeg" alt="flipkart image 1" />
          </div>
        </div>
        <div className=" max-w-fit max-h-screen">
          <div>
            <img src="images/heart/flipkart2.jpg" alt="flipkart image 2" />
          </div>
        </div>
        <div>
          <div>
            <img src="images/heart/flipkart3.jpg" alt="flipkart image 3" />
          </div>
        </div>
        <div className="max-w-fi max-h-screen">
          <div >
            <img src="images/heart/flipkart4.jpg" alt="flipkart image 4" />
          </div>
        </div>
      </Carousel>
    </div>
  );
};
