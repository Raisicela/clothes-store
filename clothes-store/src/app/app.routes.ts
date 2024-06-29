import { Routes } from '@angular/router';
import { isNotAuthenticatedGuard } from './auth/guards/is-not-authenticated.guard';
import { isAuthenticatedGuard } from './auth/guards/is-authenticated.guard';
import { isAdminGuard } from './auth/guards/is-admin.guard';
import { isUserGuard } from './auth/guards/is-user.guard';

export const routes: Routes = [
  {
    path: 'auth',
    loadComponent: () =>
      import('./auth/layouts/auth-layout/auth-layout.component').then(
        (m) => m.AuthLayoutComponent
      ),
    canActivate: [isNotAuthenticatedGuard],
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./auth/pages/login/login.component').then(
            (m) => m.LoginComponent
          ),
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./auth/pages/register/register.component').then(
            (m) => m.RegisterComponent
          ),
      },
      {
        path: '**',
        redirectTo: 'login',
      },
    ],
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import(
        './dashboard/layouts/dashboard-layout/dashboard-layout.component'
      ).then((m) => m.DashboardLayoutComponent),
    canActivate: [isAuthenticatedGuard, isAdminGuard],
    children: [
      {
        path: 'categories',
        loadComponent: () =>
          import(
            './dashboard/pages/category-page/category-page.component'
          ).then((m) => m.CategoryPageComponent),
      },

      {
        path: 'categories/:id',
        loadComponent: () =>
          import(
            './dashboard/components/form-category/form-category.component'
          ).then((m) => m.FormCategoryComponent),
      },
      {
        path: 'products',
        loadComponent: () =>
          import('./dashboard/pages/product-page/product-page.component').then(
            (m) => m.ProductPageComponent
          ),
      },
      {
        path: 'products/:id',
        loadComponent: () =>
          import(
            './dashboard/components/form-product/form-product.component'
          ).then((m) => m.FormProductComponent),
      },
      {
        path: '**',
        redirectTo: 'categories',
      },
    ],
  },
  {
    path: 'store',
    loadComponent: () =>
      import('./store/layouts/store-layout/store-layout.component').then(
        (m) => m.StoreLayoutComponent
      ),
    canActivate: [isAuthenticatedGuard, isUserGuard],
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./store/pages/home-page/home-page.component').then(
            (m) => m.HomePageComponent
          ),
      },
      {
        path: 'categories',
        loadComponent: () =>
          import('./store/pages/category-page/category-page.component').then(
            (m) => m.CategoryPageComponent
          ),
      },
      {
        path: 'products',
        loadComponent: () =>
          import('./store/pages/product-page/product-page.component').then(
            (m) => m.ProductPageComponent
          ),
      },
      {
        path: 'products/:id',
        loadComponent: () =>
          import('./store/pages/product-detail/product-detail.component').then(
            (m) => m.ProductDetailComponent
          ),
      },
      {
        path: 'cart',
        loadComponent: () =>
          import('./store/pages/cart-page/cart-page.component').then(
            (m) => m.CartPageComponent
          ),
      },
      {
        path: '**',
        redirectTo: 'home',
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'auth/login',
  },
];
