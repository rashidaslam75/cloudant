import React from 'react';
import Fade from "react-reveal";

const Services = React.memo(function Services() {
  return (
    <>
      <section id="services">
        <div className="mt-10 relative flex w-full h-full overflow-hidden ">
          <div className="relative z-30 2xl:text-4xl text-white w-full lg:max-w-full px-7 sm:px-14">
            <div className="mb-5 mt-14 text-center">
              <h1 className="mt-10 mx-auto px-4 py-2 text-white font-face-gm text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
                Our Services
              </h1>
              {/* <p className='mt-4 text-xs sm:text-sm md:text-base text-white'>
                loreum ipsum loreum ipsum loreum ipsum loreum ipsum loreum ipsum
                loreum ipsum loreum ipsum loreum ipsum loreum ipsum loreum ipsum
              </p> */}
            </div>

            <div className="mb-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              <div className="text-center px-4 py-12">
                {/* <div className='flex space-x-2 rounded-full w-20 h-20 bg-white m-auto'>
                  <div className='m-auto w-16 h-16'> */}
                <Fade bottom duration={1500}>
                  <img
                    className="mx-auto rounded-full border border-gray-100 shadow-sm"
                    src="https://cloudants.s3.amazonaws.com/assets/images/cloudMigration.svg"
                    alt="user image"
                  />
                  {/* </div>
                </div> */}
                  <h2 className="font-face-gm mt-6 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-white font-bold">
                    CLOUD MIGRATION
                  </h2>
                  <p className="mt-4 text-xs sm:text-sm md:text-base font-weight-200 text-white wspace text-center">
                    We migrate future-ready businesses to the cloud
                  </p>
                </Fade>
              </div>
              <div className="text-center px-4 py-12">
                {/* <div className='flex space-x-2 rounded-full w-20 h-20 bg-white m-auto'>
                  <div className='m-auto w-16 h-16'> */}
                <Fade bottom duration={1500}>
                  <img
                    className="mx-auto rounded-full border border-gray-100 shadow-sm"
                    src="https://cloudants.s3.amazonaws.com/assets/images/devops.svg"
                    alt="DEV OPS image"
                  />
                  {/* </div>
                </div> */}
                  <h2 className="font-face-gm mt-6 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-white font-bold">
                    DEVOPS
                  </h2>
                  <p className="mt-4 text-xs sm:text-sm md:text-base font-weight-200 text-white text-center">
                    Build, Test and deploy in any language, with our Azure
                    DevOps support
                  </p>
                </Fade>
              </div>
              <div className="text-center px-4 py-12">
                <Fade bottom duration={1500}>
                  <img
                    className="mx-auto rounded-full border border-gray-100 shadow-sm"
                    src="https://cloudants.s3.amazonaws.com/assets/images/security.svg"
                    alt="user image"
                  />
                  <h2 className="font-face-gm mt-6 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-white font-bold">
                    CLOUD SECURITY
                  </h2>
                  <p className="mt-4 text-xs sm:text-sm md:text-base font-weight-200 text-white text-center">
                    All your security needs under one roof. Security you can
                    count on.
                  </p>
                </Fade>
              </div>
              <div className="text-center px-4 py-12">
                {/* <div className='flex space-x-2 rounded-full w-20 h-20 bg-white m-auto'>
                  <div className='m-auto w-16 h-16'> */}
                <Fade bottom duration={1500}>
                  <img
                    className="mx-auto rounded-full border border-gray-100 shadow-sm"
                    src="https://cloudants.s3.amazonaws.com/assets/images/it-managed.svg"
                    alt="user image"
                  />
                  {/* </div>
                </div> */}
                  <h2 className="font-face-gm mt-6 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-white font-weight-200 font-bold">
                    IT MANAGED SERVICES
                  </h2>
                  <p className="mt-4 text-xs sm:text-sm md:text-base font-weight-200 text-white text-center">
                    Our flexible approach to delivering managed IT services
                  </p>
                </Fade>
              </div>
            </div>
          </div>
          <img
            className="object-center absolute z-10 w-auto w-full h-full min-w-full min-h-full max-w-none"
            src="https://cloudants.s3.amazonaws.com/assets/images/servicesBg.png"
            alt="loading..."
          />
          {/* <img src={require("./home/priyanka/Finalproject/src/components/3.jpg")} alt="cannot display"/> */}
        </div>
      </section>
    </>
  );
}, {});

export default Services;
