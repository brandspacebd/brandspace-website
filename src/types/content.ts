export interface SiteSettings {
    siteName?: string;
    websiteUrl?: string;
    logo?: string;
    footerLogo?: string;
    email?: string;
    phone?: string;
    address?: string;
    copyright?: string;
    socialLinks?: {
        instagram?: string;
        twitter?: string;
        behance?: string;
        dribbble?: string;
    };
}

export interface HomeHero {
    quote1?: string;
    quote2?: string;
    authorName?: string;
    authorRole?: string;
    title1?: string;
    title2?: string;
    buttonText?: string;
    buttonUrl?: string;
    video?: string;
}

export interface HomeAbout {
    subtitle?: string;
    description?: string;
}

export interface HomeAboutPage {
    subtitle?: string;
    description1?: string;
    description2?: string;
}

export interface HomeProjects {
    subtitle?: string;
    title?: string;
    description?: string;
    buttonText?: string;
    buttonUrl?: string;
}

export interface HomeData {
    hero?: HomeHero;
    about?: HomeAbout;
    aboutPage?: HomeAboutPage;
    projects?: HomeProjects;
}

export interface FaqItem {
    id: number;
    number?: string;
    question: string;
    answer: string;
}

export interface FaqData {
    subtitle?: string;
    title?: string;
    description?: string;
    items?: FaqItem[];
}
