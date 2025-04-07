import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CombinationService {
    constructor() {}

    getCombinations(elements: string[], length: number): string[] {
        let result: string[] = [];

        const permute = (prefix: string[], items: string[]) => {
            if (prefix.length === length) {
                result.push(prefix.join(' '));
                return;
            }

            for (let i = 0; i < items.length; i++) {
                permute([...prefix, items[i]], items.filter((_, index) => index !== i));
            }
        };

        console.log("Elements (split into array):", elements);
        permute([], elements);
        console.log("Result:", result);
        return result;
    }
}
