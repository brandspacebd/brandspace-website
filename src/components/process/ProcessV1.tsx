import Union from "@/assets/images/Union.svg"
import Image from "next/image";
import ProcessV1Data from "@/assets/jsonData/process/ProcessV1Data.json";
import SingleProcessV1 from "./SingleProcessV1";

const ProcessV1 = () => {
    return (
        <>
            <div className="process-sec">
                <div className="section-header section-header2">
                    <span className="section-subtitle">
                        <Image src={Union} alt="icon" />
                        Our Process
                    </span>
                    <h2 className="section-title section-title2">
                        Refined Process, <span>Efficient Flow</span>
                    </h2>
                </div>
                <div className="process-lists">
                    {ProcessV1Data.map(process =>
                        <SingleProcessV1 process={process} key={process.id} />
                    )}
                </div>
            </div>
        </>
    );
};

export default ProcessV1;