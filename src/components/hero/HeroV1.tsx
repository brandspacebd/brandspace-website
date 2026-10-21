"use client";
import btnArrowIcon from "@/assets/images/btn-arrow.svg"
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from "react";
import homeDataRaw from "@/assets/jsonData/homepage/homeData.json";
import { HomeData } from "@/types/content";

const homeData = homeDataRaw as HomeData;

const HeroV1 = () => {
    const hero = homeData.hero || {};
    const quote1 = hero.quote1 || "“ At AIXOR, we believe that creativity is the catalyst for innovation. As a full-service creative agency, we specialise in transforming bold ideas into compelling realities.";
    const quote2 = hero.quote2 || "Whether it’s developing a brand identity, creating a user-friendly website, or executing a dynamic marketing campaign, we approach every project with the same level of dedication and enthusiasm. “";
    const authorName = hero.authorName || "Ahshan M";
    const authorRole = hero.authorRole || "Chief Executive Officer";
    const title1 = hero.title1 || "Imagination";
    const title2 = hero.title2 || "Meets Innovation";
    const buttonText = hero.buttonText || "Let's Connect";
    const buttonUrl = hero.buttonUrl || "/contact";
    const video = hero.video || "/assets/video/hero-video.mp4";

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
                                <video loop muted autoPlay key={video}>
                                    <source src={video} type="video/mp4" />
                                </video>
                            )}
                        </div>

                        <div className="hero-top">

                            {/* Hero Description */}
                            <div className="hero-top-desc">
                                <p>{quote1}</p>
                                <p>{quote2}</p>
                            </div>

                            {/* Author Information */}
                            <div className="author-info">
                                <h4>{authorName}</h4>
                                <span>{authorRole}</span>
                            </div>
                        </div>

                        {/* Hero Bottom Section */}
                        <div className="hero-bottom">
                            <div className="left">
                                <h2>{title1}</h2>
                                <h2>{title2}</h2>
                            </div>

                            {/* Button Section */}
                            <Link href={buttonUrl} className="theme-btn">
                                {buttonText}
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