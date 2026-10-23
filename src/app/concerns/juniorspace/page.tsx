import HeroV2 from "@/components/hero/AboutHero";
import LayoutV3 from "@/components/layouts/LayoutV3";
import ServicesV1 from "@/components/services/ServicesV1";
import FeatureV2 from "@/components/feature/FeatureV2";
import ProcessV1 from "@/components/process/ProcessV1";
import ContactV1 from "@/components/contact/ContactV1";
import venturesData from "@/assets/jsonData/ventures/VenturesData.json";

export const metadata = {
    title: `${venturesData?.juniorspace?.name || "Juniorspace"} - Brandspace Venture`,
    description: venturesData?.juniorspace?.description || "Juniorspace is Brandspace's dedicated creative and educational venture for young minds, families, and next-generation creative thinkers."
};

const JuniorspacePage = () => {
    const data = venturesData?.juniorspace;
    return (
        <div className="aixor-main concerns-page juniorspace-page">
            <LayoutV3>
                <HeroV2 title={data?.name || "Juniorspace"} />
                <ServicesV1 />
                <FeatureV2 />
                <ProcessV1 />
                <ContactV1 />
            </LayoutV3>
        </div>
    );
};

export default JuniorspacePage;
