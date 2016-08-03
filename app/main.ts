import {bootstrap}    from 'angular2/platform/browser';
// import { disableDeprecatedForms, provideForms } from 'angular2/forms';
import {AppComponent} from './app.component';

bootstrap(AppComponent)
.catch((err:any) => console.error(err));