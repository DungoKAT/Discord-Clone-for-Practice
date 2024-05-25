import { useState } from "react";
// Components
import Header from "./Header";
import BannerBox from "./BannerBox";
import PerkGroup1 from "./PerkGroup1";
import PerkGroup2 from "./PerkGroup2";
// Data
import Banners from "./Banners";
import QuestionBox from "./QuestionBox";
import Questions from "./Questions";
import Perks from "./Perks";
import Plans from "./Plans";
// Niro Banners
import NitroBasicText from "../../../../assets/NitroPage/NitroBanners/NitroBasicText.svg";
import NitroText from "../../../../assets/NitroPage/NitroBanners/NitroText.svg";
// Niro Plans
import NitroIconBlack from "../../../../assets/NitroPage/NitroPlans/NitroIconBlack.svg";
import NitroBasicIconBlack from "../../../../assets/NitroPage/NitroPlans/NitroBasicIconBlack.svg";
import NitroBasicSmallIcon from "../../../../assets/NitroPage/NitroPlans/NitroBasicSmallIcon.svg";
import MostPopular from "../../../../assets/NitroPage/NitroPlans/MostPopular.svg";
// Bottom Section
import RabbitSideWall from "../../../../assets/NitroPage/RabbitSideWall.svg";
import Twinkling from "../../../../assets/NitroPage/Twinkling.svg";
import BottomSectionPic1 from "../../../../assets/NitroPage/BottomSectionPic1.svg";
import BottomSectionPic2 from "../../../../assets/NitroPage/BottomSectionPic2.svg";

const NitroPage = () => {
    const tabs = [
        {
            text: "General",
            questionTab: Questions.general,
        },
        {
            text: "Payments",
            questionTab: Questions.payments,
        },
        {
            text: "Gifting and Promotions",
            questionTab: Questions.giftingAndPromotions,
        },
        {
            text: "Other",
            questionTab: Questions.other,
        },
    ];

    const [tabSelected, setTabSelected] = useState(tabs[2]);
    const [questionOpen, setQuestionOpen] = useState(-1);

    const questionWrapAnimated = (buttonText) => {
        const questionBoxWrap = document.getElementById("question-box-wrap");
        if (buttonText !== tabSelected.text) {
            questionBoxWrap.style.animation = "fade-in 0.3s ease-in";
            setTimeout(() => {
                questionBoxWrap.style.animation = "none";
            }, 300);
        }
    };

    return (
        <div className="w-full h-auto flex flex-col">
            <Header />
            <section
                className="relative w-full pt-[100px] pb-5 z-10
                max-mobile479:mt-20 max-mobile479:pt-[30px] max-mobile479:pb-[60px]
                max-tablet991:pt-[100px] max-tablet991:pb-20"
            >
                <div className="maxWidth1180">
                    <div
                        className="-mt-[230px] mb-[90px] flex justify-between gap-4
                        max-mobile479:mt-[-810px]
                        max-tablet767:mt-[-850px] max-tablet767:mb-20
                        max-tablet991:mt-[-860px] max-tablet991:flex-col"
                    >
                        <BannerBox
                            banner={Banners.nitroBasic}
                            image={NitroBasicText}
                            bannerCheck="Nitro Basic"
                        />
                        <BannerBox
                            banner={Banners.nitro}
                            image={NitroText}
                            bannerCheck="Nitro"
                        />
                    </div>
                </div>
                <div className="relative maxWidth1180 flex flex-col items-center">
                    <h2
                        className="text-5xl font-semibold font-gintoNormal text-center leading-[58px]
                        max-mobile479:leading-[42px]
                        max-tablet767:text-[32px] max-tablet767:leading-[140%]"
                    >
                        Popular Nitro Perks
                    </h2>
                    <PerkGroup1 perk={Perks.perkGroup1} />
                    <PerkGroup2 perk={Perks.perkGroup2} />
                    <div
                        className="max-w-[1180px] w-full mt-[100px] mb-[120px] mx-auto pt-[70px] pb-[100px] pl-[100px] pr-[80px] bg-primary-w5 rounded-lg
                        max-mobile479:w-[calc(100%+32px)] max-mobile479:my-[50px] max-mobile479:-mx-4 max-mobile479:pb-[60px]
                        max-tablet991:w-[calc(100%+60px)] max-tablet991:my-20 max-tablet991:mx-[-30px] max-tablet991:pt-10 max-tablet991:pb-20 max-tablet991:px-6 max-tablet991:shadow-[-20px_0_#f6f6f6,20px_0_#f6f6f6]"
                    >
                        <h2
                            className="max-w-[580px] mx-auto mb-20 text-5xl font-semibold font-gintoNormal text-center leading-tight
                            max-mobile479:leading-[42px]
                            max-tablet767:text-[32px] max-tablet767:leading-[140%]
                            max-tablet991:mb-10 max-tablet991:leading-[56px]"
                        >
                            Pick the plan that works best for you
                        </h2>
                        <div className="relative w-full max-mobile479:h-[108%] max-tablet991:h-[80%]">
                            <div
                                className="w-full pb-4 grid grid-cols-[2fr,minmax(200px,200px),minmax(200px,200px)] grid-rows-1 border-b border-[#c7ccd1]
                                max-tablet767:grid-cols-[2fr,1fr,1fr] 
                                max-tablet991:grid-cols-[1.5fr,minmax(200px,200px),minmax(186px,186px)] max-tablet991:gap-x-4"
                            >
                                <h3 className="text-xl font-semibold font-gintoNormal leading-[140%] max-tablet767:leading-none max-tablet767:opacity-0 max-tablet767:pointer-events-none">
                                    Features
                                </h3>
                                <div className="min-h-[52px] pt-[10px] flex justify-center items-start  max-tablet767:min-h-0">
                                    <img
                                        className="tablet767:hidden"
                                        src={NitroBasicSmallIcon}
                                        alt=""
                                    />
                                    <img
                                        className="max-tablet767:hidden"
                                        src={NitroBasicIconBlack}
                                        alt=""
                                    />
                                </div>
                                <div className="relative min-h-[52px] pt-[10px] pl-5 flex justify-center items-start max-tablet767:min-h-0 max-tablet991:pl-0">
                                    <img
                                        className="max-mobile479:top-[5px] max-tablet767:max-w-[51px]"
                                        src={NitroIconBlack}
                                        alt=""
                                    />
                                </div>
                            </div>
                            {Plans.map((plans, index) => {
                                return (
                                    <div
                                        className="w-full min-h-[68px] justify-center grid grid-cols-[2fr,minmax(180px,180px),minmax(180px,180px)] gap-x-[30px] border-b border-[#c7ccd1]
                                        max-mobile479:pt-[10px] max-mobile479:pb-[10px] max-mobile479:gap-x-[10px]
                                        max-tablet767:grid-cols-[2fr,1fr,1fr]
                                        max-tablet991:grid-cols-[1.5fr,minmax(180px,180px),minmax(186px,186px)]"
                                        key={index}
                                    >
                                        <p className="flex items-center text-lg font-ggsansNormal max-tablet767:text-base max-tablet767:leading-5  max-tablet991:text-[14px]">
                                            {plans.feature}
                                        </p>
                                        <div className="min-h-[52px] flex justify-center items-center">
                                            {plans.nitroBasic.includes(
                                                "/src"
                                            ) ? (
                                                <img
                                                    className="max-mobile479:max-w-[14px]"
                                                    src={plans.nitroBasic}
                                                    alt=""
                                                />
                                            ) : (
                                                <p className="text-base font-ggsans text-center max-mobile479:text-sm max-tablet767:font-ggsansNormal">
                                                    {plans.nitroBasic}
                                                </p>
                                            )}
                                        </div>
                                        <div className="min-h-[52px] flex justify-center items-center">
                                            {plans.nitro.includes("/") ? (
                                                <img
                                                    className="max-mobile479:max-w-[14px]"
                                                    src={plans.nitro}
                                                    alt=""
                                                />
                                            ) : (
                                                <p className="text-base font-ggsans text-center max-mobile479:text-sm max-tablet767:font-ggsansNormal">
                                                    {plans.nitro}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                            <div
                                className="relative w-full min-h-[68px] pt-6 justify-center grid grid-cols-[2fr,minmax(180px,180px),minmax(180px,180px)] gap-x-[30px]
                                max-mobile479:pb-[10px] max-mobile479:gap-x-[10px]
                                max-tablet767:pt-6 max-tablet767:top-[30px] max-tablet767:grid-cols-[0.5fr,1fr] max-tablet767:gap-y-6
                                max-tablet991:grid-cols-[1.5fr,minmax(180px,180px),minmax(186px,186px)] max-tablet991:gap-y-6"
                            >
                                <div className="w-full h-full max-tablet767:hidden"></div>
                                <img
                                    className="hidden max-tablet767:block"
                                    src={NitroBasicIconBlack}
                                    alt=""
                                />
                                <div className="min-h-[52px] flex justify-center items-center">
                                    <button className="w-full mb-[14px] py-[7px] px-4 text-sm text-white font-ggsans bg-secondary-s1 rounded-full leading-[24px] z-10">
                                        Subscribe Basic
                                    </button>
                                </div>
                                <img
                                    className="hidden max-tablet767:block"
                                    src={NitroIconBlack}
                                    alt=""
                                />
                                <div className="min-h-[52px] flex justify-center items-center">
                                    <button className="w-full mb-[14px] py-[7px] px-4 text-sm text-white font-ggsans bg-secondary-s1 rounded-full leading-[24px] z-10">
                                        Subscribe Nitro
                                    </button>
                                </div>
                            </div>
                            <div
                                className="absolute max-w-[210px] w-full h-[104%] -mt-[3%] -mr-4 top-0 bottom-0 left-auto right-0 border-2 border-[#b845c1] rounded-2xl pointer-events-none
                                max-tablet767:w-[25vw] max-tablet767:h-[90%]
                                max-tablet991:w-[30vw] max-tablet991:h-[103%] max-tablet991:-mr-3"
                            >
                                <img
                                    className="-mt-[13px] mx-auto max-tablet767:hidden"
                                    src={MostPopular}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <h2
                        className="text-5xl font-semibold font-gintoNormal text-center
                        max-mobile479:leading-[42px]
                        max-tablet767:text-[32px] max-tablet767:leading-[140%]"
                    >
                        Frequently Asked Questions
                    </h2>
                    <div className="relative w-full mt-10 max-tablet767:mt-4">
                        <div className="w-full mb-8 flex justify-center items-center max-mobile479:flex-wrap">
                            {tabs.map((button, index) => {
                                return (
                                    <button
                                        className={
                                            (tabSelected.text === button.text
                                                ? "text-secondary-s1 font-semibold font-ggsansNormal border-b border-secondary-s1"
                                                : "text-[#72767d]") +
                                            " mx-4 py-[9px] font-ggsansNormal"
                                        }
                                        key={index}
                                        onClick={() => {
                                            setTabSelected(tabs[index]);
                                            questionWrapAnimated(button.text);
                                            setQuestionOpen(-1);
                                        }}
                                    >
                                        {button.text}
                                    </button>
                                );
                            })}
                        </div>
                        <div className="relative w-full min-h-[550px] overflow-hidden">
                            <div
                                className="w-full h-full"
                                id="question-box-wrap"
                            >
                                {tabSelected.questionTab.map((data, index) => {
                                    return (
                                        <QuestionBox
                                            question={data.question}
                                            answer={data.answer}
                                            tabSelected={tabSelected.text}
                                            questionIndex={index}
                                            questionOpen={questionOpen}
                                            setQuestionOpen={setQuestionOpen}
                                            key={index}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <img
                    className="absolute top-auto bottom-[519px] left-auto right-0 max-tablet991:hidden"
                    src={RabbitSideWall}
                    alt=""
                />
                <img
                    className="absolute top-auto bottom-[170px] left-[2vw] max-tablet991:hidden max-desktop1440:left-0"
                    src={Twinkling}
                    alt=""
                />
            </section>
            <section
                className="relative w-full min-h-[406px] py-[92px] flex justify-center items-center bg-[linear-gradient(135deg,#8547c6_10%,#b845c1_50%,#ab5d8a)]
                max-tablet767:pt-20 max-tablet767:pb-20
                max-tablet991:min-h-0"
            >
                <div className="max-w-[612px] w-[90%] mx-auto flex flex-col justify-center items-center">
                    <h2
                        className="mb-8 text-[42px] font-semibold text-white font-gintoNormal leading-[50px]
                        max-mobile479:text-2xl
                        max-tablet767:mb-6 max-tablet767:text-[32px] max-tablet767:leading-10"
                    >
                        Unleash the fun with Nitro
                    </h2>
                    <button className="min-w-[193px] py-4 px-8 flex justify-center text-xl font-ggsansNormal bg-white rounded-full leading-6 max-mobile479:w-full">
                        Subscribe
                    </button>
                </div>
                <img
                    className="absolute max-w-[25%] left-0 max-tablet991:hidden"
                    src={BottomSectionPic1}
                    alt=""
                />
                <img
                    className="absolute max-w-[22%] right-0 max-tablet991:hidden"
                    src={BottomSectionPic2}
                    alt=""
                />
            </section>
        </div>
    );
};

export default NitroPage;
