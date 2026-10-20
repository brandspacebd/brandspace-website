import Union from "@/assets/images/Union.svg"
import Image from 'next/image';
import Link from "next/link";
import FeatureV1Data from "@/assets/jsonData/feature/FeatureV1Data.json"
import homeData from "@/assets/jsonData/homepage/homeData.json"
import SingleFeatureV1 from "./SingleFeatureV1";

const FeatureV1 = () => {
    return (
        <>
            <div className="feature-sec" id="projects">
                <div className="custom-container">
                    <div className="section-header section-header2">
                        <span className="section-subtitle">
                            <Image src={Union} alt="icon" />
                            {homeData.projects.subtitle}
                        </span>
                        <h2 className="section-title section-title2">
                            {homeData.projects.title}
                        </h2>
                        <p className="section-desc">
                            {homeData.projects.description}
                        </p>
                    </div>
                    <div className="feature-project-lists">
                        {FeatureV1Data.map(feature =>
                            <SingleFeatureV1 feature={feature} key={feature.id} />
                        )}
                    </div>
                    <div className="feature-more-btn-wrap">
                        <Link href={homeData.projects.buttonUrl} className="theme-btn">
                            {homeData.projects.buttonText}
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FeatureV1;