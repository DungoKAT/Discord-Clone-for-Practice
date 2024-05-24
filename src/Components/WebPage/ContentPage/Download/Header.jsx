import HeroPic from "../../../../assets/DownloadPage/Hero-pic.svg";
import DownloadIcon2 from "../../../../assets/DownloadIcon2.svg";

const Header = () => {
    return (
        <section
            className="pt-[210px] pb-[120px] flex flex-col justify-center items-center bg-primary-b4
            max-tablet767:pt-[120px]
            max-tablet991:pt-[140px] max-tablet991:pb-[60px] max-tablet991:h-auto max-tablet991:overflow-hidden"
        >
            <div
                className="maxWidth1180 grid grid-cols-2 gap-x-10
                max-tablet767:flex-col
                max-tablet991:flex max-tablet991:justify-start max-tablet991:items-center max-tablet991:gap-0
                max-desktop1440:gap-x-8"
            >
                <div
                    className="max-w-[700px] flex flex-col justify-center
                    max-tablet767:items-start
                    max-tablet991:min-w-[360px] max-tablet991:mx-auto max-tablet991:mb-10 max-tablet991:self-start"
                >
                    <h1
                        className="mb-6 text-[50px] font-extrabold text-white font-gintoNord leading-none animate-fadeUp1
                        max-mobile479:text-[32px]
                        max-tablet767:text-[36px]"
                    >
                        GET DISCORD FOR ANY DEVICE
                    </h1>
                    <p
                        className="mb-5 text-xl text-white font-ggsansNormal animate-fadeUp2
                        max-mobile479:text-[16px] max-mobile479:leading-6
                        max-desktop1440:text-[20px] max-desktop1440:leading-[30px]"
                    >
                        An adventure awaits. Hang out with your friends on our
                        desktop app and keep the conversation going on mobile.
                    </p>
                    <div className="w-0 pb-[10px]"></div>
                    <div
                        className="flex items-center flex-wrap gap-6
                        max-tablet767:flex-col max-tablet767:items-center max-tablet767:gap-y-6
                        max-tablet991:items-start"
                    >
                        <button className=" py-[14px] px-[32px] bg-secondary-s1 rounded-full">
                            <p className=" -my-0.5 flex items-center text-xl text-white font-ggsansNormal">
                                <img
                                    className="mr-3"
                                    src={DownloadIcon2}
                                    alt=""
                                />
                                Download for Windows
                            </p>
                        </button>
                        <span
                            className="text-base text-white font-ggsansNormal animate-fadeUp2
                            max-mobile479:mt-[10px] 
                            max-tablet991:ml-0"
                        >
                            Windows 10 or higher
                        </span>
                    </div>
                </div>
                <div className="self-center">
                    <img
                        className="w-full animate-fadeUp1 max-tablet767:min-w-0 max-tablet991:min-w-[600px]"
                        src={HeroPic}
                        alt=""
                    />
                </div>
            </div>
        </section>
    );
};

export default Header;
