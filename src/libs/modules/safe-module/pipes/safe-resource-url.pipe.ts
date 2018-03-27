import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'safeResourceUrl' })
export class SafeResourceUrlPipe implements PipeTransform {
    constructor(private sanitized: DomSanitizer) { }
    transform(resUrl: string): SafeResourceUrl {
        return this.sanitized.bypassSecurityTrustResourceUrl(resUrl);
    }
}
