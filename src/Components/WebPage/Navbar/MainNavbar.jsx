import { Link } from "react-router-dom";
import LogoText from "../../../assets/Nav&Footer/logo-text.svg";

const MainNavbar = () => {
    return (
        <div className="w-full h-20 absolute z-10">
            <div className="max-w-[1180px] w-full h-20 mx-auto flex justify-between items-center">
                <Link to="/">
                    <img src={LogoText} alt="" width={124} height={34} />
                </Link>
                <ul className="flex">
                    <Link
                        to="/download"
                        className=" font-ggsans mx-[10px] text-font-f1 p-[10px] hover:underline cursor-pointer"
                    >
                        Download
                    </Link>
                    <Link
                        to="/nitro"
                        className=" font-ggsans mx-[10px] text-font-f1 p-[10px] hover:underline cursor-pointer"
                    >
                        Nitro
                    </Link>
                    <Link
                        to="/servers"
                        className=" font-ggsans mx-[10px] text-font-f1 p-[10px] hover:underline cursor-pointer"
                    >
                        Discover
                    </Link>
                    <Link
                        to="/safety"
                        className=" font-ggsans mx-[10px] text-font-f1 p-[10px] hover:underline cursor-pointer"
                    >
                        Safety
                    </Link>
                    <li className=" font-ggsans mx-[10px] text-font-f1 p-[10px] hover:underline cursor-pointer">
                        Support
                    </li>
                    <li className=" font-ggsans mx-[10px] text-font-f1 p-[10px] hover:underline cursor-pointer">
                        Blog
                    </li>
                    <Link
                        to="/careers"
                        className=" font-ggsans mx-[10px] text-font-f1 p-[10px] hover:underline cursor-pointer"
                    >
                        Careers
                    </Link>
                </ul>
                <Link
                    to="/app"
                    className=" px-4 py-2 text-sm bg-white rounded-full leading-[22px]
                    hover:text-secondary-s1 hover:shadow-[0_15px_15px_0px_rgba(0,0,0,0.25)] transition"
                >
                    Open Discord
                </Link>
            </div>
        </div>
    );
};

export default MainNavbar;
