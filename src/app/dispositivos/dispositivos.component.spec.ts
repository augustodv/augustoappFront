import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DISPOSITIVOSComponent } from './dispositivos.component';

describe('DISPOSITIVOSComponent', () => {
  let component: DISPOSITIVOSComponent;
  let fixture: ComponentFixture<DISPOSITIVOSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DISPOSITIVOSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DISPOSITIVOSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
