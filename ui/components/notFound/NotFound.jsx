/* eslint-disable import/no-absolute-path */
import React from 'react';
import { RoutePaths } from '../../common/general/RoutePaths';
import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
  const navigate = useNavigate();
  return (
  <>
    <div
      className="mt-20  bg-white dark:bg-slate-900 shadow-xl min-h-full px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
      <div className="max-w-max mx-auto">
        <main className="mx-5 -my-2 flex flex-wrap justify-center">
          <p className="text-4xl font-extrabold text-primary dark:text-cyan-500 sm:text-5xl">
            404 &nbsp;
          </p>
          <div className="sm:ml-6">
            <div className="sm:border-l sm:border-gray-200 sm:pl-6">
              <h1 id='animate-charcter' className="text-4xl font-extra bold font-bold text-center tracking-tight sm:text-5xl dark:text-primary/40">
                Page not found
              </h1>
              <p className="mt-1 text-sm text-slate-400">
                Please check the URL in the address bar and try again.
              </p>
            </div>
            <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
              <button
                onClick={() => navigate(RoutePaths.HOME)}
                className="inline-flex items-center px-4 py-2 border   bg-gradient-to-r
    from-secondary
    via-white/30
    to-primary
    background-animate dark:bg-opacity-90 ring-1 ring-slate-200 dark:ring-primary_2/60 hover:ring-white dark:hover:ring-white text-white shadow-lg focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:inline-flex sm:w-auto sm:flex-shrink-0 sm:items-center"
              >
                Go back home
              </button>
              <button
                onClick={() => navigate(RoutePaths.CONTACTFORM)}
                className="inline-flex items-center px-4 py-2 border   bg-gradient-to-r
    from-primary
    via-white/30
    to-secondary
    background-animate dark:bg-opacity-90 ring-1 ring-slate-200 dark:ring-primary_2/60 hover:ring-white dark:hover:ring-white text-white shadow-lg focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:inline-flex sm:w-auto sm:flex-shrink-0 sm:items-center"
              >
                Contact Us
              </button>
            </div>
          </div>
          <div className="relative mt-10 [transform-style:preserve-3d] ml-[400px]">
            <div className="absolute top-0 left-0 w-[400px] overflow-hidden rounded-md animate-slide [animation-delay:-6s]">
              <figure className="relative overflow-hidden rounded-md">
                <img
                  src="https://picsum.photos/400/300?0"
                  height="300"
                  width="400"
                />
                <figcaption className="absolute inset-0 flex flex-col justify-end bg-slate-800/50 bg-gradient-to-t p-2 text-white"></figcaption>
              </figure>
              <img
                src="https://picsum.photos/400/300?0"
                height="300"
                width="400"
                className="-scale-y-100 h-10 object-cover object-bottom opacity-50 [mask-image:linear-gradient(to_top,#000,#0000)] rounded-b-md"
              />
            </div>
            <div className="relative w-[400px] overflow-hidden rounded-md animate-slide [animation-delay:-4s]">
              <figure className="relative overflow-hidden rounded-md">
                <img
                  src="https://res.cloudinary.com/dungxxzhh/image/upload/v1663456543/ghf_images/ghf_teshie_xy1zvq.jpg"
                  height="300"
                  width="400"
                />
                <figcaption className="absolute inset-0 flex flex-col justify-end bg-slate-800/50 bg-gradient-to-t p-2 text-white"></figcaption>
              </figure>
              <img
                src="https://res.cloudinary.com/dungxxzhh/image/upload/v1663456542/ghf_images/ghf_1_mkykpb.jpg"
                height="300"
                width="400"
                className="-scale-y-100 h-10 object-cover object-bottom opacity-50 [mask-image:linear-gradient(to_top,#000,#0000)] rounded-b-md"
              />
            </div>
            <div className="absolute top-0 left-0 w-[400px] overflow-hidden rounded-md animate-slide [animation-delay:-2s]">
              <figure className="relative overflow-hidden rounded-md">
                <img
                  src="https://picsum.photos/400/300?2"
                  height="300"
                  width="400"
                />
                <figcaption className="absolute inset-0 flex flex-col justify-end bg-slate-800/50 bg-gradient-to-t p-2 text-white"></figcaption>
              </figure>
              <img
                src="https://picsum.photos/400/300?2"
                height="300"
                width="400"
                className="-scale-y-100 h-10 object-cover object-bottom opacity-50 [mask-image:linear-gradient(to_top,#000,#0000)] rounded-b-md"
              />
            </div>
            <div className="absolute top-0 left-0 w-[400px] overflow-hidden rounded-md animate-slide">
              <figure className="relative overflow-hidden rounded-md">
                <img
                  src="https://picsum.photos/400/300?3"
                  height="300"
                  width="400"
                />
                <figcaption className="absolute inset-0 flex flex-col justify-end bg-slate-800/50 bg-gradient-to-t p-2 text-white"></figcaption>
              </figure>
              <img
                src="https://picsum.photos/400/300?3"
                height="300"
                width="400"
                className="-scale-y-100 h-10 object-cover object-bottom opacity-50 [mask-image:linear-gradient(to_top,#000,#0000)] rounded-b-md"
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  </>
  );
};
