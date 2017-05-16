import { Component, OnInit } from '@angular/core';

declare var jQuery: any;
@Component({
  selector: 'tslite-csv-imports',
  templateUrl: './csv-imports.component.html',
  styleUrls: ['./csv-imports.component.css']
})
export class CsvImportsComponent implements OnInit {
 private gridOptions: IgGrid;
   public id: string = "grid1";
  constructor() { }

  ngOnInit() {

     this.gridOptions = {
            //dataSource: this.contracts,
            width: "100%",
            primaryKey: "contractSID",
            responseDataKey: "results",
            autoCommit: true,
            autoGenerateColumns: false,
            columns: [
                { "headerText": "userLineOfBusiness", "key": "userLineOfBusiness", "dataType": "string", "width": "10%" },
                { "headerText": "insuredName", "key": "insuredName", "dataType": "string", "width": "10%" },
                { "headerText": "submitStatusCode", "key": "submitStatusCode", "dataType": "string", "width": "10%" },
                { "headerText": "userDefined1", "key": "userDefined1", "dataType": "string", "width": "10%" },
            ]
            
        };
  }

}
