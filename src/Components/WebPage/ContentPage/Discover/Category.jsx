import { useState } from "react";
import PropTypes from "prop-types";
import ServerCategory from "./ServerCategory";
import ArrowDownIcon from "../../../../assets/DiscoverPage/CommuCategory/ArrowDownIcon.svg";

const Category = ({ category, categorySelected, setCategorySelected }) => {
    const [isCategoriesModalOpen, setIsCategoriesModalOpen] = useState(false);

    return (
        <div className="col-start-2 col-span-3 max-tablet991:mb-[30px] max-tablet991:col-start-1 max-tablet991:col-span-full">
            <div className="w-full max-tablet991:hidden">
                {category.map((item, index) => {
                    return (
                        <ServerCategory
                            icon={item.icon}
                            categoryName={item.categoryName}
                            quantity={item.quantity}
                            categorySelected={categorySelected}
                            setCategorySelected={setCategorySelected}
                            index={index}
                            key={index}
                        />
                    );
                })}
            </div>
            <div className="hidden max-tablet991:flex">
                <div
                    className={
                        (isCategoriesModalOpen ? "block" : "hidden") +
                        " fixed w-screen h-screen top-0 left-0 bg-gray-800 opacity-50 z-10"
                    }
                    onClick={() => setIsCategoriesModalOpen(false)}
                ></div>
                <button
                    className="relative w-full py-[11px] px-3 flex justify-between items-center border border-[#4f545c99] rounded"
                    onClick={() => setIsCategoriesModalOpen(true)}
                >
                    <p className=" font-ggsansNormal text-sm text-[#4e5058] leading-[18px]">
                        {categorySelected.categoryName === "All"
                            ? "Categories"
                            : categorySelected.categoryName}
                    </p>
                    <img src={ArrowDownIcon} alt="" />
                    <div
                        className={
                            (isCategoriesModalOpen ? "flex" : "hidden") +
                            " absolute w-full p-4 pb-1 top-[70px] left-0 flex-wrap bg-white rounded z-10"
                        }
                    >
                        {category.map((item, index) => {
                            return (
                                <ServerCategory
                                    icon={item.icon}
                                    categoryName={item.categoryName}
                                    quantity={item.quantity}
                                    categorySelected={categorySelected}
                                    setCategorySelected={setCategorySelected}
                                    index={index}
                                    key={index}
                                />
                            );
                        })}
                    </div>
                </button>
            </div>
        </div>
    );
};

Category.propTypes = {
    category: PropTypes.array.isRequired,
    categorySelected: PropTypes.object.isRequired,
    setCategorySelected: PropTypes.func.isRequired,
};

export default Category;
