"use client"
import useHoverEffect from '@/hooks/useHoverEffect';
import Image from 'next/image';
import Link from 'next/link';

interface DataType {
    id?: number;
    thumb?: string;
    title?: string;
    date?: string;
    delay?: string;
}

const SingleFeatureV3 = ({ feature }: { feature: DataType }) => {
    const { id, thumb, title, date, delay } = feature

    const { containerRef, hoverElementRef } = useHoverEffect();

    return (
        <>
            <div className="feature-project-single">
                <div className="feature-project" data-aos="fade-up" data-aos-delay={delay} ref={containerRef}>
                    <div className="hover_mouse" ref={hoverElementRef}>
                        <Link href={`/blog-details/${id}`}>View</Link>
                    </div>
                    <div className="img-box">
                        <Image src={`/assets/images/${thumb}`} alt="image" width={1215} height={990} />
                    </div>
                    <div className="feature-project-infos">
                        <div className="feature-project-info-box">
                            <span className="title">Title:</span>
                            <Link href={`/blog-details/${id}`}>
                                <span className="subtitle">{title}</span>
                            </Link>
                        </div>
                        <div className="feature-project-info-box">
                            <span className="title">Date:</span>
                            <span className="subtitle">{date}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleFeatureV3;