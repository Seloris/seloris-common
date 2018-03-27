import { intersect } from './array.utilities';

export function mergeObjects(source: { [key: string]: string }, override: { [key: string]: string }): { [key: string]: string } {
    const collisionKeys = intersect(Object.keys(source), Object.keys(override));
    if (collisionKeys.length > 0) {
        this.logger.warn(`${collisionKeys.length} collision were found`, collisionKeys);
        this.logger.warn(`The following values will be used`, collisionKeys.map(key => {
            return { key, usedValue: override[key], overridenValue: source[key] };
        }));
    }

    return Object.assign({}, source, override);
}

/**
 * Flatify an object with multiple levels to get a flat object dictionary (key:string)
 * @param appResources A javascript object (with multiple levels)
 */
export function flatifyObject(appResources: { [key: string]: any }): { [key: string]: string } {
    const toReturn = {};

    for (const key in appResources) {
        if (appResources.hasOwnProperty(key)) {
            if (typeof appResources[key] === 'string') {
                toReturn[key] = appResources[key];
                continue;
            }

            const flatObject = this.flatifyResources(appResources[key]);
            for (const subKey in flatObject) {
                if (flatObject.hasOwnProperty(subKey)) {
                    const builtKey = subKey.length === 0 ? key : key + '_' + subKey;
                    toReturn[builtKey] = flatObject[subKey];
                }
            }
        }
    }

    return toReturn;
}
