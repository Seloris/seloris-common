// Credits to Sebastien Ollivier, the best web dev ever
import { Observable } from 'rxjs/Observable';
import { finalize } from 'rxjs/operators/finalize';

export function ReusePendingObservable() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;
        const pendingObservablePropertyName = `__pendingObservable${propertyKey}`;
        target[pendingObservablePropertyName] = null;

        descriptor.value = function (...args: any[]) {
            if (!target[pendingObservablePropertyName]) {
                const result: Observable<any> = originalMethod.apply(this, args);
                target[pendingObservablePropertyName] = result.pipe(finalize(() => target[pendingObservablePropertyName] = null)).share();
            }

            return target[pendingObservablePropertyName];
        };
    };
}
