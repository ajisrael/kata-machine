export default function bs_list(haystack: number[], needle: number): boolean {
    // Assumed array must be in order

    let lo = 0;
    let hi = haystack.length;

    do {
        const m = Math.floor(lo + (hi - lo) / 2);
        const v = haystack[m];

        if (v === needle) {
            return true;
        } else if (v < needle) {
            lo = m + 1
        } else {
            hi = m
        }
    } while (lo < hi);
    
    return false;
}
