import LogoText from "../../../assets/Nav&Footer/logo-text.svg";
import { BsInstagram, BsFacebook, BsYoutube } from "react-icons/bs";
import { FaXTwitter, FaTiktok } from "react-icons/fa6";

const MainFooter = () => {
    // const countries = ["English", "English (UK)", "Thai", "Japan"];

    return (
        <div className="flex w-full h-[638px] mt-auto mb-0 pt-20 pb-16 bg-primary-b4">
            <div className="w-full h-full max-w-[1180px] mx-auto flex flex-col">
                <div className="h-auto items-start grid grid-rows-[minmax(250px,auto)] grid-cols-12 gap-x-5">
                    <div className="h-[122px] col-span-4">
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
                    <div className="h-auto col-span-2 font-ggsansNormal">
                        <div className=" mb-5 text-secondary-s1">Product</div>
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
                    <div className="h-auto col-span-2 font-ggsansNormal">
                        <div className=" mb-5 text-secondary-s1">Company</div>
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
                    <div className="h-auto col-span-2 font-ggsansNormal">
                        <div className=" mb-5 text-secondary-s1">Resources</div>
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
                                Official 3rd Party Merch
                            </li>
                        </ul>
                    </div>
                    <div className="h-auto col-span-2 font-ggsansNormal">
                        <div className=" mb-5 text-secondary-s1">Policies</div>
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
                    <div className="h-full col-span-2"></div>
                    <div className="h-full col-span-2"></div>
                    <div className="h-full col-span-2"></div>
                    <div className="h-full col-span-2"></div>
                </div>
                <div className="w-full h-[74px] mt-8 mb-0 pt-8 flex justify-between items-center border-t-[1px] border-t-secondary-s1">
                    <img src={LogoText} alt="" width={124} height={34} />
                    <button
                        className=" px-4 py-2 text-sm bg-secondary-s1 rounded-full text-white
                        hover:bg-secondary-s1Hover2 hover:shadow-[0_15px_15px_0px_rgba(0,0,0,0.25)] transition"
                    >
                        Open Discord
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MainFooter;
