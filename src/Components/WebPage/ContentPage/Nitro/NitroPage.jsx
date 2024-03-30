import { useState } from "react";
import QuestionBox from "./QuestionBox";
import Questions from "./Questions";
import Banners from "./Banners";
import Perks from "./Perks";
import Plans from "./Plans";
// Nitro Hero Section
import HeroIcon2 from "../../../../assets/NitroPage/HeroIcon2.webp";
// Niro Banners
import NitroBasicText from "../../../../assets/NitroPage/NitroBanners/NitroBasicText.svg";
import NitroText from "../../../../assets/NitroPage/NitroBanners/NitroText.svg";
// Niro Plans
import NitroIconBlack from "../../../../assets/NitroPage/NitroPlans/NitroIconBlack.svg";
import NitroBasicIconBlack from "../../../../assets/NitroPage/NitroPlans/NitroBasicIconBlack.svg";
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

    const [isShowPerks, setIsShowPerks] = useState(false);
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
        console.log("Tab: ", tabSelected);
    };

    return (
        <div className="w-full h-auto flex flex-col">
            <header
                className={`relative w-full h-[38vw] flex flex-col justify-center bg-heroPatternNitro bg-center bg-cover`}
            >
                <div className="relative w-[1120px] mx-auto flex">
                    <div className="max-w-[420px]">
                        <h1 className=" mb-6 text-[50px] text-white font-extrabold font-gintoNord leading-none">
                            Unleash more fun with Nitro
                        </h1>
                        <p className="mb-4 pr-6 text-xl text-white font-ggsansNormal">
                            Subscribe to Nitro to upgrade your emoji,
                            personalize your profile,&nbsp;&nbsp;share bigger
                            files, and so much more.
                        </p>
                    </div>
                    <div className="relative w-full flex justify-center items-center">
                        <img
                            className="absolute w-full -top-48 -right-10"
                            src={HeroIcon2}
                            alt=""
                        />
                    </div>
                </div>
            </header>
            <section className="relative w-full pt-[100px] pb-5 z-10">
                <div className="w-[1180px] mx-auto">
                    <div className="-mt-[230px] mb-[90px] flex justify-between">
                        <div className="w-[49%] h-[416px] p-6 flex flex-col justify-start items-start bg-[linear-gradient(225deg,#007cc2,#5865f2)] rounded-lg">
                            <img
                                className=" mb-6"
                                src={NitroBasicText}
                                alt=""
                            />
                            {Banners.map((data, index) => {
                                if (index <= 4 && index != 1) {
                                    return (
                                        <div className="mb-4 flex" key={index}>
                                            <img
                                                className=" w-5 h-5 mt-1 mr-[10px]"
                                                src={data.icon}
                                                alt=""
                                            />
                                            <p className=" text-xl text-white font-ggsansNormal">
                                                {data.text}
                                            </p>
                                        </div>
                                    );
                                }
                            })}
                            <button className="w-full mt-auto mb-0 py-[14px] px-4 bg-white text-xl font-ggsans rounded-full leading-6">
                                Subscribe
                            </button>
                        </div>
                        <div className="w-[49%] h-[416px] p-6 flex flex-col justify-start items-start bg-[linear-gradient(135deg,#8547c6,#b845c1,#ab5d8a)] rounded-lg">
                            <img className=" mb-6" src={NitroText} alt="" />
                            {Banners.map((data, index) => {
                                if (index != 0 && index != 4) {
                                    return (
                                        <div className="mb-4 flex" key={index}>
                                            <img
                                                className=" w-5 h-5 mt-1 mr-[10px]"
                                                src={data.icon}
                                                alt=""
                                            />
                                            <p className=" text-xl text-white font-ggsansNormal">
                                                {data.text}
                                            </p>
                                        </div>
                                    );
                                }
                            })}
                            <button className="w-full mt-auto mb-0 py-[14px] px-4 bg-white text-xl font-ggsans rounded-full leading-6">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-[1180px] mx-auto flex flex-col items-center">
                    <h2 className=" text-5xl font-semibold font-gintoNormal text-center leading-[58px]">
                        Popular Nitro Perks
                    </h2>
                    <div className=" mt-[60px] grid grid-rows-2 grid-cols-2 gap-5">
                        {Perks[0].perkGroup1.map((perk1, index) => {
                            return (
                                <div
                                    className="w-[580px] h-[376px] p-10 flex flex-col gap-y-8 justify-center items-center bg-primary-w5 rounded-lg"
                                    key={index}
                                >
                                    <h5
                                        className={` max-w-[${perk1.maxWidthTopic}px] mx-auto text-2xl font-semibold font-gintoNormal text-center`}
                                    >
                                        {perk1.topic}
                                    </h5>
                                    <img src={perk1.pic} alt="" />
                                </div>
                            );
                        })}
                    </div>
                    <div
                        className={
                            (isShowPerks
                                ? " max-h-[1000px] opacity-100"
                                : " max-h-0 opacity-0") +
                            " w-[1220px] p-5 grid grid-rows-2 grid-cols-3 gap-5 transition-all duration-[350ms] overflow-hidden"
                        }
                    >
                        {Perks[0].perkGroup2.map((perk2, index) => {
                            return (
                                <div
                                    className="w-[380px] h-[322px] py-10 px-6 flex flex-col gap-y-4 justify-start items-center bg-primary-w5 rounded-lg"
                                    key={index}
                                >
                                    <img src={perk2.pic} alt="" />
                                    <div className="flex flex-col justify-center items-center gap-y-2">
                                        <h5
                                            className={`mx-auto text-xl font-semibold font-gintoNormal text-center`}
                                        >
                                            {perk2.topic}
                                        </h5>
                                        <p
                                            className={`max-w-[${perk2.maxWidthText}px] text-sm font-ggsansNormal text-center`}
                                        >
                                            {perk2.text}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="w-full flex justify-center">
                        <button
                            className=" pt-3 px-8  pb-[15px] bg-primary-b4 text-base text-white font-ggsans rounded-full z-10"
                            onClick={() => setIsShowPerks(!isShowPerks)}
                        >
                            {isShowPerks ? "Show less perks" : "Show all perks"}
                        </button>
                    </div>
                    <div className="relative w-full mt-[100px] mb-[120px] pt-[70px] pb-[100px] pl-[100px] pr-[80px] bg-primary-w5 rounded-lg">
                        <h2 className="max-w-[580px] mx-auto mb-20 text-5xl font-semibold font-gintoNormal text-center leading-tight">
                            Pick the plan that works best for you
                        </h2>
                        <div className="relative w-full">
                            <div className="w-full pb-4 grid grid-cols-[2fr,minmax(200px,200px),minmax(200px,200px)] border-b border-[#c7ccd1]">
                                <h3 className=" max-w-fit text-xl font-semibold font-gintoNormal leading-[140%]">
                                    Features
                                </h3>
                                <div className="min-h-[52px] pt-[10px] flex justify-center items-start">
                                    <img src={NitroBasicIconBlack} alt="" />
                                </div>
                                <div className="relative min-h-[52px] pt-[10px] pl-5 flex justify-center items-start">
                                    <img src={NitroIconBlack} alt="" />
                                </div>
                            </div>
                            {Plans.map((plans, index) => {
                                return (
                                    <div
                                        className="w-full min-h-[68px] justify-center grid grid-cols-[2fr,minmax(180px,180px),minmax(180px,180px)] gap-x-[30px] border-b border-[#c7ccd1]"
                                        key={index}
                                    >
                                        <p className="flex items-center text-lg font-ggsansNormal">
                                            {plans.feature}
                                        </p>
                                        <div className="flex justify-center items-center">
                                            {plans.nitroBasic.includes(
                                                "/src"
                                            ) ? (
                                                <img
                                                    src={plans.nitroBasic}
                                                    alt=""
                                                />
                                            ) : (
                                                <p className=" text-base font-ggsans">
                                                    {plans.nitroBasic}
                                                </p>
                                            )}
                                        </div>
                                        <div className="flex justify-center items-center">
                                            {plans.nitro.includes("/src") ? (
                                                <img src={plans.nitro} alt="" />
                                            ) : (
                                                <p className=" text-base font-ggsans">
                                                    {plans.nitro}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                            <div className="w-full min-h-[68px] pt-6 justify-center grid grid-cols-[2fr,minmax(180px,180px),minmax(180px,180px)] gap-x-[30px]">
                                <div className="w-full h-full"></div>
                                <div className="min-h-[52px] flex justify-center items-center">
                                    <button className="w-full mb-[14px] py-[7px] px-4 text-sm text-white font-ggsans bg-secondary-s1 rounded-full leading-[24px] z-10">
                                        Subscribe Basic
                                    </button>
                                </div>
                                <div className="min-h-[52px] flex justify-center items-center">
                                    <button className="w-full mb-[14px] py-[7px] px-4 text-sm text-white font-ggsans bg-secondary-s1 rounded-full leading-[24px] z-10">
                                        Subscribe Nitro
                                    </button>
                                </div>
                            </div>
                            <div className="absolute max-w-[210px] w-full h-[104%] -mt-[30px] -mr-4 top-0 bottom-0 left-auto right-0 border-2 border-[#b845c1] rounded-2xl">
                                <img
                                    className="-mt-[13px] mx-auto"
                                    src={MostPopular}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <h2 className="text-5xl font-semibold font-gintoNormal text-center">
                        Frequently Asked Questions
                    </h2>
                    <div className="relative w-full mt-10">
                        <div className="w-full mb-8 flex justify-center items-center">
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
                    className="absolute top-auto bottom-[519px] left-auto right-0"
                    src={RabbitSideWall}
                    alt=""
                />
                <img
                    className="absolute top-auto bottom-[170px] left-[2vw]"
                    src={Twinkling}
                    alt=""
                />
            </section>
            <section className="relative w-full min-h-[406px] py-[92px] flex justify-center items-center bg-[linear-gradient(135deg,#8547c6_10%,#b845c1_50%,#ab5d8a)]">
                <div className="max-w-[612px] flex flex-col justify-center items-center">
                    <h2 className="mb-8 text-[42px] font-semibold text-white font-gintoNormal">
                        Unleash the fun with Nitro
                    </h2>
                    <button className="min-w-[193px] py-4 px-8 flex justify-center text-xl font-ggsansNormal bg-white rounded-full leading-6">
                        Subscribe
                    </button>
                </div>
                <img
                    className="absolute max-w-[25%] left-0"
                    src={BottomSectionPic1}
                    alt=""
                />
                <img
                    className="absolute max-w-[22%] right-0"
                    src={BottomSectionPic2}
                    alt=""
                />
            </section>
        </div>
    );
};

export default NitroPage;
