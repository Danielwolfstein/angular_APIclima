import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class GeoLocationService{
  [x: string]: any;
  public getPosition(): Promise<any>{
    const options ={
      enableHighAccurancy: true,
      timeout: 3000,
      maximumAge: 0
    };
    return new Promise((resolve, reject) =>{
      navigator.geolocation.getCurrentPosition(resolve, reject, options)
    })

  }
}

