import { useState } from "react";
// components
import Header from "./Header";
import SearchBar from "./SearchBar";
import ServerCategory from "./ServerCategory";
import CommuServer from "./CommuServer";
// assets
import AllIcon from "../../../../assets/DiscoverPage/CommuCategory/AllIcon.svg";
import GamingIcon from "../../../../assets/DiscoverPage/CommuCategory/GamingIcon.svg";
import EntertainmentIcon from "../../../../assets/DiscoverPage/CommuCategory/EntertainmentIcon.svg";
import EducationIcon from "../../../../assets/DiscoverPage/CommuCategory/EducationIcon.svg";
import ScienceAndTechIcon from "../../../../assets/DiscoverPage/CommuCategory/ScienceAndTechIcon.svg";
import MusicIcon from "../../../../assets/DiscoverPage/CommuCategory/MusicIcon.svg";

const DiscoverPage = () => {
    const category = [
        {
            icon: AllIcon,
            categoryName: "All",
            quantity: 100,
        },
        {
            icon: GamingIcon,
            categoryName: "Gaming",
            quantity: 20,
        },
        {
            icon: EntertainmentIcon,
            categoryName: "Entertainment",
            quantity: 20,
        },
        {
            icon: EducationIcon,
            categoryName: "Education",
            quantity: 20,
        },
        {
            icon: ScienceAndTechIcon,
            categoryName: "Science & Tech",
            quantity: 20,
        },
        {
            icon: MusicIcon,
            categoryName: "Music",
            quantity: 20,
        },
    ];
    const [categorySelected, setCategorySelected] = useState(category[0]);

    return (
        <div className="w-full">
            <Header />
            <section className="w-full flex flex-col items-center">
                <SearchBar />
                <div className="max-w-[1260px] w-full h-[2200px] px-10 grid grid-cols-12 gap-x-5">
                    <div className="col-start-2 col-span-3">
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
                    <div className="col-start-5 col-span-7">
                        <h1 className="mb-4 text-xl font-ggsans leading-6">
                            {categorySelected.quantity} Results Found
                        </h1>
                        <CommuServer />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DiscoverPage;
