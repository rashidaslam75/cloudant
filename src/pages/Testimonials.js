import React from "react";
// import testimonialImg from '../assets/images/testimonial.svg';
// import soon from '../assets/images/soon.svg';

import Carousel from "react-elastic-carousel";
import "../App.css";
import Rating from "@material-ui/lab/Rating";

const Testimonials = React.memo(function Testimonials() {
  return (
    <>
      <section id="testimonials">
        <div className="relative flex w-full h-full overflow-hidden">
          <div className="relative z-30 2xl:text-4xl text-white w-full lg:max-w-full px-7 sm:px-14">
            <div className="mb-5 pt-10 text-center">
              <a className="xs:mt-5 md:mt-10 mx-auto inline-block px-3 py-1 bg-readMore text-whte rounded text-sm sm:text-base">
                Testimonials
              </a>
              <h1 className="mt-8 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5x font-face-gm text-about">
                What our clients say
              </h1>
              {/* <h1 className='mt-8 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5x font-face-gm text-about'>
               Testimonials
              </h1> */}
              {/* <p className='mt-4 text-xs sm:text-sm md:text-base text-para'>
                loreum ipsum loreum ipsum loreum ipsum loreum ipsum loreum ipsum
              </p> */}
              {/* <img className="xs:mt-5 mx-auto lg:my-24 sm:my-12 xs:h-16 sm:h-32 lg:h-48" src="../assets/images/soon.svg"/> */}
            </div>
            <div className="lg:block hidden sm:hidden md:hidden">
              <Carousel
                infinite={true}
                itemPadding={[10, 20, 10, 0]}
                autoPlaySpeed={1500}
                itemsToShow={3}
                enableAutoPlay={true}
                showArrows={false}
              >
                <div className="text-center shadow-lg bg-white h-25 px-10 py-12">
                  <div className="h-96">
                  <div className="flex space-x-2">
                      <div className="mx-auto w-16 h-16">
                        <img
                          className="rounded-full border border-gray-100 shadow-sm"
                          src="https://cloudants.s3.amazonaws.com/assets/images/pp.jpg"
                          alt="user"
                        />
                      </div>
                    </div>
                    <h2 className="text-sm sm:text-base md:text-lg lg:text-xl  text-black font-face-gm">
                    LaMae Weber (CEO)
                    </h2>
                    <p className="text-para text-sm"> Los Angeles, USA</p>
                    <Rating
                      name="read-only"
                      value={4.5}
                      precision={0.5}
                      readOnly
                    />
                    <p className="mt-4 text-xs sm:text-sm md:text-base font-weight-200 text-para text-center">
                      When our own skills did not manage to get where we wanted,
                      CloudAnts took care of the rest. The expertize, customer
                      service and "follow up" we experienced from CloudAnts were
                      simply flawless. Highly recommended for App modernization,
                      optimization and moving to Azure cloud
                    </p>
                  </div>
                </div>
                <div className="text-center shadow-lg bg-white px-10 py-12">
                  <div className="h-96">
                    <div className="flex space-x-2">
                      <div className="mx-auto w-16 h-16">
                        <img
                          className="rounded-full border border-gray-100 shadow-sm"
                          src="https://cloudants.s3.amazonaws.com/assets/images/pp.jpg"
                          alt="user"
                        />
                      </div>
                    </div>
                    <h2 className="text-sm sm:text-base md:text-lg lg:text-xl text-black font-face-gm">
                    Government Institute of Pakistan
                    </h2>
                    <p className="text-para text-sm">
                      {" "}
                      Confidential, Government institute, Pakistan
                    </p>
                    <Rating
                      name="read-only"
                      value={5}
                      precision={0.5}
                      readOnly
                    />

                    <p className="mt-4 text-xs sm:text-sm md:text-base font-weight-200 text-para text-center">
                      Under tight deadlines and with high expectations,
                      CloudAnts was a pleasure to partner with, on a high
                      profile Governmental project. Professional, conscientious,
                      and thoroughly competent - I wouldn't hesitate in
                      recommending them to other for end-to-end process.
                      Including development, deployment, infrastructure, and
                      support.
                    </p>
                  </div>
                </div>
                <div className="text-center shadow-lg bg-white px-10 py-12">
                  <div className="h-96">
                    <div className="flex space-x-2">
                      <div className="mx-auto w-16 h-16">
                        <img
                          className="rounded-full border border-gray-100 shadow-sm"
                          src="https://cloudants.s3.amazonaws.com/assets/images/testimonial.jpg"
                          alt="user"
                        />
                      </div>
                    </div>
                    <h2 className="text-sm sm:text-base md:text-lg lg:text-xl text-black font-face-gm">
                    Fazian Chughtai (CEO)
                    </h2>
                    <p className="text-para text-sm"> Lahore, Pakistan</p>
                    <Rating
                      name="read-only"
                      value={4}
                      precision={0.5}
                      readOnly
                    />
                    <p className=" mt-4 text-xs sm:text-sm md:text-base font-weight-200 text-para text-center">
                      I am really impressed by the quality of services I
                      received from CloudAnts. You were right on schedule,
                      charged reasonable prices, were professional and courteous
                      in dealings, and delivered items well before time. I have
                      got a good e-commerce site for my products. My revenue has
                      increased because of CloudAnts and I will definitely use
                      your services again.
                    </p>
                  </div>
                </div>
                {/* <div className="text-center shadow-lg bg-white px-10 py-12">
                  <div className="h-96">
                    <div className="flex space-x-2">
                      <div className="mx-auto w-16 h-16">
                        <img
                          className="rounded-full border border-gray-100 shadow-sm"
                          src="../assets/images/pp.jpg"
                          alt="user"
                        />
                      </div>
                    </div>
                    <h2 className="text-sm sm:text-base md:text-lg lg:text-xl text-black font-face-gm">
                      Raymon Glario
                    </h2>
                    <p className="text-para text-sm"> Sydney, Australia</p>
                    <Rating
                      name="read-only"
                      value={4}
                      precision={0.5}
                      readOnly
                    />
                    <p className="flex-1 mt-4 text-xs sm:text-sm md:text-base font-weight-200 text-para text-center">
                      We are very happy with CloudAnts very serious and
                      consistent in their work. Team was always there for us all
                      the time in whole on-prem to cloud migration process. This
                      is a company I can recommend to anyone for cloud migration
                      and DevOps
                    </p>
                  </div>
                </div>
                <div className=" text-center shadow-lg bg-white px-10 py-12">
                  <div className="h-96">
                    <div className="flex space-x-2">
                      <div className="mx-auto w-16 h-16">
                        <img
                          className="rounded-full border border-gray-100 shadow-sm"
                          src="../assets/images/pp.jpg"
                          alt="user"
                        />
                      </div>
                    </div>
                    <h2 className="text-sm sm:text-base md:text-lg lg:text-xl text-black font-face-gm">
                      Raymon Glario
                    </h2>
                    <p className="text-para text-sm"> Sydney, Australia</p>
                    <Rating
                      name="read-only"
                      value={4.5}
                      precision={0.5}
                      readOnly
                    />
                    <p className=" mt-4 text-xs sm:text-sm md:text-base font-weight-200 text-para text-center">
                      I wanted to take a moment to thank you for the services
                      your team has provided. Your team has been a pleasure to
                      work with, professional and timely. The only delay in work
                      that we have experienced has been due to our own lack of
                      organization managing our projects, not yours. Job well
                      done and I hope we can continue to grow together.
                    </p>
                  </div>
                </div> */}
              </Carousel>
            </div>

            <div className="md:block lg:hidden hidden sm:hidden ">
              <Carousel
                infinite={true}
                itemPadding={[10, 20, 10, 0]}
                autoPlaySpeed={1500}
                itemsToShow={2}
                enableAutoPlay={true}
                showArrows={false}
              >
                <div className="text-center shadow-lg bg-white px-10 py-12">
                  <div className="">
                    <div className="flex space-x-2">
                      <div className="mx-auto w-16 h-14">
                        <img
                          className="rounded-full border border-gray-100 shadow-sm"
                          src="https://cloudants.s3.amazonaws.com/assets/images/pp.jpg"
                          alt="user"
                        />
                      </div>
                    </div>
                    <h2 className="text-sm sm:text-base md:text-lg lg:text-xl text-black font-face-gm">
                    LaMae Weber (CEO)
                    </h2>
                    <p className="text-para text-sm"> Los Angeles, USA</p>
                    <Rating
                      name="read-only"
                      value={4.5}
                      precision={0.5}
                      readOnly
                    />
                    <p className="mt-4 text-xs sm:text-sm md:text-base font-weight-200 text-para text-center">
                      When our own skills did not manage to get where we wanted,
                      CloudAnts took care of the rest. The expertize, customer
                      service and "follow up" we experienced from CloudAnts were
                      simply flawless. Highly recommended for App modernization,
                      optimization and moving to Azure cloud
                    </p>
                  </div>
                </div>
                <div className="text-center shadow-lg bg-white px-10 py-12">
                  <div className="">
                    <div className="flex space-x-2">
                      <div className="mx-auto w-16 h-16">
                        <img
                          className="rounded-full border border-gray-100 shadow-sm"
                          src="https://cloudants.s3.amazonaws.com/assets/images/pp.jpg"
                          alt="user"
                        />
                      </div>
                    </div>
                    <h2 className="text-sm sm:text-base md:text-lg lg:text-xl text-black font-face-gm">
                    Government Institute of Pakistan
                    </h2>
                    <p className="text-para text-sm">
                      {" "}
                      Confidential, Government institute, Pakistan
                    </p>
                    <Rating
                      name="read-only"
                      value={5}
                      precision={0.5}
                      readOnly
                    />

                    <p className="mt-4 text-xs sm:text-sm md:text-base font-weight-200 text-para text-center">
                      Under tight deadlines and with high expectations,
                      CloudAnts was a pleasure to partner with, on a high
                      profile Governmental project. Professional, conscientious,
                      and thoroughly competent - I wouldn't hesitate in
                      recommending them to other for end-to-end process.
                      Including development, deployment, infrastructure, and
                      support.
                    </p>
                  </div>
                </div>
                <div className="text-center shadow-lg bg-white px-10 py-12">
                  <div className="">
                    <div className="flex space-x-2">
                      <div className="mx-auto w-16 h-16">
                        <img
                          className="rounded-full border border-gray-100 shadow-sm"
                          src="https://cloudants.s3.amazonaws.com/assets/images/testimonial.jpg"
                          alt="user"
                        />
                      </div>
                    </div>
                    <h2 className="text-sm sm:text-base md:text-lg lg:text-xl text-black font-face-gm">
                    Fazian Chughtai (CEO)
                    </h2>
                    <p className="text-para text-sm"> Lahore, Pakistan</p>
                    <Rating
                      name="read-only"
                      value={4}
                      precision={0.5}
                      readOnly
                    />
                    <p className="mt-4 text-xs sm:text-sm md:text-base font-weight-200 text-para text-center">
                      I am really impressed by the quality of services I
                      received from CloudAnts. You were right on schedule,
                      charged reasonable prices, were professional and courteous
                      in dealings, and delivered items well before time. I have
                      got a good e-commerce site for my products. My revenue has
                      increased because of CloudAnts and I will definitely use
                      your services again.
                    </p>
                  </div>
                </div>
                {/* <div className="text-center shadow-lg bg-white px-10 py-12">
                  <div className="">
                    <div className="flex space-x-2">
                      <div className="mx-auto w-16 h-16">
                        <img
                          className="rounded-full border border-gray-100 shadow-sm"
                          src="../assets/images/pp.jpg"
                          alt="user"
                        />
                      </div>
                    </div>
                    <h2 className="text-sm sm:text-base md:text-lg lg:text-xl text-black font-face-gm">
                      Raymon Glario
                    </h2>
                    <p className="text-para text-sm"> Sydney, Australia</p>
                    <Rating
                      name="read-only"
                      value={4}
                      precision={0.5}
                      readOnly
                    />
                    <p className="mt-4 text-xs sm:text-sm md:text-base font-weight-200 text-para text-center">
                      We are very happy with CloudAnts very serious and
                      consistent in their work. Team was always there for us all
                      the time in whole on-prem to cloud migration process. This
                      is a company I can recommend to anyone for cloud migration
                      and DevOps
                    </p>
                  </div>
                </div>
                <div className=" text-center shadow-lg bg-white px-10 py-12">
                  <div className="">
                    <div className="flex space-x-2">
                      <div className="mx-auto w-16 h-16">
                        <img
                          className="rounded-full border border-gray-100 shadow-sm"
                          src="../assets/images/pp.jpg"
                          alt="user"
                        />
                      </div>
                    </div>
                    <h2 className="text-sm sm:text-base md:text-lg lg:text-xl text-black font-face-gm">
                      Raymon Glario
                    </h2>
                    <p className="text-para text-sm"> Sydney, Australia</p>
                    <Rating
                      name="read-only"
                      value={4.5}
                      precision={0.5}
                      readOnly
                    />
                    <p className="mt-4 text-xs sm:text-sm md:text-base font-weight-200 text-para text-center">
                      I wanted to take a moment to thank you for the services
                      your team has provided. Your team has been a pleasure to
                      work with, professional and timely. The only delay in work
                      that we have experienced has been due to our own lack of
                      organization managing our projects, not yours. Job well
                      done and I hope we can continue to grow together.
                    </p>
                  </div>
                </div> */}
              </Carousel>
            </div>

            <div className="md:hidden block">
              <Carousel
                infinite={true}
                itemPadding={[10, 20, 10, 0]}
                autoPlaySpeed={1500}
                itemsToShow={1}
                enableAutoPlay={true}
                showArrows={false}
              >
                <div className="text-center shadow-lg bg-white px-10 py-12">
                  <div className="h-72">
                    <div className="flex space-x-2">
                      <div className="mx-auto w-16 h-16">
                        <img
                          className="rounded-full border border-gray-100 shadow-sm"
                          src="https://cloudants.s3.amazonaws.com/assets/images/pp.jpg"
                          alt="user"
                        />
                      </div>
                    </div>
                    <h2 className="text-sm sm:text-base md:text-lg lg:text-xl  text-black font-face-gm">
                    LaMae Weber (CEO)
                    </h2>
                    <p className="text-para text-sm"> Los Angeles, USA</p>
                    <Rating
                      name="read-only"
                      value={4.5}
                      precision={0.5}
                      readOnly
                    />
                    <p className="mt-4 text-xs sm:text-sm md:text-base font-weight-200 text-para text-center">
                      When our own skills did not manage to get where we wanted,
                      CloudAnts took care of the rest. The expertize, customer
                      service and "follow up" we experienced from CloudAnts were
                      simply flawless. Highly recommended for App modernization,
                      optimization and moving to Azure cloud
                    </p>
                  </div>
                </div>
                <div className="text-center shadow-lg bg-white px-10 py-12">
                  <div className="h-72">
                    <div className="flex space-x-2">
                      <div className="mx-auto w-16 h-16">
                        <img
                          className="rounded-full border border-gray-100 shadow-sm"
                          src="https://cloudants.s3.amazonaws.com/assets/images/pp.jpg"
                          alt="user"
                        />
                      </div>
                    </div>
                    <h2 className="text-sm sm:text-base md:text-lg lg:text-xl text-black font-face-gm">
                    Government Institute of Pakistan
                    </h2>
                    <p className="text-para text-sm">
                      {" "}
                      Confidential, Government Institute, Pakistan
                    </p>
                    <Rating
                      name="read-only"
                      value={5}
                      precision={0.5}
                      readOnly
                    />

                    <p className="mt-4 text-xs sm:text-sm md:text-base font-weight-200 text-para text-center">
                      Under tight deadlines and with high expectations,
                      CloudAnts was a pleasure to partner with, on a high
                      profile Governmental project. Professional, conscientious,
                      and thoroughly competent - I wouldn't hesitate in
                      recommending them to other for end-to-end process.
                      Including development, deployment, infrastructure, and
                      support.
                    </p>
                  </div>
                </div>
                <div className="text-center shadow-lg bg-white px-10 py-12">
                  <div className="h-72">
                    <div className="flex space-x-2">
                      <div className="mx-auto w-16 h-16">
                        <img
                          className="rounded-full border border-gray-100 shadow-sm"
                          src="https://cloudants.s3.amazonaws.com/assets/images/testimonial.jpg"
                          alt="user"
                        />
                      </div>
                    </div>
                    <h2 className="text-sm sm:text-base md:text-lg lg:text-xl text-black font-face-gm">
                    Fazian Chughtai (CEO)
                    </h2>
                    <p className="text-para text-sm"> Lahore, Pakistan</p>
                    <Rating
                      name="read-only"
                      value={4}
                      precision={0.5}
                      readOnly
                    />
                    <p className="mt-4 text-xs sm:text-sm md:text-base font-weight-200 text-para text-center">
                      I am really impressed by the quality of services I
                      received from CloudAnts. You were right on schedule,
                      charged reasonable prices, were professional and courteous
                      in dealings, and delivered items well before time. I have
                      got a good e-commerce site for my products. My revenue has
                      increased because of CloudAnts and I will definitely use
                      your services again.
                    </p>
                  </div>
                </div>
                {/* <div className="text-center shadow-lg bg-white px-10 py-12">
                  <div className="h-72">
                    <div className="flex space-x-2">
                      <div className="mx-auto w-16 h-16">
                        <img
                          className="rounded-full border border-gray-100 shadow-sm"
                          src="../assets/images/pp.jpg"
                          alt="user"
                        />
                      </div>
                    </div>
                    <h2 className="text-sm sm:text-base md:text-lg lg:text-xl text-black font-face-gm">
                      Raymon Glario
                    </h2>
                    <p className="text-para text-sm"> Sydney, Australia</p>
                    <Rating
                      name="read-only"
                      value={4}
                      precision={0.5}
                      readOnly
                    />
                    <p className="flex-1 mt-4 text-xs sm:text-sm md:text-base font-weight-200 text-para text-center">
                      We are very happy with CloudAnts very serious and
                      consistent in their work. Team was always there for us all
                      the time in whole on-prem to cloud migration process. This
                      is a company I can recommend to anyone for cloud migration
                      and DevOps
                    </p>
                  </div>
                </div>
                <div className=" text-center shadow-lg bg-white px-10 py-12">
                  <div className="h-72">
                    <div className="flex space-x-2">
                      <div className="mx-auto w-16 h-16">
                        <img
                          className="rounded-full border border-gray-100 shadow-sm"
                          src="../assets/images/pp.jpg"
                          alt="user"
                        />
                      </div>
                    </div>
                    <h2 className="text-sm sm:text-base md:text-lg lg:text-xl text-black font-face-gm">
                      Raymon Glario
                    </h2>
                    <p className="text-para text-sm"> Sydney, Australia</p>
                    <Rating
                      name="read-only"
                      value={4.5}
                      precision={0.5}
                      readOnly
                    />
                    <p className="mt-4 text-xs sm:text-sm md:text-base font-weight-200 text-para text-center">
                      I wanted to take a moment to thank you for the services
                      your team has provided. Your team has been a pleasure to
                      work with, professional and timely. The only delay in work
                      that we have experienced has been due to our own lack of
                      organization managing our projects, not yours. Job well
                      done and I hope we can continue to grow together.
                    </p>
                  </div>
                </div> */}
              </Carousel>
            </div>
          </div>
          <img
            className="object-cover object-fit object-center absolute z-10 w-auto w-full min-w-full h-auto max-w-none overlay"
            src="https://cloudants.s3.amazonaws.com/assets/images/testimonial.svg"
            alt="loading..."
          />
          {/* <img
            className='object-center absolute z-10 w-auto w-full h-full min-w-full min-h-full h-full max-w-none overlay'
            src={testimonialImg}
            alt='loading...'
          /> */}
        </div>
      </section>
    </>
  );
}, {});

export default Testimonials;
