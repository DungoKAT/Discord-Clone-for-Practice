import { useRef } from "react";
import Slider from "react-slick";
// assets
import CareerSlidePic1 from "../../../../assets/CareersPage/Slider/CareerSlidePic1.webp";
import CareerSlidePic2 from "../../../../assets/CareersPage/Slider/CareerSlidePic2.webp";
import CareerSlidePic3 from "../../../../assets/CareersPage/Slider/CareerSlidePic3.webp";
import CareerSlidePic4 from "../../../../assets/CareersPage/Slider/CareerSlidePic4.webp";
import CareerSlidePic5 from "../../../../assets/CareersPage/Slider/CareerSlidePic5.webp";
import CareerSlidePic6 from "../../../../assets/CareersPage/Slider/CareerSlidePic6.webp";
import CareerSlidePic7 from "../../../../assets/CareersPage/Slider/CareerSlidePic7.webp";
import ArrowLeft1 from "../../../../assets/CareersPage/Arrow/ArrowLeft1.svg";
import ArrowRight1 from "../../../../assets/CareersPage/Arrow/ArrowRight1.svg";
// css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ElementSlider = () => {
    const sliderData = [
        {
            image: CareerSlidePic1,
            topic: "Pride",
            paragraph:
                "The Discord Pride Employee Resource Group is a safe haven for the LGBTQIA2S+ community and its allies. It offers education, belonging and a place to celebrate the identity of its members. Discord’s Pride ERG has made an impact on the community at the company and beyond by offering LGBTQIA2S+-inclusive and informed guidance regarding policy and benefits, including comprehensive transitioning benefits and improved access to gender-affirming healthcare. The group also hosts fun and educational events like allyship training, employee panels and community involvement with partners like GLSEN.",
        },
        {
            image: CareerSlidePic2,
            topic: "BAAM",
            paragraph:
                "The BAAM (Black & African American Movement) ERG is an intentional place of warmth, unity and understanding for members of the Black community at Discord. The group aims to develop leaders and changemakers, empower and give back to the community, and diversify the tech industry through training, events, volunteering and more.",
        },
        {
            image: CareerSlidePic3,
            topic: "AAPI",
            paragraph:
                "The AAPI (Asian American and Pacific Islander) ERG empowers Discord’s Asian-identifying employees and allies by honoring the richness and diversity of the Asian community. One of the group’s tentpole initiatives is hosting AAPI Heritage Month — a full month of programming that advocates for cultural diversity, education and career development. Celebrations include Lunch & Learn sessions, group gatherings, workshops and creator highlights featuring AAPI employees, communities and artists!",
        },
        {
            image: CareerSlidePic4,
            topic: "Jew-ish",
            paragraph:
                "Jew-ish at Discord is a place for Jews, non-Jews and anyone with an interest in Jewish culture, history, nosh, spirituality and more. It's a community within Discord that brings people together and enables them to share their religion and culture with each other, the Discord employee community and Jewish community at large.",
        },
        {
            image: CareerSlidePic5,
            topic: "Parents",
            paragraph:
                "The Parents ERG at Discord is a community focused on providing support, resources and fellowship for parents and caregivers. Besides being a safe space for discussing anything related to being a parent, like getting advice on pre-schools in the Bay Area or venting about a newborn’s sleep schedule, the group hosts programs for helping parents and caregivers at Discord best navigate the complicated landscape of finances, benefits and strategies specifically related to raising children.",
        },
        {
            image: CareerSlidePic6,
            topic: "La Cafetería",
            paragraph:
                "La Cafetería is Discord’s’ Latinx ERG. Many of its members are the first in their communities or families to enter tech, and the group has made it their collective mission to build a space to enable Latinx folks to thrive without compromising their identity.",
        },
        {
            image: CareerSlidePic7,
            topic: "Women at Discord",
            paragraph:
                "The Discord Women's ERG is a place where women and underrepresented genders can gather to discuss topics that impact them, get inspired by great work, offer support and guidance, and develop skills that help build successful careers. The group focuses on driving change that improves everyone's ultimate well-being by making systemic change that makes the table bigger for everyone.",
        },
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };

    return (
        <div className="relative max-w-[900px] w-full min-h-[400px] h-full mt-[60px] mb-20 mx-auto bg-white rounded-[14px] shadow-[2px_2px_4px_rgba(0,0,0,.07)]">
            <Slider
                ref={(slider) => {
                    sliderRef = slider;
                }}
                {...settings}
            >
                {sliderData.map((item, index) => {
                    return (
                        <div
                            className="relative w-full h-[400px] py-[37px] pl-10 pr-[70px] overflow-hidden"
                            key={index}
                        >
                            <div className="w-full flex items-center">
                                <img
                                    className="max-w-[200px] w-full mr-10 rounded-md"
                                    src={item.image}
                                    alt=""
                                />
                                <div>
                                    <h5 className="my-[10px] text-xl font-semibold font-ggsans text-[#060a0b] leading-[26px]">
                                        {item.topic}
                                    </h5>
                                    <p className="my-5 text-base font-ggsansNormal text-[#2c2f33] leading-6">
                                        {item.paragraph}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </Slider>
            <button
                className="absolute w-[50px] h-[50px] top-0 bottom-0 left-0 right-auto -ml-[25px] my-auto flex justify-center items-center bg-[#efefef] border-[2px] border-[#d9d9d9] rounded-full"
                onClick={previous}
            >
                <img className="w-[22px]" src={ArrowLeft1} alt="" />
            </button>
            <button
                className="absolute w-[50px] h-[50px] top-0 bottom-0 left-auto right-0 -mr-[25px] my-auto flex justify-center items-center bg-[#efefef] border-[2px] border-[#d9d9d9] rounded-full"
                onClick={next}
            >
                <img className="w-[22px]" src={ArrowRight1} alt="" />
            </button>
        </div>
    );
};

export default ElementSlider;
