import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
// assets
import ImageSlider1 from "../../../../assets/CareersPage/ImageSlider/ImageSlider1.webp";
import ImageSlider2 from "../../../../assets/CareersPage/ImageSlider/ImageSlider2.webp";
import ImageSlider3 from "../../../../assets/CareersPage/ImageSlider/ImageSlider3.webp";
import ImageSlider4 from "../../../../assets/CareersPage/ImageSlider/ImageSlider4.webp";
import ImageSlider5 from "../../../../assets/CareersPage/ImageSlider/ImageSlider5.webp";
import ImageSlider6 from "../../../../assets/CareersPage/ImageSlider/ImageSlider6.webp";
import ImageSlider7 from "../../../../assets/CareersPage/ImageSlider/ImageSlider7.webp";
import ImageSlider8 from "../../../../assets/CareersPage/ImageSlider/ImageSlider8.webp";
import ImageSlider9 from "../../../../assets/CareersPage/ImageSlider/ImageSlider9.webp";
import ImageSlider10 from "../../../../assets/CareersPage/ImageSlider/ImageSlider10.webp";
import ImageSlider11 from "../../../../assets/CareersPage/ImageSlider/ImageSlider11.webp";
import ImageSlider12 from "../../../../assets/CareersPage/ImageSlider/ImageSlider12.webp";
import ArrowLeft2 from "../../../../assets/CareersPage/Arrow/ArrowLeft2.svg";
import ArrowRight2 from "../../../../assets/CareersPage/Arrow/ArrowRight2.svg";
// css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../../../Styles/workfilter.css";

const ImageSlider = () => {
    const imageSlider = [
        ImageSlider1,
        ImageSlider2,
        ImageSlider3,
        ImageSlider4,
        ImageSlider5,
        ImageSlider6,
        ImageSlider7,
        ImageSlider8,
        ImageSlider9,
        ImageSlider10,
        ImageSlider11,
        ImageSlider12,
    ];

    const [slidesToShow, setSlideToShow] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 767) {
                setSlideToShow(1);
                console.log("True 767");
            } else if (window.innerWidth < 1440) {
                setSlideToShow(2);
                console.log("True 1280");
            } else if (window.innerWidth > 1440) {
                setSlideToShow(3);
            }
            console.log("Window width: ", window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow,
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
        <div className="relative max-w-[100vw] w-full h-[340px] overflow-hidden">
            <Slider
                ref={(slider) => {
                    sliderRef = slider;
                }}
                {...settings}
            >
                {imageSlider.map((item, index) => {
                    return (
                        <div
                            className="relative w-full max-h-[340px] mr-5"
                            key={index}
                        >
                            <img
                                className="w-full h-[340px] mb-8 object-cover rounded-2xl"
                                src={item}
                                alt=""
                            />
                        </div>
                    );
                })}
            </Slider>
            <button
                className="absolute w-16 h-16 my-auto pr-1 top-0 bottom-0 left-10 right-auto flex justify-center items-center bg-[rgba(35,39,42,.4)] rounded-full cursor-pointer 
                max-mobile479:min-h-[40px] max-mobile479:w-10 max-mobile479:h-10 max-mobile479:left-0 max-tablet991:min-h-[50px] max-tablet991:left-[60px]"
                onClick={previous}
            >
                <img className="max-mobile479:w-5" src={ArrowLeft2} alt="" />
            </button>
            <div
                className="absolute w-16 h-16 my-auto pl-1 top-0 bottom-0 left-auto right-10 flex justify-center items-center bg-[rgba(35,39,42,.4)] rounded-full cursor-pointer 
                max-mobile479:min-h-[40px] max-mobile479:w-10 max-mobile479:h-10 max-mobile479:right-0 max-tablet991:min-h-[50px] max-tablet991:right-[60px]"
                onClick={next}
            >
                <img className="max-mobile479:w-5" src={ArrowRight2} alt="" />
            </div>
        </div>
    );
};

export default ImageSlider;
