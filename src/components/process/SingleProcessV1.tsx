import Image from "next/image";

interface DataType {
    number: string;
    thumb: string;
    alt: string;
    name: string;
    designation: string;
    description: string;
    delay: number;
}

const SingleProcessV1 = ({ process }: { process: DataType }) => {
    const { number, thumb, name, designation, description, delay } = process;

    return (
        <>
            <div className="team-member-box process-box" data-aos="fade-up" data-aos-delay={delay}>
                <div className="img-box">
                    <span className="number">{number}</span>
                    <Image src={`/assets/images/${thumb}`} alt="Process" width={745} height={760} />
                </div>
                <div className="content">
                    <span className="name">{name}</span>
                    <span className="designation">{designation}</span>
                    <div className="shape"><span /></div>
                    <p>{description}</p>
                </div>
            </div>
        </>
    );
};

export default SingleProcessV1;