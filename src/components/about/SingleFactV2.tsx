import Image from "next/image";
import angleIcon from "@/assets/images/angle-icon-1.svg"
import getImageUrl from "../utilities/getImageUrl";

interface DataType {
    activeClass: string;
    thumb: string;
    delay: string;
    title: string;
    end: string;
}

const SingleFactV2 = ({ fact }: { fact: DataType }) => {
    const { activeClass, thumb, delay, title, end } = fact;

    return (
        <>
            <div data-aos="fade-up" className={`funfact-box ${activeClass}`} data-aos-delay={delay}>
                <Image src={getImageUrl(thumb)} alt="funfact" className="overlay" width={512} height={512} />
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