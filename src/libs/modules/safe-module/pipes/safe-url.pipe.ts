import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'safeUrl' })
export class SafeUrlPipe implements PipeTransform {
    constructor(private sanitized: DomSanitizer) { }
    transform(url: string): SafeUrl {
        return this.sanitized.bypassSecurityTrustUrl(url);
    }
}
