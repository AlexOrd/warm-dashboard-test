
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

// ngx-bootstrap
import { BsDropdownModule, ButtonsModule, BsDatepickerModule} from 'ngx-bootstrap';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

// Resolvers
import { PlaysResolve } from './plays/plays.resolve';

// Components
import { AppComponent } from './app.component';
import { PlaysComponent } from './plays/plays.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaysComponent
  ],
  imports: [
    BsDropdownModule.forRoot(),
    ButtonsModule.forRoot(),
    BsDatepickerModule.forRoot(),
    FormsModule,
    BrowserModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    RouterModule.forRoot([
      {
        path: 'plays',
        component: PlaysComponent,
        resolve: {
          initialData : PlaysResolve
        },
      },
      { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: '**', redirectTo: '/', pathMatch: 'full' }
    ]),
  ],
  providers: [
    PlaysResolve
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
