import PropTypes from "prop-types";

const ServerCategory = ({
    icon,
    categoryName,
    quantity,
    categorySelected,
    setCategorySelected,
}) => {
    const selectedCategory = {
        icon: icon,
        categoryName: categoryName,
        quantity: quantity,
    };

    return (
        <div className="w-full">
            <div
                className={
                    (categorySelected.categoryName === categoryName
                        ? "bg-[#e1e1e4] "
                        : "hover:bg-[#e7e9eb] ") +
                    "mb-3 mr-2 py-[11px] px-[14px] flex items-center rounded-[4px] cursor-pointer transition-all"
                }
                onClick={() => setCategorySelected(selectedCategory)}
            >
                <img className="max-w-5 max-h-5 mr-[14px]" src={icon} alt="" />
                <div
                    className={
                        (categorySelected.categoryName === categoryName
                            ? "font-semibold "
                            : "font-normal ") +
                        "w-full flex justify-between font-ggsansNormal leading-5"
                    }
                >
                    <p className="">{categoryName}</p>
                    <p className="">{quantity}</p>
                </div>
            </div>
        </div>
    );
};

ServerCategory.propTypes = {
    icon: PropTypes.string.isRequired,
    categoryName: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    categorySelected: PropTypes.object.isRequired,
    setCategorySelected: PropTypes.func.isRequired,
};

export default ServerCategory;
