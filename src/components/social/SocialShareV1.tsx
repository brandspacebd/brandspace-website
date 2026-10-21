import siteSettingsRaw from "@/assets/jsonData/settings/siteSettings.json";
import { SiteSettings } from "@/types/content";

const siteSettings = siteSettingsRaw as SiteSettings;

const SocialShareV1 = () => {
    const socialLinks = siteSettings.socialLinks || {};

    return (
        <>
            {socialLinks.dribbble && <li><a target="_blank" href={socialLinks.dribbble} rel="noreferrer"><i className="lab la-dribbble" /></a></li>}
            {socialLinks.twitter && <li><a target="_blank" href={socialLinks.twitter} rel="noreferrer"><i className="lab la-twitter" /></a></li>}
            {socialLinks.instagram && <li><a target="_blank" href={socialLinks.instagram} rel="noreferrer"><i className="lab la-instagram" /></a></li>}
            {socialLinks.behance && <li><a target="_blank" href={socialLinks.behance} rel="noreferrer"><i className="lab la-behance" /></a></li>}
        </>
    );
};

export default SocialShareV1;