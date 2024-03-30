import PropTypes from "prop-types";

const PlatformCard = ({ text, height, image, style }) => {
    return (
        <div
            className={`w-[580px] h-[${height}px] p-14 flex flex-col items-center bg-primary-w5 rounded-2xl row-span-2 overflow-hidden ${style}`}
        >
            <h2 className=" mb-2 text-[32px] font-bold font-gintoNormal leading-10">
                {text}
            </h2>
            <button className="mt-[10px] mx-auto py-4 px-8 text-xl text-white font-ggsansNormal bg-primary-b4 rounded-full leading-6">
                Download
            </button>
            <img className=" mt-16" src={image} alt="" />
        </div>
    );
};

PlatformCard.propTypes = {
    text: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    image: PropTypes.node.isRequired,
    style: PropTypes.string,
};

export default PlatformCard;
