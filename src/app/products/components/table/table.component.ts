import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from '../../interfaces/product.interface';
import { ProductService } from '../../services/product.service';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {

  displayedColumns: string[] = ['id', 'title', 'price', 'createdAt', 'updatedAt', 'actions'];
  allProducts: Product[] = [];
  dataSource !: MatTableDataSource<Product>;


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

  }

  constructor(
    private prodService: ProductService,
    private dialog: MatDialog

  ) { }

  ngOnInit(): void {
    this.updateTable();
  }

  updateTable() {
    this.prodService.getProducts().subscribe(
      arrProducts => {
        this.allProducts = arrProducts;
        this.dataSource = new MatTableDataSource(this.allProducts);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }

  addProduct(action: string, prod?: Product) {

        const dialog = this.dialog.open(DialogComponent, {
          data:  {action, producto : prod}, 
        });

        dialog.afterClosed().subscribe(
          result => {
            this.updateTable();
          }
        );
      


  }

  deleteProduct(id: number) {
    this.prodService.deleteProduct(id).subscribe(
      response => {
        console.log(response)
        this.updateTable();
      }
    );

  }

}
