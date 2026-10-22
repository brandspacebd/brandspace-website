import FeatureV3 from "@/components/feature/FeatureV3";
import HeroV2 from "@/components/hero/AboutHero";
import LayoutV3 from "@/components/layouts/LayoutV3";

export const metadata = {
    title: "Press Releases - Brandspace",
    description: "Official announcements, media coverage, industry recognitions, and latest press releases from Brandspace."
};

const PressReleasesPage = () => {
    return (
        <div className="aixor-main press-page">
            <LayoutV3>
                <HeroV2 title="Press Releases" />
                <FeatureV3 />
            </LayoutV3>
        </div>
    );
};

export default PressReleasesPage;
