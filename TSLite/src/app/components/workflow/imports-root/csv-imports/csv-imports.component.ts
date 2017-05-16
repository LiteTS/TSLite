import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tslite-csv-imports',
  templateUrl: './csv-imports.component.html',
  styleUrls: ['./csv-imports.component.css']
})
export class CsvImportsComponent implements OnInit {

  private gridOptions: IgGrid;
    private id: string;
    private data: any;

    constructor() {
        this.data = {abc:"xyz"};
        this.id ='grid1';
        this.gridOptions = {
            dataSource: this.data,
            width: "100%",
            height: "400px",
            autoGenerateColumns: true
        };
    }

  ngOnInit() {
  }

}
