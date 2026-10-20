import ContactV1 from '@/components/contact/ContactV1';
import HeroV2 from '@/components/hero/AboutHero';
import LayoutV3 from '@/components/layouts/LayoutV3';
import PartnerV1 from '@/components/partner/PartnerV1';
import TeamDetailsContent from '@/components/team/TeamDetailsContent';
import TeamV1Data from "@/assets/jsonData/team/TeamV1Data.json";

export const metadata = {
    title: "Aixor - Team Details"
};

interface Params {
    id: string;
}

interface PageProps {
    params: Promise<Params>;
}

const TeamDetailsPage = async ({ params }: PageProps) => {

    const { id } = await params;
    const data = TeamV1Data.find(member => member.id === parseInt(id))

    return (
        <>
            <LayoutV3>
                <HeroV2 title="Team Details" />
                {data && <TeamDetailsContent memberData={data} />}
                <ContactV1 />
                <PartnerV1 />
            </LayoutV3>
        </>
    );
};

export default TeamDetailsPage;