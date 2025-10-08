import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleColorComponent } from './title-color.component';

describe('TitleColorComponent', () => {
  let component: TitleColorComponent;
  let fixture: ComponentFixture<TitleColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TitleColorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
