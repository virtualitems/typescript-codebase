/**
 * @fileoverview Model classes and database.
 */

export class Item
{
    [property: string]: unknown;

    public constructor(
        public id?: number,
        public description?: string,
    ) { }

}


export const database = Array.from({ length: 100 }, (_, i) => (new Item(i, `Item ${i}`)));
