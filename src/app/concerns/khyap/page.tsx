import HeroV2 from "@/components/hero/AboutHero";
import LayoutV3 from "@/components/layouts/LayoutV3";
import FeatureV1 from "@/components/feature/FeatureV1";
import AboutV2 from "@/components/about/AboutV2";
import AwardsV1 from "@/components/awards/AwardsV1";
import ContactV1 from "@/components/contact/ContactV1";

export const metadata = {
    title: "Khyap - Brandspace Venture",
    description: "Khyap is Brandspace's avant-garde cultural, artistic, and experimental branding venture."
};

const KhyapPage = () => {
    return (
        <div className="aixor-main concerns-page khyap-page">
            <LayoutV3>
                <HeroV2 title="Khyap" />
                <FeatureV1 />
                <AboutV2 />
                <AwardsV1 />
                <ContactV1 />
            </LayoutV3>
        </div>
    );
};

export default KhyapPage;
