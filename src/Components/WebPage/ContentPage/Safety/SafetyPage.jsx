import Header from "./Header";
import Section3 from "./Section3";
// assets
import TwinklingStarPink from "../../../../assets/SafetyPage/TwinklingStarPink.svg";
import TwinklingStarYellow from "../../../../assets/SafetyPage/TwinklingStarYellow.svg";
import TwinklingStarBlue from "../../../../assets/SafetyPage/TwinklingStarBlue.svg";
import TwinklingStarGreen from "../../../../assets/SafetyPage/TwinklingStarGreen.svg";
import TwinklingStarSkyblue from "../../../../assets/SafetyPage/TwinklingStarSkyblue.svg";
import SafetySec2Pic1 from "../../../../assets/SafetyPage/SafetySec2Pic1.svg";
import SafetySec2Pic2 from "../../../../assets/SafetyPage/SafetySec2Pic2.svg";
import SafetySec2Pic3 from "../../../../assets/SafetyPage/SafetySec2Pic3.svg";
import SafetySec2Pic4 from "../../../../assets/SafetyPage/SafetySec2Pic4.svg";
import SafetySec2Pic5 from "../../../../assets/SafetyPage/SafetySec2Pic5.svg";
import SafetySec2Pic6 from "../../../../assets/SafetyPage/SafetySec2Pic6.svg";
const SafetyPage = () => {
    const safetyCenter = [
        {
            hub: "Safety Library",
            paragraph:
                "Everything you could ever want to know about safety on Discord. Whether you’re a user, a moderator, or a parent, discover all of our tools and resources and how to use them.",
            image: SafetySec2Pic1,
            path: "library",
        },
        {
            hub: "Privacy Hub",
            paragraph:
                "Privacy is an essential part of feeling safe. No matter what, we build privacy into our products, and we will always try to let you know what's happening where and when, Learn more about what that means, including the data we collect and the tools to put you in control.",
            image: SafetySec2Pic2,
            path: "privacy",
        },
        {
            hub: "Parent Hub",
            paragraph:
                "Learn more about what we’re doing to help your teen stay safer on our platform, explore our Family Center tool, and download our Parent's Guide to Discord.",
            image: SafetySec2Pic3,
            path: "parents",
        },
        {
            hub: "Transparency Hub",
            paragraph:
                "Explore data, trends, and analyss intro the work done to help keep people on Discord safe. Transparency reports cover information about enforcement of our platform policies, as well as our response to legal, emergency, and intellectual property removal requests.",
            image: SafetySec2Pic4,
            path: "transparency",
        },
        {
            hub: "Safety News Hub",
            paragraph:
                "The latest news and updates on Discord’s Safety, Privacy, and Policy initiatives.",
            image: SafetySec2Pic5,
            path: "news",
        },
        {
            hub: "Policy Hub",
            paragraph:
                "Learn about our Community Guildlines, developed to help keep prople safe and make Discord the best place to hang out with friends.",
            image: SafetySec2Pic6,
            path: "policies",
        },
    ];

    return (
        <div className="w-full">
            <Header safetyCenter={safetyCenter} />
            <section className="w-full py-[95px]">
                <div className="relative max-w-[780px] mb-0 mx-auto">
                    <h1 className=" text-5xl font-bold font-gintoNormal text-primary-b4 text-center leading-[58px]">
                        Building Safer Spaces
                    </h1>
                    <div className="w-full h-[404px] mt-10 bg-black rounded-lg"></div>
                    <div className="absolute w-[117px] h-[81px] top-12 bottom-auto -left-[243px] right-auto">
                        <img
                            className="absolute -top-[23px] left-[16px]"
                            src={TwinklingStarPink}
                            alt=""
                        />
                        <img
                            className="absolute"
                            src={TwinklingStarYellow}
                            alt=""
                        />
                        <img
                            className="absolute top-[45px] -left-[32px]"
                            src={TwinklingStarSkyblue}
                            alt=""
                        />
                    </div>
                    <div className="absolute w-[81px] h-[76px] top-auto bottom-[35px] left-auto -right-[254px]">
                        <img
                            className="relative"
                            src={TwinklingStarGreen}
                            alt=""
                        />
                        <img
                            className="relative"
                            src={TwinklingStarBlue}
                            alt=""
                        />
                    </div>
                </div>
            </section>
            <Section3 safetyCenter={safetyCenter} />
        </div>
    );
};

export default SafetyPage;
