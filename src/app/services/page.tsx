import HeroV2 from "@/components/hero/AboutHero";
import LayoutV3 from "@/components/layouts/LayoutV3";
import ServicesV1 from "@/components/services/ServicesV1";
import ServicesV2 from "@/components/services/ServicesV2";
import ProcessV1 from "@/components/process/ProcessV1";
import FaqV1 from "@/components/faq/FaqV1";
import ContactV1 from "@/components/contact/ContactV1";
import servicesHeroData from "@/assets/jsonData/pages/services.json";

export const metadata = {
    title: "Services & Capabilities - Brandspace",
    description: "Full-spectrum creative agency services including Creative Work, AI Generated Campaigns, Hybrid AI Creative Design, Digital Campaigns, and 360 Degree Campaigns."
};

const ServicesPage = () => {
    return (
        <div className="aixor-main services-page">
            <LayoutV3>
                <HeroV2 data={servicesHeroData} />
                <div id="creative-work">
                    <ServicesV1 />
                </div>
                <div id="hybrid-ai">
                    <ServicesV2 />
                </div>
                <div id="ai-generated">
                    <ProcessV1 />
                </div>
                <div id="digital-campaign">
                    <FaqV1 />
                </div>
                <div id="360-campaign">
                    <ContactV1 />
                </div>
            </LayoutV3>
        </div>
    );
};

export default ServicesPage;
