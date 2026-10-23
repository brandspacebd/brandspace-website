import HeroV2 from "@/components/hero/AboutHero";
import LayoutV3 from "@/components/layouts/LayoutV3";
import ServicesV1 from "@/components/services/ServicesV1";
import FeatureV2 from "@/components/feature/FeatureV2";
import ProcessV1 from "@/components/process/ProcessV1";
import ContactV1 from "@/components/contact/ContactV1";
import venturesData from "@/assets/jsonData/ventures/VenturesData.json";

export const metadata = {
    title: `${venturesData?.khyap?.name || "Khyap"} - Brandspace Venture`,
    description: venturesData?.khyap?.description || "Khyap is Brandspace's avant-garde cultural, artistic, and experimental branding venture."
};

const KhyapPage = () => {
    const data = venturesData?.khyap;
    return (
        <div className="aixor-main concerns-page khyap-page">
            <LayoutV3>
                <HeroV2 title={data?.name || "Khyap"} />
                <ServicesV1 />
                <FeatureV2 />
                <ProcessV1 />
                <ContactV1 />
            </LayoutV3>
        </div>
    );
};

export default KhyapPage;
