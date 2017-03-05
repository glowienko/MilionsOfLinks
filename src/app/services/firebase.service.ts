import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Injectable()
export class FirebaseService {

  links: FirebaseListObservable<any[]>;

  constructor(public ngFire: AngularFire) {

  }

  getLinks() {
    this.links = this.ngFire.database.list('/links') as FirebaseListObservable<Links[]>
    return this.links;
  }

}

interface Links {
  $key?: string;
  URL: string;
  category: string
  creation_date: string;
  description?: string;
  image?: string;
  img_path?: string;
  info_importancy: string;
}
