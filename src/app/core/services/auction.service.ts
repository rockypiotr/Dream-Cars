import {Injectable} from "@angular/core";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Injectable()
export class AuctionService {
  private readonly _path = '/T_Auction';

  constructor(public firestore: AngularFirestore) {
  }

  getItems() {
    return this.firestore.collection(this._path).snapshotChanges();
  }

  deleteAuctionById(auctionID: string) {
    return this.firestore.collection(this._path, ref => ref.where('ID', '==', auctionID)).get()
      .forEach((collection) => {
        collection.docs
          .forEach(value => value.ref.delete());
      })
  }
}
