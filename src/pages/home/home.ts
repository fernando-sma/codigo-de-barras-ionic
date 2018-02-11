import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from "@ionic-native/barcode-scanner";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private code: BarcodeScanner, public navCtrl: NavController) {

  }

  options: BarcodeScannerOptions;
  resultados: {};

  async scanner(){

    this.options = {
      prompt: "Código de barras de ouro ;)"
    }

    this.resultados  = await this.code.scan()
    console.log(this.resultados)
  }

}
