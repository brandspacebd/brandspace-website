import siteSettingsRaw from "@/assets/jsonData/settings/siteSettings.json";
import { SiteSettings } from "@/types/content";

const siteSettings = siteSettingsRaw as SiteSettings;

const SocialShareV1 = () => {
    const socialLinks = siteSettings.socialLinks || {};

    return (
        <>
            {socialLinks.facebook && <li><a target="_blank" href={socialLinks.facebook} rel="noreferrer" aria-label="Facebook"><i className="lab la-facebook-f" /></a></li>}
            {socialLinks.youtube && <li><a target="_blank" href={socialLinks.youtube} rel="noreferrer" aria-label="YouTube"><i className="lab la-youtube" /></a></li>}
            {socialLinks.dribbble && <li><a target="_blank" href={socialLinks.dribbble} rel="noreferrer" aria-label="Dribbble"><i className="lab la-dribbble" /></a></li>}
            {socialLinks.twitter && <li><a target="_blank" href={socialLinks.twitter} rel="noreferrer" aria-label="Twitter"><i className="lab la-twitter" /></a></li>}
            {socialLinks.instagram && <li><a target="_blank" href={socialLinks.instagram} rel="noreferrer" aria-label="Instagram"><i className="lab la-instagram" /></a></li>}
            {socialLinks.behance && <li><a target="_blank" href={socialLinks.behance} rel="noreferrer" aria-label="Behance"><i className="lab la-behance" /></a></li>}
        </>
    );
};

export default SocialShareV1;