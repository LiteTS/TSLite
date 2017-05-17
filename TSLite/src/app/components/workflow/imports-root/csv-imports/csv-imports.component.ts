import { Component, OnInit } from '@angular/core';
import { CSVImportModel } from "../../../../models/imports-models/csvimport.model";


declare var jQuery: any;
@Component({
  selector: 'tslite-csv-imports',
  templateUrl: './csv-imports.component.html',
  styleUrls: ['./csv-imports.component.css']
})
export class CsvImportsComponent implements OnInit {
  private csvgridOptions: IgGrid;
  public id: string = "csvid";
  public csvFileImportList: CSVImportModel[] = [];
  constructor() {
    this.csvFileImportList = [
      { importId: 1, fileNameContract: 'abc', fileNameLocation: 'efg', databaseName: 'AIRExposure', exposureSetName: 'abc' }
    ];
  }

  ngOnInit() {


    this.csvgridOptions = {
      //dataSource: this.contracts,
      width: "100%",
      primaryKey: "importId",
      responseDataKey: "results",
      autoCommit: true,
      autoGenerateColumns: false,
      columns: [
        { "headerText": "Contract", "key": "fileNameContract", "dataType": "string", "width": "10%" },
        { "headerText": "Location", "key": "fileNameLocation", "dataType": "string", "width": "10%" },
        { "headerText": "Database", "key": "databaseName", "dataType": "string", "width": "10%" },
        { "headerText": "Exposure Set", "key": "exposureSetName", "dataType": "string", "width": "10%" },
      ],
      features: [
        {
          name: "Updating",
        },
        {
          name: "Selection",
          mode: "single"
        },
        {
          name: "Filtering"
        },
        {
          name: "Sorting"
        }
      ]

    };
  }

}
