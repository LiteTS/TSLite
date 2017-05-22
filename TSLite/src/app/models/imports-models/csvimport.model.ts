export interface CSVImportModel {
    importId: number;
    fileNameContract: string;
    fileNameLocation: string;
    databaseName: string;
    exposureSetName: string;
}

export interface CSVImportFilesCollectionModel {
    contractFiles : File[];
    locationFiles :File[];
    imfFiles : File[];
    reinsuranceFiles:File[];
    stepsFunctionFiles :File[]

}