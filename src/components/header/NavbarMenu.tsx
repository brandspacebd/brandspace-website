"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

const NavbarMenu = () => {
    const [isExploreOpen, setIsExploreOpen] = useState(false);
    const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({
        clients: false,
        services: false,
        showcase: false,
        connect: false,
    });

    const resetTimerRef = useRef<NodeJS.Timeout | null>(null);

    // Mouse enters EXPLORE menu item
    const handleExploreMouseEnter = () => {
        if (resetTimerRef.current) {
            clearTimeout(resetTimerRef.current);
            resetTimerRef.current = null;
        }
        setIsExploreOpen(true);
    };

    // Mouse leaves EXPLORE menu item
    const handleExploreMouseLeave = () => {
        setIsExploreOpen(false);
        // Reset the options to collapsed after the dropdown finishes fading out
        if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
        resetTimerRef.current = setTimeout(() => {
            setExpanded({
                clients: false,
                services: false,
                showcase: false,
                connect: false,
            });
        }, 200);
    };

    // When mouse moves to CONNECT, immediately close EXPLORE and focus CONNECT
    const handleConnectMouseEnter = () => {
        if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
        setIsExploreOpen(false);
        setExpanded({
            clients: false,
            services: false,
            showcase: false,
            connect: false,
        });
    };

    // When mouse enters one of the main options or All Services
    const handleOptionMouseEnter = (key: string) => {
        setExpanded((prev) => {
            if (key === "clients") {
                // Clients & Services opens; Showcase & Media and Let's Connect stay closed
                return {
                    ...prev,
                    clients: true,
                    showcase: false,
                    connect: false,
                };
            }
            if (key === "showcase") {
                // Showcase & Media opens, Let's Connect closes (not open together)
                return {
                    ...prev,
                    clients: true,
                    showcase: true,
                    connect: false,
                };
            }
            if (key === "connect") {
                // Let's Connect opens, Showcase & Media closes (not open together)
                return {
                    ...prev,
                    clients: true,
                    showcase: false,
                    connect: true,
                };
            }
            if (key === "services") {
                // All Services expands after hover
                if (prev.services) return prev;
                return {
                    ...prev,
                    services: true,
                };
            }
            return prev;
        });
    };

    // Clicking header toggles (collapses/expands) it
    const handleOptionHeaderClick = (key: string, e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setExpanded((prev) => {
            if (key === "showcase") {
                const nextShowcase = !prev.showcase;
                return {
                    ...prev,
                    showcase: nextShowcase,
                    connect: nextShowcase ? false : prev.connect,
                };
            }
            if (key === "connect") {
                const nextConnect = !prev.connect;
                return {
                    ...prev,
                    connect: nextConnect,
                    showcase: nextConnect ? false : prev.showcase,
                };
            }
            if (key === "clients") {
                const nextClients = !prev.clients;
                return {
                    ...prev,
                    clients: nextClients,
                    services: nextClients ? prev.services : false,
                };
            }
            return {
                ...prev,
                [key]: !prev[key],
            };
        });
    };

    const handleLinkClick = () => {
        setIsExploreOpen(false);
        setExpanded({
            clients: false,
            services: false,
            showcase: false,
            connect: false,
        });
    };

    // Clear timeout on unmount
    useEffect(() => {
        return () => {
            if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
        };
    }, []);

    return (
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
                <li
                    className="dropdown-menu-item"
                    onMouseEnter={() => setIsExploreOpen(false)}
                >
                    <Link href="/team">MEET THE TEAM <i className="las la-angle-down" /></Link>
                    <ul className="dropdown-list">
                        <li><Link href="/team">Our Core Team</Link></li>
                        <li><Link href="/creative-network">Our Creative Network</Link></li>
                    </ul>
                </li>

                {/* OUR VENTURES Dropdown */}
                <li
                    className="dropdown-menu-item"
                    onMouseEnter={() => setIsExploreOpen(false)}
                >
                    <Link href="#">OUR VENTURES <i className="las la-angle-down" /></Link>
                    <ul className="dropdown-list">
                        <li><Link href="/concerns/gardenspace">Gardenspace</Link></li>
                        <li><Link href="/concerns/juniorspace">Juniorspace</Link></li>
                        <li><Link href="/concerns/khyap">Khyap</Link></li>
                    </ul>
                </li>

                {/* EXPLORE Mega Dropdown */}
                <li
                    className={`dropdown-menu-item explore-menu-item ${isExploreOpen ? "active" : ""}`}
                    onMouseEnter={handleExploreMouseEnter}
                    onMouseLeave={handleExploreMouseLeave}
                >
                    <Link href="#" onClick={(e) => e.preventDefault()}>
                        EXPLORE <i className="las la-angle-down" />
                    </Link>
                    <div
                        className={`dropdown-list explore-dropdown ${isExploreOpen ? "is-open" : "is-closed"}`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Option 1: Clients & Services */}
                        <div
                            className={`explore-col ${expanded.clients ? "is-expanded" : ""}`}
                            onMouseEnter={() => handleOptionMouseEnter("clients")}
                        >
                            <div
                                className="explore-col-title"
                                onClick={(e) => handleOptionHeaderClick("clients", e)}
                                role="button"
                                tabIndex={0}
                                aria-expanded={expanded.clients}
                            >
                                <span>Clients & Services</span>
                                <i className="las la-angle-down explore-title-arrow" />
                            </div>
                            <ul className="explore-links">
                                <li>
                                    <Link href="/clients" onClick={handleLinkClick}>
                                        Our Clients
                                    </Link>
                                </li>
                                <li
                                    className={`explore-service-item ${expanded.services ? "is-expanded" : ""}`}
                                    onMouseEnter={() => handleOptionMouseEnter("services")}
                                >
                                    <Link href="/services" onClick={handleLinkClick}>
                                        <span>All Services</span>
                                        <i
                                            className="las la-angle-right sub-service-arrow"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                setExpanded((prev) => ({
                                                    ...prev,
                                                    services: !prev.services,
                                                }));
                                            }}
                                        />
                                    </Link>
                                    <div className="sub-service-links">
                                        <Link href="/services#creative-work" onClick={handleLinkClick}>Creative Work</Link>
                                        <Link href="/services#ai-generated" onClick={handleLinkClick}>AI Generated Campaign</Link>
                                        <Link href="/services#hybrid-ai" onClick={handleLinkClick}>Hybrid AI Creative Design</Link>
                                        <Link href="/services#digital-campaign" onClick={handleLinkClick}>Digital Campaign</Link>
                                        <Link href="/services#360-campaign" onClick={handleLinkClick}>360 Degree Campaign</Link>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Option 2: Showcase & Media */}
                        <div
                            className={`explore-col ${expanded.showcase ? "is-expanded" : ""}`}
                            onMouseEnter={() => handleOptionMouseEnter("showcase")}
                        >
                            <div
                                className="explore-col-title"
                                onClick={(e) => handleOptionHeaderClick("showcase", e)}
                                role="button"
                                tabIndex={0}
                                aria-expanded={expanded.showcase}
                            >
                                <span>Showcase & Media</span>
                                <i className="las la-angle-down explore-title-arrow" />
                            </div>
                            <ul className="explore-links">
                                <li><Link href="/service-details/1" onClick={handleLinkClick}>Service Details</Link></li>
                                <li><Link href="/project-details/1" onClick={handleLinkClick}>Project Details</Link></li>
                                <li><Link href="/team-details/1" onClick={handleLinkClick}>Team Details</Link></li>
                                <li><Link href="/press-releases" onClick={handleLinkClick}>Press Releases</Link></li>
                                <li><Link href="/stories" onClick={handleLinkClick}>Stories</Link></li>
                                <li><Link href="/credentials" onClick={handleLinkClick}>Credentials</Link></li>
                            </ul>
                        </div>

                        {/* Option 3: LET’S CONNECT */}
                        <div
                            className={`explore-col ${expanded.connect ? "is-expanded" : ""}`}
                            onMouseEnter={() => handleOptionMouseEnter("connect")}
                        >
                            <div
                                className="explore-col-title"
                                onClick={(e) => handleOptionHeaderClick("connect", e)}
                                role="button"
                                tabIndex={0}
                                aria-expanded={expanded.connect}
                            >
                                <span>LET’S CONNECT</span>
                                <i className="las la-angle-down explore-title-arrow" />
                            </div>
                            <ul className="explore-links">
                                <li>
                                    <Link href="/rate-card" onClick={handleLinkClick}>
                                        <span>Rate Card</span>
                                        <span style={{ fontSize: "10px", background: "rgba(201, 243, 29, 0.2)", color: "var(--primary, #c9f31d)", padding: "2px 6px", borderRadius: "8px", whiteSpace: "nowrap" }}>Request</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/retainer-service" onClick={handleLinkClick}>
                                        <span>Monthly Retainer Service</span>
                                        <span style={{ fontSize: "10px", background: "rgba(255, 255, 255, 0.08)", color: "#aaa", padding: "2px 6px", borderRadius: "8px", whiteSpace: "nowrap" }}>Sample 1</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/retainer-calculator" onClick={handleLinkClick}>
                                        <span>Retainer Fee Calculator</span>
                                        <span style={{ fontSize: "10px", background: "rgba(255, 255, 255, 0.08)", color: "#aaa", padding: "2px 6px", borderRadius: "8px", whiteSpace: "nowrap" }}>Sample 2</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/careers" onClick={handleLinkClick}>
                                        <span>Careers</span>
                                        <span style={{ fontSize: "10px", background: "rgba(255, 255, 255, 0.1)", color: "#fff", padding: "2px 6px", borderRadius: "8px", whiteSpace: "nowrap" }}>Hiring</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>

                {/* CONNECT (Contact Us) - Last Option */}
                <li
                    className="connect-menu-item"
                    onMouseEnter={handleConnectMouseEnter}
                >
                    <Link href="/contact" className="connect-link">
                        CONNECT <span />
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavbarMenu;
