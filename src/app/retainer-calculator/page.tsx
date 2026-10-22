import HeroV2 from "@/components/hero/AboutHero";
import LayoutV3 from "@/components/layouts/LayoutV3";
import RetainerCalculatorSection from "@/components/pricing/RetainerCalculatorSection";
import FaqV1 from "@/components/faq/FaqV1";
import ContactV1 from "@/components/contact/ContactV1";

export const metadata = {
    title: "Monthly Retainer Fee Calculator - Brandspace",
    description: "Calculate your custom creative retainer fee in real time based on required disciplines, monthly hours, and turnaround SLA."
};

const RetainerCalculatorPage = () => {
    return (
        <div className="aixor-main retainer-calculator-page">
            <LayoutV3>
                <HeroV2 title="Retainer Fee Calculator" />
                <RetainerCalculatorSection />
                <FaqV1 />
                <ContactV1 />
            </LayoutV3>
        </div>
    );
};

export default RetainerCalculatorPage;
