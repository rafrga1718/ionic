import {Component} from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { BaseDadesService } from '../../providers/baseDadesService';

/**
 * ionic cordova plugin add cordova-sqlite-storage
 npm install --save @ionic-native/sqlite
 */
@Component({
  selector: 'baseDades',
  templateUrl: 'sqlite.html'
})
export class BaseDadesPage{


  tasques: any[] = [];
  constructor(
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public baseDadesService: BaseDadesService
  ) {}

  ionViewDidLoad(){
    this.obtenirTotesTasques();
  }

  esborrarTasca(task: any, index){
    this.baseDadesService.delete(task)
      .then(response => {
        console.log( response );
        this.tasques.splice(index, 1);
      })
      .catch( error => {
        console.error( error );
      })
  }

  obtenirTotesTasques(){
    this.baseDadesService.getAll()
      .then(tasques => {
        console.log(tasques);
        this.tasques = tasques;
      })
      .catch( error => {
        console.error( error );
      });
  }

  openAlertNewTask(){
    let alert = this.alertCtrl.create({
      title: 'Crear tarea',
      message: 'escribe el nombre de la tarea',
      inputs: [
        {
          name: 'title',
          placeholder: 'Digitar nueva tarea.',
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: () =>{
            console.log('cancelar');
          }
        },
        {
          text: 'Crear',
          handler: (data)=>{
            data.completed = false;
            this.baseDadesService.create(data)
              .then(response => {
                this.tasques.unshift( data );
              })
              .catch( error => {
                console.error( error );
              })
          }
        }
      ]
    });
    alert.present();
  }

  updateTask(task, index){
    task = Object.assign({}, task);
    task.completed = !task.completed;
    this.baseDadesService.update(task)
      .then( response => {
        this.tasques[index] = task;
      })
      .catch( error => {
        console.error( error );
      })
  }

}
