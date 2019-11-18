import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.page.html',
  styleUrls: ['./sobre.page.scss'],
})
export class SobrePage implements OnInit {

	

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }
  
  async presentAlert(){

    const alert = await this.alertController.create({
      header: 'Alerta!',
      subHeader: 'Mensagem Enviada',
      message: 'Mensagem enviada com sucesso , logo mais entraremos em contato.',
      buttons: ['OK']

    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);


  }

  

}