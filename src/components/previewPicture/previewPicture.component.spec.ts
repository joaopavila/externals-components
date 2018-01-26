import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewPictureComponent } from './previewPicture.component';

describe('PreviewPictureComponent', () => {
  let component: PreviewPictureComponent;
  let fixture: ComponentFixture<PreviewPictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewPictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
