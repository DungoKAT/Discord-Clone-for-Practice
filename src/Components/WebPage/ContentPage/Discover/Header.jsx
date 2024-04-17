import HeroDiscoPicLeft from "../../../../assets/DiscoverPage/HeroDiscoPicLeft.svg";
import HeroDiscoPicRight from "../../../../assets/DiscoverPage/HeroDiscoPicRight.svg";

const Header = () => {
    return (
        <header className="relative w-full min-h-[400px] mb-12 flex justify-center items-center bg-heroDiscoBackground bg-center max-tablet991:mb-[15px]">
            <img
                className="absolute h-full -left-[1px] max-tablet991:hidden"
                src={HeroDiscoPicLeft}
                alt=""
            />
            <img
                className="absolute h-full -right-[1px] max-tablet991:hidden"
                src={HeroDiscoPicRight}
                alt=""
            />
            <div className="w-full tablet991:mt-10 mx-[330px] text-center max-tablet991:mx-10 max-tablet991:text-left">
                <h1 className="text-[44px] font-extrabold font-gintoNord text-white leading-none max-tablet991:text-[28px]">
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
