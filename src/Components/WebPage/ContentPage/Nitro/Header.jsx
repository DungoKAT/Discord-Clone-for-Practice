import HeroIcon from "../../../../assets/NitroPage/HeroIcon.webp";
import HeroVideo from "../../../../assets/NitroPage/HeroVideo.mp4";

const Header = () => {
    return (
        <header
            className="relative w-full h-[38vw] flex flex-col justify-center bg-heroPatternNitro bg-no-repeat bg-cover
            max-mobile479:pb-[1000px]
            max-tablet767:w-full max-tablet767:pb-[1049px] max-tablet767:overflow-hidden
            max-tablet991:h-auto max-tablet991:pt-[200px] max-tablet991:pb-[1060px]
            max-desktop1920:h-[740px]"
        >
            <div
                className="relative max-w-[1120px] w-[90%] mx-auto flex z-10
                max-tablet991:flex-col max-tablet991:justify-start max-tablet991:items-center"
            >
                <div
                    className="max-w-[420px] flex flex-col
                    max-mobile479:max-w-[350px] max-mobile479:w-full
                    max-tablet991:justify-start max-tablet991:items-center max-tablet991:text-center"
                >
                    <h1
                        className=" mb-6 text-[50px] text-white font-extrabold font-gintoNord leading-none
                        max-mobile479:text-[32px]
                        max-tablet767:text-[36px]"
                    >
                        Unleash more fun with Nitro
                    </h1>
                    <p
                        className="mb-4 pr-6 text-xl text-white font-ggsansNormal
                        max-mobile479:text-base
                        max-tablet767:pr-0"
                    >
                        Subscribe to Nitro to upgrade your emoji, personalize
                        your profile,&nbsp;&nbsp;share bigger files, and so much
                        more.
                    </p>
                    <img
                        className="hidden absolute max-w-[320px] w-full top-auto bottom-[-246px] left-auto right-auto order-1
                        max-tablet991:flex"
                        src={HeroIcon}
                        alt=""
                    />
                </div>
                {/* <div
                    className="hidden relative w-full justify-center items-center
                    max-tablet991:flex "
                >
                    <img
                        className="absolute w-full -top-48 -right-10"
                        src={HeroIcon}
                        alt=""
                    />
                </div> */}
            </div>
            <div className="absolute w-full h-full overflow-hidden pointer-events-none">
                <div
                    className="max-tablet991:hidden 
                    absolute top-[-3%] left-[-25%]
                    desktop1280:top-[-12%]
                    desktop1440:top-[-16%] desktop1440:left-[-16%]
                    desktop1920:w-full desktop1920:top-[-9vw] desktop1920:left-[-8%]"
                >
                    <video
                        className="max-w-none w-[112%] h-[120%]"
                        autoPlay
                        loop
                        muted
                    >
                        <source src={HeroVideo} type="video/mp4"></source>
                    </video>
                </div>
            </div>
        </header>
    );
};

export default Header;
