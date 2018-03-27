import { NgForm, AbstractControl } from '@angular/forms';

export function getAllControls(ngForm: NgForm): AbstractControl[] {
    const { controls } = ngForm;
    return Object.keys(controls).map(ctrlKey => {
        return controls[ctrlKey];
    });
}
export function markAllControlsAsDirty(ngForm: NgForm) {
    getAllControls(ngForm).forEach(control => {
        control.markAsDirty();
        control.updateValueAndValidity();
    });
}

export function markAllControlsAsPristine(ngForm: NgForm) {
    getAllControls(ngForm).forEach(control => {
        control.markAsPristine();
    });
}
