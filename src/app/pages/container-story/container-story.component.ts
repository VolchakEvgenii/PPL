import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../../services/api.service';

// const POSITIVE_INTEGER_REGEXP = /^\d+$/;
// const CONTAINER_NUMBER_LENGTH = 9;
const CONTAINER_NUMBER_REGEXP = /\b[A-Z]{4}[0-9]{7}\b/g;

@Component({
    selector: 'app-container-story',
    templateUrl: './container-story.component.html',
    styleUrls: ['./container-story.component.scss']
})

export class ContainerStoryComponent implements OnInit {
    data: any; // TODO: prepare interface for container data
    containerForm: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder,  private apiService: ApiService) {
    }

    ngOnInit() {
        this.containerForm = this.formBuilder.group({
            number: new FormControl('', Validators.compose([
                Validators.required,
                Validators.pattern(CONTAINER_NUMBER_REGEXP),
                // Validators.minLength(CONTAINER_NUMBER_LENGTH),
                // Validators.maxLength(CONTAINER_NUMBER_LENGTH)
            ])),
        });
    }

    get getContainer() {
        return this.containerForm.controls;
    }

    get getContainerNumber() {
        return this.containerForm.get('number');
    }

    onFormSubmit() {
        this.submitted = true;

        console.log('.containerForm: ', this.getContainer);

        if (this.containerForm.invalid) {
            return;
        }

        this.data = null;
        this.apiService.containerDataGET(this.getContainer.number.value).then(res => {
            console.log('this.apiService.containerDataGET ==> ', res);

            this.data = res;
        });
    }
}
