import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetalhesVendaVoucherPage } from './detalhes-venda-voucher.page';

describe('DetalhesVendaVoucherPage', () => {
  let component: DetalhesVendaVoucherPage;
  let fixture: ComponentFixture<DetalhesVendaVoucherPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhesVendaVoucherPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetalhesVendaVoucherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
