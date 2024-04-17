import { Link } from "react-router-dom";
import LogoText from "../../../assets/Nav&Footer/logo-text.svg";
import { BsInstagram, BsFacebook, BsYoutube } from "react-icons/bs";
import { FaXTwitter, FaTiktok } from "react-icons/fa6";

const MainFooter = () => {
    // const countries = ["English", "English (UK)", "Thai", "Japan"];

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
                        className="h-[122px] col-span-4
                        max-mobile479:col-span-2
                        max-tablet767:col-span-1
                        max-tablet991:col-span-1"
                    >
                        <select className=" bg-transparent w-1/2 my-6 text-sm text-white font-ggsansNormal">
                            <option className=" p-2 text-sm text-black">
                                English
                            </option>
                            <option className=" p-2 text-sm text-black">
                                English (UK)
                            </option>
                            <option className=" p-2 text-sm text-black">
                                Thai
                            </option>
                            <option className=" p-2 text-sm text-black">
                                Japan
                            </option>
                        </select>
                        <div className=" h-8 mt-6 flex text-white">
                            <div className="mr-6">
                                <FaXTwitter className=" text-2xl" />
                            </div>
                            <div className="mr-6">
                                <BsInstagram className=" text-2xl" />
                            </div>
                            <div className="mr-6">
                                <BsFacebook className=" text-2xl" />
                            </div>
                            <div className="mr-6">
                                <BsYoutube className=" text-2xl" />
                            </div>
                            <div className="mr-6">
                                <FaTiktok className=" text-2xl" />
                            </div>
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
                            <li className=" mt-2 hover:underline cursor-pointer">
                                Download
                            </li>
                            <li className=" mt-2 hover:underline cursor-pointer">
                                Nitro
                            </li>
                            <li className=" mt-2 hover:underline cursor-pointer">
                                Status
                            </li>
                            <li className=" mt-2 hover:underline cursor-pointer">
                                App Directory
                            </li>
                            <li className=" mt-2 hover:underline cursor-pointer">
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
                            <li className=" mt-2 hover:underline cursor-pointer">
                                About
                            </li>
                            <li className=" mt-2 hover:underline cursor-pointer">
                                Jobs
                            </li>
                            <li className=" mt-2 hover:underline cursor-pointer">
                                Brand
                            </li>
                            <li className=" mt-2 hover:underline cursor-pointer">
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
                            <li className=" mt-2 hover:underline cursor-pointer">
                                College
                            </li>
                            <li className=" mt-2 hover:underline cursor-pointer">
                                Support
                            </li>
                            <li className=" mt-2 hover:underline cursor-pointer">
                                Safety
                            </li>
                            <li className=" mt-2 hover:underline cursor-pointer">
                                Blog
                            </li>
                            <li className=" mt-2 hover:underline cursor-pointer">
                                Feedback
                            </li>
                            <li className=" mt-2 hover:underline cursor-pointer">
                                StreamKit
                            </li>
                            <li className=" mt-2 hover:underline cursor-pointer">
                                Creators
                            </li>
                            <li className=" mt-2 hover:underline cursor-pointer">
                                Community
                            </li>
                            <li className=" mt-2 hover:underline cursor-pointer">
                                Developers
                            </li>
                            <li className=" mt-2 hover:underline cursor-pointer">
                                Gaming
                            </li>
                            <li className=" mt-2 hover:underline cursor-pointer">
                                Quests
                            </li>
                            <li className=" mt-2 hover:underline cursor-pointer">
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
                            <li className=" mt-2 hover:underline cursor-pointer">
                                Terms
                            </li>
                            <li className=" mt-2 hover:underline cursor-pointer">
                                Privacy
                            </li>
                            <li className=" mt-2 hover:underline cursor-pointer">
                                Cookie Settings
                            </li>
                            <li className=" mt-2 hover:underline cursor-pointer">
                                Guidelines
                            </li>
                            <li className=" mt-2 hover:underline cursor-pointer">
                                Acknowledgements
                            </li>
                            <li className=" mt-2 hover:underline cursor-pointer">
                                Licenses
                            </li>
                            <li className=" mt-2 hover:underline cursor-pointer">
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
