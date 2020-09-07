import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
//import { FetchVisitkortComponent } from './components/fetchvisitkort/Fetchvisitkort.components';
import { VisitkortService } from '../../../services/visservice.service';

@Component({
    // Smäller vid start/körning av applikationen
    //selector: 'createvisitkort',
    selector: 'components-addvisitkort',
    templateUrl: './Addvisitkort.components.html'
})

export class createvisitkort implements OnInit {
    visitkortForm: FormGroup;
    title: string = "Create";
    id: number;
    errorMessage: any;

    constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
        private _visitkortService: VisitkortService, private _router: Router) {
        if (this._avRoute.snapshot.params["Id"]) {
            this.id = this._avRoute.snapshot.params["Id"];
        }

        this.visitkortForm = this._fb.group({
            id: 0,
            name: ['', [Validators.required]],
            surName: ['', [Validators.required]],
            telephone: ['', [Validators.required]],
            email: ['', [Validators.required]]
        })
    }

    ngOnInit() {
        if (this.id > 0) {
            this.title = "Edit";
            this._visitkortService.getVisitkortById(this.id)
                .subscribe(resp => this.visitkortForm.setValue(resp)
                    , error => this.errorMessage = error);
        }
    }

    save() {
        if (!this.visitkortForm.valid) {
            return;
        }

        if (this.title == "Create") {
            this._visitkortService.saveVisitkort(this.visitkortForm.value)
                .subscribe((data) => {
                    this._router.navigate(['/Fetchvisitkort']);
                }, error => this.errorMessage = error)
        }

        else if (this.title == "Edit") {
            this._visitkortService.updateVisitkort(this.visitkortForm.value)
                .subscribe((data) => {
                    this._router.navigate(['/Fetchvisitkort']);
                }, error => this.errorMessage = error)
        }
    }

    cancel() {
        this._router.navigate(['/Fetchvisitkort']);
    }
    get name() { return this.visitkortForm.get('name'); }
    get surName() { return this.visitkortForm.get('surName'); }
    get telephone() { return this.visitkortForm.get('telephone'); }
    get email() { return this.visitkortForm.get('email'); }
}