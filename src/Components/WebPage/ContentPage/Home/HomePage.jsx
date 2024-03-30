import { Link } from "react-router-dom";
import { MdOutlineFileDownload } from "react-icons/md";
import { HiDownload } from "react-icons/hi";
import WallpaperTopContain1 from "../../../../assets/HomePage/WallpaperTopContain1.svg";
import WallpaperTopContain2 from "../../../../assets/HomePage/WallpaperTopContain2.svg";
import ContentPic1 from "../../../../assets/HomePage/ContentPic1.svg";
import ContentPic2 from "../../../../assets/HomePage/ContentPic2.svg";
import ContentPic3 from "../../../../assets/HomePage/ContentPic3.svg";
import ContentPic4 from "../../../../assets/HomePage/ContentPic4.svg";
import Twinklink from "../../../../assets/HomePage/Twinklink.svg";

const HomePage = () => {
    return (
        <div className="w-full h-auto flex flex-col">
            <section className="w-full bg-secondary-s2 bg-heroPattern bg-bottom bg-no-repeat bg-auto">
                <div className="w-full pt-[180px] ">
                    <div className="relative mx-[370px] pt-5 pb-40">
                        <div className="relative max-w-[800px] mx-auto flex flex-col justify-center items-center">
                            <h1 className=" -mt-4 -mb-3 pb-6 text-[56px] font-extrabold text-white font-gintoNord text-center">
                                IMAGINE A PLACE...
                            </h1>
                            <p className=" mx-[10px] pt-4 text-xl text-white font-ggsansNormal text-center leading-[1.625]">
                                ...where you can belong to a school club, a
                                gaming group, or a worldwide art community.
                                Where just you and a handful of friends can
                                spend time together. A place that makes it easy
                                to talk every day and hang out more often.
                            </p>
                        </div>
                        <div className="w-full flex justify-center">
                            <button className=" mt-6 mr-6 py-3.5 px-8 flex items-center text-xl font-ggsansNormal bg-white rounded-full">
                                <MdOutlineFileDownload className=" mr-2 text-2xl" />
                                Download for Windows
                            </button>
                            <Link
                                to="/app"
                                className=" mt-6 py-3.5 px-8 text-xl font-ggsansNormal text-white bg-primary-b4 rounded-full"
                            >
                                Open Discord in your browser
                            </Link>
                        </div>
                        <img
                            className="absolute max-w-[689px] top-auto bottom-0 left-[-448px] right-auto"
                            src={WallpaperTopContain1}
                            alt=""
                        />
                        <img
                            className="absolute max-w-[615px] top-auto bottom-[3px] left-auto right-[-428px]"
                            src={WallpaperTopContain2}
                            alt=""
                        />
                    </div>
                </div>
            </section>
            <section className=" pt-[120px] pb-[130px]">
                <div className="mx-[370px]">
                    <div className="grid grid-cols-12 gap-x-5">
                        <div className="col-span-6">
                            <img src={ContentPic1} alt="" />
                        </div>
                        <div className="flex flex-col justify-center items-center col-start-8 col-span-4">
                            <h3 className=" text-5xl">
                                Create an invite-only place where you belong
                            </h3>
                            <p className=" mt-6 text-xl font-ggsansNormal">
                                Discord servers are organized into topic-based
                                channels where you can collaborate, share, and
                                just talk about your day without clogging up a
                                group chat.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className=" py-[120px] bg-primary-w5">
                <div className="mx-[370px]">
                    <div className="grid grid-cols-12 gap-x-5">
                        <div className="flex flex-col justify-center items-center col-span-4">
                            <h3 className=" text-5xl">
                                Where hanging out is easy
                            </h3>
                            <p className=" mt-6 text-xl font-ggsansNormal">
                                Grab a seat in a voice channel when you’re free.
                                Friends in your server can see you’re around and
                                instantly pop in to talk without having to call.
                            </p>
                        </div>
                        <div className="col-start-6 col-span-6">
                            <img src={ContentPic2} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section className=" pt-[120px] pb-[130px]">
                <div className="mx-[370px]">
                    <div className="grid grid-cols-12 gap-x-5">
                        <div className="col-span-6">
                            <img src={ContentPic3} alt="" />
                        </div>
                        <div className="flex flex-col justify-center items-center col-start-8 col-span-4">
                            <h3 className=" text-5xl">From few to a fandom</h3>
                            <p className=" mt-6 text-xl font-ggsansNormal">
                                Get any community running with moderation tools
                                and custom member access. Give members special
                                powers, set up private channels, and more.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className=" py-[120px] bg-primary-w5">
                <div className="mx-[370px]">
                    <div className=" mx-[90px] flex flex-col">
                        <h3 className=" -mt-2 mb-4 text-[40px] font-extrabold font-gintoNord text-center">
                            RELIABLE TECH FOR STAYING CLOSE
                        </h3>
                        <p className=" text-xl font-ggsansNormal text-center">
                            Low-latency voice and video feels like you’re in the
                            same room. Wave hello over video, watch friends
                            stream their games, or gather up and have a drawing
                            session with screen share.
                        </p>
                    </div>
                    <img className="w-full" src={ContentPic4} alt="" />
                    <div className="pb-[90px]"></div>
                    <div className="relative mx-[140px] flex flex-col justify-around items-center">
                        <img
                            className="absolute max-w-[110%] min-w-[0%] min-h-[150px] mt-[-77px] ml-auto mr-auto top-0 bottom-auto left-[-6%] right-0"
                            src={Twinklink}
                            alt=""
                        />
                        <h3 className=" mb-8 text-[32px] font-semibold font-gintoNormal z-10">
                            Ready to start your journey?
                        </h3>
                        <button className=" py-[14px] px-[32px] bg-secondary-s1 rounded-full">
                            <p className=" -my-0.5 flex items-center text-xl text-white font-ggsansNormal">
                                <HiDownload className=" mr-3 text-2xl" />
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
