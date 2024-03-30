import { useState } from "react";
import HeroPic from "../../../../assets/DownloadPage/Hero-pic.svg";
import IosPhone from "../../../../assets/DownloadPage/Ios-phone.svg";
import AndroidPhone from "../../../../assets/DownloadPage/Android-phone.svg";
import Linux from "../../../../assets/DownloadPage/Linux.svg";
import Mac from "../../../../assets/DownloadPage/Mac.svg";
import { HiDownload } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import PlatformCard from "./PlatformCard";

const DownloadPage = () => {
    const [isOpenSelection, setIsOpenSelection] = useState(false);

    const downloadBuild = [
        {
            download: "Mac",
        },
        {
            download: "Linux deb",
        },
        {
            download: "Linux tar.gz",
        },
        {
            download: "Windows 32-bit",
        },
        {
            download: " Windows 64-bit",
        },
        {
            download: " Windows 64-bit (Canary)",
        },
    ];

    return (
        <div className="w-full h-auto flex flex-col">
            <section className=" pt-[210px] pb-[120px] bg-primary-b4">
                <div className=" mx-[370px] grid grid-cols-2 gap-x-10">
                    <div className="flex flex-col justify-center">
                        <h1 className=" mb-6 text-[50px] font-extrabold text-white font-gintoNord leading-[50px]">
                            GET DISCORD FOR ANY DEVICE
                        </h1>
                        <p className="mb-5 text-xl text-white font-ggsansNormal">
                            An adventure awaits. Hang out with your friends on
                            our desktop app and keep the conversation going on
                            mobile.
                        </p>
                        <div className=" mt-[10px] flex items-center">
                            <button className=" py-[14px] px-[32px] bg-secondary-s1 rounded-full">
                                <p className=" -my-0.5 flex items-center text-xl text-white font-ggsansNormal">
                                    <HiDownload className=" mr-3 text-2xl" />
                                    Download for Windows
                                </p>
                            </button>
                            <span className=" ml-6 text-base text-white font-ggsansNormal">
                                Windows 7 or higher
                            </span>
                        </div>
                    </div>
                    <img src={HeroPic} alt="" width="100%" />
                </div>
            </section>
            <section className="pt-[120px] pb-[140px]">
                <div className="mx-[370px]">
                    <div className="grid grid-cols-2 grid-rows-[minmax(auto,160px),minmax(auto,420px),minmax(auto,160px),420px,auto,auto] gap-5">
                        <PlatformCard
                            text="iOS"
                            height={600}
                            image={IosPhone}
                        />
                        <PlatformCard
                            text="Android"
                            height={600}
                            image={AndroidPhone}
                            style={"col-start-2 row-start-2"}
                        />
                        <PlatformCard text="Linux" height={600} image={Linux} />
                        <PlatformCard text="Mac" height={560} image={Mac} />
                        <div className="w-[580px] py-12 px-10 flex flex-col justify-center bg-primary-w5 rounded-2xl row-span-2">
                            <h2 className="text-[32px] font-bold font-gintoNormal leading-10">
                                Feeding experimental?
                            </h2>
                            <p className=" mt-6 text-xl font-ggsansNormal">
                                Try our Public Test Build and test new features
                                before they launch.
                            </p>
                            <div className="relative w-full mt-6">
                                <button
                                    className=" py-4 px-8 flex text-xl text-white font-ggsansNormal bg-primary-b4 rounded-full leading-5"
                                    onClick={() =>
                                        setIsOpenSelection(!isOpenSelection)
                                    }
                                >
                                    Download Public Test Build
                                    <IoIosArrowDown className=" -mb-1.5 -mr-1 ml-2 text-[25px]" />
                                </button>
                                <div
                                    className={`${
                                        isOpenSelection ? "block" : "hidden"
                                    } absolute w-full top-0 mt-[60px] p-4 bg-white rounded-lg`}
                                >
                                    {downloadBuild.map((data, index) => {
                                        return (
                                            <div
                                                key={index}
                                                className="p-2 text font-ggsansNormal rounded-[4px] hover:bg-primary-hover3 hover:text-blue-600 hover:underline transition-all cursor-pointer"
                                            >
                                                {data.download}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DownloadPage;
