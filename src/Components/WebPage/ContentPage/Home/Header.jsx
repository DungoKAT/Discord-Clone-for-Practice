import { Link } from "react-router-dom";
import DownloadIcon from "../../../../assets/DownloadIcon.svg";
import WallpaperTopContain1 from "../../../../assets/HomePage/WallpaperTopContain1.svg";
import WallpaperTopContain2 from "../../../../assets/HomePage/WallpaperTopContain2.svg";

const Header = () => {
    return (
        <section
            className="relative min-w-[320px] w-full h-auto
            max-mobile479:pb-[180px] 
            max-tablet767:pb-[200px] 
            max-tablet991:pb-[240px] 
            pb-0 bg-secondary-s2 bg-heroPattern bg-bottom bg-no-repeat bg-auto"
        >
            <div
                className="relative flex justify-center items-center
                max-tablet767:pt-[120px]
                max-tablet991:pt-[140px]
                pt-[180px]"
            >
                <div
                    className="relative maxWidth1180
                    max-tablet767:pb-[50px]
                    max-tablet991:pb-[70px]
                    pt-5 pb-40"
                >
                    <div
                        className="relative max-w-[800px] mx-auto 
                        max-tablet991:items-start 
                        flex flex-col justify-center items-center"
                    >
                        <h1
                            className="max-tablet767:text-[24px] 
                            max-tablet991:mb-0 
                            mb-6 text-[56px] font-extrabold text-white font-gintoNord text-center leading-none"
                        >
                            IMAGINE A PLACE...
                        </h1>
                        <p
                            className="max-w-[780px] 
                            max-mobile479:text-[16px] max-mobile479:leading-[24px]
                            max-tablet767:mx-0 max-tablet767:text-[17px] 
                            max-tablet991:text-left 
                            mx-[10px] pt-4 text-xl text-white font-ggsansNormal text-center leading-[1.625]"
                        >
                            ...where you can belong to a school club, a gaming
                            group, or a worldwide art community. Where just you
                            and a handful of friends can spend time together. A
                            place that makes it easy to talk every day and hang
                            out more often.
                        </p>
                    </div>
                    <div
                        className="w-full flex justify-center flex-wrap
                        max-tablet767:justify-start"
                    >
                        <button className=" mt-6 mr-6 py-3.5 px-8 flex items-center bg-white rounded-full">
                            <img
                                className="invert mr-2"
                                src={DownloadIcon}
                                alt=""
                            />
                            <p className="text-xl font-ggsansNormal">
                                Download for Windows
                            </p>
                        </button>
                        <Link
                            to="/app"
                            className=" mt-6 py-3.5 px-8 text-xl font-ggsansNormal text-white bg-primary-b4 rounded-full"
                        >
                            Open Discord in your browser
                        </Link>
                    </div>
                    <img
                        className="absolute max-w-[689px] top-auto bottom-0 left-[-448px] right-auto max-desktop1920:hidden"
                        src={WallpaperTopContain1}
                        alt=""
                    />
                    <img
                        className="absolute max-w-[615px] top-auto bottom-[3px] left-auto right-[-428px] max-desktop1920:hidden"
                        src={WallpaperTopContain2}
                        alt=""
                    />
                </div>
            </div>
            <div
                className="absolute w-full max-h-[375px] top-auto bottom-0 left-0 right-0 flex justify-center pointer-events-none 
                max-tablet991:max-h-fit max-tablet991:h-auto 
                max-desktop1440:h-[27vw]"
            >
                <img
                    className="absolute auto
                    max-mobile479:max-w-[500px] max-mobile479:w-full max-mobile479:h-auto max-mobile479:left-[-70px]
                    max-tablet767:h-[250px] max-tablet767:left-[-7%]
                    max-tablet991:h-[310px] max-tablet991:left-[8%]
                    max-desktop1440:max-w-[730px] max-desktop1440:h-full max-desktop1440:left-[-27%]
                    max-desktop1920:max-w-[600px] max-desktop1920:bottom-0 max-desktop1920:left-[-170px] max-desktop1920:right-auto 
                    desktop1920:hidden"
                    src={WallpaperTopContain1}
                    alt=""
                />
                <img
                    className="absolute
                    max-tablet991:hidden
                    max-desktop1440:max-w-[650px] max-desktop1440:h-full max-desktop1440:right-[-19%]
                    max-desktop1920:max-w-[600px] max-desktop1920:bottom-0 max-desktop1920:left-auto max-desktop1920:right-[-170px] 
                    desktop1920:hidden"
                    src={WallpaperTopContain2}
                    alt=""
                />
            </div>
        </section>
    );
};

export default Header;
