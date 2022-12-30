import {Injectable} from "@angular/core";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Injectable()
export class SearchItemService {
  constructor(public firestore: AngularFirestore) { }

  getItems() {
    return this.firestore.collection('/T_Auction').snapshotChanges();
  }
}
