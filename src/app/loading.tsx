import siteSettingsRaw from "@/assets/jsonData/settings/siteSettings.json";
import getImageUrl from "@/components/utilities/getImageUrl";
import Image from "next/image";

const Preloader = () => {
    return (
        <>
            <div className="preloader-wrap">
                <video loop muted autoPlay>
                    <source src="/assets/video/hero-video.mp4" type="video/mp4" />
                </video>
                <Image 
                    src={getImageUrl(siteSettingsRaw.logo, "/logo/logo.svg")} 
                    alt={siteSettingsRaw.siteName || "Brandspace Logo"} 
                    width={280} 
                    height={75} 
                    priority 
                />
            </div>
        </>
    );
};

export default Preloader;