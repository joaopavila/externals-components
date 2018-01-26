import { Component, ChangeDetectorRef, EventEmitter, Output, ViewChild, OnInit } from '@angular/core';
import { LinkItemModel } from 'santander-portal-library';

@Component({
  selector: 'uploadFile',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.less']
})

export class UploadComponent implements OnInit {

  @ViewChild('input') inputFileImg;
  @Output('close') cl: EventEmitter<any> = new EventEmitter();

  public imgFile: any;
  public isHidden: boolean = false;
  public showButton: boolean = false;
  public docImage: string[] = [];
  public fileSrcs: string[] = [];
  public footer: LinkItemModel = { titulo: 'Continuar' };
  public footerModal: LinkItemModel = { title: 'Enviar Imagem' };
  public showErrorMessage: boolean;
  public errorMessage: string;
  public mimeTypeWhitelist: Array<string>;

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit() {
    this.hideErrors();
    this.initializeVariables();
  }

  public initializeVariables(): void {
    this.errorMessage = 'Documento Inválido';
    this.mimeTypeWhitelist = ['image/jpeg', 'image/png'];
  }

  // This is called when the user selects new files from the upload button
  fileChange(input: any) {
    this.readFiles(input.files);
  }

  readFile(file: any, reader: any, callback: any) {
    // Set a callback funtion to fire after the file is fully loaded
    reader.onload = () => {
      // callback with the results
      callback(reader.result);
      this.showButton = true;
    };

    // Read the file
    reader.readAsDataURL(file);
  }

  public isMimeTypeAllowed(file): boolean {
    let isAllowed = false;
    this.mimeTypeWhitelist.forEach(mimeType => {
      isAllowed = file.type.indexOf(mimeType) !== -1 ? true : isAllowed;
    });
    return isAllowed;
  }

  readFiles(files: any, index = 0) {
    // Create the file reader
    let reader = new FileReader();

    // If there is a file
    if (index in files) {
      if (this.isMimeTypeAllowed(files[index])) {
        // Start reading this file
        this.readFile(files[index], reader, (result:any) => {
          // Create an img element and add the image file data to it
          let img = document.createElement('img');
          img.src = result;
          this.resize(img, (resizedJpeg: any) => {
            this.fileSrcs[0] = resizedJpeg;
            this.readFiles(files, index + 1);
          });

        });
      } else {
        this.showErrors();
      }
    } else {
      // When all files are done This forces a change detection
      this.docImage = [];
      this.changeDetectorRef.detectChanges();
      this.docImage.push(this.fileSrcs[0]);
      this.isHidden = !this.isHidden;

    }
  }

  public showErrors(): void {
    this.showErrorMessage = true;
  }

  public hideErrors(): void {
    this.showErrorMessage = false;
  }

  resize(img: any, callback: any) {
    // This will wait until the img is loaded before calling this function
    img.onload = () => {
      // Get the images current width and height
      let width = img.width;
      let height = img.height;

      // create a canvas object
      let canvas = document.createElement('canvas');

      // Set the canvas to the new calculated dimensions
      canvas.width = width;
      canvas.height = height;
      let ctx = canvas.getContext('2d');

      this.hideErrors();
      ctx.drawImage(img, 0, 0,  width, height);

      // Get this encoded as a jpeg
      // IMPORTANT: 'jpeg' NOT 'jpg'
      let dataUrl = canvas.toDataURL('image/jpeg');

      // callback with the results
      callback(dataUrl, img.src.length, dataUrl.length);
    };

    img.onerror = function() {
      this.showErrors();
    };
  }

  close(event) {
    if (event.type) {
      this.docImage = [];
      this.showButton = false;
    }
    this.inputFileImg.nativeElement.value = '';
    this.isHidden = false;
    if (event.bool) {
      this.cl.emit(event.bool);
    } else {
      this.cl.emit(event.bool);
    }
  }

  updateImage(images: string) {
    this.docImage[0] = images;
  }
}
