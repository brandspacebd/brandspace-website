"use client";
import sidebarbg from "@/assets/images/sidebarbg.png";
import Image from "next/image";
import SocialShareV1 from "../social/SocialShareV1";
import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import siteSettingsRaw from "@/assets/jsonData/settings/siteSettings.json";
import getImageUrl from "../utilities/getImageUrl";
import { SiteSettings } from "@/types/content";

const siteSettings = siteSettingsRaw as SiteSettings;

const HeaderSidebar = () => {
    const phone = siteSettings.phone || "+880 1727 881588";
    const email = siteSettings.email || "hello@brandspacebd.com";
    const address = siteSettings.address || "Dhaka, Bangladesh";
    const siteName = siteSettings.siteName || "Brandspace";

    const [isSidebarActive, setIsSidebarActive] = useState(false);
    const [isHamburgActive, setIsHamburgActive] = useState(false);

    // Expandable section states for vertical mobile navigation
    const [openTeam, setOpenTeam] = useState(false);
    const [openConcerns, setOpenConcerns] = useState(false);
    const [openExplore, setOpenExplore] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsHamburgActive(window.scrollY >= 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleHamburgClick = () => {
        setIsSidebarActive(true);
        document.body.style.overflow = "hidden";
    };

    const handleCloseClick = useCallback(() => {
        setIsSidebarActive(false);
        document.body.style.overflow = "auto";
    }, []);

    // Handle ESC key to close drawer
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape" && isSidebarActive) {
                handleCloseClick();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isSidebarActive, handleCloseClick]);

    // Cleanup overflow style on unmount
    useEffect(() => {
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <>
            {/* Hamburger button (visible on mobile / scroll) */}
            <div className="scroll-to-show-menu">
                <span
                    className={`hamburg-menu ${isHamburgActive ? "active" : ""}`}
                    onClick={handleHamburgClick}
                    role="button"
                    aria-label="Open navigation menu"
                    tabIndex={0}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                            handleHamburgClick();
                        }
                    }}
                >
                    <span />
                    <span />
                    <span />
                </span>
            </div>

            {/* Sidebar Drawer Overlay */}
            <div
                className={`header-sidebar-wrap ${isSidebarActive ? "active" : ""}`}
                onClick={handleCloseClick}
                aria-hidden={!isSidebarActive}
            >
                <div
                    className="header-sidebar-content"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Background ambient shape */}
                    <Image
                        src={sidebarbg}
                        alt="sidebar decoration"
                        className="sidebar-shape"
                        priority={false}
                    />

                    {/* Drawer Header: Logo + Close Button */}
                    <div className="mobile-sidebar-header">
                        <Link href="/" className="mobile-logo" onClick={handleCloseClick}>
                            <Image
                                src={getImageUrl(siteSettings.logo)}
                                alt={siteName}
                                width={140}
                                height={38}
                                priority
                            />
                        </Link>
                        <button
                            type="button"
                            className="close-sidebar-btn"
                            onClick={handleCloseClick}
                            aria-label="Close menu"
                        >
                            <i className="las la-times" />
                        </button>
                    </div>

                    {/* Vertical Navigation Menu */}
                    <div className="mobile-nav-container">
                        <nav aria-label="Mobile navigation">
                            <ul className="mobile-vertical-menu">
                                {/* HOME */}
                                <li>
                                    <Link href="/" className="mobile-nav-item-link" onClick={handleCloseClick}>
                                        <span>HOME</span>
                                        <i className="las la-angle-right mobile-arrow-indicator" />
                                    </Link>
                                </li>

                                {/* PROJECTS */}
                                <li>
                                    <Link href="/projects" className="mobile-nav-item-link" onClick={handleCloseClick}>
                                        <span>
                                            PROJECTS <span className="mobile-badge-count">(7)</span>
                                        </span>
                                        <i className="las la-angle-right mobile-arrow-indicator" />
                                    </Link>
                                </li>

                                {/* ABOUT US */}
                                <li>
                                    <Link href="/about" className="mobile-nav-item-link" onClick={handleCloseClick}>
                                        <span>ABOUT US</span>
                                        <i className="las la-angle-right mobile-arrow-indicator" />
                                    </Link>
                                </li>

                                {/* MEET THE TEAM (Accordion) */}
                                <li>
                                    <button
                                        type="button"
                                        className={`mobile-nav-accordion-btn ${openTeam ? "open" : ""}`}
                                        onClick={() => setOpenTeam(!openTeam)}
                                        aria-expanded={openTeam}
                                    >
                                        <span>MEET THE TEAM</span>
                                        <i className="las la-angle-down chevron-icon" />
                                    </button>
                                    {openTeam && (
                                        <div className="mobile-submenu-collapse">
                                            <Link href="/team" className="mobile-submenu-link" onClick={handleCloseClick}>
                                                Our Core Team
                                            </Link>
                                            <Link href="/creative-network" className="mobile-submenu-link" onClick={handleCloseClick}>
                                                Our Creative Network
                                            </Link>
                                        </div>
                                    )}
                                </li>

                                {/* OUR VENTURES (Accordion) */}
                                <li>
                                    <button
                                        type="button"
                                        className={`mobile-nav-accordion-btn ${openConcerns ? "open" : ""}`}
                                        onClick={() => setOpenConcerns(!openConcerns)}
                                        aria-expanded={openConcerns}
                                    >
                                        <span>OUR VENTURES</span>
                                        <i className="las la-angle-down chevron-icon" />
                                    </button>
                                    {openConcerns && (
                                        <div className="mobile-submenu-collapse">
                                            <Link href="/concerns/gardenspace" className="mobile-submenu-link" onClick={handleCloseClick}>
                                                Gardenspace
                                            </Link>
                                            <Link href="/concerns/juniorspace" className="mobile-submenu-link" onClick={handleCloseClick}>
                                                Juniorspace
                                            </Link>
                                            <Link href="/concerns/khyap" className="mobile-submenu-link" onClick={handleCloseClick}>
                                                Khyap
                                            </Link>
                                        </div>
                                    )}
                                </li>

                                {/* EXPLORE (Mega Dropdown in Vertical Presentation) */}
                                <li>
                                    <button
                                        type="button"
                                        className={`mobile-nav-accordion-btn ${openExplore ? "open" : ""}`}
                                        onClick={() => setOpenExplore(!openExplore)}
                                        aria-expanded={openExplore}
                                    >
                                        <span>EXPLORE</span>
                                        <i className="las la-angle-down chevron-icon" />
                                    </button>
                                    {openExplore && (
                                        <div className="mobile-submenu-collapse mobile-explore-wrap">
                                            {/* Column 1: Clients & Services */}
                                            <div className="mobile-explore-section">
                                                <span className="mobile-explore-section-title">
                                                    Clients & Services
                                                </span>
                                                <ul className="mobile-explore-links">
                                                    <li>
                                                        <Link href="/clients" className="mobile-explore-link" onClick={handleCloseClick}>
                                                            <span>Our Clients</span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/services" className="mobile-explore-link mobile-all-services-link" onClick={handleCloseClick}>
                                                            <span>All Services →</span>
                                                        </Link>
                                                        <div className="mobile-sub-services-box">
                                                            <Link href="/services#creative-work" className="mobile-sub-service-link" onClick={handleCloseClick}>
                                                                Creative Work
                                                            </Link>
                                                            <Link href="/services#ai-generated" className="mobile-sub-service-link" onClick={handleCloseClick}>
                                                                AI Generated Campaign
                                                            </Link>
                                                            <Link href="/services#hybrid-ai" className="mobile-sub-service-link" onClick={handleCloseClick}>
                                                                Hybrid AI Creative Design
                                                            </Link>
                                                            <Link href="/services#digital-campaign" className="mobile-sub-service-link" onClick={handleCloseClick}>
                                                                Digital Campaign
                                                            </Link>
                                                            <Link href="/services#360-campaign" className="mobile-sub-service-link" onClick={handleCloseClick}>
                                                                360 Degree Campaign
                                                            </Link>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>

                                            {/* Column 2: Showcase & Media */}
                                            <div className="mobile-explore-section">
                                                <span className="mobile-explore-section-title">
                                                    Showcase & Media
                                                </span>
                                                <ul className="mobile-explore-links">
                                                    <li>
                                                        <Link href="/service-details/1" className="mobile-explore-link" onClick={handleCloseClick}>
                                                            <span>Service Details / Single</span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/project-details/1" className="mobile-explore-link" onClick={handleCloseClick}>
                                                            <span>Project Details / Single</span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/team-details/1" className="mobile-explore-link" onClick={handleCloseClick}>
                                                            <span>Team Details / Single</span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/press-releases" className="mobile-explore-link" onClick={handleCloseClick}>
                                                            <span>Press Releases</span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/stories" className="mobile-explore-link" onClick={handleCloseClick}>
                                                            <span>Stories</span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/credentials" className="mobile-explore-link" onClick={handleCloseClick}>
                                                            <span>Credentials</span>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>

                                            {/* Column 3: LET’S CONNECT (Replacing Engage & Join) */}
                                            <div className="mobile-explore-section">
                                                <span className="mobile-explore-section-title">
                                                    LET’S CONNECT
                                                </span>
                                                <ul className="mobile-explore-links">
                                                    <li>
                                                        <Link href="/rate-card" className="mobile-explore-link" onClick={handleCloseClick}>
                                                            <span>Rate Card</span>
                                                            <span className="badge-pill badge-request">Request</span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/retainer-service" className="mobile-explore-link" onClick={handleCloseClick}>
                                                            <span>Monthly Retainer Service</span>
                                                            <span className="badge-pill badge-sample">Sample 1</span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/retainer-calculator" className="mobile-explore-link" onClick={handleCloseClick}>
                                                            <span>Retainer Fee Calculator</span>
                                                            <span className="badge-pill badge-sample">Sample 2</span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/careers" className="mobile-explore-link" onClick={handleCloseClick}>
                                                            <span>Careers</span>
                                                            <span className="badge-pill badge-hiring">Hiring</span>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    )}
                                </li>

                                {/* CONNECT CTA Button at the end */}
                                <li className="mobile-nav-connect-item">
                                    <Link href="/contact" className="mobile-nav-connect-cta" onClick={handleCloseClick}>
                                        <span>CONNECT</span>
                                        <i className="las la-arrow-right" />
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    {/* Drawer Footer: Quick Contact, Address & Social */}
                    <div className="mobile-sidebar-footer">
                        <div className="mobile-sidebar-contact-grid">
                            {phone && (
                                <a href={`tel:${phone}`} className="mobile-contact-pill-btn">
                                    <i className="las la-phone" />
                                    <span>{phone}</span>
                                </a>
                            )}
                            {email && (
                                <a href={`mailto:${email}`} className="mobile-contact-pill-btn">
                                    <i className="iconoir-mail-out" />
                                    <span>{email}</span>
                                </a>
                            )}
                        </div>

                        {address && (
                            <div className="mobile-address-row">
                                <i className="las la-map-marker" />
                                <span>{address}</span>
                            </div>
                        )}

                        <div className="mobile-social-wrap">
                            <SocialShareV1 />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderSidebar;
