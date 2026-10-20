"use client";
import Image from "next/image";
import Union from '@/assets/images/Union.svg';
import AnimatedText from "../animated/AnimatedText";
import Link from "next/link";
import btnArrow from '@/assets/images/btn-arrow.svg';
import useScaleDownAnimation from "@/hooks/useScaleDownAnimation";
interface DataType {
    name?: string;
    thumbFull1?: string;
    thumbFull2?: string;
    text?: string;
    price?: string;
}

const ServiceDetailsContent = ({ serviceData }: { serviceData: DataType }) => {
    const { name, text, price, thumbFull1, thumbFull2 } = serviceData

    const containerRef = useScaleDownAnimation('.scaleDown');


    return (
        <>
            <div className="project-single-wrap service-single-wrap">
                <div className="project-single-header">
                    <div className="section-header">
                        <span className="section-subtitle">
                            <Image src={Union} alt="icon" />
                            {name}
                        </span>
                        <AnimatedText>
                            Our approach to brand identity goes beyond the conventional. We blend strategic insight with creative flair to craft identities that are not only visually striking but also resonate deeply with target audiences.
                        </AnimatedText>
                    </div>
                </div>
                <div className="project-single-body">
                    <div className="feature-project">
                        <div className="img-box" >
                            <Image src={`/assets/images/${thumbFull1}`} alt="project-single" width={1900} height={925} />
                        </div>
                        <div className="feature-project-infos">
                            <div className="feature-project-info-box project-name">
                                <span className="title">Service :</span>
                                <span className="subtitle">{name}</span>
                            </div>
                            <div className="feature-project-info-box project-description">
                                <span className="title">Description:</span>
                                <span className="subtitle">{text}</span>
                            </div>
                            <div className="feature-project-info-box">
                                <span className="title">Pricing:</span>
                                <span className="subtitle">$ {price}</span>
                            </div>
                            <div className="feature-project-info-box">
                                <Link href="/contact" className="theme-btn">
                                    GET STARTED
                                    <Image src={btnArrow} alt="icon" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="project-single-content-wrap">
                        <div className="section-header">
                            <span className="section-subtitle">
                                <Image src={Union} alt="icon" />
                                KEY FEATURES
                            </span>
                            <div className="right">
                                <AnimatedText>
                                    To build strong, supportive teams within a design agency, clearly define project goals and roles, ensuring everyone knows their work. Foster open communication and mutual respect to create a collaboration.
                                </AnimatedText>
                                <AnimatedText>
                                    At our creative agency, we push the limits of brand identity, working together to exceed expectations and deliver exceptional results through innovative design and strategic insight.
                                </AnimatedText>
                                <ul>
                                    <li>I. Legacy Modernization</li>
                                    <li>II. Solution Design</li>
                                    <li>III. Technology Enabling</li>
                                    <li>IV. Mobile-First Systems</li>
                                </ul>
                            </div>
                        </div>
                        <div className="full-image" ref={containerRef}>
                            <Image className="scaleDown" src={`/assets/images/${thumbFull2}`} alt="project-single" width={1900} height={925} />
                        </div>
                        <div className="section-header">
                            <span className="section-subtitle">
                                <Image src={Union} alt="icon" />
                                SERVICE BENEFITS
                            </span>
                            <div className="right">
                                <AnimatedText>
                                    Our brand identity services deliver significant benefits that drive your business forward. By crafting a unique and coherent brand identity, we help you stand out in a crowded marketplace.
                                </AnimatedText>
                                <div className="paragraphs">
                                    <p>Our process ensures that every visual and verbal element—from logos and color schemes to messaging and brand voice—aligns with your strategic goals, creating a unified and compelling brand presence. This alignment not only enhances recognition and fosters customer loyalty but also positions your brand as a leader in your industry.</p>
                                    <p>With our tailored solutions, you gain clarity and consistency in your brand communication, ultimately leading to increased visibility, stronger market positioning, and sustainable growth.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceDetailsContent;