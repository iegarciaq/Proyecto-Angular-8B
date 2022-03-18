import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {


  action: string = '';

  // Crear un formGroup

  formGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
  });

  constructor(
    private prodService: ProductService, 
    private dialog: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any
    ) {
      
     }

  ngOnInit(): void {
    console.log(this.data)
    this.action = this.data.action;
  }

  submitForm(){

    const product = this.formGroup.value;

    this.prodService.addProduct(product).subscribe(
      (response :any ) => {
        console.log(response)
        this.dialog.close();
      }
    );
    
  }

}
