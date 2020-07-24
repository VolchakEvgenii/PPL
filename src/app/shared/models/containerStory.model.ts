import {IContainerInfo} from '../interfaces/IContainerInfo';

export class ContainerInfoModel implements IContainerInfo {
    readonly id;
    readonly owner;
    readonly history;

    constructor(config: IContainerInfo) {
        this.id = config.id;
        this.owner = config.owner;
        this.history = config.history;
    }

    public getId(): number {
        return this.id;
    }

    public getOwner(): string {
        return this.owner;
    }

    public getHistory(): string {
        return this.history;
    }
}
