import { BoxType } from "../components/Board/Board";

export const createPlayableArray = (arr: string[]): BoxType[] => {
    let count = arr.length;

    while (count) {
        const i = Math.floor(Math.random() * count--);
        [arr[i], arr[count]] = [arr[count], arr[i]];
    }
    return arr.map(val => ({ value: val, revealed: false, hidden: false }));
};