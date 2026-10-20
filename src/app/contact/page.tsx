import ContactV2 from "@/components/contact/ContactV2";
import FaqV1 from "@/components/faq/FaqV1";
import HeroV2 from "@/components/hero/AboutHero";
import LayoutV3 from "@/components/layouts/LayoutV3";
import PartnerV1 from "@/components/partner/PartnerV1";

export const metadata = {
    title: "Aixor - Contact"
};

const ContactPage = () => {
    return (
        <>
            <LayoutV3>
                <HeroV2 title="Contact Us" />
                <ContactV2 />
                <FaqV1 />
                <PartnerV1 />
            </LayoutV3>
        </>
    );
};

export default ContactPage;