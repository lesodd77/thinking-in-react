import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import { Link, useNavigate } from 'react-router-dom';
import { RoutePaths } from '../../common/general/RoutePaths';

export const Hero = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="mt-16 dark:!bg-none pt-10 sm:pt-16 lg:overflow-hidden lg:pt-8 lg:pb-14"
        data-aos="fade-down"
        data-aos-duration="2000"
      >
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
              <div className="lg:py-20">
                <div
                  className=""
                  data-aos="fade-right"
                  data-aos-duration="2000"
                >
                  <Link
                    to="contact-form"
                    className="inline-flex items-center rounded-full bg-primary dark:bg-primary p-1 pr-2 ring-1 ring-white/10 ring-slate-400 hover:ring-slate-200 dark:ring-slate-600 hover:ring-white/20 dark:hover:ring-slate-400 text-white hover:text-gray-200 dark:hover-bg-slate-600 sm:text-base lg:text-sm xl:text-base"
                  >
                    <span className="rounded-full sm:flex bg-sky-500/50 dark:bg-primary px-3 py-0.5 text-sm font-semibold leading-5 text-white dark:text-tertiaryOne">
                      Hire Us.
                    </span>
                    <span className="ml-4 text-sm dark:text-cyan-400">
                      Contact Us
                    </span>
                    <ChevronRightIcon
                      className="ml-2 h-5 w-5 dark:text-cyan-400"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
                <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                  <span className="block text-slate-700 dark:text-tertiaryOne">
                    Solution web design
                  </span>
                  <span className="block text-primary/95">and development</span>
                </h1>
                <p className="mt-3 text-base text-gray-600 dark:text-tertiaryOne/70 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  We specialized in building Web Apps, designing and
                  researching. We are a team of experts and experience in
                  diverse areas.
                </p>
                <div className="mt-8 sm:mt-10">
                  <div className=" border-t border-tertiaryOne/20 pt-8 md:flex md:items-center md:justify-between">
                    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center md:justify-center lg:justify-start">
                      <div
                        className="mt-3 sm:mt-0 sm:ml-3"
                        data-aos="fade-right"
                        data-aos-duration="3000"
                      >
                        <button
                          type="submit"
                          onClick={() => navigate(RoutePaths.CONTACTFORM)}
                          className="flex w-full items-center justify-center rounded-md px-4 py-2 overflow-hidden bg-primary dark:bg-primary ring-1 ring-primary/10 dark:ring-slate-600/60 hover:ring-primary/20 dark:hover:ring-tertiaryOne shadow-lg focus:ring-offset-0 hover:ring-white dark:hover:ring-white text-lg text-white sm:mt-0 sm:ml-3 sm:inline-flex sm:w-auto sm:flex-shrink-0 sm:items-center hover:bg-primary/70 dark:hover:bg-slate-800"
                        >
                          <span className="text-md sm:text-lg font-serif font-semibold text-white dark:text-tertiaryOne">
                            Contact Us
                          </span>
                        </button>
                      </div>
                      <div
                        className="mt-3 sm:mt-0 sm:ml-3"
                        data-aos="fade-left"
                        data-aos-duration="2000"
                      >
                        <button
                          type="submit"
                          onClick={() => navigate(RoutePaths.NEWS)}
                          className="flex w-full items-center justify-center  rounded-md px-4 py-2 overflow-hidden bg-primary dark:bg-slate-800 ring-1 ring-primary/10 dark:ring-slate-600/60 hover:ring-primary/20 dark:hover:ring-tertiaryOne  shadow-lg focus:ring-offset-0 hover:ring-white dark:hover:ring-white text-lg text-white sm:mt-0 sm:ml-3 sm:inline-flex sm:w-auto sm:flex-shrink-0 sm:items-center hover:bg-primary/70 dark:hover:bg-slate-800"
                        >
                          <span className="text-md sm:text-lg font-serif font-semibold text-white dark:text-tertiaryOne">
                            News corner
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-20 sm:mb-10">
              <div className="mx-auto max-w-md overflow-hidden px-4 sm:max-w-2xl sm:px-6  md:max-w-3xl md:px-8 lg:max-w-none lg:px-0">
                {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                <img
                  className="w-full rounded-2xl"
                  src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-transparent border-b border-tertiaryOne/10 dark:bg-slate-800">
        <div className="mx-auto max-w-6xl py-12 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-md font-semibold text-primary dark:text-tertiaryOne">
            Some of the technologies we use to work with.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img
                className="h-10 rounded-full transform motion-safe:hover:scale-125"
                src="https://res.cloudinary.com/swed-dev/image/upload/v1671005776/roqzliylotezsdsbdxo3.png"
                alt="JavaScript"
              />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img
                className="h-10 rounded-full transform motion-safe:hover:scale-125"
                src="https://res.cloudinary.com/swed-dev/image/upload/v1671005776/rtqenmt8xnlky8861hjn.png"
                alt="Nodejs"
              />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img
                className="h-10 rounded-full transform motion-safe:hover:scale-125"
                src="https://res.cloudinary.com/swed-dev/image/upload/v1671005776/poj9wyiogfak9eq3ocvf.png"
                alt="Meteor"
              />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
              <img
                className="h-10 rounded-full transform motion-safe:hover:scale-125"
                src="https://res.cloudinary.com/swed-dev/image/upload/v1671005775/mkkpp5yxltc0tgrymadr.jpg"
                alt="Bootstrap"
              />
            </div>
            <div className="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
              <img
                className="h-10 rounded-full transform motion-safe:hover:scale-125"
                src="https://res.cloudinary.com/swed-dev/image/upload/v1671005778/kgxyvlhq3lazxkggbniy.png"
                alt="tailwindcss-tailwindui"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
