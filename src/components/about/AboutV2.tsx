import unionIcon from "@/assets/images/Union.svg"
import Image from "next/image"
import AnimatedText from "../animated/AnimatedText"
import SingleFactV2 from "./SingleFactV2"
import FactData from "@/assets/jsonData/fact/FactData.json"
import homeDataRaw from "@/assets/jsonData/homepage/homeData.json"
import { HomeData } from "@/types/content"

const homeData = homeDataRaw as HomeData;

const AboutV2 = () => {
    const aboutSubtitle = homeData.aboutPage?.subtitle || "About Us";
    const desc1 = homeData.aboutPage?.description1 || "Founded on the principles of creativity, collaboration, and excellence, BrandSpace is a diverse team of industry experts dedicated to delivering outstanding results...";
    const desc2 = homeData.aboutPage?.description2 || "We are committed to pushing the boundaries of what’s possible, working together seamlessly to exceed expectations and deliver outstanding value to our clients.";

    return (
        <>
            <div className="about-sec" id="about">
                <div className="custom-container">
                    <div className="section-header">
                        <span className="section-subtitle">
                            <Image src={unionIcon} alt="About Us" /> {aboutSubtitle}
                        </span>
                        <div className="right">
                            <AnimatedText>
                                {desc1}
                            </AnimatedText>
                            <AnimatedText>
                                {desc2}
                            </AnimatedText>
                        </div>
                    </div>
                    <div className="funfacts-wrap">
                        {FactData.map(fact =>
                            <SingleFactV2 fact={fact} key={fact.id} />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutV2;