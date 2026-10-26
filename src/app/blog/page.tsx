import FeatureV3 from "@/components/feature/FeatureV3";
import HeroV2 from "@/components/hero/AboutHero";
import LayoutV3 from "@/components/layouts/LayoutV3";
import blogHeroData from "@/assets/jsonData/pages/blog.json";

export const metadata = {
    title: "Brandspace - Blog"
};

const BlogPage = () => {
    return (
        <>
            <div className="aixor-main blog-page">
                <LayoutV3>
                    <HeroV2 data={blogHeroData} />
                    <FeatureV3 />
                </LayoutV3>
            </div>
        </>
    );
};

export default BlogPage;