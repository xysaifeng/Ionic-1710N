import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {ButtonPage} from '../pages/button/button';
import {ListPage} from '../pages/list/list';
import {CardPage} from '../pages/card/card';
import {GesturePage} from '../pages/gesture/gesture';
import {APage} from '../pages/a/a';
import {BPage} from '../pages/b/b';
import {FabPage} from '../pages/fab/fab';
import {GridPage} from '../pages/grid/grid';
import {FormPage} from '../pages/form/form';
import {ToastPage} from "../pages/toast/toast";
import {SignInPage} from "../pages/sign-in/sign-in";
import {AlertPage} from "../pages/alert/alert";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ButtonPage,
    ListPage,
    CardPage,
    GesturePage,
    APage,
    BPage,
    FabPage,
    GridPage,
    FormPage,
    ToastPage,
    SignInPage,
    AlertPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ButtonPage,
    ListPage,
    CardPage,
    GesturePage,
    APage,
    BPage,
    FabPage,
    GridPage,
    FormPage,
    ToastPage,
    SignInPage,
    AlertPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
