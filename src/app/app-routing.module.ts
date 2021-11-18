import { NgModule } from '@angular/core'

import { Routes, RouterModule } from '@angular/router'
import { AboutComponent } from './components/pages/about/about.component'
import { PortfolioComponent } from './components/pages/portfolio/portfolio.component'
import { ProductComponent } from './components/pages/product/product.component'
import { SearchComponent } from './components/pages/search/search.component'

const app_routes: Routes = [
 { path: 'home', component: PortfolioComponent },
 { path: 'about', component: AboutComponent },
 { path: 'product/:id', component: ProductComponent },
 { path: 'search/:param', component: SearchComponent },
 { path: '**', pathMatch: 'full', redirectTo: 'home' }
]

@NgModule({
    imports: [
        RouterModule.forRoot( app_routes, { useHash: true } )
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule{ }