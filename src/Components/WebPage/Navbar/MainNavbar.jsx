import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LogoText from "../../../assets/Nav&Footer/logo-text.svg";
import ToggleBar from "../../../assets/ToggleBar.svg";
import CrossIcon from "../../../assets/CrossIcon.svg";
import DownloadIcon from "../../../assets/DownloadIcon.svg";

const MainNavbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isTop, setIsTop] = useState(true);

    useEffect(() => {
        const webpage = document.getElementById("web-page");

        webpage.onscroll = () => {
            webpage.scrollTop === 0 ? setIsTop(true) : setIsTop(false);
        };

        return () => (window.onscroll = null);
    }, [isTop]);

    return (
        <nav
            className={
                (isTop
                    ? "max-tablet991:bg-transparent"
                    : "max-tablet991:bg-secondary-s1") +
                " absolute w-full h-20 z-50 max-tablet991:fixed transition-colors duration-300"
            }
        >
            <div className="relative maxWidth1180 min-h-[80px] h-20 flex justify-between items-center">
                <Link to="/">
                    <img
                        className={
                            (isSidebarOpen
                                ? "opacity-0 pointer-events-none"
                                : "opacity-1 pointer-events-auto") +
                            " max-tablet767:pl-[10px] min-w-[124px] h-[34px] transition-opacity"
                        }
                        src={LogoText}
                        alt=""
                    />
                </Link>
                <ul className="flex max-tablet991:hidden">
                    <Link
                        to="/download"
                        className=" font-ggsans mx-[10px] text-font-f1 p-[10px] hover:underline cursor-pointer"
                    >
                        Download
                    </Link>
                    <Link
                        to="/nitro"
                        className=" font-ggsans mx-[10px] text-font-f1 p-[10px] hover:underline cursor-pointer"
                    >
                        Nitro
                    </Link>
                    <Link
                        to="/servers"
                        className=" font-ggsans mx-[10px] text-font-f1 p-[10px] hover:underline cursor-pointer"
                    >
                        Discover
                    </Link>
                    <Link
                        to="/safety"
                        className=" font-ggsans mx-[10px] text-font-f1 p-[10px] hover:underline cursor-pointer"
                    >
                        Safety
                    </Link>
                    <li className=" font-ggsans mx-[10px] text-font-f1 p-[10px] hover:underline cursor-pointer">
                        Support
                    </li>
                    <li className=" font-ggsans mx-[10px] text-font-f1 p-[10px] hover:underline cursor-pointer">
                        Blog
                    </li>
                    <Link
                        to="/careers"
                        className=" font-ggsans mx-[10px] text-font-f1 p-[10px] hover:underline cursor-pointer"
                    >
                        Careers
                    </Link>
                </ul>
                <Link
                    to="/app"
                    className="min-w-[115.11px] ml-auto flex tablet991:ml-0 px-4 py-2 text-sm bg-white rounded-full leading-[22px]
                    hover:text-secondary-s1 hover:shadow-[0_15px_15px_0px_rgba(0,0,0,0.25)] transition"
                >
                    Open Discord
                </Link>
                <button
                    className="relative hidden -mr-10 p-[18px] top-0 bottom-auto left-auto right-0  
                    max-tablet767:-mr-5 
                    max-tablet991:block"
                    onClick={() => setIsSidebarOpen(true)}
                >
                    <img src={ToggleBar} alt="" />
                </button>
            </div>
            <div
                className={
                    (isSidebarOpen ? "translate-x-0" : "translate-x-full") +
                    " fixed w-[350px] h-screen pt-6 pl-6 pb-[120px] top-0 left-auto right-0 tablet991:translate-x-full tablet991:hidden bg-white rounded-tl-lg rounded-bl-lg overflow-hidden transition-all duration-[400ms]"
                }
            >
                <div className="mb-4 pb-6 flex items-start invert border-b border-[#111]">
                    <img src={LogoText} alt="" width={124} />
                </div>
                <ul className="flex flex-col">
                    <Link
                        to="/download"
                        className="py-2 px-4 flex justify-start font-ggsans text-primary-b4 hover:underline cursor-pointer"
                    >
                        Download
                    </Link>
                    <Link
                        to="/nitro"
                        className="py-2 px-4 flex justify-start font-ggsans text-primary-b4 hover:underline cursor-pointer"
                    >
                        Nitro
                    </Link>
                    <Link
                        to="/servers"
                        className="py-2 px-4 flex justify-start font-ggsans text-primary-b4 hover:underline cursor-pointer"
                    >
                        Discover
                    </Link>
                    <Link
                        to="/safety"
                        className="py-2 px-4 flex justify-start font-ggsans text-primary-b4 hover:underline cursor-pointer"
                    >
                        Safety
                    </Link>
                    <li className="py-2 px-4 flex justify-start font-ggsans text-primary-b4 hover:underline cursor-pointer">
                        Support
                    </li>
                    <li className="py-2 px-4 flex justify-start font-ggsans text-primary-b4 hover:underline cursor-pointer">
                        Blog
                    </li>
                    <Link
                        to="/careers"
                        className="py-2 px-4 flex justify-start font-ggsans text-primary-b4 hover:underline cursor-pointer"
                    >
                        Careers
                    </Link>
                </ul>
                <div className="absolute pt-6 pb-[100px] px-6 top-auto bottom-0 left-0 right-0">
                    <button className="w-full py-[7px] px-5 flex justify-center items-center bg-secondary-s1 rounded-full">
                        <img className="mr-2" src={DownloadIcon} alt="" />
                        <p className=" text-sm text-white leading-[18px]">
                            Download
                        </p>
                    </button>
                </div>
                <button
                    className="absolute w-6 h-6 mt-[28px] mr-[15px] top-0 bottom-auto left-auto right-0 z-10"
                    onClick={() => setIsSidebarOpen(false)}
                >
                    <img className="w-full" src={CrossIcon} alt="" />
                </button>
            </div>
        </nav>
    );
};

export default MainNavbar;
