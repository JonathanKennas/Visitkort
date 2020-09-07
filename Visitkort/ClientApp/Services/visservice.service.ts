import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
@Injectable()
export class VisitkortService {
    myAppUrl: string = "";
    constructor(private _http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.myAppUrl = baseUrl;
    }

    getVisitkorts() {
        return this._http.get(this.myAppUrl + 'api/Visitkort/Index')
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    getVisitkortById(id: number) {
        return this._http.get(this.myAppUrl + "api/Visitkort/Details/" + id)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }

    saveVisitkort(visitkort) {
        return this._http.post(this.myAppUrl + 'api/Visitkort/Create', visitkort)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }

    updateVisitkort(visitkort) {
        return this._http.put(this.myAppUrl + 'api/Visitkort/Edit', visitkort)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    deleteVisitkort(Id) {
        return this._http.delete(this.myAppUrl + "api/Visitkort/Delete/" + Id)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }
}