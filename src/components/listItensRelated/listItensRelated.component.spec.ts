import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItensRelatedComponent } from './listItensRelated.component';

describe('ListItensRelatedComponent', () => {
  let component: ListItensRelatedComponent;
  let fixture: ComponentFixture<ListItensRelatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListItensRelatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItensRelatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
