import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import ArrowButtonRight from "../../../../assets/SafetyPage/ArrowButtonRight.svg";
import SafetySec2Pic7 from "../../../../assets/SafetyPage/SafetySec2Pic7.svg";

const Section3 = ({ safetyCenter }) => {
    return (
        <section className="w-full pt-[100px] pb-10 bg-primary-w5">
            <div className="max-w-[980px] w-full h-full mb-[60px] mx-[470px] flex flex-col justify-between">
                {safetyCenter.map((item, index) => {
                    return (
                        <div key={index}>
                            <Link
                                to={"/safety-" + item.path}
                                className="w-full grid grid-cols-[1fr,.94fr] gap-x-[54px]"
                            >
                                <img
                                    className={
                                        index % 2 === 1
                                            ? "rounded-lg"
                                            : "hidden"
                                    }
                                    src={item.image}
                                    alt=""
                                />
                                <div className="w-full flex flex-col justify-center">
                                    <h2 className="pb-5 text-5xl font-bold font-gintoNormal leading-[56px]">
                                        {item.hub}
                                    </h2>
                                    <p className="mb-5 text-base font-ggsansNormal">
                                        {item.paragraph}
                                    </p>
                                    <div className="mt-1 flex justify-start items-center">
                                        <p className="text-base font-bold font-ggsansNormal text-primary-b4">
                                            Explore more
                                        </p>
                                        <img
                                            className=" ml-3"
                                            src={ArrowButtonRight}
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <img
                                    className={
                                        index % 2 === 0
                                            ? "rounded-lg"
                                            : "hidden"
                                    }
                                    src={item.image}
                                    alt=""
                                />
                            </Link>
                            <div className=" w-0 pb-[72px]"></div>
                        </div>
                    );
                })}

                <Link
                    to="/safety-teen-charter"
                    className="w-full grid grid-cols-[1fr,.94fr] gap-x-[54px]"
                >
                    <div className="w-full flex flex-col justify-center">
                        <h2 className="pb-5 text-5xl font-bold font-gintoNormal text-primary-b4 leading-[56px]">
                            Teen Charter
                        </h2>
                        <p className="mb-5 text-base font-ggsansNormal text-[#50555f]">
                            We work to center youth voices in our product design
                            and policies. Now we&apos;re collaborating with
                            teens around the world on a charter to make Discord
                            a better place to hang out.
                        </p>
                        <div className="mt-1 flex justify-start items-center">
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
                        className="max-w-none w-[112%] rounded-lg"
                        src={SafetySec2Pic7}
                        alt=""
                    />
                </Link>
            </div>
        </section>
    );
};

Section3.propTypes = {
    safetyCenter: PropTypes.array.isRequired,
};

export default Section3;
