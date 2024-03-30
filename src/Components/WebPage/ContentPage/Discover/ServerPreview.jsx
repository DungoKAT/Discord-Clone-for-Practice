import { MdVerified } from "react-icons/md";
import MidjourneyCoverPicLg from "../../../../assets/DiscoverPage/CommuServers/Midjourney/MidjourneyCoverPicLg.jpg";
import MidjourneyProfilePic from "../../../../assets/DiscoverPage/CommuServers/Midjourney/MidjourneyProfilePic.jpg";
import ChatIcon from "../../../../assets/DiscoverPage/CommuServers/Midjourney/ChatIcon.svg";
import CalendarIcon from "../../../../assets/DiscoverPage/CommuServers/Midjourney/CalendarIcon.svg";
import RobotIcon from "../../../../assets/DiscoverPage/CommuServers/Midjourney/RobotIcon.svg";
import HumanIcon from "../../../../assets/DiscoverPage/CommuServers/Midjourney/HumanIcon.svg";
import ColorPaletteIcon from "../../../../assets/DiscoverPage/CommuServers/Midjourney/ColorPaletteIcon.svg";
import MagnifyingGlassIcon from "../../../../assets/DiscoverPage/CommuServers/Midjourney/MagnifyingGlassIcon.svg";
import FacebookIcon from "../../../../assets/DiscoverPage/CommuServers/Midjourney/FacebookIcon.svg";
import TwitterIcon from "../../../../assets/DiscoverPage/CommuServers/Midjourney/TwitterIcon.svg";
import RedditIcon from "../../../../assets/DiscoverPage/CommuServers/Midjourney/RedditIcon.svg";
import InstagramIcon from "../../../../assets/DiscoverPage/CommuServers/Midjourney/InstagramIcon.svg";
import ServerPreImage from "../../../../assets/DiscoverPage/CommuServers/Midjourney/ServerPreImage.svg";

const ServerPreview = () => {
    const joinReason = [
        {
            icon: ChatIcon,
            text: "Like a busy coffee shop",
        },
        {
            icon: CalendarIcon,
            text: "January 2nd, 2020",
        },
        {
            icon: RobotIcon,
            text: "Try out the official Midjourney text-to-image-AI",
        },
        {
            icon: HumanIcon,
            text: "Weekly office hours with newest updates and the future",
        },
        {
            icon: ColorPaletteIcon,
            text: "Chat with other creators about their real-life projects",
        },
        {
            icon: MagnifyingGlassIcon,
            text: "Ask questions and explore prompting tips",
        },
    ];

    return (
        <div className="flex flex-col items-center">
            <div className="absolute w-full h-[320px] bg-secondary-s2 -z-10"></div>
            <header className="max-w-[1260px] w-full mt-[120px] px-10">
                <img
                    className="w-full h-[400px] object-cover rounded-2xl"
                    src={MidjourneyCoverPicLg}
                    alt=""
                />
            </header>
            <section className="max-w-[1260px] w-full">
                <div className="w-full -mt-[52px] px-10">
                    <img
                        className="max-w-[104px] max-h-[104px] ml-12 border-[8px] border-white rounded-3xl"
                        src={MidjourneyProfilePic}
                        alt=""
                    />
                </div>
                <div className="w-full mt-[18px] mb-[120px] px-10 grid grid-cols-12 gap-x-5">
                    <div className="ml-12 col-span-9">
                        <div className="flex items-center">
                            <MdVerified className=" w-[27px] h-[27px] mr-2 mb-2 text-secondary-s3" />
                            <h1 className="mb-2 text-[34px] font-ggsans leading-10">
                                Midjourney
                            </h1>
                        </div>
                        <p className="mb-6 text-xl font-ggsansNormal leading-7">
                            The official server for Midjourney, a text-to-image
                            AI where your imagination is the only limit.
                        </p>
                        <div className="mb-6 flex items-center">
                            <span className="w-2 h-2 mr-2 bg-secondary-s3 rounded-full"></span>
                            <p className="mr-4 text-base font-semibold font-ggsansNormal leading-5">
                                1,491,287 Online
                            </p>
                            <span className="w-2 h-2 mr-2 bg-[#c4c9ce] rounded-full"></span>
                            <p className="mr-4 text-base font-semibold font-ggsansNormal leading-5">
                                19,444,378 Members
                            </p>
                        </div>
                        <div className="pt-[25px] pb-[25px] grid grid-cols-12 grid-rows-3 gap-x-5 border-t border-b border-[#06060714]">
                            {joinReason.map((item, index) => {
                                return (
                                    <div
                                        className={
                                            (index % 2 === 0
                                                ? "col-start-1"
                                                : "col-start-7") +
                                            " h-10 mb-6 flex col-span-6"
                                        }
                                        key={index}
                                    >
                                        <div className="w-10 h-10 p-[10px] bg-[#f9f9f9] rounded-[20px]">
                                            <img
                                                className="w-5 h-5"
                                                src={item.icon}
                                                alt=""
                                            />
                                        </div>
                                        <div className="ml-4 flex flex-col justify-center">
                                            <p
                                                className={
                                                    (index !== 0 && "hidden") +
                                                    " text-xs font-ggsansNormal text-[#5c5e66]"
                                                }
                                            >
                                                How chatty?
                                            </p>
                                            <p
                                                className={
                                                    (index !== 1 && "hidden") +
                                                    " text-xs font-ggsansNormal text-[#5c5e66]"
                                                }
                                            >
                                                Server created
                                            </p>
                                            <p className=" font-ggsansNormal">
                                                {item.text}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="mb-[25px] pt-[25px]">
                            <div className="">
                                <h2 className="mb-2 text-xl font-ggsans leading-6">
                                    About
                                </h2>
                                <p className=" text-base font-ggsansNormal leading-5">
                                    Midjourney is a new emerging text-to-image
                                    AI that brings your imagination into
                                    reality. Simply submit a text prompt and the
                                    bot will generate a beautiful piece of art
                                    in under 60 seconds.
                                </p>
                                <p className="mt-2 text-base font-ggsansNormal leading-5">
                                    This community is ready and eager to help
                                    you with anything Midjourney related.
                                    Explore our resource channels,
                                    prompt-crafting forum and support channels,
                                    where our team of guides is ready to help
                                    you around the server.
                                </p>
                            </div>
                            <div className="mt-6">
                                <h2 className="mb-2 text-xl font-ggsans leading-6">
                                    Supported Languages
                                </h2>
                                <p className=" text-base font-ggsansNormal leading-5">
                                    English
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mr-12 col-span-3 col-start-10">
                        <button className="w-full min-h-[38px] mb-3 py-0.5 px-4  bg-secondary-s1 rounded-[4px]">
                            <p className="text-sm text-white font-ggsansNormal leading-4">
                                Join Server
                            </p>
                        </button>
                        <button className="w-full min-h-[38px] py-0.5 px-4  bg-primary-w2 rounded">
                            <p className="text-sm text-white font-ggsansNormal leading-4">
                                Share Server
                            </p>
                        </button>
                        <h3 className="mt-8 mb-2 text-xs font-semibold font-ggsansNormal leading-4">
                            CATEGORIES
                        </h3>
                        <div className=" -mb-2 -mr-2 flex flex-wrap">
                            <div className="h-8 mb-2 mr-2 px-4 flex items-center bg-[#f9f9f9] rounded">
                                <p className=" text-sm font-ggsansNormal leading-[18px]">
                                    Science & Tech
                                </p>
                            </div>
                            <div className="h-8 mb-2 mr-2 px-4 flex items-center bg-[#f9f9f9] rounded">
                                <p className=" text-sm font-ggsansNormal leading-[18px]">
                                    Entertainment
                                </p>
                            </div>
                            <div className="h-8 mb-2 mr-2 px-4 flex items-center bg-[#f9f9f9] rounded">
                                <p className=" text-sm font-ggsansNormal leading-[18px]">
                                    Creative Arts
                                </p>
                            </div>
                            <div className="h-8 mb-2 mr-2 px-4 flex items-center bg-[#f9f9f9] rounded">
                                <p className=" text-sm font-ggsansNormal leading-[18px]">
                                    Collaboration
                                </p>
                            </div>
                            <div className="h-8 mb-2 mr-2 px-4 flex items-center bg-[#f9f9f9] rounded">
                                <p className=" text-sm font-ggsansNormal leading-[18px]">
                                    Wiki & Guide
                                </p>
                            </div>
                        </div>
                        <h3 className="mt-8 mb-2 text-xs font-semibold font-ggsansNormal leading-4">
                            SOCIAL
                        </h3>
                        <div className="-mb-2 -mr-2 flex flex-wrap">
                            <button className="w-10 h-10 mb-2 mr-2 flex justify-center items-center bg-[#f9f9f9] rounded-full">
                                <img
                                    className="w-6 h-6"
                                    src={FacebookIcon}
                                    alt=""
                                />
                            </button>
                            <button className="w-10 h-10 mb-2 mr-2 flex justify-center items-center bg-[#f9f9f9] rounded-full">
                                <img
                                    className="w-6 h-6"
                                    src={TwitterIcon}
                                    alt=""
                                />
                            </button>
                            <button className="w-10 h-10 mb-2 mr-2 flex justify-center items-center bg-[#f9f9f9] rounded-full">
                                <img
                                    className="w-6 h-6"
                                    src={RedditIcon}
                                    alt=""
                                />
                            </button>
                            <button className="w-10 h-10 mb-2 mr-2 flex justify-center items-center bg-[#f9f9f9] rounded-full">
                                <img
                                    className="w-6 h-6"
                                    src={InstagramIcon}
                                    alt=""
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full py-[120px] flex justify-center items-center bg-primary-w5">
                <div className="max-w-[1260px] w-full px-10 grid grid-cols-12 gap-x-5">
                    <div className="mb-4 mx-12 flex flex-col justify-center items-center col-span-5">
                        <h2 className="mb-6 text-[32px] font-ggsans leading-10">
                            Find a place where you belong
                        </h2>
                        <p className="mb-6 text-xl font-ggsansNormal leading-6">
                            Discord servers are organized into topic-based
                            channels where you can collaborate, share, and just
                            talk about your day without clogging up a group
                            chat.
                        </p>
                        <button className="w-[327px] h-[53px] py-4 px-8 text-xl text-white font-ggsansNormal bg-primary-b4 rounded-full leading-none">
                            Join Discord
                        </button>
                    </div>
                    <img
                        className="col-span-7 col-start-6"
                        src={ServerPreImage}
                        alt=""
                    />
                </div>
            </section>
        </div>
    );
};

export default ServerPreview;
