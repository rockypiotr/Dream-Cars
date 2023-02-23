import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionItemDescriptionComponent } from './auction-item-description.component';

describe('AuctionItemDescriptionComponent', () => {
  let component: AuctionItemDescriptionComponent;
  let fixture: ComponentFixture<AuctionItemDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuctionItemDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuctionItemDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
