import { Link } from "react-router-dom";
import MidjourneyCoverPic from "../../../../assets/DiscoverPage/CommuServers/Midjourney/MidjourneyCoverPic.jpg";
import MidjourneyProfilePic from "../../../../assets/DiscoverPage/CommuServers/Midjourney/MidjourneyProfilePic.jpg";
import { MdVerified } from "react-icons/md";

const CommuServer = () => {
    return (
        <Link
            to="/servers/server-preview"
            className="group w-[696px] h-auto mb-5 inline-block p-2 rounded-lg hover:bg-[#e7e9eb] transition-colors cursor-pointer"
        >
            <div className="flex">
                <img
                    className="max-w-[256px] h-[144px] mr-4 object-cover rounded-lg"
                    src={MidjourneyCoverPic}
                    alt=""
                />
                <div className="w-full flex flex-col">
                    <div className="mb-2 flex">
                        <img
                            className="w-6 h-6 mr-2"
                            src={MidjourneyProfilePic}
                            alt=""
                        />
                        <h1>Midjourney</h1>
                    </div>
                    <p className="mb-2 text-sm font-ggsansNormal">
                        The official server for Midjourney, a text-to-image AI
                        where your imagination is the only limit.
                    </p>
                    <div className="flex">
                        <p className=" text-xs font-ggsansNormal leading-4">
                            1,491,287 Online
                        </p>
                        <span className="w-1 h-1 my-auto mx-2 bg-[#c4c9ce] rounded-full"></span>
                        <p className=" text-xs font-ggsansNormal leading-4">
                            19,444,378 Members
                        </p>
                    </div>
                    <div className=" w-fit mt-auto mb-0 py-1 px-2 flex bg-[#ebebeb] group-hover:bg-[#d5d7d9] rounded transition-colors">
                        <MdVerified className="w-4 h-4 mr-1 text-secondary-s3" />
                        <p className="text-xs font-semibold font-ggsansNormal leading-4">
                            VERIFIED
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default CommuServer;
