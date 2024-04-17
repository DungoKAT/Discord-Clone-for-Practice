import { useRef } from "react";
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
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
    };
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
                className="absolute w-16 h-16 my-auto pr-1 top-0 bottom-0 left-10 right-auto flex justify-center items-center bg-[rgba(35,39,42,.4)] rounded-full cursor-pointer"
                onClick={previous}
            >
                <img src={ArrowLeft2} alt="" />
            </button>
            <div
                className="absolute w-16 h-16 my-auto pl-1 top-0 bottom-0 left-auto right-10 flex justify-center items-center bg-[rgba(35,39,42,.4)] rounded-full cursor-pointer"
                onClick={next}
            >
                <img src={ArrowRight2} alt="" />
            </div>
        </div>
    );
};

export default ImageSlider;
