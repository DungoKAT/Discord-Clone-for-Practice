import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// import MidjourneyCoverPic from "../../../../assets/DiscoverPage/CommuServers/Midjourney/MidjourneyCoverPic.jpg";
// import MidjourneyProfilePic from "../../../../assets/DiscoverPage/CommuServers/Midjourney/MidjourneyProfilePic.jpg";
import { MdVerified } from "react-icons/md";

const CommuServer = ({ serverData }) => {
    console.log("Server Data: ", serverData);
    return (
        <div className="group inline-block w-[calc(100%+16px)] h-auto mb-5 p-2 rounded-lg hover:bg-[#e7e9eb] transition-colors cursor-pointer max-tablet991:mb-4">
            <Link
                to={`/servers/${serverData.serverPathName}`}
                className="w-full flex"
            >
                <img
                    className="max-w-[256px] h-[144px] mr-4 object-cover rounded-lg max-tablet991:hidden"
                    src={serverData.coverImage}
                    alt=""
                />
                <div className="hidden max-tablet991:block">
                    <img
                        className="w-10 h-10 mr-4"
                        src={serverData.icon}
                        alt=""
                    />
                </div>
                <div className="flex flex-col">
                    <div className="mb-2 flex max-tablet991:mb-1">
                        <img
                            className="w-6 h-6 mr-2 max-tablet991:hidden"
                            src={serverData.icon}
                            alt=""
                        />
                        <h1 className="text-base max-tablet991:text-[17px] max-tablet991:leading-[18px]">
                            {serverData.name}
                        </h1>
                    </div>
                    <p className="mb-2 text-sm font-ggsansNormal leading-[18px]">
                        {serverData.description}
                    </p>
                    <div className="flex">
                        <p className=" text-xs font-ggsansNormal leading-4">
                            {serverData.online} Online
                        </p>
                        <span className="w-1 h-1 my-auto mx-2 bg-[#6d6f78] rounded-full"></span>
                        <p className=" text-xs font-ggsansNormal leading-4">
                            {serverData.members} Members
                        </p>
                    </div>
                    <div className=" w-fit mt-auto mb-0 py-1 px-2 flex bg-[#ebebeb] group-hover:bg-[#d5d7d9] rounded transition-colors max-tablet991:hidden">
                        <MdVerified className="w-4 h-4 mr-1 text-secondary-s3" />
                        <p className="text-xs font-semibold font-ggsansNormal leading-4">
                            VERIFIED
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

CommuServer.propTypes = {
    serverData: PropTypes.object.isRequired,
};

export default CommuServer;
