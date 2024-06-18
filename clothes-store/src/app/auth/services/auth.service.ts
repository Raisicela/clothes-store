import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environment/ennvironment';
import { Injectable, computed, signal } from '@angular/core';
import { AuthStatus, CheckTokenResponse, User } from '../interfaces';
import { LoginResponse } from '../interfaces/login-response';
import { Observable, catchError, map, of, throwError } from 'rxjs';
import { RegisterResponse } from '../interfaces/register-response';
import { AuthRoles } from '../interfaces/auth-roles.enum';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly baseUrl: string = environment.baseUrl;
  private _currentUser = signal<User | null>(null);
  private _authStatus = signal<AuthStatus>(AuthStatus.checking);
  private _authRol = signal<AuthRoles>(AuthRoles.user);

  public currentUser = computed(() => this._currentUser());
  public authStatus = computed(() => this._authStatus());
  public authRol = computed(() => this._authRol());

  constructor(private http: HttpClient) {
    this.checkAuthStatus().subscribe();
  }

  private setAuthentication(user: User, token: string): boolean {
    this._currentUser.set(user);
    this._authStatus.set(AuthStatus.authenticated);
    this._authRol.set(user.isAdmin ? AuthRoles.admin : AuthRoles.user);
    localStorage.setItem('token', token);

    return true;
  }

  login(email: string, password: string) {
    const url = `${this.baseUrl}/auth/login`;
    const body = {
      email,
      password,
    };
    return this.http.post<LoginResponse>(url, body).pipe(
      map(({ user, token }) => this.setAuthentication(user, token)),
      catchError((err) => throwError(() => err.error.message))
    );
  }

  logup(email: string, name: string, password: string) {
    const url = `${this.baseUrl}/auth/register`;
    const body = {
      name,
      email,
      password,
    };

    return this.http.post<RegisterResponse>(url, body).pipe(
      map(({ user, token }) => this.setAuthentication(user, token)),
      catchError((err) => throwError(() => err.error.message))
    );
  }

  checkAuthStatus(): Observable<boolean> {
    const url = `${this.baseUrl}/auth/check-token`;
    const token = localStorage.getItem('token');

    if (!token) {
      console.log('jahsdkjfklsjfkd');
      // this._authStatus.set(AuthStatus.notAuthenticated);
      this.logOut();
      return of(false);
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get<CheckTokenResponse>(url, { headers }).pipe(
      map(({ user, token }) => this.setAuthentication(user, token)),
      catchError(() => {
        this._authStatus.set(AuthStatus.notAuthenticated);
        return of(false);
      })
    );
  }

  logOut() {
    localStorage.removeItem('token');
    this._currentUser.set(null);
    this._authStatus.set(AuthStatus.notAuthenticated);
  }
}
