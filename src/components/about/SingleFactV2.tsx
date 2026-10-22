import Image from "next/image";
import angleIcon from "@/assets/images/angle-icon-1.svg"
import getImageUrl from "../utilities/getImageUrl";

interface DataType {
    id?: number;
    activeClass?: string;
    thumb?: string;
    delay?: string | number;
    title?: string;
    end?: string | number;
}

const SingleFactV2 = ({ fact }: { fact: DataType }) => {
    const { activeClass = '', thumb, delay = '100', title = '', end = '' } = fact || {};

    return (
        <>
            <div data-aos="fade-up" className={`funfact-box ${activeClass || ''}`.trim()} data-aos-delay={delay}>
                {thumb && (
                    <Image src={getImageUrl(thumb)} alt={title || "funfact"} className="overlay" width={512} height={512} />
                )}
                <div className="funfact-header">
                    <span className="title">{title}</span>
                </div>
                <div className="funfact-footer">
                    <span className="number">{end}<span>+</span></span>
                    <Image src={angleIcon} alt="icon" />
                </div>
            </div>
        </>
    );
};

export default SingleFactV2;