import Image from 'next/image';

interface DataType {
    thumb?: string;
    text?: string;
    title?: string;
}

const SingleServicesV2 = ({ service }: { service: DataType }) => {
    const { thumb, title, text } = service

    return (
        <>
            <div className="service-inner">
                <div className="service-img-box">
                    <Image src={`/assets/images/${thumb}`} alt="image" width={512} height={468} />
                </div>
                <div className="service-feature-description">
                    <h4 className="title">{title}</h4>
                    <p>{text}</p>
                </div>
            </div>
        </>
    );
};

export default SingleServicesV2;