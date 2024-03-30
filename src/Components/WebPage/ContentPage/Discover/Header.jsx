import HeroDiscoPicLeft from "../../../../assets/DiscoverPage/HeroDiscoPicLeft.svg";
import HeroDiscoPicRight from "../../../../assets/DiscoverPage/HeroDiscoPicRight.svg";

const Header = () => {
    return (
        <header className="relative w-full min-h-[400px] flex justify-center items-center mb-12 bg-heroDiscoBackground bg-center">
            <img
                className="absolute h-full -left-[1px]"
                src={HeroDiscoPicLeft}
                alt=""
            />
            <img
                className="absolute h-full -right-[1px]"
                src={HeroDiscoPicRight}
                alt=""
            />
            <div className="w-full mt-10 mx-[330px] text-center">
                <h1 className="text-[44px] font-extrabold font-gintoNord text-white leading-none">
                    FIND YOUR COMMUNITY ON DISCORD
                </h1>
                <p className="mt-4 text-base font-ggsansNormal text-white leading-[18px]">
                    From gaming, to music, to learning, there&apos;s a place for
                    you.
                </p>
            </div>
        </header>
    );
};

export default Header;
