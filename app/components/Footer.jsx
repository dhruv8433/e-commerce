"use client";

import {
  FacebookOutlined,
  Instagram,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";
import { Divider } from "@mui/material";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="md:w-1/4">
          <h2 className="text-2xl font-semibold mb-4">eRequirement</h2>
          <p className="text-gray-400">
            Your one-stop solution for all home services.
          </p>
          <Divider />
          <div className="md:w-1/4 mt-4 md:mt-0">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <ul className="flex space-x-4">
              <li>
                <Link href="#" className="text-white hover:text-blue-500">
                  <FacebookOutlined />
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-blue-500">
                  <Instagram />
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-blue-500">
                  <LinkedIn />
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-blue-500">
                  <Twitter />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="md:w-1/4 mt-4 md:mt-0">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:text-blue-500">
                Home
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-500">
                Services
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-500">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-500">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:w-1/4 mt-4 md:mt-0">
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-400">Address: 1234 Home Street, City Name</p>
          <p className="text-gray-400">Phone: +123 456 7890</p>
          <p className="text-gray-400">Email: info@erequirement.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
