import { DOCUMENT } from '@angular/common';
import {
  Component,
  ContentChild,
  Inject,
  TemplateRef,
  ViewChild,
  viewChild,
  ViewContainerRef,
} from '@angular/core';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-offcanvas',
  standalone: true,
  imports: [],
  templateUrl: './offcanvas.component.html',
  styleUrl: './offcanvas.component.css',
})
export class OffcanvasComponent {
  fileUploadPercentage: number = 0;
  showOffCanvas = true;
  showOffCanvasBody = true;
  showAlert = false;
  constructor(@Inject(DOCUMENT) private document: Document) {}
  whenShowOffCanvas(offcanvas: HTMLElement) {
    offcanvas?.addEventListener('show.bs.offcanvas', () => {
      this.fileUploadPercentage = 0;
      // setTimeout(() => {
      //   for (let i = 0; i < 4; i++) {
      //     this.fileUploadPercentage += 25;
      //   }
      // }, 1000);
      this.fileUploadPercentage = 100;
      if (this.fileUploadPercentage == 100) {
        // let bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvas);
        // //   bsOffcanvas?.hide();
      }
    });
  }
  whenHideOffCanvas(offcanvas: HTMLElement) {
    offcanvas?.addEventListener('hidden.bs.offcanvas', () => {
      let toastElement = document.getElementById('liveToast') as HTMLElement;

      let toast = bootstrap.Toast.getOrCreateInstance(toastElement);
      toast?.show();
    });
  }
  ngOnInit(): void {
    let offcanvas = document.getElementById(
      'offcanvasDataMigration'
    ) as HTMLElement;
    this.whenShowOffCanvas(offcanvas);
    this.whenHideOffCanvas(offcanvas);
  }
}
