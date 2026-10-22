import HeroV2 from "@/components/hero/AboutHero";
import LayoutV3 from "@/components/layouts/LayoutV3";
import PriceV1 from "@/components/pricing/PriceV1";
import ProcessV1 from "@/components/process/ProcessV1";
import ServicesV2 from "@/components/services/ServicesV2";
import ContactV1 from "@/components/contact/ContactV1";

export const metadata = {
    title: "Monthly Retainer Service - BrandSpace",
    description: "Guaranteed agency bandwidth, dedicated senior creative direction, and prioritized sprint turnarounds."
};

const RetainerServicePage = () => {
    return (
        <div className="aixor-main retainer-service-page">
            <LayoutV3>
                <HeroV2 title="Monthly Retainer Service" />
                <PriceV1 />
                <ServicesV2 />
                <ProcessV1 />
                <ContactV1 />
            </LayoutV3>
        </div>
    );
};

export default RetainerServicePage;
