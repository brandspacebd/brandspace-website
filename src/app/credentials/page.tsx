import HeroV2 from "@/components/hero/AboutHero";
import LayoutV3 from "@/components/layouts/LayoutV3";
import AwardsV1 from "@/components/awards/AwardsV1";
import AboutV2 from "@/components/about/AboutV2";
import PartnerV1 from "@/components/partner/PartnerV1";
import ContactV1 from "@/components/contact/ContactV1";

export const metadata = {
    title: "Credentials & Accreditations - BrandSpace",
    description: "BrandSpace's agency credentials, verified industry recognitions, and creative awards."
};

const CredentialsPage = () => {
    return (
        <div className="aixor-main credentials-page">
            <LayoutV3>
                <HeroV2 title="Credentials & Accreditations" />
                <AwardsV1 />
                <AboutV2 />
                <PartnerV1 />
                <ContactV1 />
            </LayoutV3>
        </div>
    );
};

export default CredentialsPage;
