export default function two_crystal_balls(breaks: boolean[]): number {

    const interval = Math.floor(Math.sqrt(breaks.length));
    let i = 0;
    let broke = false;

    for (;i < breaks.length; i += interval) {
        if (breaks[i]) {
            broke = true;
            break;
        }
    }

    if (!broke) {
        return -1;
    }

    i -= interval;
    const offset = i;

    for (; i <= offset + interval && i < breaks.length; i++) {
        if (breaks[i]) {
            return i;
        }
    }

    return -1;

}
