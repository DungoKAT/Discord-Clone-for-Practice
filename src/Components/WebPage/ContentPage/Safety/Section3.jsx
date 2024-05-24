import PropTypes from "prop-types";
import ArrowButtonRight from "../../../../assets/SafetyPage/ArrowButtonRight.svg";
import SafetySec2Pic7 from "../../../../assets/SafetyPage/SafetySec2Pic7.svg";

const Section3 = ({ safetyCenter }) => {
    return (
        <section className="w-full pt-[100px] pb-10 bg-primary-w5 max-tablet767:pt-12 max-tablet991:pt-[60px] max-tablet991:pb-5">
            <div
                className="max-w-[980px] w-[90%] mb-[60px] mx-auto flex flex-col justify-center 
                max-tablet767:mb-[60px] max-tablet991:mb-5"
            >
                {safetyCenter.map((item, index) => {
                    return (
                        <div key={index}>
                            <div
                                className="w-full grid grid-cols-[1fr,.94fr] gap-[54px] cursor-pointer 
                                max-tablet767:grid-cols-1
                                max-tablet991:grid-cols-2 max-tablet991:gap-8"
                            >
                                <div className="w-full flex flex-col justify-center">
                                    <h2
                                        className="text-5xl font-bold font-gintoNormal text-primary-b4 leading-[56px]
                                        max-tablet767:text-[32px] 
                                        max-tablet991:text-[42px] max-tablet991:leading-[120%]"
                                    >
                                        {item.hub}
                                    </h2>
                                    <p
                                        className="mt-5 mb-5 text-base font-ggsansNormal text-[#50555f] 
                                        max-mobile479:mt-4
                                        max-tablet991:mb-[10px]"
                                    >
                                        {item.paragraph}
                                    </p>
                                    <div className="mt-1 flex justify-start items-center max-tablet991:mt-[10px]">
                                        <p className="text-base font-bold font-ggsansNormal text-primary-b4">
                                            Explore more
                                        </p>
                                        <img
                                            className="ml-3"
                                            src={ArrowButtonRight}
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <img
                                    className={
                                        (index % 2 === 0
                                            ? "order-last"
                                            : "order-first") +
                                        " w-full rounded-lg max-tablet767:order-first"
                                    }
                                    src={item.image}
                                    alt=""
                                />
                            </div>
                            <div className=" w-0 pb-[72px]"></div>
                        </div>
                    );
                })}
                <div className="w-full grid grid-cols-[1fr,.94fr] gap-[54px] cursor-pointer max-tablet767:grid-cols-1 max-tablet991:grid-cols-2 max-tablet991:gap-x-8">
                    <div className="w-full flex flex-col justify-center">
                        <h2
                            className="pb-5 text-5xl font-bold font-gintoNormal text-primary-b4 leading-[56px]
                            max-tablet767:text-[32px] 
                            max-tablet991:text-[42px] max-tablet991:leading-[120%]"
                        >
                            Teen Charter
                        </h2>
                        <p
                            className="mb-5 text-base font-ggsansNormal text-[#50555f]
                            max-mobile479:mt-4
                            max-tablet991:mb-[10px]"
                        >
                            We work to center youth voices in our product design
                            and policies. Now we&apos;re collaborating with
                            teens around the world on a charter to make Discord
                            a better place to hang out.
                        </p>
                        <div className="mt-1 flex justify-start items-center max-tablet991:mt-[10px]">
                            <p className="text-base font-bold font-ggsansNormal text-primary-b4">
                                Explore more
                            </p>
                            <img
                                className="ml-3"
                                src={ArrowButtonRight}
                                alt=""
                            />
                        </div>
                    </div>
                    <img
                        className="max-w-none w-[112%] rounded-lg max-tablet767:order-first max-tablet991:w-full"
                        src={SafetySec2Pic7}
                        alt=""
                    />
                </div>
            </div>
        </section>
    );
};

Section3.propTypes = {
    safetyCenter: PropTypes.array.isRequired,
};

export default Section3;
