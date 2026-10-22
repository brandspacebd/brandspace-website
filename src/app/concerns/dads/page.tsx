import HeroV2 from "@/components/hero/AboutHero";
import LayoutV3 from "@/components/layouts/LayoutV3";
import ServicesV1 from "@/components/services/ServicesV1";
import FeatureV2 from "@/components/feature/FeatureV2";
import ProcessV1 from "@/components/process/ProcessV1";
import ContactV1 from "@/components/contact/ContactV1";

export const metadata = {
    title: "DAdS - BrandSpace Concern",
    description: "DAdS (Digital Advertising & Strategy) is BrandSpace's performance-driven marketing and advertising studio."
};

const DAdsPage = () => {
    return (
        <div className="aixor-main concerns-page dads-page">
            <LayoutV3>
                <HeroV2 title="DAdS" />
                <ServicesV1 />
                <FeatureV2 />
                <ProcessV1 />
                <ContactV1 />
            </LayoutV3>
        </div>
    );
};

export default DAdsPage;
