import Image from "next/image";
import React from "react";
import Container from "../container/Container";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaGooglePlusG } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="">
      <div className="py-[120px]">
        <Container>
          <div className="grid grid-cols-12 gap-5">
            <div className=" col-span-3">
              <Image
                width={200}
                height={40}
                src="/images/logo.png.webp"
              ></Image>
            </div>
            <div className=" col-span-6 flex items-center">
              <ul className="flex items-center gap-10">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/product">Product</Link>
                </li>
                <li>
                  <Link href="/pages">Products</Link>
                </li>
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className=" col-span-3 ">
              <div className=" flex items-center space-x-10 justify-end">
                <span className="rounded-full bg-[#4B3049] text-white p-2 transition-all duration-300 cursor-pointer hover:bg-[#E4D3DF]">
                  <FaFacebookF size={32} />
                </span>
                <span className="rounded-full bg-[#4B3049] text-white p-2 transition-all duration-300 cursor-pointer hover:bg-[#E4D3DF]">
                  <FaInstagram size={32} />
                </span>
                <span className="rounded-full bg-[#4B3049] text-white p-2 transition-all duration-300 cursor-pointer hover:bg-[#E4D3DF]">
                  <FaGooglePlusG size={32} />
                </span>
                <span className="rounded-full bg-[#4B3049] text-white p-2 transition-all duration-300 cursor-pointer hover:bg-[#E4D3DF]">
                  <FaLinkedinIn size={32} />
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="bg-[#F4EDF2] py-[30px]">
        <Container>
          <div className="flex justify-between">
            <div>
              <p>Copyright ©2023 All rights reserved</p>
            </div>
            <div>
              <div className="space-x-10">
                <Link href="/">Terms & Conditions</Link>
                <Link href="/">FAQ</Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
