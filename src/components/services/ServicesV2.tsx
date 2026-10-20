"use client"
import arrowDown from "@/assets/images/arrow-down.svg";
import Image from "next/image";
import Union from "@/assets/images/Union.svg"
import AnimatedText from "../animated/AnimatedText";
import ServicesV2Data from "@/assets/jsonData/services/ServicesV2Data.json";
import SingleServicesV2 from "./SingleServicesV2";
import { useState } from "react";

const ServicesV2 = () => {

    const [activeServiceId, setActiveServiceId] = useState(ServicesV2Data[0]?.id || null);

    const handleMouseEnter = (id: number) => {
        setActiveServiceId(id);
    };

    const handleMouseLeave = () => {
        // Do nothing on mouse leave to keep the active item
    };

    return (
        <>
            <div className="service-sec service-sec-2" id="services">
                <div className="custom-container">
                    <div className="section-header">
                        <span className="section-subtitle">
                            <Image src={Union} alt="icon" />
                            OUR VALUES
                        </span>
                        <AnimatedText>
                            We firmly believe in the transformation power of honesty and transparency. These values support our ability to create exceptional and meaningful work that sparks inspiration.
                        </AnimatedText>
                    </div>
                </div>
                <div className="service-lists-wrap">
                    <div className="service-lists-header">
                        <div className="custom-container">
                            <div className="service-header-th">
                                <Image src={arrowDown} alt="icon" />
                                3D Illustration
                            </div>
                            <div className="service-header-th">
                                <Image src={arrowDown} alt="icon" />
                                Values
                            </div>
                        </div>
                    </div>

                    <div className="service-lists">
                        {ServicesV2Data.map(service =>
                            <div
                                className={`service-box ${activeServiceId === service.id ? 'active' : ''}`}
                                onMouseEnter={() => handleMouseEnter(service.id)}
                                onMouseLeave={handleMouseLeave}
                                key={service.id}
                            >
                                <SingleServicesV2 service={service} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesV2;