import brandspaceLogo from "@/assets/images/logo-1.svg";
import Image from "next/image";

const Preloader = () => {
    return (
        <>
            <div className="preloader-wrap">
                <video loop muted autoPlay>
                    <source src="/assets/video/hero-video.mp4" type="video/mp4" />
                </video>
                <Image src={brandspaceLogo} alt="Brandspace Logo" width={280} height={75} priority />
            </div>
        </>
    );
};

export default Preloader;