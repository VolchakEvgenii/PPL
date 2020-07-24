import {Component, Input, OnInit} from '@angular/core';
import {ContainerInfoModel} from '../../../../shared/models/containerStory.model';
import {IContainerStory} from '../../../../shared/interfaces/IContainerInfo';

@Component({
    selector: 'app-container-info',
    templateUrl: './container-info.component.html',
    styleUrls: ['./container-info.component.scss']
})
export class ContainerInfoComponent implements OnInit {
    @Input() containerModel: ContainerInfoModel;

    tableHeaders: Array<string> = ['From Date', 'To Date', 'Source Port', 'Destination Port', 'Sender', 'Recipient'];

    constructor() {
    }

    ngOnInit() {
    }

    hasModel(): boolean {
        return typeof this.containerModel !== 'undefined';
    }

    getContainerModel(): ContainerInfoModel {
        return this.containerModel;
    }

    getContainerHistory(): any {
        if (!this.hasModel()) {
            return;
        }

        return this.getContainerModel().getHistory();
    }
}
