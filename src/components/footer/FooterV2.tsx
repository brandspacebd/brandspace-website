import Image from 'next/image';
import siteSettingsRaw from "@/assets/jsonData/settings/siteSettings.json";
import getImageUrl from "../utilities/getImageUrl";
import { SiteSettings } from "@/types/content";

const siteSettings = siteSettingsRaw as SiteSettings;

const FooterV2 = () => {
    return (
        <>
            <footer className="footer-area">
                <div className="footer-bottom">
                    <div className="split-text-anim">
                        <Image data-aos="slide-up" data-aos-duration={700} src={getImageUrl(siteSettings.footerLogo)} alt={siteSettings.siteName || "Brandspace"} width={1800} height={340} />
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterV2;