import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-8 w-8"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                  alt="Workflow"
                />
              </div>
              {/* <div className="md:block"> */}
              <div className="flex">
                <li className="px-2 py-2 rounded-md text-lg font-medium">
                  <Link to="/">nikmaGus</Link>
                </li>
                {/* </div> */}
              </div>
            </div>
            {/* <div className="hidden md:flex"> */}
            <div className="">
              <ul className="hidden md:flex">
                <li className="px-3 py-2 text-sm font-medium">
                  <Link to="/" className="flex flex-row item-center">
                    {/* <FaHome className="fill-ciri ml-2 h-5 w-5" /> */}
                    <h1 className="text-ciri hover:text-purple">Home</h1>
                  </Link>
                </li>
                <li className="px-3 py-2 text-sm font-medium">
                  <Link to="/services" className="flex flex-row item-center">
                    {/* <FaHome className="fill-ciri ml-2 h-5 w-5" /> */}
                    <h1 className="text-ciri hover:text-purple">Services</h1>
                  </Link>
                </li>
                <li className="px-3 py-2 rounded-md text-sm font-medium">
                  <Link to="/portfolio">
                    {/* <FaHome className="fill-ciri ml-2 h-5 w-5" /> */}
                    <h1 className="text-ciri hover:text-purple">Portfolio</h1>
                  </Link>
                </li>
                <li className="px-3 py-2 rounded-md text-sm font-medium">
                  <Link to="/testimonials">
                    {/* <FaHome className="fill-ciri ml-2 h-5 w-5" /> */}
                    <h3 className="text-ciri hover:text-purple">
                      Testimonials
                    </h3>
                  </Link>
                </li>
                <li className="text-ciri px-3 py-2 rounded-md text-sm font-medium">
                  <Link to="/contact">
                    {/* <FaHome className="fill-ciri ml-2 h-5 w-5" /> */}
                    <h3 className="text-ciri hover:text-purple">Contacts</h3>
                  </Link>
                </li>
                <li className="px-3 py-2 rounded-md text-sm font-medium">
                  <Link to="/pricing">
                    {/* <FaHome className="fill-ciri ml-2 h-5 w-5" /> */}
                    <h3 className="text-ciri hover:text-purple">Pricing</h3>
                  </Link>
                </li>
              </ul>
            </div>
            {/* </div> */}
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-ciri"
                aria-controls="mobile-menu"
                aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                {!isOpen ? <AiOutlineMenu /> : <AiOutlineClose />}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95">
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="w-28 place-items-end border-4 sm:px-3">
                <li
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  className="px-3 py-2 rounded-md text-base font-medium">
                  <Link to="/">Home</Link>
                </li>
                <li
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  className="px-3 py-2 rounded-md text-sm font-medium">
                  <Link to="/services">Services</Link>
                </li>
                <li
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  className="text-ciri px-3 py-2 rounded-md text-sm font-medium">
                  <Link to="/portfolio">Portfolio</Link>
                </li>
                <li
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  className="px-3 py-2 rounded-md text-sm font-medium">
                  <Link to="/testimonials">Testimonials</Link>
                </li>
                <li
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  className="px-3 py-2 rounded-md text-sm font-medium">
                  <Link to="/contact">Contacts</Link>
                </li>
                <li
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  className="hover:text-ciri px-3 py-2 rounded-md text-sm font-medium">
                  <Link to="/pricing">Pricing</Link>
                </li>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Nav;
