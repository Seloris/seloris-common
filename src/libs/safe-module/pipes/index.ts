import { SafeHtmlPipe } from './safe-html.pipe';
import { SafeResourceUrlPipe } from './safe-resource-url.pipe';
import { SafeScriptPipe } from './safe-script.pipe';
import { SafeStylePipe } from './safe-style.pipe';
import { SafeUrlPipe } from './safe-url.pipe';

export const SAFE_PIPES = [
    SafeHtmlPipe,
    SafeResourceUrlPipe,
    SafeScriptPipe,
    SafeStylePipe,
    SafeUrlPipe
];
