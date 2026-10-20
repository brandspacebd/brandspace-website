"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import angleIcon from "@/assets/images/angle-icon-1.svg"
import Image from "next/image";

interface DataType {
    id?: number;
    thumb?: string;
    title?: string;
    end?: string;
}

const SingleFactV1 = ({ fact }: { fact: DataType }) => {
    const { id, thumb, title, end } = fact

    return (
        <>
            <Image src={`/assets/images/${thumb}`} alt="funfact" className="overlay" width={512} height={512} />
            <div className="funfact-header">
                <span className="title">{title}</span>
            </div>
            <div className="funfact-footer">
                <span className="number">{end}<span>+</span></span>
                <Link href={`/service-details/${id}`}>
                    <Image src={angleIcon} alt="icon" />
                </Link>
            </div>
        </>
    );
};

export default dynamic(() => Promise.resolve(SingleFactV1), { ssr: false });