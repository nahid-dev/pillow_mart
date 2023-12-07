import Link from "next/link";
import React from "react";
import { IoIosSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import Image from "next/image";
import Container from "../container/Container";

const Navbar = () => {
  return (
    <div className="shadow-lg py-5">
      <Container>
        {" "}
        <div className=" flex items-center justify-between ">
          {/* logo section */}
          <div className="">
            <Link href="/">
              <Image
                width={200}
                height={40}
                src="/images/logo.png.webp"
              ></Image>
            </Link>
          </div>
          {/* main nav Item */}
          <div>
            <div>
              <ul className="flex items-center space-x-10 primary-text-color font-semibold">
                <li className="">
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/">About</Link>
                </li>
                <li>
                  <Link href="/">Product</Link>
                </li>
                <li>
                  <Link href="/">Pages</Link>
                </li>
                <li>
                  <Link href="/">Blog</Link>
                </li>
                <li>
                  <Link href="/">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          {/* search & cart Icon */}
          <div>
            <div className="flex items-center space-x-5">
              <span>
                <IoIosSearch size={32} />
              </span>
              <span>
                <FaCartShopping size={32} />
              </span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
