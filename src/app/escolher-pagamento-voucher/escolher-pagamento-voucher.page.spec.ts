import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EscolherPagamentoVoucherPage } from './escolher-pagamento-voucher.page';

describe('EscolherPagamentoVoucherPage', () => {
  let component: EscolherPagamentoVoucherPage;
  let fixture: ComponentFixture<EscolherPagamentoVoucherPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EscolherPagamentoVoucherPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EscolherPagamentoVoucherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
