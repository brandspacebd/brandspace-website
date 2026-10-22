import HeroV2 from "@/components/hero/AboutHero";
import LayoutV3 from "@/components/layouts/LayoutV3";
import FeatureV1 from "@/components/feature/FeatureV1";
import ServicesV2 from "@/components/services/ServicesV2";
import ProcessV1 from "@/components/process/ProcessV1";
import ContactV1 from "@/components/contact/ContactV1";

export const metadata = {
    title: "Gardenspace - BrandSpace Concern",
    description: "Gardenspace is BrandSpace's environmental, spatial design, and experiential lifestyle branding concern."
};

const GardenspacePage = () => {
    return (
        <div className="aixor-main concerns-page gardenspace-page">
            <LayoutV3>
                <HeroV2 title="Gardenspace" />
                <FeatureV1 />
                <ServicesV2 />
                <ProcessV1 />
                <ContactV1 />
            </LayoutV3>
        </div>
    );
};

export default GardenspacePage;
