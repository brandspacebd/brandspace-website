"use client";
import dynamic from "next/dynamic";

import Image from "next/image";
import Link from "next/link";
import getImageUrl from "../utilities/getImageUrl";

interface DataType {
    id?: number;
    thumb?: string;
    name?: string;
    designation?: string;
    text?: string;
    delay?: number;
    hasDetailsLink?: boolean;
}

const SingleTeamV1 = ({ member, hasDetailsLink = true }: { member: DataType; hasDetailsLink?: boolean }) => {
    const { id, thumb, name, designation, text, delay } = member;
    const canLink = hasDetailsLink && id !== undefined;

    return (
        <>
            <div className="team-member-box" data-aos="fade-up" data-aos-delay={delay}>
                <div className="img-box">
                    {canLink ? (
                        <Link href={`/team-details/${id}`}>
                            <Image src={getImageUrl(thumb)} alt="team-img" width={790} height={780} />
                        </Link>
                    ) : (
                        <Image src={getImageUrl(thumb)} alt="team-img" width={790} height={780} />
                    )}
                </div>
                <div className="content">
                    {canLink ? (
                        <Link href={`/team-details/${id}`}>
                            <span className="name">{name}</span>
                        </Link>
                    ) : (
                        <span className="name">{name}</span>
                    )}
                    <span className="designation">{designation}</span>
                    <div className="shape"><span /></div>
                    <p>{text}</p>
                </div>
            </div>
        </>
    );
};
export default dynamic(() => Promise.resolve(SingleTeamV1), { ssr: false });