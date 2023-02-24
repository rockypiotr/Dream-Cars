import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionButtonListComponent } from './auction-button-list.component';

describe('ActionButtonListComponent', () => {
  let component: AuctionButtonListComponent;
  let fixture: ComponentFixture<AuctionButtonListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuctionButtonListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AuctionButtonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
