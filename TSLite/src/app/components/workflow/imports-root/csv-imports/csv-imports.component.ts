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
  private id: string = "csvGrid";
  private listOfContractFiles: any[] = ["abc", "xyz", "lac"];
  private listOfLocationFiles: any[] = ["abc", "xyz", "roc"];
  private listOfDatabaseNames: any[] = ["a", "v", "c"];
  private listOfExposureSetNames: any[] = ["a", "c", "d"];
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
      autoCommit: true,
      autoGenerateColumns: false,
      columns: [
        { "headerText": "importId", "key": "importId", "dataType": "number", "width": "10%", hidden: true },
        { "headerText": "Contract", "key": "fileNameContract", "dataType": "string", "width": "10%" },
        { "headerText": "Location", "key": "fileNameLocation", "dataType": "string", "width": "10%" },
        { "headerText": "Database", "key": "databaseName", "dataType": "string", "width": "10%" },
        { "headerText": "Exposure Set", "key": "exposureSetName", "dataType": "string", "width": "10%" },
      ],
      features: [
        {
          name: "Updating",
          columnSettings: [{
            //The combo is defined as an editor provider. Combo options are defined under 'editorOptions'.
            columnKey: "fileNameContract",
            editorType: 'combo',
            required: true,
            editorOptions: {
              mode: 'dropdown',
              readOnly: false,
              dataSource: this.listOfContractFiles,
              textKey: "value",
              valueKey: "value",
              enableClearButton: true,
            }
          },
          {
            //The combo is defined as an editor provider. Combo options are defined under 'editorOptions'.
            columnKey: "fileNameLocation",
            editorType: 'combo',
            required: true,
            editorOptions: {
              readOnly: false,
              mode: 'dropdown',
              dataSource: this.listOfLocationFiles,
              textKey: "value",
              valueKey: "value",
              enableClearButton: true,
            }
          },
          {
            //The combo is defined as an editor provider. Combo options are defined under 'editorOptions'.
            columnKey: "databaseName",
            editorType: 'combo',
            required: true,
            editorOptions: {
              readOnly: false,
              dataSource: this.listOfDatabaseNames,
              textKey: "value",
              valueKey: "value",
              enableClearButton: true,
              allowCustomValue: true,
            }
          }, {
            //The combo is defined as an editor provider. Combo options are defined under 'editorOptions'.
            columnKey: "exposureSetName",
            editorType: 'combo',
            required: true,
            editorOptions: {
              readOnly: false,
              dataSource: this.listOfExposureSetNames,
              textKey: "value",
              valueKey: "value",
              enableClearButton: true,
              allowCustomValue: true,
            }
          }
          ]
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
