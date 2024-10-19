export const Footer3Code = 'import Image from "next/image";\r\n\r\nexport default function Footer3() {\r\n  return (\r\n    <footer className="py-16">\r\n      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between md:flex-row">\r\n       <div className="flex items-center ">\r\n       <Image src={\'/logos/logo-black-256x256.png\'} width={150} height={150} alt="logo" className="h-12 w-auto text-slate-900" />\r\n       <p className="font-bold text-xl ">UnicornSpace Ui</p>\r\n       </div>\r\n        <p className="mt-6 text-base text-slate-500 md:mt-0">\r\n          Copyright &copy; {new Date().getFullYear()} DeceptiConf, LLC. All\r\n          rights reserved.\r\n        </p>\r\n      </div>\r\n    </footer>\r\n  )\r\n}\r\n';
