"use client"
import Image from 'next/image';
import Link from 'next/link';
import useHoverEffect from '@/hooks/useHoverEffect';

interface DataType {
    id?: number;
    thumb?: string;
    projectName?: string;
    subTitle1?: string;
    subTitle2?: string;
    info?: string;
    date?: string;
}

const SingleFeatureV1 = ({ feature }: { feature: DataType }) => {
    const { id, thumb, projectName, subTitle1, subTitle2, info, date } = feature;

    const { containerRef, hoverElementRef } = useHoverEffect();

    return (
        <div className="feature-project" ref={containerRef}>
            <div className="hover_mouse" ref={hoverElementRef}>
                <Link href={`/project-details/${id}`}>View</Link>
            </div>
            <div className="img-box">
                <Image src={`/assets/images/${thumb}`} alt="image" width={2544} height={1366} />
            </div>
            <div className="feature-project-infos">
                <div className="feature-project-info-box">
                    <span className="title">Project Name:</span>
                    <Link href={`/project-details/${id}`}>
                        <span className="subtitle">{projectName}</span>
                    </Link>
                </div>
                <div className="feature-project-info-box">
                    <span className="title">Description</span>
                    <span className="subtitle">{subTitle1}<br />{subTitle2}</span>
                </div>
                <div className="feature-project-info-box">
                    <span className="title">Industry:</span>
                    <span className="subtitle">{info}</span>
                </div>
                <div className="feature-project-info-box">
                    <span className="title">Release Date:</span>
                    <span className="subtitle">{date}</span>
                </div>
            </div>
        </div>
    );
};

export default SingleFeatureV1;
