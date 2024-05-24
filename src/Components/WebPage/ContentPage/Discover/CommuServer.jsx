import {
    Link,
    useLoaderData,
    useLocation,
    useNavigation,
    useSearchParams,
    useOutletContext,
} from "react-router-dom";
import PropTypes from "prop-types";
import VerifiedIconComponent from "./VerifiedIconComponent";
import PartneredIconComponent from "./PartneredIconComponent";
import NotFoundServerImage from "../../../../assets/DiscoverPage/CommuServers/NotFoundServerImage.svg";
import { useEffect, useState } from "react";

const CommuServer = () => {
    const loaderCategoryServers = useLoaderData();
    const location = useLocation();
    const navigation = useNavigation();
    const outletContext = useOutletContext();
    const [searchParams] = useSearchParams({ offset: 0 });
    const hasOffset = searchParams.has("offset");
    const currentOffset = hasOffset ? parseInt(searchParams.get("offset")) : 0;
    const [serversInPage, setServersInPage] = useState([]);

    useEffect(() => {
        const serversPerPage = 8;
        const pagination = () => {
            const pages = Math.ceil(
                loaderCategoryServers.length / serversPerPage
            );
            const newFoundServers = Array.from(
                { length: pages },
                (data, index) => {
                    const start = index * serversPerPage;
                    return loaderCategoryServers.slice(
                        start,
                        start + serversPerPage
                    );
                }
            );
            return newFoundServers;
        };
        const page = currentOffset / serversPerPage;
        setServersInPage(pagination()[page]);
    }, [
        loaderCategoryServers,
        searchParams,
        hasOffset,
        currentOffset,
        setServersInPage,
    ]);

    return (
        <div className="col-start-5 col-span-7 max-tablet991:col-start-1 max-tablet991:col-span-full">
            <h1 className="mb-4 text-xl font-ggsans leading-6 max-tablet991:hidden">
                {loaderCategoryServers.length} Results Found{" "}
                {outletContext !== "All" && `for ${outletContext}`}
            </h1>
            {navigation.state === "loading" ? (
                <LoadingSkeletonServer />
            ) : loaderCategoryServers.length === 0 ? (
                <NotFoundServer />
            ) : (
                <ServerFound
                    serversInPage={serversInPage}
                    location={location}
                />
            )}
        </div>
    );
};

const NotFoundServer = () => {
    return (
        <div className="mt-[92px] mb-[42px] flex flex-col justify-center items-center max-tablet991:mt-[42px] max-tablet991:mb-0">
            <img
                className="w-[488px] mb-[60px] max-tablet991:w-[400px]"
                src={NotFoundServerImage}
                alt=""
            />
            <h3 className="font-ggsansNormal font-semibold text-[clamp(18px,3vw,32px)] leading-[120%]">
                Oh no, there&apos;s nothing here!
            </h3>
        </div>
    );
};

const LoadingSkeletonServer = () => {
    return (
        <div>
            <div className="w-full h-[140px] mb-10 bg-[#eeeff1] rounded-lg"></div>
            <div className="w-full h-[140px] mb-10 bg-[#eeeff1] rounded-lg"></div>
            <div className="w-full h-[140px] mb-10 bg-[#eeeff1] rounded-lg"></div>
            <div className="w-full h-[140px] mb-10 bg-[#eeeff1] rounded-lg"></div>
            <div className="w-full h-[140px] mb-10 bg-[#eeeff1] rounded-lg"></div>
            <div className="w-full h-[140px] mb-10 bg-[#eeeff1] rounded-lg"></div>
            <div className="w-full h-[140px] mb-10 bg-[#eeeff1] rounded-lg"></div>
            <div className="w-full h-[140px] mb-10 bg-[#eeeff1] rounded-lg"></div>
        </div>
    );
};

const ServerFound = ({ serversInPage, location }) => {
    return (
        <>
            {serversInPage?.map((item, index) => {
                return (
                    <div
                        className="group inline-block w-[calc(100%+16px)] h-auto mb-5 p-2 rounded-lg hover:bg-[#e7e9eb] transition-colors cursor-pointer max-tablet991:mb-4"
                        key={index}
                    >
                        <Link
                            to={`/servers/${item.pathname}`}
                            onClick={() => location.reload()}
                            className="w-full flex"
                        >
                            <img
                                className="max-w-[256px] h-[144px] mr-4 object-cover rounded-lg max-tablet991:hidden"
                                src={item.coverImage}
                                alt=""
                            />
                            <div className="hidden max-tablet991:block">
                                <img
                                    className="w-10 h-10 mr-4 rounded-lg"
                                    src={item.icon}
                                    alt=""
                                />
                            </div>
                            <div className="flex flex-col">
                                <div className="mb-2 flex max-tablet991:mb-1">
                                    <img
                                        className="w-6 h-6 mr-2 rounded-lg max-tablet991:hidden"
                                        src={item.icon}
                                        alt=""
                                    />
                                    <h1 className="text-base max-tablet991:text-[17px] max-tablet991:leading-[18px]">
                                        {item.name}
                                    </h1>
                                </div>
                                <p className="mb-2 text-sm font-ggsansNormal leading-[18px]">
                                    {item.description}
                                </p>
                                <div className="flex">
                                    <p className=" text-xs font-ggsansNormal leading-4">
                                        {item.online.toLocaleString()} Online
                                    </p>
                                    <span className="w-1 h-1 my-auto mx-2 bg-[#6d6f78] rounded-full"></span>
                                    <p className=" text-xs font-ggsansNormal leading-4">
                                        {item.members.toLocaleString()} Members
                                    </p>
                                </div>
                                {(item.verified || item.partnered) && (
                                    <div className=" w-fit mt-auto mb-0 py-1 px-2 flex bg-[#ebebeb] group-hover:bg-[#d5d7d9] rounded transition-colors max-tablet991:hidden">
                                        <div className="relative w-4 h-4 mr-1 flex justify-center items-center">
                                            {item.verified ||
                                            (item.verified &&
                                                item.partnered) ? (
                                                <VerifiedIconComponent />
                                            ) : (
                                                item.partnered && (
                                                    <PartneredIconComponent />
                                                )
                                            )}
                                        </div>
                                        <p className="text-xs font-semibold font-ggsansNormal leading-4">
                                            {item.verified && item.partnered
                                                ? "VERIFIED & PARTNERED"
                                                : item.verified
                                                ? "VERIFIED"
                                                : item.partnered && "PARTNERED"}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </Link>
                    </div>
                );
            })}
        </>
    );
};

ServerFound.propTypes = {
    serversInPage: PropTypes.array,
    location: PropTypes.object.isRequired,
};
export default CommuServer;
