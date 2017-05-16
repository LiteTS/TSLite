import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tslite-filesdropzone',
  templateUrl: './filesdropzone.component.html',
  styleUrls: ['./filesdropzone.component.css']
})
export class FilesdropzoneComponent implements OnInit {

  constructor() { }

 /**
     * You can override default dropZone area template with [dropZoneTemplate] parameter passed to fileDroppa component
     */
    //public dropZoneTemplate = `
    //    <div class="awesome_override_xxx">Here I'm overriding library template</div>
    //`;
    /**
     * EVENTS
     */
    fileUploaded(success, response, file){
        success && console.log("uploaded - awesome", response, file);
        success || console.log("not uploaded - very bad", response, file);
    }

    filesUpdated(files) {
        console.log("Store state updated! Current state: ", files)
    }

    /**
     * CALLBACKS
     */

    /**
     * This method is called before Request happened
     * You can modify xhr confoguration in it
     * requestHeaders for example
     *
     * @param xhr
     */
    beforeRequest(xhr){
        xhr.setRequestHeader("Hello","World");
    }

    /**
     * This method allows you to make validation before file is sent
     * You can update fileName for example
     * Or you can return null and file won't be send
     *
     * @param formData
     * @returns formData or null
     */
    beforeFileUpload(formData){
        return formData;
    }

    /**
     * This method is called once your drop or select files
     * You can validate and decline or accept file
     *
     * @param file
     * @returns Boolean
     */
    beforeAddFile(file){
        return true;
    }

  ngOnInit() {
  }

}
