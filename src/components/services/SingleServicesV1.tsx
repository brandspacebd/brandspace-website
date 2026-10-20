import Image from 'next/image';
import Link from 'next/link';

interface DataType {
    id?: number;
    name?: string;
    thumb?: string;
    icon?: string;
}

const SingleServicesV1 = ({ services }: { services: DataType }) => {
    const { id, icon, name, thumb } = services

    return (
        <>
            <div className="service-inner">
                <h4 className="title">
                    <Image src={`/assets/images/${icon}`} alt="icon" width={100} height={100} />
                    <Link href={`/service-details/${id}`}>{name}</Link>
                </h4>
                <p className="service-feature-lists">
                    <span>I. Legacy Modernization </span>
                    <span>II. Solution Design </span>
                    <span>III. Technology Enabling </span>
                    <span>IV. Mobile-First Systems</span>
                </p>
                <div className="service-img-box">
                    <Image src={`/assets/images/${thumb}`} alt="Icon" width={512} height={468} />
                </div>
            </div>
        </>
    );
};

export default SingleServicesV1;