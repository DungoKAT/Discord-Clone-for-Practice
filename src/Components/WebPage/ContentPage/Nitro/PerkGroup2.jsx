import { useState } from "react";
import PropTypes from "prop-types";

const PerkGroup2 = ({ perk }) => {
    const [isShowPerks, setIsShowPerks] = useState(false);
    return (
        <>
            <div
                className={
                    (isShowPerks
                        ? "max-tablet767:max-h-[1940px] max-tablet991:max-h-[980px] max-desktop1110:max-h-[728px] max-h-[704px] opacity-100"
                        : "max-h-0 opacity-0") +
                    " max-w-[1220px] w-[100%] -mx-5 py-5 grid grid-cols-3 grid-rows-[auto,auto] gap-5 transition-all duration-[350ms] overflow-hidden " +
                    "max-mobile479:-mx-4 max-mobile479:px-4 " +
                    "max-tablet767:grid-cols-1 " +
                    "max-tablet991:grid-cols-2"
                }
            >
                {perk.map((perk2, index) => {
                    return (
                        <div
                            className="py-10 px-6 flex flex-col gap-y-4 justify-start items-center bg-primary-w5 rounded-lg
                                    max-tablet991:min-h-[300px] max-tablet991:py-6"
                            key={index}
                        >
                            <div
                                className={
                                    index === 4
                                        ? "min-h-[118px]"
                                        : "min-h-[134px]"
                                }
                            >
                                <img src={perk2.pic} alt="" />
                            </div>
                            <div className="flex flex-col justify-center items-center gap-y-2">
                                <h5
                                    className={`mx-auto text-xl font-semibold font-gintoNormal text-center leading-6`}
                                >
                                    {perk2.topic}
                                </h5>
                                <p
                                    className={
                                        (index === 3
                                            ? "max-w-[240px] pl-[19px]"
                                            : index === 4
                                            ? "max-w-[185px] "
                                            : "max-w-[230px] pl-[9px]") +
                                        " text-sm font-ggsansNormal text-center"
                                    }
                                >
                                    {perk2.text}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="w-full flex justify-center">
                <button
                    className="pt-3 px-8 pb-[15px] bg-primary-b4 text-base text-white font-ggsans rounded-full z-10 max-mobile479:w-full max-mobile479:text-[20px]"
                    onClick={() => setIsShowPerks(!isShowPerks)}
                >
                    {isShowPerks ? "Show less perks" : "Show all perks"}
                </button>
            </div>
        </>
    );
};

PerkGroup2.propTypes = {
    perk: PropTypes.object.isRequired,
};

export default PerkGroup2;
