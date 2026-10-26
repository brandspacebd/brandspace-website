import contactDefault from '@/assets/images/contact.png';
import btnArrow from '@/assets/images/btn-arrow.svg';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import getImageUrl from '../utilities/getImageUrl';

export interface PageHeroData {
    pageName?: string;
    title?: string;
    subtitle?: string;
    heroImage?: string | StaticImageData;
    quote?: string;
    authorName?: string;
    authorRole?: string;
    buttonText?: string;
    buttonUrl?: string;
}

export interface HeroV2Props extends PageHeroData {
    data?: PageHeroData;
}

const HeroV2 = ({
    data,
    title,
    subtitle,
    heroImage,
    quote,
    authorName,
    authorRole,
    buttonText,
    buttonUrl
}: HeroV2Props = {}) => {
    const resolvedTitle = title ?? data?.title ?? "Not found Page";
    const resolvedSubtitle = subtitle ?? data?.subtitle ?? "Brandspace";
    const resolvedQuote = quote ?? data?.quote ?? `"At Brandspace, we hold that creativity sparks innovation. As a full-spectrum creative firm, we excel in converting ambitious ideas into engaging results."`;
    const resolvedAuthorName = authorName ?? data?.authorName ?? "Ahshan M";
    const resolvedAuthorRole = authorRole ?? data?.authorRole ?? "Chief Executive Officer";
    const resolvedButtonText = buttonText ?? data?.buttonText ?? "Let's Connect";
    const resolvedButtonUrl = buttonUrl ?? data?.buttonUrl ?? "/contact";
    const rawImage = heroImage ?? data?.heroImage;

    const isStatic = typeof rawImage === 'object' && rawImage !== null && 'src' in rawImage;
    const imageSrc = isStatic
        ? (rawImage as StaticImageData)
        : getImageUrl(typeof rawImage === 'string' ? rawImage : '/assets/images/contact.png', '/assets/images/contact.png');

    return (
        <>
            <div className="hero-sec about-hero-sec" id="hero">
                <div className="custom-container">
                    <div className="hero-inner">
                        <Image
                            className="hero-shape"
                            src={imageSrc}
                            alt={resolvedTitle ? `${resolvedTitle} Hero Shape` : "Hero Shape"}
                            width={508}
                            height={488}
                            priority
                        />
                        <div className="hero-top">
                            <div className="hero-top-desc">
                                <p>{resolvedQuote}</p>
                            </div>
                            {(resolvedAuthorName || resolvedAuthorRole) && (
                                <div className="author-info">
                                    {resolvedAuthorName && <h4>{resolvedAuthorName}</h4>}
                                    {resolvedAuthorRole && <span>{resolvedAuthorRole}</span>}
                                </div>
                            )}
                        </div>
                        <div className="hero-bottom">
                            <div className="left">
                                <h2>{resolvedTitle}</h2>
                                {resolvedSubtitle && <h2>{resolvedSubtitle}</h2>}
                            </div>
                            <Link href={resolvedButtonUrl} className="theme-btn">
                                {resolvedButtonText}
                                <Image src={btnArrow} alt="icon" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroV2;