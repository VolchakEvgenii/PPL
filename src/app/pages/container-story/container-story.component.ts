import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../../shared/services/api.service';
import {ApiV2Service} from '../../shared/services/apiV2.service';
import {ContainerInfoModel} from '../../shared/models/containerStory.model';

const CONTAINER_NUMBER_REGEXP = /\b[A-Z]{4}[0-9]{7}\b/g;

@Component({
    selector: 'app-container-story',
    templateUrl: './container-story.component.html',
    styleUrls: ['./container-story.component.scss']
})

export class ContainerStoryComponent implements OnInit {
    containerModel: ContainerInfoModel;
    containerForm: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder, private apiService: ApiService, private apiV2Service: ApiV2Service) {
    }

    ngOnInit() {
        this.containerForm = this.formBuilder.group({
            number: new FormControl('', Validators.compose([
                Validators.required,
                Validators.pattern(CONTAINER_NUMBER_REGEXP),
            ])),
        });

    }

    get getContainerForm() {
        return this.containerForm.controls;
    }

    onFormSubmit() {
        this.submitted = true;

        if (this.containerForm.invalid) {
            return;
        }

        this.apiV2Service.fetchContainerInfo(this.getContainerForm.number.value).then(res => {
            this.containerModel = res;
        });
    }

    getContainerModel() {
        return this.containerModel;
    }
}
