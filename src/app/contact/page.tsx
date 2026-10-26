import ContactV2 from "@/components/contact/ContactV2";
import FaqV1 from "@/components/faq/FaqV1";
import HeroV2 from "@/components/hero/AboutHero";
import LayoutV3 from "@/components/layouts/LayoutV3";
import PartnerV1 from "@/components/partner/PartnerV1";
import contactHeroData from "@/assets/jsonData/pages/contact.json";

export const metadata = {
    title: "Brandspace - Contact"
};

const ContactPage = () => {
    return (
        <>
            <div className="aixor-main contact-page">
                <LayoutV3>
                    <HeroV2 data={contactHeroData} />
                    <ContactV2 />
                    <FaqV1 />
                    <PartnerV1 />
                </LayoutV3>
            </div>
        </>
    );
};

export default ContactPage;