import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FileUploader, FileItem } from 'ng2-file-upload';
import { MessageTransportService, MessageBusTypes } from '../../../services/common-services/message-transport.service';


// const URL = '/api/';
const URL = 'http://localhost:14147/api/values';
@Component({
  selector: 'tslite-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.css']
})
export class UploadFilesComponent implements OnInit {



  public uploader: FileUploader = new FileUploader({ url: URL });
  public hasBaseDropZoneOver: boolean = false;
  public hasAnotherDropZoneOver: boolean = false;
  private allSuccefullyUplodadedFiles: File[] = [];

  @Output() UploadedItemsEvent: EventEmitter<File[]> = new EventEmitter<File[]>()


  constructor(private messageTransportService: MessageTransportService) {
    this.uploader.onBeforeUploadItem = (item) => {
      item.withCredentials = false;
    }
    this.uploader.onSuccessItem = (item) => {
      this.allSuccefullyUplodadedFiles.push(item._file);
    }

    this.uploader.onCompleteAll = ()=>{
       this.messageTransportService.broadcast(MessageBusTypes.ImportFileUploaded, this.allSuccefullyUplodadedFiles);
    }


  }

  ngOnInit() {
  }

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }

  public searchImport() {
    // Declare variables
    var input, filter, table, tr, td, i;
    input = document.getElementById("inputTable");
    filter = input.value.toUpperCase();
    table = document.getElementById("importTable");
    tr = table.getElementsByTagName("tr");
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }
}
