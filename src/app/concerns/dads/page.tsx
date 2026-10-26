import HeroV2 from "@/components/hero/AboutHero";
import LayoutV3 from "@/components/layouts/LayoutV3";
import ServicesV1 from "@/components/services/ServicesV1";
import FeatureV2 from "@/components/feature/FeatureV2";
import ProcessV1 from "@/components/process/ProcessV1";
import ContactV1 from "@/components/contact/ContactV1";
import dadsHeroData from "@/assets/jsonData/pages/dads.json";
import dadsProjects from "@/assets/jsonData/ventures/dadsProjects.json";

export const metadata = {
    title: "DAdS - Brandspace Venture",
    description: "DAdS (Digital Advertising & Strategy) is Brandspace's performance-driven marketing and advertising studio venture."
};

const DAdsPage = () => {
    return (
        <div className="aixor-main concerns-page dads-page">
            <LayoutV3>
                <HeroV2 data={dadsHeroData} />
                <ServicesV1 subtitle="Performance Capabilities" description="Algorithmic media strategy, high-velocity creative testing, and full-funnel CRO to scale brand revenues." />
                <FeatureV2 items={dadsProjects} />
                <ProcessV1 subtitle="Growth Framework" title={<>Data-Driven Strategy, <span>Exponential Scale</span></>} />
                <ContactV1 />
            </LayoutV3>
        </div>
    );
};

export default DAdsPage;
