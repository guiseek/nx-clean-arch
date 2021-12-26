import { Observable } from 'rxjs';

interface HttpOptions {
  params?: Record<string, any>;
  headers?: Record<string, any>;
}

export abstract class Http {
  abstract get<T>(url: string): Observable<T>;
  abstract get<T>(url: string, options?: HttpOptions): Observable<T>;
  abstract post<T>(url: string, body: any): Observable<T>;
  abstract patch<T>(url: string, body: any): Observable<T>;
  abstract put<T>(url: string, body: any): Observable<T>;
  abstract delete<T>(url: string): Observable<T>;
}
