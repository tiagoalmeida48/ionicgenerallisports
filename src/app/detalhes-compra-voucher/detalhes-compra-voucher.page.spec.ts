import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetalhesCompraVoucherPage } from './detalhes-compra-voucher.page';

describe('DetalhesCompraVoucherPage', () => {
  let component: DetalhesCompraVoucherPage;
  let fixture: ComponentFixture<DetalhesCompraVoucherPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhesCompraVoucherPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetalhesCompraVoucherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
