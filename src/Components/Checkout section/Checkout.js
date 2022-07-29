import React, { useEffect, useState } from "react";
import { Navbar } from "../Navbar/Navbar";
import { Form, FormikProvider, useFormik, Field } from "formik";
import * as Yup from "yup";

export const Checkout = () => {
  const [cartData, setCartData] = useState(
    JSON.parse(localStorage.getItem("Items"))
  );
  const noData = "Cart is empty";
  const itemsPrice = cartData
    .reduce((sum, { price, quantity }) => {
      return sum + price * quantity;
    }, 0)
    .toFixed(2);
  
  const onSubmit = (val) => {
   console.log("printing val of onSubmit ", val);
  }
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  const initialValues = {
    firstName : '',
    lastName: '',
    email: '',
    phoneno : '',
    address : '',
    house : '',
    building : '',
    city: '',
    zip: '',
    selfpickup : '',
    shipping : '',
    postoffice:'',
  }
  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
    .min(3, "First Name must be at least 3 characters")
    .max(20, "First Name must be less than 20 characters")
    .required("First Name is required"),
    lastName: Yup.string()
    .min(3, "Last Name must be at least 3 characters")
    .max(20, "Last Name must be less than 20 characters")
    .required("Last Name is required"),
    email: Yup.string().email('Invalid email').required("Email is required"),
    phoneno:   Yup.string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required("Phone number is required")
    .min(10, "Phone number must be at least 10 characters"),
    address: Yup.string().required("adress is required"),
    house : Yup.string().required("house is required"),
    building : Yup.string().required("building is required"),
    zip: Yup.string().required("zip is required"),
  })

  const formik = useFormik({
    initialValues,
    validationSchema,
    // enableReinitialize: true,
    onSubmit,
  });
  const { touched, errors, handleSubmit, values, setFieldValue } = formik;

  return (
    <div>
      <Navbar />

      <section class="py-10 bg-gray-50">
        <div class="container max-w-screen-xl mx-auto px-4">
          <div class="flex flex-col md:flex-row gap-4 lg:gap-8">
            <main class="md:w-2/3">
              <article class="border border-gray-200 bg-white shadow-sm rounded p-4 lg:p-6 mb-5">
                <div class="flex flex-col lg:flex-row lg:justify-between lg:items-center">
                  <div class="mb-4 lg:mb-0">
                    <h3 class="text-xl font-bold text-left">
                      Have an account?
                    </h3>
                    <p class="text-gray-600">
                      By creating account you will get more benefits
                    </p>
                  </div>
                  <div class="">
                    <a
                      class="px-4 py-2 inline-block text-blue-600 bg-white shadow-sm border
                     border-gray-200 rounded-md hover:bg-gray-100 hover:text-blue-600 mr-2"
                      href="#"
                    >
                      Sign in
                    </a>

                    <a
                      class="px-4 py-2 inline-block text-white bg-blue-600 shadow-sm border 
                    border-transparent rounded-md hover:bg-blue-700"
                      href="#"
                    >
                      Create account
                    </a>
                  </div>
                </div>
              </article>
              {/* <!-- card.// --> */}
              <FormikProvider value={formik}>
                <Form
                  autoComplete="off"
                  noValidate
                  onSubmit={handleSubmit}
                >
                  <article class="border border-gray-200 bg-white shadow-sm rounded p-4 lg:p-6 mb-5">
                    <h2 class="text-xl font-semibold mb-5">Guest checkout</h2>

                    <div class="grid grid-cols-2 gap-x-3">
                      <div class="mb-4">
                        <label class="block mb-1"> First name </label>
                        <Field
                          class="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                          type="text"
                          name="firstName"
                          placeholder="Your First Name"
                        />
                        {touched.firstName && errors.firstName ? (
                            <div>{errors.firstName}</div>
                        ):null}
                      </div>

                      <div class="mb-4">
                        <label class="block mb-1"> Last name </label>
                        <Field 
                          class="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                          type="text"
                          name="lastName"
                          placeholder="Your Last Name"
                        />
                         {touched.lastName && errors.lastName ? (
                            <div>{errors.lastName}</div>
                        ):null}
                      </div>
                    </div>

                    <div class="grid lg:grid-cols-2 gap-x-3">
                      <div class="mb-4">
                        <label class="block mb-1"> Phone </label>
                        <div class="flex w-full">
                          <Field 
                            class="appearance-none w-24 border border-gray-200 bg-gray-100 rounded-tl-md rounded-bl-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400"
                            type="text"
                            placeholder="Code"
                            value="+91"
                          />
                          <Field
                            class="appearance-none flex-1 border border-gray-200 bg-gray-100 rounded-tr-md rounded-br-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400"
                            type="text"
                            name="phoneno"
                            placeholder="Your Phone No"
                          />
                           {touched.phoneno && errors.phoneno ? (
                            <div>{errors.phoneno}</div>
                        ):null}
                        </div>
                      </div>

                      <div class="mb-4">
                        <label class="block mb-1"> Email </label>
                        <Field
                          class="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                          type="email"
                          placeholder="Your Email"
                          name="email"
                        />
                         {touched.email && errors.email ? (
                            <div>{errors.email}</div>
                        ):null}
                      </div>
                    </div>

                    <label class="flex items-center w-max my-4">
                      <Field
                        checked=""
                        name="checkbox"
                        type="checkbox"
                        class="h-4 w-4"
                      />
                      <span class="ml-2 inline-block text-gray-500">
                        I agree with Terms and Conditions
                      </span>
                    </label>

                    <hr class="my-4" />

                    <h2 class="text-xl font-semibold mb-5">
                      Shipping information
                    </h2>

                    {/* <!-- radio selection --> */}
                    <div class="grid sm:grid-cols-3 gap-3 mb-6">
                      <label class="flex p-3 border border-gray-200 rounded-md bg-gray-50 hover:border-blue-400 hover:bg-blue-50 cursor-pointer">
                        <span>
                          <Field
                            name="shipping"
                            type="radio"
                            class="h-4 w-4 mt-1"
                            value="Express Delivery"
                          />
                           {touched.shipping && errors.shipping ? (
                            <div>{errors.shipping}</div>
                        ):null}
                        </span>
                        <p class="ml-2">
                          <span>Express delivery</span>
                          <small class="block text-sm text-gray-400">
                            3-4 days via Fedex
                          </small>
                        </p>
                      </label>
                      <label class="flex p-3 border border-gray-200 rounded-md bg-gray-50 hover:border-blue-400 hover:bg-blue-50 cursor-pointer">
                        <span>
                          <Field
                            name="postoffice"
                            type="radio"
                            class="h-4 w-4 mt-1"
                            value="Post Office"
                          />
                           {touched.postoffice && errors.postoffice ? (
                            <div>{errors.postoffice}</div>
                        ):null}
                        </span>
                        <p class="ml-2">
                          <span>Post office</span>
                          <small class="block text-sm text-gray-400">
                            20-30 days via post
                          </small>
                        </p>
                      </label>
                      <label class="flex p-3 border border-gray-200 rounded-md bg-gray-50 hover:border-blue-400 hover:bg-blue-50 cursor-pointer">
                        <span>
                          <Field
                            name="selfpickup"
                            type="radio"
                            class="h-4 w-4 mt-1"
                            value="Self Pickup"
                          />
                           {touched.selfpickup && errors.selfpickup ? (
                            <div>{errors.selfpickup}</div>
                        ):null}
                        </span>
                        <p class="ml-2">
                          <span>Self pick-up</span>
                          <small class="block text-sm text-gray-400">
                            Nearest location
                          </small>
                        </p>
                      </label>
                    </div>
                    {/* <!-- radio selection .//end --> */}

                    <div class="grid md:grid-cols-3 gap-x-3">
                      <div class="mb-4 md:col-span-2">
                        <label class="block mb-1"> Address* </label>
                        <Field
                          class="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                          type="text"
                          placeholder="Your Address"
                          name="address"
                        />
                         {touched.address && errors.address ? (
                            <div>{errors.address}</div>
                        ):null}
                      </div>

                      <div class="mb-4 md:col-span-1">
                        <label class="block mb-1"> City </label>
                        <Field
                          class="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                          type="text"
                          placeholder="Your City"
                          name="city"
                        />
                          {touched.city && errors.city ? (
                            <div>{errors.city}</div>
                        ):null}
                      </div>
                    </div>

                    <div class="grid md:grid-cols-3 gap-x-3">
                      <div class="mb-4 md:col-span-1">
                        <label class="block mb-1"> House </label>
                        <Field
                          class="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                          type="text"
                          placeholder="your House No"
                          name="house"
                        />
                          {touched.house && errors.house ? (
                            <div>{errors.house}</div>
                        ):null}
                      </div>

                      <div class="mb-4 md:col-span-1">
                        <label class="block mb-1"> Building </label>
                        <Field
                          class="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                          type="text"
                          placeholder="Your Building No"
                          name="building"
                        />
                          {touched.building && errors.building ? (
                            <div>{errors.building}</div>
                        ):null}
                      </div>

                      <div class="mb-4 md:col-span-1">
                        <label class="block mb-1"> ZIP code </label>
                        <Field
                          class="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                          type="text"
                          placeholder="Your ZIP code"
                          name="zip"
                        />
                         {touched.zip && errors.zip ? (
                            <div>{errors.zip}</div>
                        ):null}
                      </div>
                    </div>

                    <div class="mb-4">
                      <label class="block mb-1"> Other info </label>
                      <textarea
                        placeholder="Type your wishes"
                        class="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                      ></textarea>
                    </div>

                    <label class="flex items-center w-max my-4">
                      <input
                        checked=""
                        name=""
                        type="checkbox"
                        class="h-4 w-4"
                      />
                      <span class="ml-2 inline-block text-gray-500">
                        Save my information for future purchase
                      </span>
                    </label>

                    <div class="flex justify-end space-x-2">
                      <button 
                        class="px-5 py-2 inline-block text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:text-blue-600"
                        href="/cart"
                      >
                        Back
                      </button >
                      <button 
                        class="px-5 py-2 inline-block text-white bg-green-600 border border-transparent rounded-md hover:bg-green-700"
                        // type="submit"
                        htmlType="submit"
                      >
                        Continue
                      </button >
                    </div>
                  </article>
                </Form>
              </FormikProvider>
              {/* <!-- card.// --> */}
            </main>
            <aside class="md:w-1/3">
              <article
                class="text-gray-600 max-w-350 "
                // style={{maxWidth : 350}}
              >
                <h2 class="text-lg font-semibold mb-3">Summary</h2>
                <ul>
                  <li class="flex justify-between mb-1">
                    <span>Total price:</span>
                    <span>${itemsPrice}</span>
                  </li>
                  <li class="flex justify-between mb-1">
                    <span>Discount:</span>
                    <span class="text-green-500">- $60.00</span>
                  </li>
                  <li class="flex justify-between mb-1">
                    <span>TAX:</span>
                    <span>$14.00</span>
                  </li>
                  <li class="border-t flex justify-between mt-3 pt-3">
                    <span>Total price:</span>
                    <span class="text-gray-900 font-bold">
                      ${(itemsPrice - 60 + 14).toFixed(2)}
                    </span>
                  </li>
                </ul>

                <hr class="my-4" />

                <div class="flex gap-3">
                  <input
                    class="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                    type="text"
                    placeholder="Coupon code"
                  />
                  <button
                    type="button"
                    class="px-4 py-2 inline-block text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:text-blue-600"
                  >
                    Apply
                  </button>
                </div>

                <hr class="my-4" />

                <h2 class="text-lg font-semibold mb-3">Items in cart</h2>
                {cartData === null ? (
                  <div class="flex flex-wrap lg:flex-row gap-5 mb-4">
                    {noData}
                  </div>
                ) : (
                  cartData.map((item, index) => {
                    return (
                      <figure
                        class="flex items-center mb-4 leading-5"
                        key={index}
                      >
                        <div>
                          <div
                            class="block relative w-30 h-20 rounded p-1 border border-gray-200
                          mb-6"
                          >
                            <img
                              //   width="70"
                              //   height="70"
                              className="w-36 h-20 mb-3"
                              src={item.image}
                              alt="Title"
                            />
                            <span class="absolute -top-2 -right-2 w-6 h-6 text-sm text-center flex items-center justify-center text-white bg-gray-400 rounded-full">
                              {item.quantity}
                            </span>
                          </div>
                        </div>
                        <figcaption class="ml-3">
                          <p>
                            {item.title} <br />
                          </p>
                          <p class="mt-1 text-gray-400">
                            Total: {(item.quantity * item.price).toFixed(2)}
                          </p>
                        </figcaption>
                      </figure>
                    );
                  })
                )}
              </article>
            </aside>
            {/* <!-- col.// --> */}
          </div>
          {/* <!-- grid.// --> */}
        </div>
        {/* <!-- container.//  */}
      </section>
    </div>
  );
};
