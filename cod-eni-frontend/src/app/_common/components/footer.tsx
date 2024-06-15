import React from "react";
import Link from "next/link";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";

const Footer = () => {
  return (
    <>
      <div className="bg-[#5541D9] text-white rounded-3xl mx-[8%] mt-44 bg-opacity-65 px-20">
        <div className="flex flex-col space-y-4">
          <div className="flex w-full justify-around pt-20">
            <div className="text-white flex items-start space-x-3">
              <div className="items-center">
                <svg
                  id="logo-82"
                  width="40"
                  height="40"
                  viewBox="0 0 40 28"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="ccustom"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.04165 8.6424C0.0059185 11.2006 -0.265077 14.0155 0.262973 16.7313C0.790959 19.447 2.09428 21.9416 4.00802 23.8995C5.92176 25.8574 8.36009 27.1908 11.0145 27.731C13.6691 28.2712 16.4205 27.9939 18.921 26.9343C21.4214 25.8747 23.5586 24.0802 25.0622 21.778C25.1023 21.7166 25.1419 21.6549 25.181 21.5929C25.2086 21.5492 25.236 21.5052 25.2632 21.4611V28H26.3158C29.0223 28 31.668 27.1789 33.9183 25.6405C36.1687 24.1023 37.9226 21.9157 38.9583 19.3575C39.9941 16.7994 40.2651 13.9845 39.737 11.2687C39.209 8.55301 37.9058 6.05842 35.992 4.10052C34.0782 2.14255 31.6399 0.809212 28.9855 0.269041C26.3309 -0.271195 23.5795 0.00605512 21.079 1.06569C18.5786 2.12533 16.4414 3.91976 14.9378 6.22202C14.8694 6.3268 14.8024 6.43249 14.7368 6.53891V7.99449e-06H13.6842C10.9777 7.99449e-06 8.33201 0.821109 6.08168 2.35946C3.83134 3.89774 2.07739 6.08425 1.04165 8.6424ZM12.6316 14V2.20289C10.713 2.38207 8.86244 3.04897 7.2513 4.15027C5.34714 5.45193 3.86308 7.3021 2.98668 9.46666C2.11028 11.6313 1.88098 14.0131 2.32776 16.3111C2.77454 18.609 3.87735 20.7198 5.49664 22.3765C7.116 24.0332 9.17918 25.1614 11.4253 25.6185C13.6714 26.0756 15.9995 25.841 18.1153 24.9444C20.1461 24.0838 21.8937 22.6504 23.1559 20.814C22.1993 21.2786 21.1293 21.5385 20 21.5385C15.9306 21.5385 12.6316 18.1633 12.6316 14ZM27.3684 25.7971V14C27.3684 9.83665 24.0694 6.46154 20 6.46154C18.8707 6.46154 17.8007 6.72144 16.8441 7.18602C18.1063 5.34959 19.8539 3.91614 21.8847 3.0556C24.0005 2.15898 26.3286 1.92439 28.5747 2.38148C30.8208 2.83856 32.884 3.96682 34.5034 5.62348C36.1227 7.28021 37.2255 9.391 37.6722 11.6889C38.119 13.9869 37.8897 16.3687 37.0133 18.5333C36.137 20.6979 34.6529 22.5481 32.7487 23.8497C31.1376 24.951 29.287 25.6179 27.3684 25.7971ZM19.8947 19.3836C17.0715 19.3269 14.7933 16.996 14.7379 14.1077H16.7291C18.2999 14.474 19.5365 15.739 19.8947 17.3461V19.3836ZM20.1052 19.3836C22.9284 19.3269 25.2067 16.996 25.2621 14.1077H23.2709C21.6999 14.474 20.4633 15.7392 20.1052 17.3465V19.3836ZM25.2621 13.8923C25.2067 11.004 22.9284 8.6731 20.1052 8.61644V10.6535C20.4633 12.2607 21.6998 13.5259 23.2706 13.8923H25.2621ZM19.8947 8.61644C17.0716 8.6731 14.7933 11.004 14.7379 13.8923H16.7294C18.3001 13.5259 19.5366 12.2609 19.8947 10.6539V8.61644Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <h2 className="font-bold">Cityzen Connect</h2>
            </div>
            <div className="flex flex-col space-y-3">
              <Link href={""} className="font-bold text-[17px]">
                A propos de nous
              </Link>
              <Link href={""} className="hover:underline">
                Contact
              </Link>
              <Link href={""} className="hover:underline">
                FAQ
              </Link>
              <Link href={""} className="hover:underline">
                Mentions legales
              </Link>
            </div>
            <div className="flex flex-col space-y-3">
              <Link href={""} className="font-bold text-[17px]">
                Condition d&apos;utilisation
              </Link>
              <Link href={""} className="hover:underline">
                Support
              </Link>
              <Link href={""} className="hover:underline">
                Blog
              </Link>
              <Link href={""} className="hover:underline">
                Mentions legales
              </Link>
            </div>
          </div>
          <div className="w-full h-[1px] bg-white" />
        </div>
        <div className="pt-20 pb-5  flex justify-between">
          <p className="opacity-70">
            {" "}
            Elita &#169; {new Date().getFullYear()}{" "}
          </p>
          <div className="flex items-center space-x-8">
            <Link href={""}>
              <CiLinkedin className="text-2xl" />
            </Link>
            <Link href={""}>
              <FaFacebook className="text-2xl" />
            </Link>
            <Link href={""}>
              <CiInstagram className="text-2xl" />
            </Link>
          </div>
        </div>
      </div>
      <div className="h-16" />
    </>
  );
};

export default Footer;
