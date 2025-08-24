"use client";

import { Button } from "@/components/ui/button";

export default function Homepage() {
  const menuItems: { name: string; path: string }[] = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Dashboard",
      path: "/dashboard",
    },
    {
      name: "Settings",
      path: "/settings",
    },
  ];
  return (
    <>
      <div className="lg:px-20 px-5 py-10">
        <div className="flex justify-between items-center">
          <h1 className="font-extrabold  text-3xl text-primary">
            <b>P.P.A</b>
          </h1>

          <div className="flex gap-5 items-center">
            {menuItems.map((item, index) => (
              <div key={index} className="text-sm text-gray-600 font-bold">
                {item.name}
              </div>
            ))}
            <Button variant={"outline"}>Login</Button>
          </div>
        </div>

        <div className="text-center min-h-[70vh]">
          <h1 className="text-4xl font-semibold tracking-tight text-balance text-gray-800 sm:text-5xl mt-8">
            Master African School Certificates Exams Online
          </h1>
          <p className="mt-4 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
            Practice past papers, take timed exams, and get instant AI-powered
            feedback.
          </p>
        </div>
      </div>
      <footer className="text-center">
        Made with ❤️ by <a href="https://x.com/home"></a>Lokosang Felix
      </footer>
    </>
  );
}
