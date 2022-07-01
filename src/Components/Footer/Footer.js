import React from "react";

export const Footer = () => {
  return (
    <div>
      <footer class="bg-blue-600">
        {/* section footer top  */}
        <section class="bg-blue-700 py-3 text-white">
        <div class="flex flex-wrap">
              <aside class="w-full md:w-1/3 lg:w-1/4 mb-5">
                <img
                  src="images/logo-white.png"
                  height="38"
                  alt="Company name"
                />
                <p class="my-4">
                  Company name. <br /> © 2018- 2021 Templatemount. <br />
                  All rights reserved.
                </p>
              </aside>  
              </div>
          <div class="container max-w-screen-xl mx-auto px-4">
            <div class="lg:flex justify-between">
              <div class="mb-3">
                <img
                  src="images/misc/payments.png"
                  height="24"
                  class="h-6"
                  alt="Payment methods"
                />
              </div>
              {/* col .//  */}
              <div class="space-x-6">
                <nav class="text-sm space-x-4">
                  <a href="#" class="opacity-160 hover:opacity-100">
                    Support
                  </a>
                  <a href="#" class="opacity-160 hover:opacity-100">
                    Privacy &amp; Cookies
                  </a>
                  <a href="#" class="opacity-160 hover:opacity-100">
                    Accessibility
                  </a>
                </nav>
              </div>
              {/* col .//  */}
            </div>
            {/* grid .//  */}
          </div>
          {/* container .//  */}
        </section>
        {/* section footer bottom  end  */}
      </footer>
    </div>
  );
};
