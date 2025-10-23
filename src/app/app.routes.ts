import { Routes } from '@angular/router';
import { Careers } from './component/careers/careers';
import { Aboutus } from './component/aboutus/aboutus';
import { Notfound } from './component/notfound/notfound';
import { Home } from './component/home/home';
import { Contactus } from './component/contactus/contactus';
// import { Productlist } from './component/productlist/productlist';
import { PermanentJobs } from './component/permanent-jobs/permanent-jobs';
import { ContractJobs } from './component/contract-jobs/contract-jobs';
import { UploadVideos } from './component/upload-videos/upload-videos';
import { teacherGuardGuard } from './guards/teacher-guard-guard';
import { canExitGuard } from './guards/can-exit-guard';
import { UserList } from './component/user-list/user-list';
import { UserDetails } from './component/user-details/user-details';
import { ProductDetails } from './component/product-details/product-details';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'aboutus', component: Aboutus },
  {
    path: 'careers',
    component: Careers,
    children: [
      { path: 'permanent', component: PermanentJobs },
      { path: 'contract', component: ContractJobs },
    ],
  },
  { path: 'contactus', component: Contactus, canDeactivate: [canExitGuard] },
   { path: 'users', component: UserList },
  { path: 'userdetails/:id', component: UserDetails },

 {
    path: 'products',
    loadComponent: () =>
            import('./component/productlist/productlist').then((x) => x.Productlist),
  },
  { path: 'productdetails', component: ProductDetails },
  {
    path: 'uploadvideo',
    component: UploadVideos,
    canActivate: [teacherGuardGuard],
  },
  // ,
  // {path:'userlist',component: User}
];
