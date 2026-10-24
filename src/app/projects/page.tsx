import ContactV1 from '@/components/contact/ContactV1';
import FaqV1 from '@/components/faq/FaqV1';
import FeatureV2 from '@/components/feature/FeatureV2';
import HeroV2 from '@/components/hero/AboutHero';
import LayoutV3 from '@/components/layouts/LayoutV3';
import PartnerV1 from '@/components/partner/PartnerV1';

export const metadata = {
    title: "The Works | Brandspace",
    description: "Explore Brandspace's featured client projects, brand identity cases, and creative executions."
};

const ProjectsPage = () => {
    return (
        <>
            <div className="aixor-main projects-page">
                <LayoutV3>
                    <HeroV2 title="The Works" />
                    <FeatureV2 />
                    <FaqV1 />
                    <ContactV1 />
                    <PartnerV1 />
                </LayoutV3>
            </div>
        </>
    );
};

export default ProjectsPage;