
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { TinyUrlComponent } from './tiny-url/tiny-url.component';
import { AllUrlsComponent } from './admin/allUrls/allUrls.component';

const routes: Routes = [
    {
        path: 'admin',
        component: AllUrlsComponent,
    },
    {
        path: '',
        component: TinyUrlComponent,
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class RoutingModule { }
