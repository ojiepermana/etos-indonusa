import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ManagementService {
  constructor(private http: HttpClient) { }
    get(link: string, parameters: any): Observable<any> {
        const queryParams = new HttpParams({ fromObject: parameters });
        return this.http.get<any>(environment.apiURL + link, { params: queryParams });
    }
    download(url: string, parameters: any): Observable<Blob> {
        const endpoint = environment.apiURL + url;
        const queryParams = new HttpParams({ fromObject: parameters });
        const options = { params: queryParams, responseType: 'blob' as 'json' };
        return this.http.get<Blob>(endpoint,  options);
    }
    post(link: string, data:any){
        return this.http.post<any>(environment.apiURL + link, data);
    }
    delete(link: string): Observable<any> {
        return this.http.delete<any>(environment.apiURL + link);
    }
}
