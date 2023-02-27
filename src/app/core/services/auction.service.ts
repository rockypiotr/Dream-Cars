import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Auction } from '../../model/auction';

@Injectable()
export class AuctionService {
  private readonly _path = '/T_Auction';

  constructor(private _firestore: AngularFirestore) {}

  get() {
    return this._firestore.collection(this._path).snapshotChanges();
  }

  deleteById(auctionID: string) {
    return this._firestore
      .collection(this._path, (ref) => ref.where('ID', '==', auctionID))
      .get()
      .forEach((collection) => {
        collection.docs.forEach((value) => value.ref.delete());
      });
  }

  create(auctionData: Auction) {
    this._firestore
      .collection(this._path)
      .add(auctionData)
      .then(() => {
        return;
      })
      .catch((error) => {
        console.error('Error adding auction: ', error);
      });
  }
}
