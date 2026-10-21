import Union from "@/assets/images/Union.svg"
import Image from 'next/image';
import Link from "next/link";
import FeatureV1Data from "@/assets/jsonData/feature/FeatureV1Data.json"
import homeDataRaw from "@/assets/jsonData/homepage/homeData.json"
import { HomeData } from "@/types/content"
import SingleFeatureV1 from "./SingleFeatureV1";

const homeData = homeDataRaw as HomeData;

const FeatureV1 = () => {
    const subtitle = homeData.projects?.subtitle || "Our projects";
    const title = homeData.projects?.title || "Featured WOW Projects";
    const description = homeData.projects?.description || "Explore our collection of cutting-edge products designed to empower your business and elevate your creative potential.";
    const buttonText = homeData.projects?.buttonText || "View More";
    const buttonUrl = homeData.projects?.buttonUrl || "/projects";

    return (
        <>
            <div className="feature-sec" id="projects">
                <div className="custom-container">
                    <div className="section-header section-header2">
                        <span className="section-subtitle">
                            <Image src={Union} alt="icon" />
                            {subtitle}
                        </span>
                        <h2 className="section-title section-title2">
                            {title}
                        </h2>
                        <p className="section-desc">
                            {description}
                        </p>
                    </div>
                    <div className="feature-project-lists">
                        {FeatureV1Data.map(feature =>
                            <SingleFeatureV1 feature={feature} key={feature.id} />
                        )}
                    </div>
                    <div className="feature-more-btn-wrap">
                        <Link href={buttonUrl} className="theme-btn">
                            {buttonText}
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FeatureV1;