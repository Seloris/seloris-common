import { of } from 'rxjs/observable/of';
import { combineLatest } from 'rxjs/observable/combineLatest';
import { timer } from 'rxjs/observable/timer';

import { Observable } from 'rxjs/Observable';

import { map } from 'rxjs/operators/map';

export const delayAtLeast = (delay: number = 300) => <T>(source: Observable<T>) => {
    return combineLatest(
        timer(delay),
        source)
        .pipe(map(([_, i]) => i));
};
