"use client";
import dynamic from "next/dynamic";

import Image from "next/image";
import Link from "next/link";

interface DataType {
    id?: number;
    thumb?: string;
    name?: string;
    designation?: string;
    text?: string;
    delay?: number;
}

const SingleTeamV1 = ({ member }: { member: DataType }) => {
    const { id, thumb, name, designation, text, delay } = member;

    return (
        <>
            <div className="team-member-box" data-aos="fade-up" data-aos-delay={delay}>
                <div className="img-box">
                    <Link href={`/team-details/${id}`}>
                        <Image src={`/assets/images/${thumb}`} alt="team-img" width={790} height={780} />
                    </Link>
                </div>
                <div className="content">
                    <Link href={`/team-details/${id}`}>
                        <span className="name">{name}</span>
                    </Link>
                    <span className="designation">{designation}</span>
                    <div className="shape"><span /></div>
                    <p>{text}</p>
                </div>
            </div>
        </>
    );
};
export default dynamic(() => Promise.resolve(SingleTeamV1), { ssr: false });