import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionItem } from './auction-item';

describe('SearchItemComponent', () => {
  let component: AuctionItem;
  let fixture: ComponentFixture<AuctionItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuctionItem],
    }).compileComponents();

    fixture = TestBed.createComponent(AuctionItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
