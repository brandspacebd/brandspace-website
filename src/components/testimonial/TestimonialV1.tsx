import TestimonialData from '@/assets/jsonData/testimonial/TestimonialData.json'
import SingleTestimonialV1 from './SingleTestimonialV1';
import Union from "@/assets/images/Union.svg"
import Image from 'next/image';

const TestimonialV1 = () => {
    return (
        <>
            <div className="testimonial-sec">
                <div className="section-header">
                    <span className="section-subtitle">
                        <Image src={Union} alt="icon" />
                        OUR REVIEWS
                    </span>
                </div>
                <div className="testimonial-lists-wrap">
                    <div className="hover_mouse">
                        <span>Showing Down...</span>
                    </div>
                    <div className="testimonial-lists">
                        {TestimonialData.map(testimonial =>
                            <SingleTestimonialV1 testimonial={testimonial} key={testimonial.id} />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default TestimonialV1;