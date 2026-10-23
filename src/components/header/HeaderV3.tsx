"use client";
import Image from "next/image";
import Link from "next/link";
import useNotchScrollLink from "@/hooks/useNotchScrollLink";
import siteSettingsRaw from "@/assets/jsonData/settings/siteSettings.json";
import getImageUrl from "../utilities/getImageUrl";
import { SiteSettings } from "@/types/content";
import HeaderSidebar from "./HeaderSidebar";

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
                                        <li><Link href="/concerns/juniorspace">Juniorspace</Link></li>
                                        <li><Link href="/concerns/khyap">Khyap</Link></li>
                                    </ul>
                                </li>

                                {/* EXPLORE Mega Dropdown */}
                                <li className="dropdown-menu-item explore-menu-item">
                                    <Link href="#">EXPLORE <i className="las la-angle-down" /></Link>
                                    <div className="dropdown-list explore-dropdown">
                                        <div className="explore-col">
                                            <span className="explore-col-title">
                                                <span>Clients & Services</span>
                                                <i className="las la-angle-down explore-title-arrow" />
                                            </span>
                                            <ul className="explore-links">
                                                <li><Link href="/clients">Our Clients</Link></li>
                                                <li className="explore-service-item">
                                                    <Link href="/services" style={{ fontWeight: 600 }}>
                                                        <span>All Services</span>
                                                        <i className="las la-angle-right sub-service-arrow" />
                                                    </Link>
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
                                            <span className="explore-col-title">
                                                <span>Showcase & Media</span>
                                                <i className="las la-angle-down explore-title-arrow" />
                                            </span>
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
                                            <span className="explore-col-title">
                                                <span>LET’S CONNECT</span>
                                                <i className="las la-angle-down explore-title-arrow" />
                                            </span>
                                            <ul className="explore-links">
                                                <li>
                                                    <Link href="/rate-card">
                                                        <span>Rate Card</span>
                                                        <span style={{ fontSize: "10px", background: "rgba(201, 243, 29, 0.2)", color: "var(--primary, #c9f31d)", padding: "2px 6px", borderRadius: "8px", whiteSpace: "nowrap" }}>Request</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/retainer-service">
                                                        <span>Monthly Retainer Service</span>
                                                        <span style={{ fontSize: "10px", background: "rgba(255, 255, 255, 0.08)", color: "#aaa", padding: "2px 6px", borderRadius: "8px", whiteSpace: "nowrap" }}>Sample 1</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/retainer-calculator">
                                                        <span>Retainer Fee Calculator</span>
                                                        <span style={{ fontSize: "10px", background: "rgba(255, 255, 255, 0.08)", color: "#aaa", padding: "2px 6px", borderRadius: "8px", whiteSpace: "nowrap" }}>Sample 2</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/careers">
                                                        <span>Careers</span>
                                                        <span style={{ fontSize: "10px", background: "rgba(255, 255, 255, 0.1)", color: "#fff", padding: "2px 6px", borderRadius: "8px", whiteSpace: "nowrap" }}>Hiring</span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                {/* CONNECT (Contact Us) - Last Option */}
                                <li>
                                    <Link href="/contact">CONNECT <span /></Link>
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