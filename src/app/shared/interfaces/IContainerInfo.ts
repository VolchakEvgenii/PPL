export interface IContainerInfo {
    readonly id: string;
    readonly owner: string;
    readonly history: Array<IContainerStory>;
}

export interface IContainerStory {
    readonly dateFrom: string;
    readonly dateTo: string;
    readonly sourcePort: string;
    readonly destinationPort: string;
    readonly sender: string;
    readonly recipient?: string;
}
