import ContactV1 from '@/components/contact/ContactV1';
import FaqV1 from '@/components/faq/FaqV1';
import PartnerV1 from '@/components/partner/PartnerV1';
import PriceV1 from '@/components/pricing/PriceV1';
import ServiceDetailsContent from '@/components/services/ServiceDetailsContent';
import TestimonialV1 from '@/components/testimonial/TestimonialV1';
import ServicesV1Data from "@/assets/jsonData/services/ServicesV1Data.json"
import LayoutV3 from '@/components/layouts/LayoutV3';

export const metadata = {
    title: "Aixor - Service Details"
};

interface Params {
    id: string;
}

interface PageProps {
    params: Promise<Params>;
}

const ServiceDetailsPage = async ({ params }: PageProps) => {

    const { id } = await params;
    const data = ServicesV1Data.find(service => service.id === parseInt(id))

    return (
        <>
            <div className="aixor-main service-single-page single-project">
                <LayoutV3>
                    {data && <ServiceDetailsContent serviceData={data} />}
                    <FaqV1 />
                    <PriceV1 />
                    <TestimonialV1 />
                    <ContactV1 />
                    <PartnerV1 />
                </LayoutV3>
            </div>
        </>
    );
};

export default ServiceDetailsPage