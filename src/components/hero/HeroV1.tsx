"use client";
import btnArrowIcon from "@/assets/images/btn-arrow.svg"
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from "react";
import homeData from "@/assets/jsonData/homepage/homeData.json";

const HeroV1 = () => {

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <>
            <div className="hero-sec" id="hero">
                <div className="custom-container">
                    <div className="hero-inner">

                        {/* Video Section */}
                        <div className="hero-video">
                            {isClient && (
                                <video loop muted autoPlay key={homeData.hero.video}>
                                    <source src={homeData.hero.video} type="video/mp4" />
                                </video>
                            )}
                        </div>

                        <div className="hero-top">

                            {/* Hero Description */}
                            <div className="hero-top-desc">
                                <p>{homeData.hero.quote1}</p>
                                <p>{homeData.hero.quote2}</p>
                            </div>

                            {/* Author Information */}
                            <div className="author-info">
                                <h4>{homeData.hero.authorName}</h4>
                                <span>{homeData.hero.authorRole}</span>
                            </div>
                        </div>

                        {/* Hero Bottom Section */}
                        <div className="hero-bottom">
                            <div className="left">
                                <h2>{homeData.hero.title1}</h2>
                                <h2>{homeData.hero.title2}</h2>
                            </div>

                            {/* Button Section */}
                            <Link href={homeData.hero.buttonUrl} className="theme-btn">
                                {homeData.hero.buttonText}
                                <Image src={btnArrowIcon} alt="icon" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroV1;