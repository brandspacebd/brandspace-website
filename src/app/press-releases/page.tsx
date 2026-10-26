import FeatureV3 from "@/components/feature/FeatureV3";
import HeroV2 from "@/components/hero/AboutHero";
import LayoutV3 from "@/components/layouts/LayoutV3";
import pressReleasesHeroData from "@/assets/jsonData/pages/press-releases.json";
import pressReleasesData from "@/assets/jsonData/press/PressReleasesData.json";

export const metadata = {
    title: "Press Releases - Brandspace",
    description: "Official announcements, media coverage, industry recognitions, and latest press releases from Brandspace."
};

const PressReleasesPage = () => {
    return (
        <div className="aixor-main press-page">
            <LayoutV3>
                <HeroV2 data={pressReleasesHeroData} />
                <FeatureV3 items={pressReleasesData} />
            </LayoutV3>
        </div>
    );
};

export default PressReleasesPage;
