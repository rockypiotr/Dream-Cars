import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAuctionPageComponent } from './create-auction-page.component';

describe('CreatePageComponent', () => {
  let component: CreateAuctionPageComponent;
  let fixture: ComponentFixture<CreateAuctionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateAuctionPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateAuctionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
