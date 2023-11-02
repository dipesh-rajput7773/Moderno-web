import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function ReviewSection() {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        <div className='review-section'>

            <h2 className='text-center'>
                Reviews
            </h2>


            <Carousel className='buy' responsive={responsive}

                swipeable={true}
                draggable={true}

                showDots={true}

               
                infinite={true}
                
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerclassName="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
               
                dotListclassName="custom-dot-list-style"
                itemclassName="carousel-item-padding-40-px"

            >
                <div >
                    <div className='review-slider-box'>

                        <div className='review-slider-img'><img src='./review-1.jpg'></img></div>
                        <div className='review-slider-content'>
                            <p>I am a regular at this fashion shop - their stylish clothes and accessories always keep me ahead of the trend.</p>
                            <div className="reviews__name">Monica Johns, Cosmopolitan</div>
                        </div>
                    </div>

                </div>
                <div>
                    <div className='review-slider-box'>

                        <div className='review-slider-img'><img src='./review-2.jpg'></img></div>
                        <div className='review-slider-content'>
                            <p>I am a regular at this fashion shop - their stylish clothes and accessories always keep me ahead of the trend.</p>
                            <div className="reviews__name">Monica Johns, Cosmopolitan</div>
                        </div>
                    </div>

                </div>
                <div>
                    <div className='review-slider-box'>

                        <div className='review-slider-img'>
                            <img src='./review-3.jpg'></img>
                        </div>
                        <div className='review-slider-content'>
                            <p>I am a regular at this fashion shop - their stylish clothes and accessories always keep me ahead of the trend.</p>
                            <div className="reviews__name">Monica Johns, Cosmopolitan</div>
                        </div>
                    </div>

                </div>

            </Carousel>;

        </div>
    )
}

export default ReviewSection