import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AuthRoles } from '../interfaces/auth-roles.enum';

export const isUserGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.authRol() === AuthRoles.user) {
    return true;
  }
  return false;
};
