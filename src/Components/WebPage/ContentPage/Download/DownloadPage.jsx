import { useState } from "react";
// Components
import Header from "./Header";
import PlatformCard from "./PlatformCard";
// assets
import IosPhone from "../../../../assets/DownloadPage/Ios-phone.svg";
import AndroidPhone from "../../../../assets/DownloadPage/Android-phone.svg";
import Linux from "../../../../assets/DownloadPage/Linux.svg";
import Mac from "../../../../assets/DownloadPage/Mac.svg";
import ArrowDown from "../../../../assets/DownloadPage/ArrowDown.svg";

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
            <Header />
            <section className="pt-[120px] pb-[64px] max-tablet991:pt-[60px]">
                <div className="maxWidth1180">
                    <div
                        className="grid grid-cols-2 grid-rows-[minmax(auto,160px),minmax(auto,420px),minmax(auto,160px),auto,minmax(auto,120px),auto] gap-5
                        max-tablet767:flex max-tablet767:flex-col
                        max-tablet991:grid-cols-[49%,49%]"
                    >
                        <PlatformCard
                            text="iOS"
                            maxHeightBase={600}
                            maxHeight1={400}
                            maxHeight2={500}
                            image={IosPhone}
                        />
                        <PlatformCard
                            text="Android"
                            maxHeightBase={600}
                            maxHeight1={400}
                            maxHeight2={500}
                            image={AndroidPhone}
                            style={"col-start-2 row-start-2"}
                        />
                        <PlatformCard
                            text="Linux"
                            maxHeightBase={600}
                            maxHeight1={400}
                            maxHeight2={500}
                            image={Linux}
                        />
                        <PlatformCard
                            text="Mac"
                            maxHeightBase={560}
                            maxHeight1={560}
                            maxHeight2={560}
                            image={Mac}
                        />
                        <div
                            className="max-h-[290px] py-12 px-10 flex flex-col justify-start items-start bg-primary-w5 rounded-2xl row-span-2
                            max-tablet767:max-h-none
                            max-tablet991:py-10 max-tablet991:px-5"
                        >
                            <h2
                                className="text-[32px] font-bold font-gintoNormal leading-10
                                max-tablet767:text-[24px] max-tablet767:leading-[22px]
                                max-tablet991:text-[25px]"
                            >
                                Feeling experimental?
                            </h2>
                            <p
                                className=" mt-6 text-xl font-ggsansNormal
                                max-mobile479:text-[16px] max-mobile479:leading-[22px]
                                max-tablet767:text-[17px] max-tablet767:leading-[24px]"
                            >
                                Try our Public Test Build and test new features
                                before they launch.
                            </p>
                            <div className="relative w-full mt-6">
                                <button
                                    className="pt-[12px] pb-[15px] px-8 flex justify-center text-xl text-white font-ggsansNormal bg-primary-b4 rounded-full leading-6
                                    max-mobile479:w-full max-mobile479:whitespace-normal
                                    max-tablet991:px-5 "
                                    onClick={() =>
                                        setIsOpenSelection(!isOpenSelection)
                                    }
                                >
                                    Download Public Test Build
                                    <img
                                        className="w-[25px] h-[25px] -mb-1.5 -mr-1 ml-2 invert"
                                        src={ArrowDown}
                                        alt=""
                                    />
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
                        <div
                            className="py-12 px-10 flex flex-col justify-start items-start bg-primary-w5 rounded-2xl row-span-2
                            max-tablet767:max-h-none
                            max-tablet991:py-10 max-tablet991:px-5"
                        >
                            <h2
                                className="text-[32px] font-bold font-gintoNormal leading-10
                                max-tablet767:text-[24px] max-tablet767:leading-[22px]
                                max-tablet991:text-[25px]"
                            >
                                From the archives:
                            </h2>
                            <p
                                className=" mt-6 text-xl font-ggsansNormal
                                max-mobile479:text-[16px] max-mobile479:leading-[22px]
                                max-tablet767:text-[17px] max-tablet767:leading-[24px]"
                            >
                                Windows 7/8/8.1 users can download on official,
                                but unsupported client here until June 15, 2024.
                            </p>
                            <div className="relative w-full mt-6">
                                <button className=" py-4 px-8 flex text-xl text-white font-ggsansNormal bg-primary-b4 rounded-full leading-5">
                                    Download
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DownloadPage;
