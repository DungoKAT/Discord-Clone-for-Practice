import PropTypes from "prop-types";

const PerkGroup1 = ({ perk }) => {
    return (
        <div
            className="max-w-[1180px] w-full mt-[60px] grid grid-rows-2 grid-cols-2 gap-5
    max-tablet991:grid-cols-1 max-tablet991:mt-[30px]"
        >
            {perk.map((perk1, index) => {
                return (
                    <div
                        className="p-10 flex flex-col gap-y-8 justify-center items-center bg-primary-w5 rounded-lg
                    max-mobile479:justify-center
                    max-tablet767:gap-y-4
                    max-tablet991:min-h-[300px] max-tablet991:p-6"
                        key={index}
                    >
                        <h5
                            className={
                                `max-w-[${perk1.maxWidthTopic}px] mx-auto text-2xl font-semibold font-gintoNormal text-center ` +
                                "max-tablet767:text-[20px] max-tablet767:leading-8"
                            }
                        >
                            {perk1.topic}
                        </h5>
                        <img src={perk1.pic} alt="" />
                    </div>
                );
            })}
        </div>
    );
};

PerkGroup1.propTypes = {
    perk: PropTypes.object.isRequired,
};

export default PerkGroup1;
