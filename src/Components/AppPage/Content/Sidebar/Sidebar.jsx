import { BsHeadphones, BsGearFill } from "react-icons/bs";
import { MdMic } from "react-icons/md";
import DMChannels from "./Channels/DMChannels";

const Sidebar = () => {
    return (
        <div className="flex flex-col w-60 h-full bg-primary-b3">
            <DMChannels />
            <section className="flex items-center mt-auto mb-0 px-2 w-full h-[52px] bg-primary-b2">
                <button className="flex items-center mr-2 -ml-[2px] px-0.5 rounded-[4px] hover:bg-primary-hover2 hover:text-font-f2">
                    <div className="relative w-8 h-8 rounded-full">
                        <img
                            className="w-full h-full"
                            src="/src/assets/discord-icon.png"
                            alt=""
                        />
                        <div
                            className="absolute -bottom-[2.5px] -right-[3px] w-[16.5px] h-[16.5px] 
                                    bg-green-600 border-[3.5px] border-primary-b2 rounded-full"
                        ></div>
                    </div>
                    <div className="flex flex-col items-start mr-1 py-1 pl-2 w-[84px] font-ggsansNormal">
                        <p className="flex justify-start w-full text-sm text-font-f1 leading-5 text-ellipsis whitespace-nowrap overflow-hidden">
                            62070125 Johan
                        </p>
                        <span className="text-xs text-font-f3">Online</span>
                    </div>
                </button>
                <div className="flex items-center mr-0 ml-auto">
                    <button
                        className="flex justify-center items-center w-8 h-8 
                                    text-font-f3 text-[22px] rounded-[4px] hover:bg-primary-hover2 hover:text-font-f2"
                    >
                        <MdMic />
                    </button>
                    <button
                        className="flex justify-center items-center w-8 h-8 
                                    text-font-f3 text-[22px] rounded-[4px] hover:bg-primary-hover2 hover:text-font-f2"
                    >
                        <BsHeadphones />
                    </button>
                    <button
                        className="flex justify-center items-center w-8 h-8 
                                    text-font-f3 text-[18px] rounded-[4px] hover:bg-primary-hover2 hover:text-font-f2"
                    >
                        <BsGearFill />
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Sidebar;
