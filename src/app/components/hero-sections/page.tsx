import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import HeroSection from "@/components/final/HeroSections/HeroSection";
import HeroSection2 from "@/components/final/HeroSections/HeroSection2";
import CodeHighlight from "@/components/CodeHighlight";
import Navbar from "@/components/Navbar";

const HeroSectionCode1 = `import React from "react";
import Link from "next/link";
import Navbar from "@/components/final/Navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "../ui/badge";

const HeroSection = () => {
  return (
    <section className="min-h-screen">
      <div className="absolute inset-0 -z-10 h-full w-full bg-background/60 opacity-5 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <Navbar />
      <main className="px-5 py-16 pb-30 sm:flex sm:flex-col items-center">
        <Badge>🎉 Something special is waiting!</Badge>
        <h1 className="text-5xl mt-2 sm:text-6xl sm:w-2/3 sm:text-center">
          Build before its too late,{" "}
          <span className="text-primary ">effectively</span> and
          <span className="text-primary "> effortlessly</span>
        </h1>
        <p className="text-[22px] sm:text-[18px] opacity-75 font-extralight mb-6 mt-5 md:max-w-[600px] md:text-center">
          Meet IndieToolkit, the project-juggling tool for all indie hackers.
          Focus on building, not managing and tracking what is left. Free for
          individuals.
        </p>
        <Link href={""}>
          <Button
            className="w-[350px] font-semibold h-[50px] mt-10 text-lg"
            variant={"default"}
          >
            Start Here {"->"}
          </Button>
        </Link>
      </main>
    </section>
  );
};

export default HeroSection;
`;

const page = () => {
  return (
    <div className="w-full overflow-x-hidden ">
      <Tabs defaultValue="preview" className="">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent className="m-0 flex-start" value="preview">
          <div className=" border border-black  scale-75 mr-28">
            <HeroSection />
          </div>
        </TabsContent>
        <TabsContent value="code" className="w-96 md:w-[800px] rounded-sm">
          <CodeHighlight code={HeroSectionCode1} />
        </TabsContent>
      </Tabs>

      {/* Hero 2 */}
      <h2>Hero Section 2</h2>
      <p className="leadtext">Inspired from JoshTriedCoding </p>
      <Tabs defaultValue="preview" className="">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent className="m-0 flex-start" value="preview">
          <div className=" border   scale-75 p-10 mr-28">
            {/* <Navbar/> */}
            <HeroSection2 />
          </div>
        </TabsContent>
        <TabsContent value="code" className="w-96 md:w-[800px] rounded-sm">
          <CodeHighlight code={HeroSectionCode1} />
        </TabsContent>
      </Tabs>
      
    </div>
  );
};

export default page;
