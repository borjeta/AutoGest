import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarPropietarioComponent } from './navbar-propietario.component';

describe('NavbarPropietarioComponent', () => {
  let component: NavbarPropietarioComponent;
  let fixture: ComponentFixture<NavbarPropietarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarPropietarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavbarPropietarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
