import React,  { useEffect , useState } from "react";
import { Navbar } from "../Navbar/Navbar";
import { useParams , useNavigate , useLocation } from 'react-router-dom'
import { SearchOutlined, HeartOutlined } from "@ant-design/icons";


export const Cart = () => {
    const { itemId } = useParams()
	const location = useLocation()
	// const [datas , setDatas] = useState(location.state.data)
    const [totalItems , setTotalItems] = useState([]);
    const [filteredData , setFilteredData] = useState([]);
    const noData = "Cart is empty"

    useEffect(() => {
        const fetchData = async () => {
          const result = await fetch("https://fakestoreapi.com/products");
          const resp = await result.json();
          setTotalItems(resp);
        };
        fetchData();
      }, []);
	// useEffect(() => {    
          
	// },[])
  console.log("locala storage data" ,JSON.parse(localStorage.getItem("Items")))

  return (
    <div>
      checking cart
    </div>
    // <div>
    //   <Navbar />
    //   {/* <!--  PAGE HEADER --> */}
    // <section class="py-5 sm:py-7 bg-blue-100">
    //   <div class="container max-w-screen-xl mx-auto px-4">
    //     {/* <!-- breadcrumbs start --> */}
    //     <h2 class="text-3xl font-semibold mb-2">Shopping cart</h2>
    //   </div>
    //   {/* <!-- /.container --> */}
    // </section>
    // {/* <!--  PAGE HEADER .//END  --> */}

    //   <section class="py-10">
    //     <div class="container max-w-screen-xl mx-auto px-4">
    //       <div class="flex flex-col md:flex-row gap-4">
    //         <main class="md:w-3/4">
    //           <article class="border border-gray-200 bg-white shadow-sm rounded mb-5 p-3 lg:p-5">
    //             {/* item-cart  */}
    //             {
    //                 totalItems.map((item , index) => {
    //                     return (
    //                         <div class="flex flex-wrap lg:flex-row gap-5 mb-4">
    //                         <div class="w-full lg:w-2/5 xl:w-2/4">
    //                           <figure class="flex leading-5">
    //                             <div>
    //                               <div class="block w-16 h-16 rounded border border-gray-200 overflow-hidden">
    //                                 <img src={item.image} alt="Title" />
    //                               </div>
    //                             </div>
    //                             <figcaption class="ml-3">
    //                               <p>
    //                                 <a href="#" class="hover:text-blue-600">
    //                                  {item.title}
    //                                 </a>
    //                               </p>
    //                               <p class="mt-1 text-gray-400">
    //                                 Color: Yellow, Type: Jeans
    //                               </p>
    //                             </figcaption>
    //                           </figure>
    //                         </div>
    //                         <div class="">
    //                           {/* selection  */}
    //                           <div class="w-24 relative">
    //                             <select class="block appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full">
    //                               <option>1</option>
    //                               <option>2</option>
    //                               <option>3</option>
    //                             </select>
    //                             <i class="absolute inset-y-0 right-0 p-2 text-gray-400">
    //                               <svg
    //                                 width="22"
    //                                 height="22"
    //                                 class="fill-current"
    //                                 viewBox="0 0 20 20"
    //                               >
    //                                 <path d="M7 10l5 5 5-5H7z"></path>
    //                               </svg>
    //                             </i>
    //                           </div>
    //                           {/* selection .//end  */}
    //                         </div>
    //                         <div>
    //                           <div class="leading-5">
    //                             <p class="font-semibold not-italic">${item.price}</p>
    //                             <small class="text-gray-400"> $ {item.price * 3} / per item </small>
    //                           </div>
    //                         </div>
    //                         <div class="flex-auto">
    //                           <div class="float-right">
    //                           <a
    //                             class="px-2 py-1.5 mx-3.5 my-1 inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
    //                             href="#"
    //                            >
    //                                 <HeartOutlined style={{ fontSize: "22px" }} />
    //                             </a>

    //                             {/* <a
    //                               href="#"
    //                               class="px-3 py-2 inline-block text-blue-600 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200"
    //                             >
    //                               <i class="fa fa-heart"></i>
    //                             </a> */}
    //                             <a
    //                               class="px-4 py-2 inline-block text-red-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100"
    //                               href="#"
    //                             >
    //                               Remove
    //                             </a>
    //                           </div>
    //                         </div>
    //                       </div>
    //                     )
    //                 })
    //             }
               
    //             {/* item-cart end//  */}

    //             <hr class="my-4" />

    //             <h6 class="font-bold">Free Delivery within 1-2 weeks</h6>
    //             <p class="text-gray-400">
    //               Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
    //               do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    //               Ut enim ad minim veniam, quis nostrud exercitation ullamco
    //               laboris nisi ut aliquip
    //             </p>
    //           </article>
    //           {/* <!-- card end.// --> */}
    //         </main>
    //         <aside class="md:w-1/4">
    //           <article class="border border-gray-200 bg-white shadow-sm rounded mb-5 p-3 lg:p-5">
    //             <ul class="mb-5">
    //               <li class="flex justify-between text-gray-600 mb-1">
    //                 <span>Total price:</span>
    //                 <span>$245.97</span>
    //               </li>
    //               <li class="flex justify-between text-gray-600 mb-1">
    //                 <span>Discount:</span>
    //                 <span class="text-green-500">- $60.00</span>
    //               </li>
    //               <li class="flex justify-between text-gray-600 mb-1">
    //                 <span>TAX:</span>
    //                 <span>$14.00</span>
    //               </li>
    //               <li class="text-lg font-bold border-t flex justify-between mt-3 pt-3">
    //                 <span>Total price:</span>
    //                 <span>$420.00</span>
    //               </li>
    //             </ul>

    //             <a
    //               class="px-4 py-3 mb-2 inline-block text-lg w-full text-center font-medium text-white bg-green-600 border border-transparent rounded-md hover:bg-green-700"
    //               href="#"
    //             >
    //               Checkout
    //             </a>

    //             <a
    //               class="px-4 py-3 inline-block text-lg w-full text-center font-medium text-green-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100"
    //               href="#"
    //             >
    //               Back to shop
    //             </a>
    //           </article>
    //           {/* <!-- card end.// --> */}
    //         </aside>
    //         {/* <!-- col.// --> */}
    //       </div>
    //       {/* <!-- grid.// --> */}
    //     </div>
    //   </section>
    // </div>
  );
};
