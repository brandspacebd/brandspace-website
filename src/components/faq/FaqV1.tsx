import Union from "@/assets/images/Union.svg"
import pricingShape1 from "@/assets/images/pricing-shape1.png"
import pricingShape2 from "@/assets/images/pricing-shape2.png"
import Image from "next/image";
import FaqData from "@/assets/jsonData/faq/FaqData.json";

const FaqV1 = () => {
    return (
        <>
            <div className="faq-sec">
                <div className="section-header section-header2">
                    <span className="section-subtitle">
                        <Image src={Union} alt="icon" />
                        {FaqData.subtitle}
                    </span>
                    <h2 className="section-title section-title2">
                        {FaqData.title}
                    </h2>
                    <p className="section-desc">{FaqData.description}</p>
                </div>

                {/* Faq lists */}
                <div className="accordion faq-lists" id="accordionExample">
                    <div className="shape_img shape_img1">
                        <Image src={pricingShape1} alt="shape" />
                    </div>
                    <div className="shape_img shape_img2">
                        <Image src={pricingShape2} alt="shape" />
                    </div>

                    {FaqData.items.map((item, index) => (
                        <div className="accordion-item faq-item" key={item.id}>
                            <h2 className="accordion-header" id={`heading${item.id}`}>
                                <button
                                    className={`accordion-button ${index === 0 ? '' : 'collapsed'}`}
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target={`#collapse${item.id}`}
                                    aria-expanded={index === 0 ? "true" : "false"}
                                    aria-controls={`collapse${item.id}`}
                                >
                                    <span className="number">{item.number}</span> {item.question} <span className="plus-icon"><span /><span /></span>
                                </button>
                            </h2>
                            <div
                                id={`collapse${item.id}`}
                                className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                                aria-labelledby={`heading${item.id}`}
                                data-bs-parent="#accordionExample"
                            >
                                <div className="accordion-body">
                                    <p>{item.answer}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default FaqV1;