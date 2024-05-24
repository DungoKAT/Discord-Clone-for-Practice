import VerifiedIcon from "../../../../assets/DiscoverPage/CommuServers/VerifiedIcon.svg";
import SunBGIconGreen from "../../../../assets/DiscoverPage/CommuServers/SunBGIconGreen.svg";

const VerifiedIconComponent = () => {
    return (
        <>
            <img
                className="absolute w-full invert z-10"
                src={VerifiedIcon}
                alt=""
            />
            <img className="absolute w-full" src={SunBGIconGreen} alt="" />
        </>
    );
};

export default VerifiedIconComponent;
