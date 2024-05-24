import ChainIcon from "../../../../assets/DiscoverPage/CommuServers/ChainIcon.svg";
import SunBGIconBlue from "../../../../assets/DiscoverPage/CommuServers/SunBGIconBlue.svg";

const PartneredIconComponent = () => {
    return (
        <>
            <img
                className="absolute w-full invert z-10"
                src={ChainIcon}
                alt=""
            />
            <img className="absolute w-full" src={SunBGIconBlue} alt="" />
        </>
    );
};

export default PartneredIconComponent;
