import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MalabaristasInterceptor implements HttpInterceptor {
    // リクエストの変換処理。ここに共通処理を記述。
    host: string = "https://z-mjf-operation.appspot.com"
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const req = request.clone({url: this.host + request.url});
        return next.handle(req);
    }
}