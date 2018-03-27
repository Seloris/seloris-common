export function AutoUnsubscribe(subscriptionPropName: string = 'subscription') {
    return function (constructor) {

        // Store original ngOnDestroy
        const original = constructor.prototype.ngOnDestroy;

        // Replace with our ngOnDestroy
        constructor.prototype.ngOnDestroy = function () {
            if (this.hasOwnProperty(subscriptionPropName)) {
                const subscription = this[subscriptionPropName];
                if (subscription && (typeof subscription.unsubscribe === 'function')) {
                    subscription.unsubscribe();
                }
            }

            // Apply original ngOnDestroy
            if (original && typeof original === 'function') {
                original.apply(this, arguments);
            }
        };
    };
}
