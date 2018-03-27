import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'safeStyle' })
export class SafeStylePipe implements PipeTransform {
    constructor(private sanitized: DomSanitizer) { }
    transform(style: string): SafeStyle {
        return this.sanitized.bypassSecurityTrustStyle(style);
    }
}
