/**
 * Get the correct asset path with basePath prefix for GitHub Pages deployment
 * @param path - The asset path starting with /
 * @returns The full path with basePath prefix
 */
export function getAssetPath(path: string): string {
    const basePath = '/ClubSatoshi';
    return `${basePath}${path}`;
}
