import PropTypes from "prop-types";

const CareersItems = ({ workFilters }) => {
    return (
        <>
            {Object.keys(workFilters).map((prop, index) => {
                const departmentName = workFilters[prop].departmentName;
                const careersItems = workFilters[prop].careers;
                if (index !== 0) {
                    return (
                        <div
                            className="job-item hidden"
                            data-department-name={departmentName}
                            key={index}
                        >
                            <h3 className="mt-20 mb-6 text-[32px] font-extrabold font-gintoNord text-primary-b4 leading-none">
                                {departmentName}
                            </h3>
                            <div className="w-full grid grid-cols-3 gap-4">
                                {careersItems.map((item, index) => {
                                    return (
                                        <div
                                            className="relative p-6 flex flex-col justify-between items-start bg-white rounded-2xl
                                                        shadow-[0_1px_1px_rgba(0,0,0,0.1)] hover:shadow-[0_12px_12px_0px_rgba(0,0,0,0.15)]
                                                        transition-all cursor-pointer"
                                            key={index}
                                        >
                                            <h3 className="my-10 text-[32px] font-bold font-gintoNormal leading-none">
                                                {item.careerName}
                                            </h3>
                                            <p className=" max-w-[75%] mt-5 mb-0 text-base font-ggsansNormal leading-6">
                                                {item.address}
                                            </p>
                                            <img
                                                className="absolute max-w-[40px] w-full top-auto bottom-6 left-auto right-6"
                                                src={item.icon}
                                                alt=""
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                }
            })}
        </>
    );
};

CareersItems.propTypes = {
    workFilters: PropTypes.object.isRequired,
};

export default CareersItems;
