import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendPicturesComponent } from './sendPictures.component';

describe('SendPicturesComponent', () => {
  let component: SendPicturesComponent;
  let fixture: ComponentFixture<SendPicturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendPicturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendPicturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
