import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

	dadosPessoa = {
	 	email: '',
	 	first_name: '',
	 	last_name: ''
	 }

  constructor(private apiService: ApiService, private alertController: AlertController) { }

  ngOnInit() {
  }

  async formSubmit(){

    await this.apiService.sendPostRequest(this.dadosPessoa).subscribe((data)=>{
      console.log(data);
    }, error => {
      console.log(error);
    });

    const alert = await this.alertController.create({
      header: 'Alerta!',
      subHeader: 'Cadastro de Clientes',
      message: 'Cliente cadastrado com Sucesso.',
      buttons: ['OK']
    });

    await alert.present();
  }

}
