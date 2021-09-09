import { enableProdMode }         from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule }              from 'src/app/AppModule';
import { BaseFrameConfig }        from 'src/app/Model/Config/BaseFrameConfig';
import { PlayerFrameConfig }      from 'src/app/Model/Config/PlayerFrameConfig';
import { defaultConfig }          from 'src/app/Service/defaultConfig';

import { environment } from './environments/environment';

if (environment.production) {
	enableProdMode();
}

platformBrowserDynamic()
	.bootstrapModule(AppModule)
	.catch(err => console.error(err));