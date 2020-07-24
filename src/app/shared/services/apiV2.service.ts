import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IContainerInfo} from '../interfaces/IContainerInfo';
import {ContainerInfoModel} from '../models/containerStory.model';

@Injectable()

export class ApiV2Service {
    private _containerInfoModel: ContainerInfoModel;
    private _url = 'http://www.mocky.io/v2/5ddbad8a3400005200eadd4a';

    constructor(private http: HttpClient) {
    }

    public fetchContainerInfo(containerId: string): Promise<ContainerInfoModel> {
        return new Promise<ContainerInfoModel>((resolve, reject) => {
            this.http.get(`${this._url}?number=${containerId}`)
                .subscribe(
                    (response: IContainerInfo) => {
                        this._containerInfoModel = new ContainerInfoModel(response);
                        resolve(this._containerInfoModel);
                    },
                    (err): void => {
                        console.log('Fetch Container info data failed', err);
                        reject(false);
                    }
                );
        });
    }
}
