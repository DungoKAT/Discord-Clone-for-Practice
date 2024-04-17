import { useState } from "react";
import SearchIcon from "../../../../assets/DiscoverPage/SearchIcon.png";

const SearchBar = () => {
    const [isFocusInput, setIsFocusInput] = useState(false);

    return (
        <div className="max-w-[1260px] w-full px-10 grid grid-cols-12 gap-x-5 max-tablet767:px-6">
            <div
                className="h-[52px] mb-10 flex col-start-2 col-span-10 
                max-tablet991:h-10 max-tablet991:mb-3 max-tablet991:col-start-1 max-tablet991:col-span-12"
            >
                <div
                    className={
                        (isFocusInput
                            ? "shadow-[0px_0px_1px_1px_#5a42f1,0px_0px_1px_3px_#b9aff9] "
                            : "") +
                        "h-full mr-4 pr-4 flex flex-1 items-center bg-[#ebebeb] rounded-lg max-tablet991:mr-3 max-tablet991:pr-3 max-tablet991:text-sm"
                    }
                >
                    <div className="h-auto flex-1 bg-[#d9d9d9] rounded">
                        <input
                            className="w-full h-[26px] p-4 font-ggsansNormal bg-transparent focus:outline-none placeholder-gray-500 max-tablet991:p-3"
                            type="text"
                            placeholder="Explore communities"
                            maxLength={100}
                            onFocus={() => setIsFocusInput(true)}
                            onBlur={() => setIsFocusInput(false)}
                        />
                    </div>
                </div>
                <button className="w-[52px] h-full items-center bg-secondary-s1 rounded-lg hover:bg-secondary-s1Hover transition-colors max-tablet991:w-10">
                    <img className="w-5 mx-auto" src={SearchIcon} alt="" />
                </button>
            </div>
        </div>
    );
};

export default SearchBar;
