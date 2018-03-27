import { DomSanitizer, SafeScript } from '@angular/platform-browser';
import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'safeScript' })
export class SafeScriptPipe implements PipeTransform {
    constructor(private sanitized: DomSanitizer) { }
    transform(script: string): SafeScript {
        return this.sanitized.bypassSecurityTrustScript(script);
    }
}
