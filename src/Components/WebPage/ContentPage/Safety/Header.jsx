import PropTypes from "prop-types";
import SaftyHeroSec from "../../../../assets/SafetyPage/SafetyHeroSec.svg";

const Header = ({ safetyCenter }) => {
    return (
        <section className="w-full pt-[192px] pb-[66px] bg-secondary-s1 max-mobile479:pt-[120px]  max-tablet991:pt-[18vw] max-tablet991:pb-[10vw]">
            <div className="maxWidth1180">
                <div className="w-full grid grid-cols-[560px,auto] gap-x-4 max-tablet991:grid-cols-1 max-tablet991:grid-row-[auto,auto] max-tablet991:gap-y-10">
                    <div>
                        <h1
                            className="mt-10 mb-8 text-[50px] font-extrabold font-gintoNord text-white leading-none
                            max-mobile479:mt-0 max-mobile479:mb-6 max-mobile479:text-[32px] 
                            max-tablet991:mt-0 max-tablet991:text-[36px] 
                            max-desktop1440:mt-5"
                        >
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
                            className="relative min-w-[200%] w-full -left-24 max-tablet991:hidden max-desktop1440:min-w-[170%] max-desktop1440:-left-[42px]"
                            src={SaftyHeroSec}
                            alt=""
                        />
                    </div>
                </div>
                <div className="w-full pb-[90px] max-tablet991:hidden"></div>
                <div className="max-w-[979px] mx-auto grid grid-cols-3 grid-rows-2 gap-5 max-tablet991:grid-cols-2 max-tablet991:grid-rows-3">
                    {safetyCenter.map((item, index) => {
                        return (
                            <button
                                className="h-[100px] py-[37px] px-[50px] flex justify-center items-center bg-white shadow-[5px_5px_0_1px_#57F287] rounded-xl hover:bg-[#57f287] hover:shadow-primary-b4 transition-all duration-300
                                max-mobile479:p-[10px] max-mobile479:h-[62px]
                                max-tablet991:px-[30px]
                                max-desktop1280:px-[45px]
                                max-desktop1440:px-[50px]"
                                key={index}
                            >
                                <p className="text-lg font-extrabold font-gintoNord text-primary-b4 text-center leading-5 max-mobile479:text-[11px] max-tablet767:text-[16px]">
                                    {item.hub.toUpperCase()}
                                </p>
                            </button>
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
