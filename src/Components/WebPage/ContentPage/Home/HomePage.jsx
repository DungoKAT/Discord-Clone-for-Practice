import { useEffect } from "react";
// Components
import Header from "./Header";
import WhiteSection from "./WhiteSection";
// assets
import ContentPic1 from "../../../../assets/HomePage/ContentPic1.svg";
import ContentPic2 from "../../../../assets/HomePage/ContentPic2.svg";
import ContentPic3 from "../../../../assets/HomePage/ContentPic3.svg";
import ContentPic4 from "../../../../assets/HomePage/ContentPic4.svg";
import Twinklink from "../../../../assets/HomePage/Twinklink.svg";
import DownloadIcon2 from "../../../../assets/DownloadIcon2.svg";

const HomePage = () => {
    useEffect(() => {
        const webpage = document.getElementById("web-page");
        const section1 = document.getElementById("section-1");
        const section2 = document.getElementById("section-2");
        const section3 = document.getElementById("section-3");
        const section4 = document.getElementById("section-4");

        const section1OffsetBottom = section1.offsetTop + section1.offsetHeight;
        const section2OffsetBottom = section2.offsetTop + section2.offsetHeight;
        const section3OffsetBottom = section3.offsetTop + section3.offsetHeight;
        const section4OffsetBottom = section4.offsetTop + section4.offsetHeight;
        if (
            webpage.offsetHeight + webpage.scrollTop >= section1.offsetTop &&
            webpage.scrollTop <= section1OffsetBottom
        ) {
            section1.style.animation = "fade-up-1 1s ease-in-out";
        }

        webpage.onscroll = () => {
            const webpageScrollBottom =
                webpage.offsetHeight + webpage.scrollTop;
            if (
                webpageScrollBottom >= section1.offsetTop &&
                webpage.scrollTop <= section1OffsetBottom
            ) {
                section1.style.animation = "fade-up-1 1s ease-in-out";
            }
            if (
                webpageScrollBottom >= section2.offsetTop &&
                webpage.scrollTop <= section2OffsetBottom
            ) {
                section2.style.animation = "fade-up-1 1s ease-in-out";
            }
            if (
                webpageScrollBottom >= section3.offsetTop &&
                webpage.scrollTop <= section3OffsetBottom
            ) {
                section3.style.animation = "fade-up-1 1s ease-in-out";
            }
            if (
                webpageScrollBottom >= section4.offsetTop &&
                webpage.scrollTop <= section4OffsetBottom
            ) {
                section4.style.animation = "fade-up-1 1s ease-in-out";
            }
        };

        return () => (window.onscroll = null);
    }, []);

    return (
        <div className="w-full h-auto flex flex-col">
            <Header />
            <WhiteSection
                id="section-1"
                image={ContentPic1}
                topic="Create an invite-only place where you belong"
                paragraph="
                Discord servers are organized into topic-based
                channels where you can collaborate, share, and
                just talk about your day without clogging up a
                group chat.
                "
            />
            <section
                className="max-tablet991:pt-[60px]  
                pt-[120px] pb-[130px] bg-primary-w5"
            >
                <div className="maxWidth1180" id="section-2">
                    <div
                        className="max-mobile479:gap-y-5
                        max-tablet991:flex max-tablet991:flex-col max-tablet991:justify-center
                        grid grid-cols-12 gap-x-5 gap-y-4"
                    >
                        <div
                            className="hidden justify-center col-start-6 col-span-6
                            max-tablet991:flex"
                        >
                            <img src={ContentPic2} alt="" />
                        </div>
                        <div className="flex flex-col justify-center items-start col-span-4 text-primary-b4">
                            <h3
                                className="max-tablet767:text-2xl max-tablet767:text-left
                                max-tablet991:text-[32px] max-tablet991:leading-[130%]
                                text-5xl"
                            >
                                Where hanging out is easy
                            </h3>
                            <p
                                className="mt-6 text-xl font-ggsansNormal
                                max-mobile479:text-base
                                max-tablet767:text-[17px] max-tablet767:leading-6"
                            >
                                Grab a seat in a voice channel when you’re free.
                                Friends in your server can see you’re around and
                                instantly pop in to talk without having to call.
                            </p>
                        </div>
                        <div
                            className="flex justify-center col-start-6 col-span-6
                            max-tablet991:hidden"
                        >
                            <img src={ContentPic2} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <WhiteSection
                id="section-3"
                image={ContentPic3}
                topic="From few to a fandom"
                paragraph="
                Get any community running with moderation tools
                and custom member access. Give members special
                powers, set up private channels, and more.
                "
            />
            <section
                className="max-tablet991:pt-[60px] max-tablet991:pb-[60px] 
                pt-[120px] pb-[130px] bg-primary-w5"
            >
                <div className="maxWidth1180" id="section-4">
                    <div className="max-w-[1000px] mx-auto flex flex-col text-primary-b4">
                        <h3
                            className="mb-6 font-extrabold font-gintoNord text-center leading-none
                            max-mobile479:text-[32px]
                            max-tablet767:text-[36px]
                            text-[40px]"
                        >
                            RELIABLE TECH FOR STAYING CLOSE
                        </h3>
                        <p
                            className="font-ggsansNormal text-center
                            max-mobile479:text-[16px] max-mobile479:leading-[22px]
                            max-tablet767:text-[17px] max-tablet767:leading-[24px]
                            text-xl"
                        >
                            Low-latency voice and video feels like you’re in the
                            same room. Wave hello over video, watch friends
                            stream their games, or gather up and have a drawing
                            session with screen share.
                        </p>
                    </div>
                    <img className="w-full" src={ContentPic4} alt="" />
                    <div className="max-tablet767:pb-10 max-tablet991:pb-[70px] pb-[90px]"></div>
                    <div className="relative max-w-[900px] w-full mx-auto flex flex-col justify-around items-center">
                        <img
                            className="absolute max-w-[110%] min-w-[0%] min-h-[150px] mt-[-77px] mx-auto top-0 bottom-auto left-[-6%] right-0"
                            src={Twinklink}
                            alt=""
                        />
                        <h3
                            className="mb-5 text-[32px] font-semibold font-gintoNormal z-10 leading-none
                            max-mobile479:text-2xl max-mobile479:text-center
                            max-tablet767:text-[28px]"
                        >
                            Ready to start your journey?
                        </h3>
                        <div className="pb-5 max-tablet991:hidden"></div>
                        <button
                            className="relative py-[14px] px-[32px] flex justify-center bg-secondary-s1 rounded-full
                            max-mobile479:w-full max-mobile479:pl-[66px]"
                        >
                            <img
                                className="mr-3 max-mobile479:absolute max-mobile479:left-[35px]"
                                src={DownloadIcon2}
                                alt=""
                            />
                            <p className="-my-0.5 flex items-center text-xl text-white font-ggsansNormal">
                                Download for Windows
                            </p>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
