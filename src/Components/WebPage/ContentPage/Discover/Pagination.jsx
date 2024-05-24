import { useSearchParams } from "react-router-dom";
import PropTypes from "prop-types";
import LeftArrow from "../../../../assets/DiscoverPage/LeftArrow.svg";
import RightArrow from "../../../../assets/DiscoverPage/RightArrow.svg";

const Pagination = ({ serversQuantity }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const hasOffset = searchParams.has("offset");
    const currentOffset = hasOffset ? parseInt(searchParams.get("offset")) : 0;
    const pages = Math.ceil(serversQuantity / 8);
    const setOffset = (offset) => {
        const serverSection = document.getElementById("server-section");
        serverSection.scrollIntoView();
        if (offset <= 0) {
            searchParams.delete("offset");
            setSearchParams(searchParams);
        } else {
            setSearchParams(
                (prev) => {
                    prev.set("offset", offset);
                    return prev;
                },
                { replace: true }
            );
        }
    };
    return (
        <div className="max-w-[1260px] w-full px-10 max-tablet767:px-6">
            <div className="w-full mt-[22px]">
                <nav className="mx-auto py-1 flex justify-center items-center">
                    <button
                        className={
                            (!hasOffset
                                ? "opacity-50 cursor-not-allowed"
                                : "opacity-100 cursor-pointer") +
                            " min-w-[28px] h-[38px] m-1 pr-3 pl-2 flex items-center rounded-[4px] hover:bg-[#ebedef]"
                        }
                        disabled={!hasOffset ? true : false}
                        onClick={() => {
                            setOffset(currentOffset - 8);
                        }}
                    >
                        <img
                            className="w-[14px] h-[14px] mr-1"
                            src={LeftArrow}
                            alt=""
                        />
                        <span className="font-ggsansNormal text-sm font-semibold text-[#060607] leading-[18px]">
                            Back
                        </span>
                    </button>
                    {Array.from({ length: pages }, (item, index) => {
                        return (
                            <button
                                className={
                                    (currentOffset === index * 8
                                        ? "text-white bg-secondary-s1"
                                        : "text-black bg-transparent hover:bg-[#ebedef]") +
                                    " min-w-[28px] h-[28px] m-1 p-1.5 flex justify-center items-center rounded-[14px] cursor-pointer"
                                }
                                onClick={() => setOffset(index * 8)}
                                key={index}
                                disabled={currentOffset === index * 8}
                            >
                                <span className="font-ggsansNormal text-base font-bold">
                                    {index + 1}
                                </span>
                            </button>
                        );
                    })}
                    <button
                        className={
                            (currentOffset === (pages - 1) * 8
                                ? "opacity-50 cursor-not-allowed"
                                : "opacity-100 cursor-pointer") +
                            " min-w-[28px] h-[38px] m-1 pr-2 pl-3 flex items-center rounded-[4px] hover:bg-[#ebedef]"
                        }
                        disabled={
                            currentOffset === (pages - 1) * 8 ? true : false
                        }
                        onClick={() => {
                            setOffset(currentOffset + 8);
                        }}
                    >
                        <span className="font-ggsansNormal text-sm font-semibold text-[#060607]">
                            Next
                        </span>
                        <img
                            className="w-[14px] h-[14px] ml-1"
                            src={RightArrow}
                            alt=""
                        />
                    </button>
                </nav>
            </div>
        </div>
    );
};

Pagination.propTypes = {
    serversQuantity: PropTypes.number.isRequired,
};

export default Pagination;
