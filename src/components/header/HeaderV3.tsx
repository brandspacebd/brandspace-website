"use client";
import Image from "next/image";
import Link from "next/link";
import useNotchScrollLink from "@/hooks/useNotchScrollLink";
import siteSettingsRaw from "@/assets/jsonData/settings/siteSettings.json";
import getImageUrl from "../utilities/getImageUrl";
import { SiteSettings } from "@/types/content";
import HeaderSidebar from "./HeaderSidebar";
import NavbarMenu from "./NavbarMenu";

const siteSettings = siteSettingsRaw as SiteSettings;

const HeaderV3 = () => {
    const phone = siteSettings.phone || "+880 1727 881588";
    const email = siteSettings.email || "emailtobrandspace@gmail.com";

    useNotchScrollLink(".notch-bar-menu-wrap", "a[href^='#']");

    return (
        <>
            <HeaderSidebar />

            {/* Notch Bar Menu Wrap */}
            <div className="notch-bar-menu-wrap">
                <ul>
                    <li><a className="anchor active" href="#hero">Hero</a></li>
                    <li><a className="anchor" href="#about">About</a></li>
                    <li><a className="anchor" href="#services">Services</a></li>
                    <li><a className="anchor" href="#projects">Projects</a></li>
                    <li><a className="anchor" href="#awards">Awards</a></li>
                    <li><a className="anchor" href="#team">Team</a></li>
                    <li><a className="anchor" href="#pricing">Pricing</a></li>
                    <li><a className="anchor" href="#contact">Contact</a></li>
                </ul>
            </div>

            {/* header-menu-wrap */}
            <header className="header-menu-wrap">
                <div className="custom-container">
                    <div className="custom-row">

                        <Link href="/" className="logo">
                            <Image src={getImageUrl(siteSettings.logo)} alt={siteSettings.siteName || "Logo"} width={250} height={66} priority />
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
        </>
    );
};

export default HeaderV3;