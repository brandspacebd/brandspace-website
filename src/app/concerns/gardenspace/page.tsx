import HeroV2 from "@/components/hero/AboutHero";
import LayoutV3 from "@/components/layouts/LayoutV3";
import ServicesV1 from "@/components/services/ServicesV1";
import FeatureV2 from "@/components/feature/FeatureV2";
import ProcessV1 from "@/components/process/ProcessV1";
import ContactV1 from "@/components/contact/ContactV1";
import venturesData from "@/assets/jsonData/ventures/VenturesData.json";
import gardenspaceHeroData from "@/assets/jsonData/pages/gardenspace.json";
import gardenspaceProjects from "@/assets/jsonData/ventures/gardenspaceProjects.json";

export const metadata = {
    title: `${venturesData?.gardenspace?.name || "Gardenspace"} - Brandspace Venture`,
    description: venturesData?.gardenspace?.description || "Gardenspace is Brandspace's environmental, spatial design, and experiential lifestyle branding venture."
};

const GardenspacePage = () => {
    return (
        <div className="aixor-main concerns-page gardenspace-page">
            <LayoutV3>
                <HeroV2 data={gardenspaceHeroData} />
                <ServicesV1 subtitle="Gardenspace Capabilities" description="Harmonizing nature, biophilic materials, and architectural craft into transcendent brand spaces." />
                <FeatureV2 items={gardenspaceProjects} />
                <ProcessV1 subtitle="Spatial Methodology" title={<>Sensory Design, <span>Sustainable Spaces</span></>} />
                <ContactV1 />
            </LayoutV3>
        </div>
    );
};

export default GardenspacePage;
