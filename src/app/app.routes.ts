import {DirectoryComponent} from './directory/directory.component';
import {HomeComponent} from './home/home.component'
// import {provideRouter} from '@angular/router';

export const APP_ROUTES  = [
  {path:'',component:HomeComponent},
  { path:'directory',component:DirectoryComponent},
  { path:'directory/:ninja',component:DirectoryComponent}
];

// export const APP_ROUTES_PROVIDER = {
//   provideRouter(APP_ROUTES);
// }

// RouterModule.forRoot({
//   { path:'directory',component:DirectoryComponent},
//   {path:'',component:HomeComponent}
//
// })
