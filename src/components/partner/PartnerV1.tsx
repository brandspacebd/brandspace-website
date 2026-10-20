import PartnerData from "@/assets/jsonData/partner/PartnerData.json";
import Image from "next/image";
import getImageUrl from "../utilities/getImageUrl";

const PartnerV1 = () => {
    return (
        <>
            <div className="our-partner-sec">
                <ul>
                    {PartnerData.map(data =>
                        <li key={data.id}><Image src={getImageUrl(data.thumb)} alt="client" width={164} height={36} /></li>
                    )}
                </ul>
            </div>
        </>
    );
};

export default PartnerV1;