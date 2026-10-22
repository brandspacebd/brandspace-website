"use client";
import sidebarbg from "@/assets/images/sidebarbg.png";
import Image from "next/image";
import SocialShareV1 from "../social/SocialShareV1";
import { useEffect, useState } from "react";
import Link from "next/link";
import logo1 from "@/assets/images/logo-1.png";
import useNotchScrollLink from "@/hooks/useNotchScrollLink";
import siteSettingsRaw from "@/assets/jsonData/settings/siteSettings.json";
import getImageUrl from "../utilities/getImageUrl";
import { SiteSettings } from "@/types/content";

const siteSettings = siteSettingsRaw as SiteSettings;

const HeaderV3 = () => {
    const phone = siteSettings.phone || "+880 1727 881588";
    const email = siteSettings.email || "emailtobrandspace@gmail.com";

    const [isSidebarActive, setIsSidebarActive] = useState(false);
    const [isHamburgActive, setIsHamburgActive] = useState(false);

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

    useNotchScrollLink(".notch-bar-menu-wrap", "a[href^='#']");

    return (
        <>
            {/* hamburg-menu */}
            <div className="scroll-to-show-menu">
                <span className={`hamburg-menu ${isHamburgActive ? "active" : ""}`} onClick={handleHamburgClick}>
                    <span />
                    <span />
                    <span />
                </span>
            </div>

            {/* Sidebar */}
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
                                <span>{siteSettings.address}</span>
                                <a href={`mailto:${siteSettings.email}`}>E: {siteSettings.email}</a>
                            </li>
                            <li>
                                <a href={`tel:${siteSettings.phone}`}>{siteSettings.phone}</a>
                            </li>
                        </ul>
                    </div>

                    {/* Sidebar menu */}
                    <nav className="sidebar-menu">
                        <ul className="menu" id="sidebar-menu-id">
                            <li>
                                <a href="#about" onClick={handleCloseClick}>About Us</a>
                            </li>
                            <li>
                                <a href="#services" onClick={handleCloseClick}>Services</a>
                            </li>
                            <li>
                                <a href="#projects" onClick={handleCloseClick}>Projects</a>
                            </li>
                            <li>
                                <a href="#awards" onClick={handleCloseClick}>Awards</a>
                            </li>
                            <li>
                                <a href="#team" onClick={handleCloseClick}>Members</a>
                            </li>
                            <li>
                                <a href="#pricing" onClick={handleCloseClick}>Pricing</a>
                            </li>
                            <li>
                                <a href="#contact" onClick={handleCloseClick}>Contact</a>
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

            {/* Sidebar 2 */}
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
                                <span>{siteSettings.address || "Dhaka, Bangladesh"}</span>
                                {siteSettings.email && <a href={`mailto:${siteSettings.email}`}>E: {siteSettings.email}</a>}
                            </li>
                            {siteSettings.phone && (
                                <li>
                                    <a href={`tel:${siteSettings.phone}`}>{siteSettings.phone}</a>
                                </li>
                            )}
                        </ul>
                    </div>

                    {/* Sidebar menu */}
                    <nav className="sidebar-menu">
                        <ul className="menu" id="sidebar-menu-id">
                            <li>
                                <a href="#about" onClick={handleCloseClick}>About Us</a>
                            </li>
                            <li>
                                <a href="#services" onClick={handleCloseClick}>Services</a>
                            </li>
                            <li>
                                <a href="#projects" onClick={handleCloseClick}>Projects</a>
                            </li>
                            <li>
                                <a href="#awards" onClick={handleCloseClick}>Awards</a>
                            </li>
                            <li>
                                <a href="#team" onClick={handleCloseClick}>Members</a>
                            </li>
                            <li>
                                <a href="#pricing" onClick={handleCloseClick}>Pricing</a>
                            </li>
                            <li>
                                <a href="#contact" onClick={handleCloseClick}>Contact</a>
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

            {/* header-menu-wrap */}
            <header className="header-menu-wrap">
                <div className="custom-container">
                    <div className="custom-row">

                        <Link href="/" className="logo">
                            <Image src={getImageUrl(siteSettings.logo)} alt={siteSettings.siteName || "Logo"} width={155} height={42} priority />
                        </Link>

                        {/* Navigation menu */}
                        <nav className="navbar">
                            <ul className="menu">
                                <li>
                                    <Link href="/">HOME <span /></Link>
                                </li>
                                <li>
                                    <Link href="/projects">PROJECTS <span>(7)</span></Link>
                                </li>
                                <li>
                                    <Link href="/about">ABOUT US <span /></Link>
                                </li>

                                {/* MEET THE TEAM Dropdown */}
                                <li className="dropdown-menu-item">
                                    <Link href="/team">MEET THE TEAM <i className="las la-angle-down" /></Link>
                                    <ul className="dropdown-list">
                                        <li><Link href="/team">Our Core Team</Link></li>
                                        <li><Link href="/creative-network">Our Creative Network</Link></li>
                                    </ul>
                                </li>

                                {/* OUR VENTURES Dropdown */}
                                <li className="dropdown-menu-item">
                                    <Link href="#">OUR VENTURES <i className="las la-angle-down" /></Link>
                                    <ul className="dropdown-list">
                                        <li><Link href="/concerns/gardenspace">Gardenspace</Link></li>
                                        <li><Link href="/concerns/dads">DAdS</Link></li>
                                        <li><Link href="/concerns/khyap">Khyap</Link></li>
                                    </ul>
                                </li>

                                {/* CONNECT (Contact Us) */}
                                <li>
                                    <Link href="/contact">CONNECT <span /></Link>
                                </li>

                                {/* EXPLORE Mega Dropdown */}
                                <li className="dropdown-menu-item explore-menu-item">
                                    <Link href="#">EXPLORE <i className="las la-angle-down" /></Link>
                                    <div className="dropdown-list explore-dropdown">
                                        <div className="explore-col">
                                            <span className="explore-col-title">Clients & Services</span>
                                            <ul className="explore-links">
                                                <li><Link href="/clients">Our Clients</Link></li>
                                                <li>
                                                    <Link href="/services" style={{ fontWeight: 600 }}>All Services →</Link>
                                                    <div className="sub-service-links">
                                                        <Link href="/services#creative-work">Creative Work</Link>
                                                        <Link href="/services#ai-generated">AI Generated Campaign</Link>
                                                        <Link href="/services#hybrid-ai">Hybrid AI Creative Design</Link>
                                                        <Link href="/services#digital-campaign">Digital Campaign</Link>
                                                        <Link href="/services#360-campaign">360 Degree Campaign</Link>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="explore-col">
                                            <span className="explore-col-title">Showcase & Media</span>
                                            <ul className="explore-links">
                                                <li><Link href="/service-details/1">Service Details / Single</Link></li>
                                                <li><Link href="/project-details/1">Project Details / Single</Link></li>
                                                <li><Link href="/team-details/1">Team Details / Single</Link></li>
                                                <li><Link href="/press-releases">Press Releases</Link></li>
                                                <li><Link href="/stories">Stories</Link></li>
                                                <li><Link href="/credentials">Credentials</Link></li>
                                            </ul>
                                        </div>

                                        <div className="explore-col">
                                            <span className="explore-col-title">Engage & Join</span>
                                            <ul className="explore-links">
                                                <li>
                                                    <Link href="/rate-card">
                                                        <span>Rate Card</span>
                                                        <span style={{ fontSize: "10px", background: "rgba(201, 243, 29, 0.2)", color: "var(--primary, #c9f31d)", padding: "2px 6px", borderRadius: "8px" }}>Request</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/retainer-service">
                                                        <span>Monthly Retainer Service</span>
                                                        <span style={{ fontSize: "10px", color: "#888" }}>Sample 1</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/retainer-calculator">
                                                        <span>Retainer Fee Calculator</span>
                                                        <span style={{ fontSize: "10px", color: "#888" }}>Sample 2</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/careers">
                                                        <span>Careers</span>
                                                        <span style={{ fontSize: "10px", background: "rgba(255, 255, 255, 0.1)", color: "#fff", padding: "2px 6px", borderRadius: "8px" }}>Hiring</span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </nav>

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