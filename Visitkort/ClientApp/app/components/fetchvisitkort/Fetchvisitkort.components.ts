/// <reference path="../../../services/visservice.service.ts" />
import { Component, Inject } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { VisitkortService } from '../../../services/visservice.service';

@Component({
    // Smäller vid start/körning av applikationen
    //selector: 'fetchvisitkort',
    selector: 'components-fetchvisitkort',
    templateUrl: './Fetchvisitkort.component.html'
})

export class FetchVisitkortComponent {
    public visList: VisitkortData[];

    constructor(public http: Http, private _router: Router, private _visitkortService: VisitkortService) {
        this.getVisitkorts();
    }

    getVisitkorts() {
        this._visitkortService.getVisitkorts().subscribe(
            data => this.visList = data
        )
    }

    delete(Id) {
        var ans = confirm("Vill du ta bort visitkortet med Id: " + Id);
        if (ans) {
            this._visitkortService.deleteVisitkort(Id).subscribe((data) => {
                this.getVisitkorts();
            }, error => console.error(error))
        }
    }
}

interface VisitkortData {
    id: number;
    name: string;
    surName: string;
    telephone: string;
    email: string;
}