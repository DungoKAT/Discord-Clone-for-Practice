import PropTypes from "prop-types";

const PlatformCard = ({
    text,
    maxHeightBase,
    maxHeight1,
    maxHeight2,
    image,
    style,
}) => {
    return (
        <div
            className={
                `max-h-[${maxHeightBase}px] h-full p-14 flex flex-col items-center bg-primary-w5 rounded-2xl row-span-2 overflow-hidden ${style} ` +
                `max-mobile479:max-h-[${maxHeight1}px] max-mobile479:py-10 max-mobile479:px-5 ` +
                `max-tablet767:max-h-[${maxHeight2}px] `
            }
        >
            <h2
                className="mb-2 text-[32px] font-bold font-gintoNormal leading-[38px]
                max-tablet767:text-[24px] max-tablet767:leading-[22px]
                max-tablet991:text-[25px]"
            >
                {text}
            </h2>
            <button className="max-h-[56px] mt-[10px] mx-auto py-4 px-8 text-xl text-white font-ggsansNormal bg-primary-b4 rounded-full leading-6">
                Download
            </button>
            <img
                className="mt-16 max-mobile479:mt-[30px]
                max-tablet767:w-full max-tablet767:mt-10 max-tablet767:ml-0
                max-tablet991:max-w-none max-tablet991:w-[150%] max-tablet991:ml-[100px]"
                src={image}
                alt=""
            />
        </div>
    );
};

PlatformCard.propTypes = {
    text: PropTypes.string.isRequired,
    maxHeightBase: PropTypes.number.isRequired,
    maxHeight1: PropTypes.number.isRequired,
    maxHeight2: PropTypes.number.isRequired,
    image: PropTypes.node.isRequired,
    style: PropTypes.string,
};

export default PlatformCard;
