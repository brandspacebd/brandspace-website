import siteSettings from "@/assets/jsonData/settings/siteSettings.json";

const SocialShareV1 = () => {
    return (
        <>
            <li><a target="_blank" href={siteSettings.socialLinks.dribbble} rel="noreferrer"><i className="lab la-dribbble" /></a></li>
            <li><a target="_blank" href={siteSettings.socialLinks.twitter} rel="noreferrer"><i className="lab la-twitter" /></a></li>
            <li><a target="_blank" href={siteSettings.socialLinks.instagram} rel="noreferrer"><i className="lab la-instagram" /></a></li>
            <li><a target="_blank" href={siteSettings.socialLinks.behance} rel="noreferrer"><i className="lab la-behance" /></a></li>
        </>
    );
};

export default SocialShareV1;