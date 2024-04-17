import { useState, useEffect } from "react";
import axios from "axios";
// components
import Header from "./Header";
import SearchBar from "./SearchBar";
import Category from "./Category";
import CommuServer from "./CommuServer";
// assets
import AllIcon from "../../../../assets/DiscoverPage/CommuCategory/AllIcon.svg";
import GamingIcon from "../../../../assets/DiscoverPage/CommuCategory/GamingIcon.svg";
import EntertainmentIcon from "../../../../assets/DiscoverPage/CommuCategory/EntertainmentIcon.svg";
import EducationIcon from "../../../../assets/DiscoverPage/CommuCategory/EducationIcon.svg";
import ScienceAndTechIcon from "../../../../assets/DiscoverPage/CommuCategory/ScienceAndTechIcon.svg";
import MusicIcon from "../../../../assets/DiscoverPage/CommuCategory/MusicIcon.svg";

const DiscoverPage = () => {
    const [serverData, setServerData] = useState([]);

    useEffect(() => {
        axios
            .get(
                "https://37d36d86-cec8-4380-abd2-67b1bd94b668-00-2ah1tranb08d9.riker.replit.dev/servers"
            )
            .then((response) => {
                setServerData(response.data);
            });
    }, []);
    console.log("Data: ", serverData);

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
                <div className="max-w-[1260px] w-full px-10 grid grid-cols-12 grid-rows-[auto,auto] gap-x-5 max-tablet767:px-6">
                    <Category
                        category={category}
                        categorySelected={categorySelected}
                        setCategorySelected={setCategorySelected}
                    />
                    <div className="col-start-5 col-span-7 max-tablet991:col-start-1 max-tablet991:col-span-full">
                        <h1 className="mb-4 text-xl font-ggsans leading-6 max-tablet991:hidden">
                            {categorySelected.quantity} Results Found
                        </h1>
                        {serverData.map((item, index) => {
                            return (
                                <CommuServer serverData={item} key={index} />
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DiscoverPage;
