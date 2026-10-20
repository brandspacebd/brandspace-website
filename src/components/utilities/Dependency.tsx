"use client";
import { useEffect } from "react";
import { ScrollToTop } from "react-simple-scroll-up";
import AOS from "aos";
import MagicCursor from "../animated/MagicCursor";

const Dependency = () => {

    useEffect(() => {
        // Initialize AOS with configuration
        AOS.init({
            // easing: "ease-out-back",
            duration: 1000,
            once: true
        });

        // Cleanup to refresh AOS on component unmount
        // return () => AOS.refresh();
    }, []);

    useEffect(() => {
        const loadBootstrap = async () => {
            await import("bootstrap/dist/js/bootstrap.bundle.min.js");
        };

        loadBootstrap();
    }, []);

    return (
        <>
            <MagicCursor />
            <ScrollToTop symbol={<i className="fas fa-long-arrow-up" aria-hidden="true"></i>} aria-hidden="true" />
        </>
    );
};

export default Dependency;
