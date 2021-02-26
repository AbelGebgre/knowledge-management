export interface ColumnModel{
    label:string;
    icon:string;
    name:string;
    type:string;
}

export interface ChartModel {
    labels: string[]; 
    datasets: datasetModel[];
    options?:[]
}
export interface datasetModel{
    label:string;
    data: [],
    bgColor?:string;
    bColor?:string;
    pointBgColor?:string;
    pointBColor?:string;
    pointHoverBgColor?:string;
    pointHoverBColor?:string;
}

