import React, { useState, useRef } from "react";
import { Transition } from "@headlessui/react";
import Fade from "react-reveal";
import "../App.css";

const Banner = React.memo(function Banner() {
  const navRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [colorChange, setColorchange] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <>
      <header className="" id="home">
        <nav
          id="nav-wrap"
          className={`nav fixed block w-full z-50 px-7 sm:px-14 ${
            colorChange ? "navbar1 colorChange" : "1"
          } ${
            isOpen ? "navbar1 colorChange" : ""
          }`}
        >
          <div
            className={`max-w-full mx-auto  ${
              colorChange ? "" : "navbar-bottom-border"
            } ${
              isOpen ? "navbar-bottom-border" : ""
            }` }
          >
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="h-12"
                    src="https://cloudants.s3.amazonaws.com/assets/images/logoImg.png"
                    alt="CloudAnts"
                  />
                </div>
                <div className="hidden md:block absolute right-12">
                  <div
                    id="nav-container"
                    className="ml-10 flex items-baseline space-x-4"
                  >
                    <a
                      href="#home"
                      className={`deskNavLink selected-component text-white px-3 py-2 rounded-md text-sm text-base font-medium ${
                        active === "home" ? "text-white" : ""
                      }`}
                      onClick={() => setActive("home")}
                    >
                      Home
                    </a>
                    <a
                      className={`deskNavLink text-white px-3 py-2 rounded-md text-sm text-base font-medium ${
                        active === "about" ? "text-white" : ""
                      }`}
                      href="#about"
                      onClick={() => setActive("about")}
                    >
                      About Us
                    </a>

                    <a
                      href="#services"
                      className={`deskNavLink text-white px-3 py-2 rounded-md text-sm text-base font-medium ${
                        active === "services" ? "text-white" : ""
                      }`}
                      onClick={() => setActive("services")}
                    >
                      Services
                    </a>

                    <a
                      href="#testimonials"
                      className={`deskNavLink text-white px-3 py-2 rounded-md text-sm text-base font-medium ${
                        active === "testimonials" ? "text-white" : ""
                      }`}
                      onClick={() => setActive("testimonials")}
                    >
                      Testimonials
                    </a>

                    <a
                      href="#contact"
                      className={`deskNavLink text-white px-3 py-2 rounded-md text-sm text-base font-medium ${
                        active === "contactus" ? "text-white" : ""
                      }`}
                      onClick={() => setActive("contactus")}
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="bg-white-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-blue hover:bg-white-800 "
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isOpen ? (
                    <svg
                    onClick={() => setIsOpen(!isOpen)}
                      className="text-white h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                      onClick={() => setIsOpen(!isOpen)}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <svg
                    onClick={() => setIsOpen(!isOpen)}
                      className="text-white block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
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
            leaveTo="opacity-0 scale-95"
          >
            {(navRef) => (
              <div className="md:hidden" id="mobile-menu">
                <div id="mob-nav-container" ref={navRef} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  <a
                      href="#home"
                      className={`text-center block text-white px-3 py-2 rounded-md text-sm text-base font-medium ${
                        active === "home" ? "selected-component-mobile" : "text-white "
                      }`}
                      onClick={() => {console.log(active); setActive("home"); setIsOpen(!isOpen)}}
                    >
                      Home
                    </a>

                  <a
                    href="#about"
                    className={`text-center block text-white px-3 py-2 rounded-md text-sm text-base font-medium ${
                      active === "about" ? "selected-component-mobile" : "text-white "
                    }`} onClick={() => {setActive("about"); setIsOpen(!isOpen)}}
                  >
                    About
                  </a>

                  <a
                    href="#services"
                    className={`text-center block text-white px-3 py-2 rounded-md text-sm text-base font-medium ${
                      active === "services" ? "selected-component-mobile" : "text-white "
                    }`}
                    onClick={() => {setActive("services"); setIsOpen(!isOpen)}}
                  >
                    Services
                  </a>

                  <a
                    href="#testimonials"
                    className={`text-center block text-white px-3 py-2 rounded-md text-sm text-base font-medium ${
                      active === "testimonials" ? "selected-component-mobile" : "text-white "
                    }`}
                    onClick={() => {setActive("testimonials"); setIsOpen(!isOpen)}}
                  >
                    Testimonials
                  </a>

                  <a
                    href="#contact"
                    className={`text-center block text-white px-3 py-2 rounded-md text-sm text-base font-medium ${
                      active === "contactus" ? "selected-component-mobile" : "text-white "
                    }`}
                    onClick={() => {setActive("contactus"); setIsOpen(!isOpen)}}
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            )}
          </Transition>
        </nav>
       
        <div className="mb-12 flex relative max-w-full overflow-hidden items-center justify-center lg:justify-start justify-center h-screen">
        <div className="z-30">
          {/* <p className="absolute md:left-14 top-16 font-face-gm text-base text-white text-over-image">Together we can do better</p> */}
        </div>
          <div className="lg:mx-14 grid lg:grid-cols-5 relative z-30 2xl:text-4xl text-white text-over-image lg:max-w-full">
            <div className=" lg:col-span-4">
              <Fade bottom>
                <h2 className="font-face-gm text-base sm:text-lg md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-2 text-white">
                  Enable cloud today, process your future tomorrow
                </h2>
              </Fade>
              <Fade bottom duration={1200}>
                <p className="text-xs sm:text-sm md:text-base mt-2 p-1">
                  A mission to be efficient providers of a remarkable cloud
                  service. Our customers would trust us by enabling cloud in
                  their present in order to have an evolving future tomorrow.
                  Get yourself organized professionally and avail a cloud
                  experience that is worth a lifetime. Set your pace right today
                  for a brighter future. Some goals are harder to attain but not
                  if you are soaring into the clouds with CloudAnts.
                </p>
              </Fade>
            </div>
          </div>
          <img
            className="absolute z-10 w-auto min-w-full min-h-full max-w-none overlay"
            src="https://cloudants.s3.amazonaws.com/assets/videos/hero.gif"
            alt="loading..."
          />
        </div>
      </header>
    </>
  );
}, {});

export default Banner;
