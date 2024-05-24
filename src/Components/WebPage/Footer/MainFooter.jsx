import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LogoText from "../../../assets/Nav&Footer/logo-text.svg";
import { BsInstagram, BsFacebook, BsYoutube } from "react-icons/bs";
import { FaXTwitter, FaTiktok } from "react-icons/fa6";
import DropdownArrow from "../../../assets/Nav&Footer/DropdownArrow.svg";
import Launguages from "./Launguages";

const MainFooter = () => {
    const location = useLocation();
    const [isDropdownShow, setIsDropdownShow] = useState(false);
    const [languageSelected, setLanguageSelected] = useState(Launguages[3]);

    return (
        <footer className="flex w-full mt-auto mb-0 pt-20 pb-16 bg-primary-b4 max-mobile479:pb-10">
            <div className="maxWidth1180 h-full flex flex-col">
                <div
                    className="h-auto items-start grid grid-cols-12 gap-x-5
                    max-mobile479:gap-y-6 max-mobile479:justify-start
                    max-tablet767:gap-x-10 max-tablet767:gap-y-10 max-tablet767:grid-cols-2
                    max-tablet991:gap-x-5 max-tablet991:gap-y-[60px] max-tablet991:grid-cols-7 max-tablet991:justify-start max-tablet991:items-start
                    "
                >
                    <div
                        className="h-[122px] flex flex-col items-start col-span-4
                        max-mobile479:col-span-2
                        max-tablet767:col-span-1
                        max-tablet991:col-span-1"
                    >
                        <div className="relative max-w-[190px] w-full my-6">
                            <button
                                className="flex items-center font-ggsansNormal text-sm text-white text-start leading-[18px]"
                                onClick={() => {
                                    console.log(isDropdownShow);
                                    setIsDropdownShow(!isDropdownShow);
                                }}
                            >
                                <img
                                    className="w-6 h-4 mr-2"
                                    src={languageSelected.icon}
                                    alt=""
                                />
                                {languageSelected.launguage}
                                <img
                                    className="pl-2"
                                    src={DropdownArrow}
                                    alt=""
                                />
                            </button>
                            <div
                                className={
                                    (isDropdownShow ? "block" : "hidden") +
                                    " absolute max-w-[320px] min-w-[150px] max-h-[320px] mb-2 bottom-full shadow-[0_1px_1px_rgb(0,0,0/10%)] bg-white rounded-lg overflow-x-hidden overflow-y-auto overscroll-contain"
                                }
                            >
                                {Launguages.map((item, index) => {
                                    return (
                                        <div
                                            className="p-2 flex items-center cursor-pointer"
                                            key={index}
                                            onClick={() => {
                                                setLanguageSelected(item);
                                                setIsDropdownShow(false);
                                            }}
                                        >
                                            <img
                                                className="w-6 h-4 mr-2"
                                                src={item.icon}
                                                alt=""
                                            />
                                            <p className="font-ggsansNormal text-sm text-primary-b4 leading-[18px]">
                                                {item.launguage}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="h-8 mt-6 flex text-white">
                            <a
                                className="mr-6"
                                href="https://twitter.com/discord"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaXTwitter className=" text-2xl" />
                            </a>
                            <a
                                className="mr-6"
                                href="https://www.instagram.com/discord/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <BsInstagram className=" text-2xl" />
                            </a>
                            <a
                                className="mr-6"
                                href="https://www.facebook.com/discord/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <BsFacebook className=" text-2xl" />
                            </a>
                            <a
                                className="mr-6"
                                href="https://www.youtube.com/discord"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <BsYoutube className=" text-2xl" />
                            </a>
                            <a
                                className="mr-6"
                                href="https://www.tiktok.com/@discord"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaTiktok className=" text-2xl" />
                            </a>
                        </div>
                    </div>
                    <div
                        className="col-span-2 font-ggsansNormal
                        max-tablet767:col-span-1 max-tablet767:row-start-2
                        max-tablet991:col-start-4"
                    >
                        <h3 className="mb-5 font-bold text-secondary-s1">
                            Product
                        </h3>
                        <ul className="text-white">
                            <Link
                                to="/download"
                                onClick={() => location.reload()}
                            >
                                <li className="mt-2 hover:underline cursor-pointer">
                                    Download
                                </li>
                            </Link>
                            <Link to="/nitro" onClick={() => location.reload()}>
                                <li className="mt-2 hover:underline cursor-pointer">
                                    Nitro
                                </li>
                            </Link>
                            <li className="mt-2 hover:underline cursor-pointer">
                                Status
                            </li>
                            <li className="mt-2 hover:underline cursor-pointer">
                                App Directory
                            </li>
                            <li className="mt-2 hover:underline cursor-pointer">
                                New Mobile Experience
                            </li>
                        </ul>
                    </div>
                    <div
                        className="col-span-2 font-ggsansNormal
                        max-tablet767:col-span-1 max-tablet767:row-start-2
                        max-tablet991:col-start-6"
                    >
                        <h3 className="mb-5 font-bold text-secondary-s1">
                            Company
                        </h3>
                        <ul className="text-white">
                            <li className="mt-2 hover:underline cursor-pointer">
                                About
                            </li>
                            <Link
                                to="/careers"
                                onClick={() => location.reload()}
                            >
                                <li className="mt-2 hover:underline cursor-pointer">
                                    Jobs
                                </li>
                            </Link>
                            <li className="mt-2 hover:underline cursor-pointer">
                                Brand
                            </li>
                            <li className="mt-2 hover:underline cursor-pointer">
                                Newsroom
                            </li>
                        </ul>
                    </div>
                    <div
                        className="col-span-2 font-ggsansNormal
                        max-tablet767:col-span-1 max-tablet767:row-start-3
                        max-tablet991:col-start-4"
                    >
                        <h3 className="mb-5 font-bold text-secondary-s1">
                            Resources
                        </h3>
                        <ul className="text-white">
                            <li className="mt-2 hover:underline cursor-pointer">
                                College
                            </li>
                            <li className="mt-2 hover:underline cursor-pointer">
                                Support
                            </li>
                            <Link
                                to="/safety"
                                onClick={() => location.reload()}
                            >
                                <li className="mt-2 hover:underline cursor-pointer">
                                    Safety
                                </li>
                            </Link>
                            <li className="mt-2 hover:underline cursor-pointer">
                                Blog
                            </li>
                            <li className="mt-2 hover:underline cursor-pointer">
                                Feedback
                            </li>
                            <li className="mt-2 hover:underline cursor-pointer">
                                StreamKit
                            </li>
                            <li className="mt-2 hover:underline cursor-pointer">
                                Creators
                            </li>
                            <li className="mt-2 hover:underline cursor-pointer">
                                Community
                            </li>
                            <li className="mt-2 hover:underline cursor-pointer">
                                Developers
                            </li>
                            <li className="mt-2 hover:underline cursor-pointer">
                                Gaming
                            </li>
                            <li className="mt-2 hover:underline cursor-pointer">
                                Quests
                            </li>
                            <li className="mt-2 hover:underline cursor-pointer">
                                Official 3rd Party Merch
                            </li>
                        </ul>
                    </div>
                    <div
                        className="col-span-2 font-ggsansNormal
                        max-tablet767:col-span-1 max-tablet767:row-start-3
                        max-tablet991:col-start-6"
                    >
                        <h3 className="mb-5 font-bold text-secondary-s1">
                            Policies
                        </h3>
                        <ul className="text-white">
                            <li className="mt-2 hover:underline cursor-pointer">
                                Terms
                            </li>
                            <li className="mt-2 hover:underline cursor-pointer">
                                Privacy
                            </li>
                            <li className="mt-2 hover:underline cursor-pointer">
                                Cookie Settings
                            </li>
                            <li className="mt-2 hover:underline cursor-pointer">
                                Guidelines
                            </li>
                            <li className="mt-2 hover:underline cursor-pointer">
                                Acknowledgements
                            </li>
                            <li className="mt-2 hover:underline cursor-pointer">
                                Licenses
                            </li>
                            <li className="mt-2 hover:underline cursor-pointer">
                                Company Information
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-full h-[74px] mt-8 mb-0 pt-8 flex justify-between items-center border-t-[1px] border-t-secondary-s1">
                    <img src={LogoText} alt="" width={124} height={34} />
                    <Link
                        to="/app"
                        className=" px-4 py-2 text-sm bg-secondary-s1 rounded-full text-white
                        hover:bg-secondary-s1Hover2 hover:shadow-[0_15px_15px_0px_rgba(0,0,0,0.25)] transition"
                    >
                        Open Discord
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default MainFooter;
