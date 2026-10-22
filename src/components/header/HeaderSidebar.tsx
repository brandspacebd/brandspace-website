/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";
import sidebarbg from "@/assets/images/sidebarbg.png";
import Image from "next/image";
import SocialShareV1 from "../social/SocialShareV1";
import { useEffect, useState } from "react";
import Link from "next/link";
import siteSettingsRaw from "@/assets/jsonData/settings/siteSettings.json";
import { SiteSettings } from "@/types/content";

const siteSettings = siteSettingsRaw as SiteSettings;

const HeaderSidebar = () => {
    const phone = siteSettings.phone || "+880 1727 881588";
    const email = siteSettings.email || "hello@brandspacebd.com";
    const address = siteSettings.address || "Dhaka, Bangladesh";
    const [isSidebarActive, setIsSidebarActive] = useState(false);
    const [isHamburgActive, setIsHamburgActive] = useState(false);

    // Expandable section states for mobile
    const [openTeam, setOpenTeam] = useState(false);
    const [openConcerns, setOpenConcerns] = useState(false);
    const [openExplore, setOpenExplore] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsHamburgActive(window.scrollY >= 100);
        };

        // Attach event listener
        window.addEventListener("scroll", handleScroll);

        // Cleanup function
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleHamburgClick = () => {
        setIsSidebarActive(true);
        document.body.style.overflow = "hidden";
    };

    const handleCloseClick = () => {
        setIsSidebarActive(false);
        document.body.style.overflow = "auto";
    };

    return (
        <>
            {/* hamburg-menu button */}
            <div className="scroll-to-show-menu">
                <span className={`hamburg-menu ${isHamburgActive ? "active" : ""}`} onClick={handleHamburgClick}>
                    <span />
                    <span />
                    <span />
                </span>
            </div>

            {/* Sidebar Drawer */}
            <div className={`header-sidebar-wrap ${isSidebarActive ? "active" : ""}`}>
                <div className="header-sidebar-content">
                    <span className="close-header-sidebar" onClick={handleCloseClick}>
                        <i className="las la-times" />
                    </span>

                    {/* Sidebar image */}
                    <Image src={sidebarbg} alt="sidebar" className="sidebar-shape" />
                    <div className="header-sidebar-top">
                        <ul>
                            <li>
                                <span>{address}</span>
                                {email && <a href={`mailto:${email}`}>E: {email}</a>}
                            </li>
                            {phone && (
                                <li>
                                    <a href={`tel:${phone}`}>{phone}</a>
                                </li>
                            )}
                        </ul>
                    </div>

                    {/* Sidebar menu */}
                    <nav className="sidebar-menu">
                        <ul className="menu" id="sidebar-menu-id">
                            <li>
                                <Link href="/" onClick={handleCloseClick}>HOME</Link>
                            </li>
                            <li>
                                <Link href="/projects" onClick={handleCloseClick}>PROJECTS</Link>
                            </li>
                            <li>
                                <Link href="/about" onClick={handleCloseClick}>ABOUT US</Link>
                            </li>

                            {/* MEET THE TEAM */}
                            <li>
                                <div
                                    onClick={() => setOpenTeam(!openTeam)}
                                    style={{ display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer", color: "var(--secondary)" }}
                                >
                                    <span>MEET THE TEAM</span>
                                    <i className={`las ${openTeam ? "la-angle-up" : "la-angle-down"}`} style={{ fontSize: "16px" }} />
                                </div>
                                {openTeam && (
                                    <ul style={{ paddingLeft: "15px", marginTop: "10px", display: "flex", flexDirection: "column", gap: "8px", borderLeft: "1px solid rgba(201, 243, 29, 0.4)" }}>
                                        <li><Link href="/team" onClick={handleCloseClick} style={{ fontSize: "14px" }}>Our Core Team</Link></li>
                                        <li><Link href="/creative-network" onClick={handleCloseClick} style={{ fontSize: "14px" }}>Our Creative Network</Link></li>
                                    </ul>
                                )}
                            </li>

                            {/* OUR CONCERNS */}
                            <li>
                                <div
                                    onClick={() => setOpenConcerns(!openConcerns)}
                                    style={{ display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer", color: "var(--secondary)" }}
                                >
                                    <span>OUR CONCERNS</span>
                                    <i className={`las ${openConcerns ? "la-angle-up" : "la-angle-down"}`} style={{ fontSize: "16px" }} />
                                </div>
                                {openConcerns && (
                                    <ul style={{ paddingLeft: "15px", marginTop: "10px", display: "flex", flexDirection: "column", gap: "8px", borderLeft: "1px solid rgba(201, 243, 29, 0.4)" }}>
                                        <li><Link href="/concerns/gardenspace" onClick={handleCloseClick} style={{ fontSize: "14px" }}>Gardenspace</Link></li>
                                        <li><Link href="/concerns/dads" onClick={handleCloseClick} style={{ fontSize: "14px" }}>DAdS</Link></li>
                                        <li><Link href="/concerns/khyap" onClick={handleCloseClick} style={{ fontSize: "14px" }}>Khyap</Link></li>
                                    </ul>
                                )}
                            </li>

                            {/* CONNECT */}
                            <li>
                                <Link href="/contact" onClick={handleCloseClick}>CONNECT</Link>
                            </li>

                            {/* EXPLORE */}
                            <li>
                                <div
                                    onClick={() => setOpenExplore(!openExplore)}
                                    style={{ display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer", color: "var(--secondary)" }}
                                >
                                    <span>EXPLORE</span>
                                    <i className={`las ${openExplore ? "la-angle-up" : "la-angle-down"}`} style={{ fontSize: "16px" }} />
                                </div>
                                {openExplore && (
                                    <ul style={{ paddingLeft: "15px", marginTop: "10px", display: "flex", flexDirection: "column", gap: "8px", borderLeft: "1px solid rgba(201, 243, 29, 0.4)" }}>
                                        <li><Link href="/clients" onClick={handleCloseClick} style={{ fontSize: "14px" }}>Our Clients</Link></li>
                                        <li><Link href="/services" onClick={handleCloseClick} style={{ fontSize: "14px" }}>All Services</Link></li>
                                        <li><Link href="/services#creative-work" onClick={handleCloseClick} style={{ fontSize: "13px", color: "#aaa" }}>↳ Creative Work</Link></li>
                                        <li><Link href="/services#ai-generated" onClick={handleCloseClick} style={{ fontSize: "13px", color: "#aaa" }}>↳ AI Generated Campaign</Link></li>
                                        <li><Link href="/services#hybrid-ai" onClick={handleCloseClick} style={{ fontSize: "13px", color: "#aaa" }}>↳ Hybrid AI Creative Design</Link></li>
                                        <li><Link href="/services#digital-campaign" onClick={handleCloseClick} style={{ fontSize: "13px", color: "#aaa" }}>↳ Digital Campaign</Link></li>
                                        <li><Link href="/services#360-campaign" onClick={handleCloseClick} style={{ fontSize: "13px", color: "#aaa" }}>↳ 360 Degree Campaign</Link></li>
                                        <li><Link href="/service-details/1" onClick={handleCloseClick} style={{ fontSize: "14px" }}>Service Details</Link></li>
                                        <li><Link href="/project-details/1" onClick={handleCloseClick} style={{ fontSize: "14px" }}>Project Details</Link></li>
                                        <li><Link href="/team-details/1" onClick={handleCloseClick} style={{ fontSize: "14px" }}>Team Details</Link></li>
                                        <li><Link href="/press-releases" onClick={handleCloseClick} style={{ fontSize: "14px" }}>Press Releases</Link></li>
                                        <li><Link href="/stories" onClick={handleCloseClick} style={{ fontSize: "14px" }}>Stories</Link></li>
                                        <li><Link href="/credentials" onClick={handleCloseClick} style={{ fontSize: "14px" }}>Credentials</Link></li>
                                        <li><Link href="/rate-card" onClick={handleCloseClick} style={{ fontSize: "14px", color: "var(--primary, #c9f31d)" }}>Rate Card (Request)</Link></li>
                                        <li><Link href="/retainer-service" onClick={handleCloseClick} style={{ fontSize: "14px" }}>Monthly Retainer Service</Link></li>
                                        <li><Link href="/retainer-calculator" onClick={handleCloseClick} style={{ fontSize: "14px" }}>Retainer Fee Calculator</Link></li>
                                        <li><Link href="/careers" onClick={handleCloseClick} style={{ fontSize: "14px" }}>Careers (Hiring)</Link></li>
                                    </ul>
                                )}
                            </li>
                        </ul>
                    </nav>

                    <div className="header-sidebar-bottom">
                        <ul>
                            <SocialShareV1 />
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderSidebar;
