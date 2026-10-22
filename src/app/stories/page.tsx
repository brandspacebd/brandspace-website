import FeatureV3 from "@/components/feature/FeatureV3";
import HeroV2 from "@/components/hero/AboutHero";
import LayoutV3 from "@/components/layouts/LayoutV3";

export const metadata = {
    title: "Stories & Insights - BrandSpace",
    description: "In-depth case studies, design narratives, and campaign retrospective stories by BrandSpace creators."
};

const StoriesPage = () => {
    return (
        <div className="aixor-main stories-page">
            <LayoutV3>
                <HeroV2 title="BrandSpace Stories" />
                <FeatureV3 />
            </LayoutV3>
        </div>
    );
};

export default StoriesPage;
