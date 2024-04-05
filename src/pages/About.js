import React from "react";
import Roll from "react-reveal/Roll";

const About = React.memo(function About() {
  return (
    <>
      <section id="about" className="pb-12">
        {/* first row */}
        <div className="max-w-md mx-auto px-8 sm:px-14 lg:py-6 lg:max-w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* First Column */}
            <div className="xl:max-w-xl m-auto">
              <div className="mt-4 xs:mt-12 sm:mt-6 md:mt-4">
                <a className="inline-block px-3 py-1 bg-gray-100 text-readMore rounded sm:text-base">
                  About Us
                </a>
                <div>
                  <h1 className="font-face-gm mt-6 font-bold text-about text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
                    A little About Us
                  </h1>
                  <p className="mt-2 sm:mt-6 text-para text-xs sm:text-sm md:text-base text-justify">
                    Our team has recently come up with an exceptional cloud
                    service for our valuable customers. Digging deep into the
                    minds of the people we have decided to bring one of the most
                    effective solutions to them. Cloundants aims to provide its
                    customers with top notch cloud migration service, systematic
                    DevOps and IT managed services.
                  </p>
                </div>
              </div>
            </div>
            {/* Second column */}
            <div className="xl:max-w-xl m-auto ">
              <Roll right>
                <img
                  className="inset-0 mx-auto my-auto mt-10 object-center object-contain"
                  src="https://cloudants.s3.amazonaws.com/assets/images/about.svg"
                  alt="About Us"
                />
              </Roll>
            </div>
          </div>
        </div>
        {/* 2nd row */}
        <div className="max-w-md mx-auto px-8 sm:px-14 lg:py-6 lg:max-w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="xl:max-w-xl m-auto lg:block hidden sm:hidden md:hidden">
            <Roll left>
              <img
                className="inset-0 mx-auto my-auto xs:mt-10 md:mt-5 object-center object-contain"
                src="https://cloudants.s3.amazonaws.com/assets/images/aboutUs-2.svg"
                alt="About Us"
              />
            </Roll>
          </div>
          <div>
            <div className="xl:max-w-xl m-auto">
              <div className="mt-4 sm:mt-6">
                <h1 className="mt-16 font-face-gm mt-6 font-bold text-about text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
                  We Aspire to Target the Needs and Requirements
                </h1>
                <p className="mt-2 sm:mt-6 text-para text-xs sm:text-sm md:text-base text-justify">
                  We will be more than your expectations, we aspire to target
                  the needs and requirements of our customers to lay out long
                  term effective  solutions and cloud services. The world is
                  digitally growing at a faster pace than we know but here we
                  are all prepared to give you an ultimate experience where you
                  will set your cloud's present and it's future. A digital
                  experience that will take you a long way.
                </p>
              </div>
            </div>
          </div>
          <div className="xl:max-w-xl m-auto md:block lg:hidden hidden sm:hidden">
            <Roll left>
              <img
                className="inset-0 mx-auto my-auto xs:mt-10 lg:mt-5 object-center object-contain"
                src="https://cloudants.s3.amazonaws.com/assets/images/aboutUs-2.svg"
                alt="About Us"
              />
            </Roll>
          </div>
          <div className="xl:max-w-xl m-auto md:block md:hidden block xs:mt-10">
            <Roll left>
              <img
                className="inset-0 mx-auto my-auto mt-10 lg:mt-5 object-center object-contain"
                src="https://cloudants.s3.amazonaws.com/assets/images/aboutUs-2.svg"
                alt="About Us"
              />
            </Roll>
          </div>
        </div>
        </div>
      </section>
    </>
  );
}, {});

export default About;
