export const NewsLetter2Code = '\r\nimport backgroundImage from \'public/images/components/background.jpg\'\r\nimport Image from \'next/image\'\r\nimport { Button } from \'@/components/ui/button\'\r\nimport clsx from \'clsx\'\r\n\r\ninterface Props{\r\nclassName:string\r\n}\r\nfunction ArrowRightIcon(props:Props) {\r\n  return (\r\n    <svg aria-hidden="true" viewBox="0 0 24 24" {...props}>\r\n      <path\r\n        d="m14 7 5 5-5 5M19 12H5"\r\n        fill="none"\r\n        stroke="currentColor"\r\n        strokeWidth="2"\r\n        strokeLinecap="round"\r\n        strokeLinejoin="round"\r\n      />\r\n    </svg>\r\n  )\r\n}\r\n\r\nexport default function NewsLettersForm2() {\r\n  return (\r\n    <section id="newsletter" aria-label="Newsletter">\r\n      <div className=\'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8\'>\r\n        <div className="relative -mx-4 overflow-hidden bg-indigo-50 py-20 px-4 sm:-mx-6 sm:px-6 md:mx-0 md:rounded-5xl md:px-16 xl:px-24 xl:py-36">\r\n          <Image\r\n            className="absolute left-1/2 top-0 translate-x-[-10%] translate-y-[-45%] lg:translate-x-[-32%]"\r\n            src={backgroundImage}\r\n            alt=""\r\n            width={919}\r\n            height={1351}\r\n            unoptimized\r\n          />\r\n          <div className="relative mx-auto grid max-w-2xl grid-cols-1 gap-x-32 gap-y-14 xl:max-w-none xl:grid-cols-2">\r\n            <div>\r\n              <p className="font-display text-4xl font-medium tracking-tighter text-blue-900 sm:text-5xl">\r\n                Stay up to date\r\n              </p>\r\n              <p className="mt-4 text-lg tracking-tight text-blue-900">\r\n                Get updates on all of our events and be the first to get\r\n                notified when tickets go on sale.\r\n              </p>\r\n            </div>\r\n            <form>\r\n              <h3 className="text-lg font-semibold tracking-tight text-blue-900">\r\n                Sign up to our newsletter <span aria-hidden="true">&darr;</span>\r\n              </h3>\r\n              <div className="mt-5  flex rounded-3xl bg-white py-2.5 pr-2.5 shadow-xl shadow-blue-900/5 focus-within:ring-2 focus-within:ring-blue-900">\r\n                <input\r\n                  type="email"\r\n                  required\r\n                  placeholder="Email address"\r\n                  aria-label="Email address"\r\n                  className="-my-2.5 flex-auto bg-transparent pl-6 pr-2.5  text-base text-slate-900 placeholder:text-slate-400 focus:outline-none"\r\n                />\r\n                <Button type="submit">\r\n                  <span className="sr-only sm:not-sr-only">Sign up today</span>\r\n                  <span className="sm:hidden">\r\n                    <ArrowRightIcon className="h-6 w-6" />\r\n                  </span>\r\n                </Button>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n  )\r\n}\r\n';
