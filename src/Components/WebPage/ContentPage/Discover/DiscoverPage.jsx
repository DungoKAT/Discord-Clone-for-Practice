import { useState, useEffect } from "react";
import { useLoaderData, useLocation, Outlet } from "react-router-dom";
// components
import Header from "./Header";
import SearchBar from "./SearchBar";
import Category from "./Category";
import WhiteSection from "./WhiteSection";
import Pagination from "./Pagination";
// assets
import AllIcon from "../../../../assets/DiscoverPage/CommuCategory/AllIcon.svg";
import GamingIcon from "../../../../assets/DiscoverPage/CommuCategory/GamingIcon.svg";
import EntertainmentIcon from "../../../../assets/DiscoverPage/CommuCategory/EntertainmentIcon.svg";
import EducationIcon from "../../../../assets/DiscoverPage/CommuCategory/EducationIcon.svg";
import ScienceAndTechIcon from "../../../../assets/DiscoverPage/CommuCategory/ScienceAndTechIcon.svg";
import MusicIcon from "../../../../assets/DiscoverPage/CommuCategory/MusicIcon.svg";

const DiscoverPage = () => {
    const loaderAllServers = useLoaderData();
    const currentLocation = useLocation();
    const serversQuantity1 = (category) => {
        const foundServers = loaderAllServers.filter((server) =>
            server.category.main.includes(category)
        );
        return foundServers.length;
    };
    const [category, setCategory] = useState([
        {
            icon: AllIcon,
            categoryName: "All",
            quantity: loaderAllServers.length,
            pathname: "/servers",
        },
        {
            icon: GamingIcon,
            categoryName: "Gaming",
            quantity: serversQuantity1("Gaming"),
            pathname: "/servers/gaming",
        },
        {
            icon: EntertainmentIcon,
            categoryName: "Entertainment",
            quantity: serversQuantity1("Entertainment"),
            pathname: "/servers/entertainment",
        },
        {
            icon: EducationIcon,
            categoryName: "Education",
            quantity: serversQuantity1("Education"),
            pathname: "/servers/education",
        },
        {
            icon: ScienceAndTechIcon,
            categoryName: "Science & Tech",
            quantity: serversQuantity1("Science & Tech"),
            pathname: "/servers/science&tech",
        },
        {
            icon: MusicIcon,
            categoryName: "Music",
            quantity: serversQuantity1("Music"),
            pathname: "/servers/music",
        },
    ]);
    const [categorySelected, setCategorySelected] = useState(category[0]);
    const [inputSearchParams, setInputSearchParams] = useState("");

    useEffect(() => {
        const found = category.find(
            (category) => category.pathname === currentLocation.pathname
        );
        setCategorySelected(found);
    }, [category, currentLocation]);

    useEffect(() => {
        const serversQuantity2 = (category) => {
            const foundServers = loaderAllServers.filter((server) =>
                server.category.main.includes(category)
            );
            return foundServers.length;
        };
        setCategory([
            {
                icon: AllIcon,
                categoryName: "All",
                quantity: loaderAllServers.length,
                pathname: "/servers",
            },
            {
                icon: GamingIcon,
                categoryName: "Gaming",
                quantity: serversQuantity2("Gaming"),
                pathname: "/servers/gaming",
            },
            {
                icon: EntertainmentIcon,
                categoryName: "Entertainment",
                quantity: serversQuantity2("Entertainment"),
                pathname: "/servers/entertainment",
            },
            {
                icon: EducationIcon,
                categoryName: "Education",
                quantity: serversQuantity2("Education"),
                pathname: "/servers/education",
            },
            {
                icon: ScienceAndTechIcon,
                categoryName: "Science & Tech",
                quantity: serversQuantity2("Science & Tech"),
                pathname: "/servers/science&tech",
            },
            {
                icon: MusicIcon,
                categoryName: "Music",
                quantity: serversQuantity2("Music"),
                pathname: "/servers/music",
            },
        ]);
    }, [loaderAllServers, setCategory]);

    return (
        <div className="w-full" id="discover-page">
            <Header />
            <section
                className="w-full flex flex-col items-center"
                id="server-section"
            >
                <SearchBar setInputSearchParams={setInputSearchParams} />
                <div className="max-w-[1260px] w-full px-10 grid grid-cols-12 grid-rows-[auto,auto] gap-x-5 max-tablet767:px-6">
                    <Category
                        category={category}
                        categorySelected={categorySelected}
                        inputSearchParams={inputSearchParams}
                    />
                    <Outlet context={categorySelected.categoryName} />
                </div>
                {categorySelected.quantity > 8 && (
                    <Pagination serversQuantity={categorySelected.quantity} />
                )}
            </section>
            <section className="w-full mt-[120px] pt-[96px] pb-[72px] text-center bg-secondary-s1 max-tablet991:pt-10 max-tablet991:pb-6">
                <h4 className="mx-6 text-[32px] text-white leading-[120%] max-tablet991:text-[24px]">
                    Have a server you want to add to Discovery?
                </h4>
                <button className="my-6 py-[14.5px] px-[38.5px] font-ggsansNormal text-xl text-white bg-primary-b4 rounded-full leading-6">
                    Make Your Community Public
                </button>
            </section>
            <WhiteSection />
        </div>
    );
};

export default DiscoverPage;
