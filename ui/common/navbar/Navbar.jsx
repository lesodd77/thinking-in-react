// @ts-nocheck
/* eslint-disable react/no-unescaped-entities */
import { Meteor } from 'meteor/meteor';
import React, { Fragment, useEffect, useState } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { RoutePaths } from '../general/RoutePaths';
import { ArrowRightOnRectangleIcon, ChevronDownIcon } from '@heroicons/react/20/solid';
import { Link, useNavigate } from 'react-router-dom';

function classNames (...classes) {
  return classes.filter(Boolean).join(' ');
}
export const Navbar = () => {

  const navigate = useNavigate();
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }, []);

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <Disclosure as="nav" className="fixed z-50 w-full bg-gray-100/90 dark:bg-slate-800/90 shadow-sm" data-aos="zoom-in-down" data-aos-duration="3000">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="-ml-2 mr-2 flex items-center md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary/50 dark:focus:ring-tertiaryOne">
                    <span className="sr-only">Open main menu</span>
                    {open
                      ? (
                      <XMarkIcon className="block h-6 w-6 text-slate-800 dark:text-tertiaryOne" aria-hidden="true" />
                        )
                      : (
                      <Bars3Icon className="block h-6 w-6 text-slate-800 dark:text-tertiaryOne" aria-hidden="true" />
                        )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-shrink-0 items-center">
                  <Link to='/'>
                  <img
                    className="block h-8 w-auto rounded-full lg:hidden"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="solution-web-development"
                  />
                  </Link>
                  <Link to='/'>
                  <img
                    className="hidden h-8 w-auto rounded-full lg:block"
                   src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="solution-web-development"
                  />
                  </Link>
                </div>
                <div className="hidden lg:ml-10 md:ml-6 md:flex md:space-x-8">
                  {/* Current: "border-indigo-500 text-gray-800", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  <Link
                    to="/"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-primary dark:text-tertiaryOne hover:border-tertiaryOne hover:text-gray-700 dark:hover:text-tertiaryOne/60 text-md"
                  >
                    Home
                  </Link>
                    <Menu as="div" className="relative py-4 px-1">
                    <div>
                      <Menu.Button className="inline-flex items-center border-b-2  py-2 pl-3 pr-4 border-transparent px-1 pt-1 font-medium text-primary dark:text-tertiaryOne hover:border-tertiaryOne hover:text-gray-700 text-md dark:hover:text-tertiaryOne/60">
                        <span className="sr-only">Open user menu</span>
                       Company
                       <ChevronDownIcon
                            className='h-6 w-6'
                            aria-hidden="true"
                          />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute left-0 z-10 mt-2 w-48 origin-top-left rounded-md bg-white dark:bg-slate-800 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                             <Link
                              to="about"
                              className={classNames(
                                active ? 'bg-gray-100 hover:bg-slate-200 dark:hover:bg-gray-500' : '',
                                'block px-4 py-2 text-sm text-gray-700 dark:text-tertiaryOne',
                              )}
                            >
                              About
                            </Link>
                          )}
                        </Menu.Item>
                         <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="news"
                              className={classNames(
                                active ? 'bg-gray-100 hover:bg-slate-200 dark:hover:bg-gray-500' : '',
                                'block px-4 py-2 text-sm text-gray-700 dark:text-tertiaryOne',
                              )}
                            >
                              News
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="contact-form"
                              className={classNames(
                                active ? 'bg-gray-100 hover:bg-slate-200 dark:hover:bg-gray-500' : '',
                                'block px-4 py-2 text-sm text-gray-700 dark:text-tertiaryOne',
                              )}
                            >
                              Contact
                            </Link>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                  <Link
                    to="product"
                    className="inline-flex items-center font-semibold border-b-2 border-transparent px-1 pt-1 text-sm text-primary dark:text-tertiaryOne hover:border-tertiaryOne hover:text-gray-700 dark:hover:text-tertiaryOne/60"
                  >
                   Products
                  </Link>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                   <button
                  type="button"
                  onClick={handleThemeSwitch}
                  className="relative inline-flex items-center rounded-md border-b border-transparent bg-primary dark:bg-slate-800 px-2 py-1 text-sm font-medium text-white shadow-sm hover:border-tertiaryOne hover:bg-primary/70 focus:outline-none"
                  >
                  {theme === 'dark' ? '🌞' : '🌙'}
                  <span className="sr-only">dark mode switch</span>
                </button>
                </div>
                <div className="hidden md:ml-4 md:flex md:flex-shrink-0 md:items-center">
                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="flex rounded-full bg-white dark:bg-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2">
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white dark:bg-slate-800 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="#"
                              className={classNames(
                                active ? 'bg-gray-100 hover:bg-slate-200 dark:hover:bg-gray-500' : '',
                                'block px-4 py-2 text-sm text-gray-700 dark:text-tertiaryOne',
                              )}
                            >
                              Your Profile
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="#"
                              className={classNames(
                                active ? 'bg-gray-100 hover:bg-slate-200 dark:hover:bg-gray-500' : '',
                                'block px-4 py-2 text-sm text-gray-700 dark:text-tertiaryOne',
                              )}
                            >
                              Settings
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                             onClick={() => Meteor.logout()}
                             type='button'
                              className={classNames(
                                active ? 'bg-gray-100 hover:bg-slate-200 dark:hover:bg-gray-500' : '',
                                'block px-4 py-2 text-sm text-gray-700 dark:text-tertiaryOne',
                              )}
                            >
                              Sign out
                            </button>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                      <div className="ml-3 flex-auto text-sm font-medium text-slate-700 dark:text-tertiaryOne mt-2">
    </div>
    <div>
     </div>
                        <button
                          type="button"
                          className="relative inline-flex items-center text-white rounded-md px-3 py-1 font-semibold overflow-hidden bg-primary dark:bg-slate-800 ring-1 ring-primary/10 dark:ring-slate-600/60 hover:ring-primary/20 dark:hover:ring-tertiaryOne opacity-90 shadow-lg focus:ring-offset-1 hover:ring-slate-500 dark:hover:ring-white dark:text-tertiaryOne cursor-pointer"
                        >
                          <ArrowRightOnRectangleIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                          <span className="text-lg font-serif font-semibold text-white dark:text-tertiaryOne">
                            Sign-up
                          </span>
                        </button>
                </div>
              </div>
            </div>
          </div>
{/* mobile */}
          <Disclosure.Panel className="md:hidden shadow-lg dark:bg-slate-800 border-0 rounded-b-md">
            <div className="space-y-1 pt-2 pb-3 ml-3">
              <Disclosure.Button
                as={Link}
                to="/"
                className="block py-2 pl-3 pr-4 text-base font-medium text-gray-500 dark:text-tertiaryOne hover:border-gray-300 hover:bg-gray-200 dark:hover:bg-gray-500 hover:text-gray-700 sm:pl-5 sm:pr-6"
              >
                Home
              </Disclosure.Button>
             <Menu as="div" className="relative">
                       <div>
                      <Menu.Button className="inline-flex items-center border-b-2  py-2 pl-3 pr-4 border-transparent px-1 pt-1 font-medium text-primary dark:text-tertiaryOne  hover:text-gray-700 text-md dark:hover:text-tertiaryOne/60">
                        <span className="sr-only">Open user menu</span>
                       Company
                       <ChevronDownIcon className="w-5 h-5 ml-2 -mr-1 text-primary dark:text-tertiaryOne" aria-hidden="true" />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute left-0 z-10 mt-2 w-48 origin-top-left rounded-md bg-white dark:bg-slate-800 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="about"
                              className={classNames(
                                active ? 'bg-gray-100 hover:bg-slate-200 dark:hover:bg-gray-500' : '',
                                'block px-4 py-2 text-sm text-gray-700 dark:text-tertiaryOne',
                              )}
                            >
                              About
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="news"
                              className={classNames(
                                active ? 'bg-gray-100 hover:bg-slate-200 dark:hover:bg-gray-500' : '',
                                'block px-4 py-2 text-sm text-gray-700 dark:text-tertiaryOne',
                              )}
                            >
                              News
                            </a>
                          )}
                        </Menu.Item>
                         <Menu.Item>
                          {({ active }) => (
                            <a
                             href="contact-form"
                              className={classNames(
                                active ? 'bg-gray-100 hover:bg-slate-200 dark:hover:bg-gray-500' : '',
                                'block px-4 py-2 text-sm text-gray-700 dark:text-tertiaryOne',
                              )}
                            >
                              Contact
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
              <Disclosure.Button
                as={Link}
                to="product"
                className="block py-2 pl-3 pr-4 text-base font-medium text-gray-500 dark:text-tertiaryOne hover:border-gray-300 hover:bg-gray-200 dark:hover:bg-gray-500 hover:text-gray-700 sm:pl-5 sm:pr-6"
              >
                Products
              </Disclosure.Button>
            </div>
            <div className="border-t border-gray-200 pt-4 pb-3">
              <div className="flex items-center px-4 sm:px-6">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src='#'
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-gray-800"> </div>
                  <div className="text-sm font-medium text-gray-500 dark:text-tertiaryOne"> </div>
                </div>
                 <Disclosure.Button>
                        <a
                          type="button"
                           className="relative inline-flex items-center text-white rounded-md px-3 py-1 font-semibold overflow-hidden bg-primary dark:bg-slate-800 ring-1 ring-primary/10 dark:ring-slate-600/60 hover:ring-primary/20 dark:hover:ring-tertiaryOne opacity-90 shadow-lg focus:ring-offset-1 hover:ring-slate-500 dark:hover:ring-white dark:text-tertiaryOne cursor-pointer"
                        >
                          <ArrowRightOnRectangleIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                          <span className="text-lg font-serif font-semibold text-white dark:text-tertiaryOne">
                            Sign-up
                          </span>
                        </a>
                         </Disclosure.Button>
              </div>
              <div className="mt-3 space-y-1">
                <Disclosure.Button
                  as={Link}
                  to="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 dark:text-tertiaryOne hover:bg-gray-200 dark:hover:bg-gray-500 hover:text-gray-800 sm:px-6"
                >
                  Your Profile
                </Disclosure.Button>
                <Disclosure.Button
                  as={Link}
                  to="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 dark:text-tertiaryOne hover:bg-gray-200 dark:hover:bg-gray-500 hover:text-gray-800 sm:px-6"
                >
                  Settings
                </Disclosure.Button>
                <Disclosure.Button
                  as={Link}
                  type='button'
                  onClick={() => Meteor.logout()}
                 className="block px-4 py-2 text-base font-medium text-gray-500 dark:text-tertiaryOne hover:bg-gray-200 dark:hover:bg-gray-500 hover:text-gray-800 sm:px-6"
                >
                  Sign out
                </Disclosure.Button>
              </div>
            </div>
                    <div className="md:flex md:items-center md:justify-between">
        <div className="flex justify-center space-x-3 md:order-2">

                <div className="flex-auto text-sm font-medium text-tertiaryOne dark:white mt-2">
    {/* {loggedUser?.profile} */}
     </div>
              </div>
              </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
