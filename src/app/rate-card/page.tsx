import HeroV2 from "@/components/hero/AboutHero";
import LayoutV3 from "@/components/layouts/LayoutV3";
import RateCardSection from "@/components/pricing/RateCardSection";
import PriceV1 from "@/components/pricing/PriceV1";
import ContactV1 from "@/components/contact/ContactV1";
import rateCardHeroData from "@/assets/jsonData/pages/rate-card.json";

export const metadata = {
    title: "Agency Rate Card - Brandspace",
    description: "View Brandspace's service rate card and submit a request to receive the official commercial fee schedule."
};

const RateCardPage = () => {
    return (
        <div className="aixor-main rate-card-page">
            <LayoutV3>
                <HeroV2 data={rateCardHeroData} />
                <RateCardSection />
                <PriceV1 />
                <ContactV1 />
            </LayoutV3>
        </div>
    );
};

export default RateCardPage;
