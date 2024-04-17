import PropTypes from "prop-types";
const WhiteSection = ({ image, topic, paragraph }) => {
    return (
        <section
            className="max-tablet991:pt-[60px]  
            pt-[120px] pb-[130px]"
        >
            <div className="maxWidth1180">
                <div
                    className="max-mobile479:gap-y-5
                    max-tablet991:flex max-tablet991:flex-col max-tablet991:justify-center
                    grid grid-cols-12 gap-x-5 gap-y-4"
                >
                    <div className="flex justify-center col-span-6">
                        <img src={image} alt="" />
                    </div>
                    <div className="flex flex-col justify-center col-start-8 col-span-4 text-primary-b4">
                        <h3
                            className="max-tablet767:text-2xl max-tablet767:text-left
                            max-tablet991:text-[32px] max-tablet991:leading-[130%]
                            text-5xl"
                        >
                            {topic}
                        </h3>
                        <p
                            className="mt-6 text-xl font-ggsansNormal
                            max-mobile479:text-base
                            max-tablet767:text-[17px] max-tablet767:leading-6"
                        >
                            {paragraph}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

WhiteSection.propTypes = {
    image: PropTypes.string.isRequired,
    topic: PropTypes.string.isRequired,
    paragraph: PropTypes.string.isRequired,
};

export default WhiteSection;
