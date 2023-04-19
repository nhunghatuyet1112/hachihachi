import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-add-new-drawer',
  templateUrl: './add-new-drawer.component.html',
  styleUrls: ['./add-new-drawer.component.scss']
})
export class AddNewDrawerComponent {
  @Input() productName = '';
  @Input() Barcode = '';
  @Input() ImageUrl = "/Uploads/_11/product1/4909411076870.jpg";

  @Output() closeEditDrawer = new EventEmitter();
  @Output() editProductClick = new EventEmitter();
  @Output() changeProductName = new EventEmitter<string>();

  onCloseDrawer(event: any) {
    this.closeEditDrawer.emit(event);
  }

  onEditProduct(event: any) {
    this.editProductClick.emit(event);
  }

  onChangeName(value: string) {
    this.changeProductName.emit(value);
  }

}