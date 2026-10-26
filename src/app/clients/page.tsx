import HeroV2 from "@/components/hero/AboutHero";
import LayoutV3 from "@/components/layouts/LayoutV3";
import PartnerV1 from "@/components/partner/PartnerV1";
import TestimonialV1 from "@/components/testimonial/TestimonialV1";
import FeatureV2 from "@/components/feature/FeatureV2";
import ContactV1 from "@/components/contact/ContactV1";
import clientsHeroData from "@/assets/jsonData/pages/clients.json";
import clientsCaseStudies from "@/assets/jsonData/clients/ClientsCaseStudiesData.json";

export const metadata = {
    title: "Our Clients - Brandspace",
    description: "Explore the ambitious brands, industry pioneers, and global businesses that trust Brandspace."
};

const ClientsPage = () => {
    return (
        <div className="aixor-main clients-page">
            <LayoutV3>
                <HeroV2 data={clientsHeroData} />
                <PartnerV1 />
                <TestimonialV1 />
                <FeatureV2 items={clientsCaseStudies} />
                <ContactV1 />
            </LayoutV3>
        </div>
    );
};

export default ClientsPage;
