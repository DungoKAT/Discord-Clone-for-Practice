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
        <div
            className={
                (categorySelected.categoryName === categoryName
                    ? "bg-[#e1e1e4] "
                    : "hover:bg-[#e7e9eb] max-tablet991:bg-primary-w4 ") +
                "mb-3 mr-2 py-[11px] px-[14px] flex items-center rounded cursor-pointer transition-all max-tablet991:rounded-[8px]"
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
                <p className="mr-2">{categoryName}</p>
                <p>{quantity}</p>
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
