import { Link, useSearchParams } from "react-router-dom";
import PropTypes from "prop-types";

const ServerCategory = ({
    icon,
    categoryName,
    quantity,
    pathname,
    categorySelected,
    inputSearchParams,
}) => {
    const [searchParams, setSearchParams] = useSearchParams();
    console.log("Category Selected: ", categorySelected.categoryName);
    // console.log("Category: ", categoryName);
    return (
        <div className="cursor-pointer">
            <Link
                to={
                    inputSearchParams !== ""
                        ? `${pathname}?query=${inputSearchParams}`
                        : pathname
                }
                className={
                    (categorySelected.categoryName === categoryName
                        ? "bg-[#e1e1e4] pointer-events-none"
                        : "hover:bg-[#e7e9eb] max-tablet991:bg-primary-w4") +
                    " mb-3 mr-2 py-[11px] px-[14px] flex items-center rounded transition-all max-tablet991:rounded-[8px]"
                }
                onClick={() => {
                    searchParams.has("offset") && searchParams.delete("offset");
                    setSearchParams(searchParams);
                }}
            >
                <img
                    className={
                        (categorySelected.categoryName !== categoryName &&
                            "opacity-70") + " max-w-5 max-h-5 mr-[14px]"
                    }
                    src={icon}
                    alt=""
                />
                <div
                    className={
                        (categorySelected.categoryName === categoryName
                            ? "font-semibold "
                            : "font-normal ") +
                        " w-full flex justify-between font-ggsansNormal leading-5"
                    }
                >
                    <p className="mr-2">{categoryName}</p>
                    <p>{quantity}</p>
                </div>
            </Link>
        </div>
    );
};

ServerCategory.propTypes = {
    icon: PropTypes.string.isRequired,
    categoryName: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    pathname: PropTypes.string.isRequired,
    categorySelected: PropTypes.object.isRequired,
    inputSearchParams: PropTypes.string.isRequired,
};

export default ServerCategory;
