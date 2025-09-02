"use client";
import React from "react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
import { SignIn, SignUp } from "@clerk/nextjs";
import { useSearchParams } from "next/navigation";

export default function Homepage() {
  const [openSignInForm, setOpenSignInForm] = React.useState(false);
  const searchParams = useSearchParams();
  const formType = searchParams.get("formType");
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
            <Button
              onClick={() => setOpenSignInForm(true)}
              variant={"secondary"}
            >
              Sign in
            </Button>
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
        <Sheet open={openSignInForm} onOpenChange={setOpenSignInForm}>
          <SheetContent className="min-w-[500px]">
            <SheetHeader>
              <SheetTitle></SheetTitle>
            </SheetHeader>
            <div>
              {formType === "signup" ? (
                <SignUp routing="hash" signInUrl="/?formType=signin" />
              ) : (
                <SignIn routing="hash" signUpUrl="/?formType=signup" />
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <footer className="text-center">
        Made with ❤️ by{" "}
        <a href="https://x.com/home" target="_blank" rel="noopener noreferrer">
          Lokosang Felix
        </a>
      </footer>
    </>
  );
}
