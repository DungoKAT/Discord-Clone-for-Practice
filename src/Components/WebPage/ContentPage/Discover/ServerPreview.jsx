import { Link, useLoaderData, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import WhiteSection from "./WhiteSection";
import VerifiedIconComponent from "./VerifiedIconComponent";
import PartneredIconComponent from "./PartneredIconComponent";
import SocialIcons from "./SocialIcons";
import ChatIcon from "../../../../assets/DiscoverPage/CommuServers/Midjourney/ChatIcon.svg";
const ServerPreview = () => {
    const loaderServerData = useLoaderData();
    const location = useLocation();
    console.log("location: ", location);
    const hasSocial = Object.prototype.hasOwnProperty.call(
        loaderServerData,
        "social"
    );

    return (
        <div className="flex flex-col items-center">
            <div className="absolute w-full h-[320px] bg-secondary-s2 -z-10 max-tablet991:h-[178px]"></div>
            <header className="max-w-[1260px] w-full mt-[120px] px-10 max-tablet991:mt-[106px]">
                <img
                    className="w-full h-[400px] object-cover rounded-2xl max-tablet991:h-[218px]"
                    src={loaderServerData.coverImage}
                    alt=""
                />
            </header>
            <DesktopComponent
                loaderServerData={loaderServerData}
                hasSocial={hasSocial}
                location={location}
            />
            <MobileComponent
                loaderServerData={loaderServerData}
                hasSocial={hasSocial}
                location={location}
            />
            <WhiteSection />
        </div>
    );
};

export default ServerPreview;

const DesktopComponent = ({ loaderServerData, hasSocial, location }) => {
    console.log("Loader Server Data: ", loaderServerData);
    return (
        <section className="max-w-[1260px] w-full max-tablet991:hidden">
            <div className="w-full -mt-[52px] px-10">
                <img
                    className="max-w-[104px] max-h-[104px] ml-12 border-[8px] border-white rounded-3xl"
                    src={loaderServerData.icon}
                    alt=""
                />
            </div>
            <div className="w-full mt-[18px] mb-[120px] px-10 grid grid-cols-12 gap-x-5">
                <div className="ml-12 col-span-9">
                    <div className="flex items-center">
                        {(loaderServerData.verified ||
                            loaderServerData.partnered) && (
                            <div className="relative w-6 h-6 mr-2 mb-2">
                                {loaderServerData.verified ||
                                (loaderServerData.verified &&
                                    loaderServerData.partnered) ? (
                                    <VerifiedIconComponent />
                                ) : (
                                    loaderServerData.partnered && (
                                        <PartneredIconComponent />
                                    )
                                )}
                            </div>
                        )}
                        <h1 className="mb-2 text-[34px] font-ggsans leading-10">
                            {loaderServerData.name}
                        </h1>
                    </div>
                    <p className="mb-6 text-xl font-ggsansNormal text-[#4e5058] leading-7">
                        {loaderServerData.description}
                    </p>
                    <div className="mb-6 flex items-center">
                        <span className="w-2 h-2 mr-2 bg-secondary-s3 rounded-full"></span>
                        <p className="mr-4 text-base font-semibold font-ggsansNormal text-[#4e5058] leading-5">
                            {loaderServerData.online} Online
                        </p>
                        <span className="w-2 h-2 mr-2 bg-[#c4c9ce] rounded-full"></span>
                        <p className="mr-4 text-base font-semibold font-ggsansNormal text-[#4e5058] leading-5">
                            {loaderServerData.members} Members
                        </p>
                    </div>
                    <div className="mb-6 pt-6 grid grid-cols-12 grid-rows-[auto,auto,auto] gap-x-5 border-t border-[#06060714]">
                        {loaderServerData.joinReason.map((item, index) => {
                            return (
                                <div
                                    className={
                                        (index % 2 === 0
                                            ? "col-start-1"
                                            : "col-start-7") +
                                        " mb-6 flex items-center col-span-6"
                                    }
                                    key={index}
                                >
                                    <div className="p-[10px] bg-[#f9f9f9] rounded-[20px]">
                                        <img
                                            className="min-w-[20px] w-5 h-5"
                                            src={ChatIcon}
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
                                        <p className=" font-ggsansNormal text-[#313338] leading-5">
                                            {item.text}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="mb-6 pt-6 border-t border-[#06060714]">
                        <div>
                            <h2 className="mb-2 text-xl font-ggsans leading-6">
                                About
                            </h2>
                            {loaderServerData.about.map((paragraph, index) => {
                                return (
                                    <p
                                        className={
                                            (index !== 0 && "mt-2 ") +
                                            "text-base font-ggsansNormal leading-5"
                                        }
                                        key={index}
                                    >
                                        {paragraph}
                                    </p>
                                );
                            })}
                        </div>
                        <div className="mt-6">
                            <h2 className="mb-2 text-xl font-ggsans leading-6">
                                Supported Languages
                            </h2>
                            <div className="flex">
                                {loaderServerData.supportLanguage.map(
                                    (language, index) => {
                                        return (
                                            <p
                                                className="mr-3 text-base font-ggsansNormal leading-5"
                                                key={index}
                                            >
                                                {language}
                                            </p>
                                        );
                                    }
                                )}
                            </div>
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
                        {loaderServerData.category.main.map((item, index) => {
                            const categoryPath = item
                                .replace(/ /g, "")
                                .toLowerCase();
                            return (
                                <Link
                                    to={"/servers/" + categoryPath}
                                    onClick={() => location.reload()}
                                    className="h-8 mb-2 mr-2 px-4 flex items-center bg-[#f9f9f9] rounded cursor-pointer"
                                    key={index}
                                >
                                    <p className=" text-sm font-ggsansNormal leading-[18px]">
                                        {item}
                                    </p>
                                </Link>
                            );
                        })}
                        {loaderServerData.category.sub.map((item, index) => {
                            return (
                                <div
                                    className="h-8 mb-2 mr-2 px-4 flex items-center bg-[#f9f9f9] rounded"
                                    key={index}
                                >
                                    <p className=" text-sm font-ggsansNormal leading-[18px]">
                                        {item}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                    {hasSocial && (
                        <h3 className="mt-8 mb-2 text-xs font-semibold font-ggsansNormal leading-4">
                            SOCIAL
                        </h3>
                    )}
                    <div className="-mb-2 -mr-2 flex flex-wrap">
                        {loaderServerData.social?.map((item, index) => {
                            return (
                                <a
                                    className="w-10 h-10 mb-2 mr-2 flex justify-center items-center bg-[#f9f9f9] rounded-full"
                                    href={item.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    key={index}
                                >
                                    <img
                                        className="w-6 h-6"
                                        src={SocialIcons[item.media]}
                                        alt=""
                                    />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

DesktopComponent.propTypes = {
    loaderServerData: PropTypes.object.isRequired,
    hasSocial: PropTypes.bool.isRequired,
    location: PropTypes.object.isRequired,
};

const MobileComponent = ({ loaderServerData, location, hasSocial }) => {
    return (
        <>
            <section className="hidden w-full mt-[26px] mb-20 px-10 max-tablet991:block">
                <div className="flex">
                    <img
                        className="w-12 h-12 object-cover rounded-lg"
                        src={loaderServerData.icon}
                        alt=""
                    />
                    <div className="ml-4 flex flex-col">
                        <div className="flex items-center">
                            {(loaderServerData.verified ||
                                loaderServerData.partnered) && (
                                <div className="relative w-4 h-4 mr-2 mb-2">
                                    {loaderServerData.verified ||
                                    (loaderServerData.verified &&
                                        loaderServerData.partnered) ? (
                                        <VerifiedIconComponent />
                                    ) : (
                                        loaderServerData.partnered && (
                                            <PartneredIconComponent />
                                        )
                                    )}
                                </div>
                            )}
                            <h1 className="mb-1 text-xl font-ggsans leading-6">
                                {loaderServerData.name}
                            </h1>
                        </div>
                        <p className="mb-3 text-xs font-ggsansNormal text-[#4e5058] leading-[18px]">
                            {loaderServerData.description}
                        </p>
                        <div className="mb-6 flex items-center">
                            <span className="w-2 h-2 mr-2 bg-secondary-s3 rounded-full"></span>
                            <p className="mr-4 text-xs font-semibold font-ggsansNormal text-[#4e5058]">
                                {loaderServerData.online} Online
                            </p>
                            <span className="w-2 h-2 mr-2 bg-[#c4c9ce] rounded-full"></span>
                            <p className="mr-4 text-xs font-semibold font-ggsansNormal text-[#4e5058]">
                                {loaderServerData.members} Members
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mb-[24px] pt-[24px] border-t border-[#06060714]">
                    {loaderServerData.joinReason.map((item, index) => {
                        return (
                            <div
                                className={
                                    (index % 2 === 0
                                        ? "col-start-1"
                                        : "col-start-7") +
                                    " mb-6 flex items-center col-span-6"
                                }
                                key={index}
                            >
                                <div className="p-[10px] bg-[#f9f9f9] rounded-[20px]">
                                    <img
                                        className="min-w-[20px] w-5 h-5"
                                        src={ChatIcon}
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
                                    <p className=" font-ggsansNormal text-[#313338] leading-5">
                                        {item.text}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="mb-6 pt-6 border-t border-[#06060714]">
                    <div>
                        <h2 className="mb-2 text-xl font-ggsans leading-6">
                            About
                        </h2>
                        {loaderServerData.about.map((paragraph, index) => {
                            return (
                                <p
                                    className={
                                        (index !== 0 ? "mt-2" : "") +
                                        " text-sm font-ggsansNormal leading-[18px]"
                                    }
                                    key={index}
                                >
                                    {paragraph}
                                </p>
                            );
                        })}
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
                <div className="mb-6 pt-6 border-t border-[#06060714]">
                    <h3 className="mb-2 text-xs font-semibold font-ggsansNormal leading-4">
                        CATEGORIES
                    </h3>
                    <div className="mb-6 flex flex-wrap">
                        {loaderServerData.category.main.map((item, index) => {
                            const categoryPath = item
                                .replace(/ /g, "")
                                .toLowerCase();
                            return (
                                <Link
                                    to={"/servers/" + categoryPath}
                                    onClick={() => location.reload()}
                                    className="h-8 mb-2 mr-2 px-4 flex items-center bg-[#f9f9f9] rounded cursor-pointer"
                                    key={index}
                                >
                                    <p className=" text-sm font-ggsansNormal leading-[18px]">
                                        {item}
                                    </p>
                                </Link>
                            );
                        })}
                        {loaderServerData.category.sub.map((item, index) => {
                            return (
                                <div
                                    className="h-8 mb-2 mr-2 px-4 flex items-center bg-[#f9f9f9] rounded"
                                    key={index}
                                >
                                    <p className=" text-sm font-ggsansNormal leading-[18px]">
                                        {item}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                    {hasSocial && (
                        <h3 className="mb-2 text-xs font-semibold font-ggsansNormal leading-4">
                            SOCIAL
                        </h3>
                    )}
                    <div className="mb-6 flex flex-wrap">
                        {loaderServerData.social?.map((item, index) => {
                            return (
                                <a
                                    className="w-10 h-10 mb-2 mr-2 flex justify-center items-center bg-[#f9f9f9] rounded-full"
                                    href={item.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    key={index}
                                >
                                    <img
                                        className="w-6 h-6"
                                        src={SocialIcons[item.media]}
                                        alt=""
                                    />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </section>
            <div className="fixed w-full bg-white bottom-0 tablet991:hidden">
                <button className="relative min-w-[96px] min-h-[38px] w-[calc(100%-48px)] my-4 mx-6 py-0.5 px-4 bg-secondary-s1 rounded">
                    <span className="mx-auto font-ggsansNormal text-sm text-white leading-4">
                        Join Server
                    </span>
                </button>
            </div>
        </>
    );
};

MobileComponent.propTypes = {
    loaderServerData: PropTypes.object.isRequired,
    hasSocial: PropTypes.bool.isRequired,
    location: PropTypes.object.isRequired,
};
