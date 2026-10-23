import Link from 'next/link';
import Image from 'next/image';
import siteSettingsRaw from "@/assets/jsonData/settings/siteSettings.json";
import getImageUrl from '../utilities/getImageUrl';
import { SiteSettings } from '@/types/content';
import NavbarMenu from './NavbarMenu';

const siteSettings = siteSettingsRaw as SiteSettings;

const HeaderMenu = () => {
    const phone = siteSettings.phone || "+880 1727 881588";
    const email = siteSettings.email || "hello@brandspacebd.com";
    const siteName = siteSettings.siteName || "Brandspace";

    return (
        <header className="header-menu-wrap">
            <div className="custom-container">
                <div className="custom-row">

                    <Link href="/" className="logo">
                        <Image src={getImageUrl(siteSettings.logo)} alt={siteName} width={250} height={66} priority />
                    </Link>

                    {/* Navigation menu */}
                    <NavbarMenu />


                    {/* Header right info */}
                    <div className="header-right-info">
                        {phone && <a className="with-border" href={`tel:${phone}`}>{phone}</a>}
                        {email && (
                            <a href={`mailto:${email}`}>
                                <i className="iconoir-mail-out" />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeaderMenu;