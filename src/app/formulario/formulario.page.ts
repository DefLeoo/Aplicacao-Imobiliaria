import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

  formData = {
    id: '',
    name: '',
    username: '',
    email: '',
    phone: '',
    website: ''
  }


  constructor(private apiService: ApiService, private alertController: AlertController, private route: ActivatedRoute, private router: Router) {

    this.route.queryParams.subscribe(params => {
      console.log(this.router.getCurrentNavigation().extras.state);
      if (this.router.getCurrentNavigation().extras.state) {
        this.formData.id = this.router.getCurrentNavigation().extras.state.formDataParams.id;
        this.formData.name = this.router.getCurrentNavigation().extras.state.formDataParams.name;
        this.formData.username = this.router.getCurrentNavigation().extras.state.formDataParams.username;
        this.formData.email = this.router.getCurrentNavigation().extras.state.formDataParams.email;
        this.formData.phone = this.router.getCurrentNavigation().extras.state.formDataParams.phone;
        this.formData.website = this.router.getCurrentNavigation().extras.state.formDataParams.website;
      }
    });

   }

  ngOnInit() {
  }

  async formSubmit(){

    if(this.formData.id){ //Atualizar

      await this.apiService.sendPutRequest(this.formData.id, this.formData).subscribe((results)=>{
        console.log(results);
      }, error => {
        console.log(error);
      });

    }
    else{ //Criar

      await this.apiService.sendPostRequest(this.formData).subscribe((results)=>{
        console.log(results);
      }, error => {
        console.log(error);
      });

    }

    const alert = await this.alertController.create({
      header: 'Alerta!',
      subHeader: 'Formulário API',
      message: 'Dados enviados com sucesso.',
      buttons: ['OK']
    });

    await alert.present();

  }

}
