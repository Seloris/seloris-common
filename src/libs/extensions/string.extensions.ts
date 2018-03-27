// Prototype
declare interface String {
    format(...args: any[]): string;
}

String.prototype.format = function () {
    let str = this;
    if (!arguments.length) {
        return str;
    }

    const type = typeof arguments[0]
        , resources = 'string' === type || 'number' === type ? Array.prototype.slice.call(arguments) : arguments[0];
    for (const key in resources) {
        if (resources.hasOwnProperty(key)) {
            str = str.replace(new RegExp('\\{' + key + '\\}', 'gi'), resources[key]);
        }
    }

    return str;
};
