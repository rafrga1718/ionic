import {Component} from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { AndroidPermissions } from '@ionic-native/android-permissions';


/*
$ ionic cordova plugin add cordova-plugin-camera
$ npm install --save @ionic-native/camera
cal instal·lar permisos
$ ionic cordova plugin add cordova-plugin-android-permissions
$ npm install --save @ionic-native/android-permissions
 */

@Component({
  selector: 'camera',
  templateUrl: 'camera.html'
})
export class CameraPage {

  constructor(private camera: Camera, private androidPermissions: AndroidPermissions) {

    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(
      result => console.log('Has permission?',result.hasPermission),
      err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA)
    );

    this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.CAMERA, this.androidPermissions.PERMISSION.GET_ACCOUNTS]);
  }
  ferFoto(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      let base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });
  }




}
