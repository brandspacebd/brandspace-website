/**
 * Helper to resolve image paths for both existing template assets
 * and newly uploaded Pages CMS media files (e.g. from /uploads).
 */
export function getImageUrl(path?: string): string {
    if (!path) return '';
    if (path.startsWith('/') || path.startsWith('http://') || path.startsWith('https://')) {
        return path;
    }
    if (path.startsWith('uploads/') || path.startsWith('assets/')) {
        return `/${path}`;
    }
    return `/assets/images/${path}`;
}

export default getImageUrl;
