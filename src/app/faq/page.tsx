import ContactV1 from '@/components/contact/ContactV1';
import FaqV1 from '@/components/faq/FaqV1';
import HeroV2 from '@/components/hero/AboutHero';
import LayoutV3 from '@/components/layouts/LayoutV3';
import PartnerV1 from '@/components/partner/PartnerV1';
import faqHeroData from '@/assets/jsonData/pages/faq.json';

export const metadata = {
    title: "Brandspace - FAQ"
};

const FaqPage = () => {
    return (
        <>
            <div className="aixor-main faq-page">
                <LayoutV3>
                    <HeroV2 data={faqHeroData} />
                    <FaqV1 />
                    <ContactV1 />
                    <PartnerV1 />
                </LayoutV3>
            </div>
        </>
    );
};

export default FaqPage;