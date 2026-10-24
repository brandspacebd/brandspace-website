import HeroV2 from "@/components/hero/AboutHero";
import LayoutV3 from "@/components/layouts/LayoutV3";
import TeamV1 from "@/components/team/TeamV1";
import ServicesV2 from "@/components/services/ServicesV2";
import FeatureV1 from "@/components/feature/FeatureV1";
import ContactV1 from "@/components/contact/ContactV1";
import CreativeNetworkData from "@/assets/jsonData/team/CreativeNetworkData.json";

export const metadata = {
    title: "Our Creative Network | Brandspace",
    description: "Discover Brandspace's extended global network of directors, generative artists, illustrators, and strategists."
};

const CreativeNetworkPage = () => {
    return (
        <div className="aixor-main creative-network-page">
            <LayoutV3>
                <HeroV2 title="Our Creative Network" />
                <TeamV1 teamData={CreativeNetworkData} subtitle="GLOBAL CREATIVE NETWORK" hasDetailsLink={false} />
                <ServicesV2 />
                <FeatureV1 />
                <ContactV1 />
            </LayoutV3>
        </div>
    );
};

export default CreativeNetworkPage;
