import {Injectable} from '@angular/core';
import {Restangular} from 'ngx-restangular';
import {environment} from '../../../environments/environment';

let RestangularP;

export function RestangularConfigFactory(RestangularProvider) {
    RestangularP = RestangularProvider;
    RestangularProvider.setBaseUrl(environment.baseUrl);
}

function setHeaders(restangular) {
    restangular.setDefaultHeaders({
        'Accept': 'application/json',
    });
}

@Injectable()
export class ApiService {
    constructor(public restangular: Restangular) {
        setHeaders(RestangularP);
    }

    public containerDataGET(number) {
        return this.restangular.one('5ddbad8a3400005200eadd4a').get({number: number}).toPromise()
            .then((res) => {
                console.log('res: ', res);

                return res.data;
            })
            .catch((error) => error.data);
    }
}
