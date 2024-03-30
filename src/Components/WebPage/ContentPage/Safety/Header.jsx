import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import SaftyHeroSec from "../../../../assets/SafetyPage/SafetyHeroSec.svg";

const Header = ({ safetyCenter }) => {
    return (
        <section className="w-full pt-[192px] pb-[66px] bg-secondary-s1">
            <div className="max-w-[1180px] w-full h-full mx-auto">
                <div className="w-full grid grid-cols-[560px,auto] gap-x-4">
                    <div>
                        <h1 className=" mt-10 mb-8 text-[50px] font-extrabold font-gintoNord text-white leading-[50px]">
                            DISCORD SAFETY CENTER
                        </h1>
                        <p className="mb-4 text-base font-ggsansNormal text-white">
                            Discord is the place to hang out with your friends
                            and build community around shared interests. We’re
                            committed to creating a safe, inclusive and
                            welcoming place.
                            <br />
                            <br />
                            That’s why we’re working to make Discord private and
                            safe, by design. Learn how to shape the best
                            experience for yourself and find the resources you
                            need, whether you’re a teen, parent, educator, or
                            long-time Discord user.
                        </p>
                    </div>
                    <div className="relative w-[300px] justify-self-center">
                        <img
                            className="relative min-w-[200%] w-full -left-24"
                            src={SaftyHeroSec}
                            alt=""
                        />
                    </div>
                </div>
                <div className="w-full pb-[90px]"></div>
                <div className="max-w-[979px] mx-auto grid grid-cols-3 grid-rows-2 gap-5">
                    {safetyCenter.map((item, index) => {
                        return (
                            <Link
                                to={"/safety-" + item.path}
                                className=" h-[100px] py-[37px] px-[50px] flex justify-center items-center bg-white shadow-[5px_5px_0_1px_#57F287] rounded-xl hover:bg-[#57f287] hover:shadow-primary-b4 transition-all duration-300"
                                key={index}
                            >
                                <p className=" text-lg font-extrabold font-gintoNord text-primary-b4 text-center leading-5">
                                    {item.hub.toUpperCase()}
                                </p>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

Header.propTypes = {
    safetyCenter: PropTypes.array.isRequired,
};

export default Header;
