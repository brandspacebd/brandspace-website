"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Union from "@/assets/images/Union.svg";

interface CredentialsEmbedProps {
    title?: string;
    subtitle?: string;
}

const CredentialsEmbed: React.FC<CredentialsEmbedProps> = ({
    title = "Official Agency Credentials & Dossier",
    subtitle = "OFFICIAL CREDENTIALS",
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [reloadKey, setReloadKey] = useState(0);

    useEffect(() => {
        // Handle FlowPaper handshake messages
        const handleMessage = (event: MessageEvent) => {
            try {
                const origin = event.origin || "";
                if (origin.includes("flowpaper.com")) {
                    const iframe = iframeRef.current;
                    if (iframe && iframe.contentWindow) {
                        iframe.contentWindow.postMessage(
                            JSON.stringify({
                                auth: "https://flowpaper.com/shared/8528083f/BrandspaceLimitedCredential/",
                                loc: window.location.href,
                            }),
                            "*"
                        );
                    }
                }
            } catch {
                // Ignore any parsing errors from non-json messages
            }
        };

        window.addEventListener("message", handleMessage);

        // Load external FlowPaper embed script
        const existingScript = document.querySelector('script[src*="flowpaper.com/zine/4.1.5/js/embed.min.js"]');
        if (!existingScript) {
            const script = document.createElement("script");
            script.src = "https://cdn-online.flowpaper.com/zine/4.1.5/js/embed.min.js";
            script.async = true;
            script.defer = true;
            document.body.appendChild(script);
        }

        // Fullscreen listener
        const handleFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };
        document.addEventListener("fullscreenchange", handleFullscreenChange);

        return () => {
            window.removeEventListener("message", handleMessage);
            document.removeEventListener("fullscreenchange", handleFullscreenChange);
        };
    }, []);

    const toggleFullscreen = async () => {
        if (!containerRef.current) return;
        try {
            if (!document.fullscreenElement) {
                await containerRef.current.requestFullscreen();
            } else {
                await document.exitFullscreen();
            }
        } catch (err) {
            console.error("Fullscreen toggle error:", err);
        }
    };

    const handleReload = () => {
        setReloadKey((prev) => prev + 1);
    };

    return (
        <section className="credentials-embed-sec" id="credentials-showcase">
            <div className="credentials-header-wrap">
                <div className="section-header">
                    <span className="section-subtitle">
                        <Image src={Union} alt="icon" priority />
                        {subtitle}
                    </span>
                    <h3 className="credentials-lead-title">{title}</h3>
                </div>
            </div>

            <div className="credentials-container" ref={containerRef}>
                {/* Modern Brandspace Dark Glassmorphism Toolbar - No long dash used */}
                <div className="credentials-toolbar">
                    <div className="toolbar-left">
                        <span className="live-status-badge">
                            <span className="live-pulse"></span>
                            INTERACTIVE FLIPBOOK
                        </span>
                        <span className="toolbar-title">
                            Brandspace Limited : Official Credential Deck
                        </span>
                    </div>

                    <div className="toolbar-right">
                        <span className="toolbar-hint">
                            <i className="las la-mouse-pointer"></i> Click and drag or use arrow keys to flip
                        </span>
                        <button
                            type="button"
                            className="toolbar-btn"
                            onClick={handleReload}
                            title="Reload flipbook"
                            aria-label="Reload flipbook"
                        >
                            <i className="las la-sync-alt"></i>
                            <span>Reload</span>
                        </button>
                        <button
                            type="button"
                            className="toolbar-btn"
                            onClick={toggleFullscreen}
                            title="Toggle Fullscreen"
                            aria-label="Toggle Fullscreen"
                        >
                            <i className={isFullscreen ? "las la-compress" : "las la-expand"}></i>
                            <span>{isFullscreen ? "Exit Fullscreen" : "Fullscreen"}</span>
                        </button>
                        <a
                            href="https://flowpaper.com/shared/8528083f/BrandspaceLimitedCredential/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="toolbar-btn primary-btn-link"
                            title="Open flipbook in full tab"
                        >
                            <span>Open in New Tab</span>
                            <i className="las la-external-link-alt"></i>
                        </a>
                    </div>
                </div>

                {/* Embed Area with enough space for full viewing */}
                <div className="credentials-viewer-frame">
                    {/* Official FlowPaper Embed Link (for search crawlers & metadata) */}
                    <a
                        href="https://flowpaper.com/shared/8528083f/BrandspaceLimitedCredential/"
                        className="fp-embed"
                        data-fp-width="100%"
                        data-fp-height="100%"
                        style={{ display: "none" }}
                    ></a>

                    {/* Direct Interactive FlowPaper Frame */}
                    <iframe
                        key={reloadKey}
                        ref={iframeRef}
                        src="https://flowpaper.com/shared/8528083f/BrandspaceLimitedCredential/"
                        title="Brandspace Limited Credential Publication"
                        className="flowpaper-direct-iframe"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>

                {/* Bottom Footer Info - No long dash used */}
                <div className="credentials-footer-bar">
                    <div className="footer-left">
                        <span>Brandspace Limited · Agency Credentials and Capability Deck</span>
                    </div>
                    <div className="footer-right">
                        <span>Double click or pinch to zoom · FlowPaper Verified Publication</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CredentialsEmbed;
