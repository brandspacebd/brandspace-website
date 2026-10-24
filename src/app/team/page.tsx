import HeroV2 from "@/components/hero/AboutHero";
import LayoutV3 from "@/components/layouts/LayoutV3";
import TeamV1 from "@/components/team/TeamV1";
import AboutV2 from "@/components/about/AboutV2";
import PartnerV1 from "@/components/partner/PartnerV1";

export const metadata = {
    title: "Our Core Team | Brandspace",
    description: "Meet the executive leadership and core creative specialists driving innovation at Brandspace."
};

const CoreTeamPage = () => {
    return (
        <div className="aixor-main team-page">
            <LayoutV3>
                <HeroV2 title="Our Core Team" />
                <TeamV1 subtitle="CORE LEADERSHIP & TEAM" />
                <AboutV2 />
                <PartnerV1 />
            </LayoutV3>
        </div>
    );
};

export default CoreTeamPage;
