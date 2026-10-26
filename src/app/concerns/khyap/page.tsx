import HeroV2 from "@/components/hero/AboutHero";
import LayoutV3 from "@/components/layouts/LayoutV3";
import ServicesV1 from "@/components/services/ServicesV1";
import FeatureV2 from "@/components/feature/FeatureV2";
import ProcessV1 from "@/components/process/ProcessV1";
import ContactV1 from "@/components/contact/ContactV1";
import venturesData from "@/assets/jsonData/ventures/VenturesData.json";
import khyapHeroData from "@/assets/jsonData/pages/khyap.json";
import khyapProjects from "@/assets/jsonData/ventures/khyapProjects.json";

export const metadata = {
    title: `${venturesData?.khyap?.name || "Khyap"} - Brandspace Venture`,
    description: venturesData?.khyap?.description || "Khyap is Brandspace's avant-garde cultural, artistic, and experimental branding venture."
};

const KhyapPage = () => {
    return (
        <div className="aixor-main concerns-page khyap-page">
            <LayoutV3>
                <HeroV2 data={khyapHeroData} />
                <ServicesV1 subtitle="Khyap Interventions" description="Boundary-pushing cultural manifestos, subculture audiovisual projects, and raw avant-garde design." />
                <FeatureV2 items={khyapProjects} />
                <ProcessV1 subtitle="Counter-Cultural Flow" title={<>Unapologetic Art, <span>Raw Expression</span></>} />
                <ContactV1 />
            </LayoutV3>
        </div>
    );
};

export default KhyapPage;
