// TODO : merge removeItem/removeItems
export function removeItemFromArray(array: any[], item: any): any[] {
    const index = array.indexOf(item);
    if (index > -1) {
        return array.splice(index, 1);
    }

    return [];
}

export function removeItemsFromArray(array: any[], items: any[]): any[] {
    return array.filter(item => {
        return items.indexOf(item) === -1;
    });
}

export function pushWithoutDuplicate(array: any[], toAdd: any[] | any) {
    if (toAdd instanceof Array) {
        toAdd.forEach(item => {
            if (array.indexOf(item) !== -1) {
                array.push(item);
            }
        });
    }

    if (array.indexOf(toAdd) !== -1) {
        array.push(toAdd);
    }
}

export function intersect(a: any[], b: any[]) {
    return a.filter(x => b.indexOf(x) !== -1);
}
