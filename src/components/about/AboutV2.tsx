import unionIcon from "@/assets/images/Union.svg"
import Image from "next/image"
import AnimatedText from "../animated/AnimatedText"
import SingleFactV2 from "./SingleFactV2"
import FactData from "@/assets/jsonData/fact/FactData.json"
import homeData from "@/assets/jsonData/homepage/homeData.json"

const AboutV2 = () => {
    return (
        <>
            <div className="about-sec" id="about">
                <div className="custom-container">
                    <div className="section-header">
                        <span className="section-subtitle">
                            <Image src={unionIcon} alt="About Us" /> {homeData.aboutPage.subtitle}
                        </span>
                        <div className="right">
                            <AnimatedText>
                                {homeData.aboutPage.description1}
                            </AnimatedText>
                            <AnimatedText>
                                {homeData.aboutPage.description2}
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