import HeroV2 from "@/components/hero/AboutHero";
import LayoutV3 from "@/components/layouts/LayoutV3";
import ServicesV1 from "@/components/services/ServicesV1";
import FeatureV2 from "@/components/feature/FeatureV2";
import ProcessV1 from "@/components/process/ProcessV1";
import ContactV1 from "@/components/contact/ContactV1";
import venturesData from "@/assets/jsonData/ventures/VenturesData.json";
import juniorspaceHeroData from "@/assets/jsonData/pages/juniorspace.json";
import juniorspaceProjects from "@/assets/jsonData/ventures/juniorspaceProjects.json";

export const metadata = {
    title: `${venturesData?.juniorspace?.name || "Juniorspace"} - Brandspace Venture`,
    description: venturesData?.juniorspace?.description || "Juniorspace is Brandspace's dedicated creative and educational venture for young minds, families, and next-generation creative thinkers."
};

const JuniorspacePage = () => {
    return (
        <div className="aixor-main concerns-page juniorspace-page">
            <LayoutV3>
                <HeroV2 data={juniorspaceHeroData} />
                <ServicesV1 subtitle="Juniorspace Programs" description="Igniting youth imagination through tactile arts, interactive storytelling, and maker workshops." />
                <FeatureV2 items={juniorspaceProjects} />
                <ProcessV1 subtitle="Creative Youth Pedagogy" title={<>Sparking Wonder, <span>Building Confidence</span></>} />
                <ContactV1 />
            </LayoutV3>
        </div>
    );
};

export default JuniorspacePage;
