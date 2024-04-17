import PropTypes from "prop-types";

const BannerBox = ({ banner, image, bannerCheck }) => {
    return (
        <div
            className={
                (bannerCheck === "Nitro Basic"
                    ? "bg-[linear-gradient(225deg,#007cc2,#5865f2)] "
                    : "bg-[linear-gradient(135deg,#8547c6,#b845c1,#ab5d8a)] ") +
                "max-w-[49%] w-full p-6 flex flex-col justify-start items-start rounded-lg " +
                "max-mobile479:px-5 " +
                "max-tablet767:mb-0 " +
                "max-tablet991:max-w-none max-tablet991:min-h-[360px] max-tablet991:mb-4"
            }
        >
            <img className=" mb-6" src={image} alt="" />
            {banner.map((data, index) => {
                return (
                    <div
                        className="mb-4 flex max-mobile479:justify-start
                        max-mobile991:flex-wrap max-mobile991:justify-center max-mobile991:items-center"
                        key={index}
                    >
                        <img
                            className="w-5 h-5 mt-1 mr-[10px] max-mobile479:mr-2"
                            src={data.icon}
                            alt=""
                        />
                        <p className="text-xl text-white font-ggsansNormal max-tablet767:text-base">
                            {data.text}
                        </p>
                    </div>
                );
            })}
            <button className="w-full mt-auto mb-0 py-[14px] px-4 bg-white text-xl font-ggsans rounded-full leading-6">
                Subscribe
            </button>
        </div>
    );
};

BannerBox.propTypes = {
    banner: PropTypes.array.isRequired,
    image: PropTypes.string.isRequired,
    bannerCheck: PropTypes.string.isRequired,
};

export default BannerBox;
