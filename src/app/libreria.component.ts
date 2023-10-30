import { Component , OnInit} from '@angular/core';
import { librosService } from './libros.service';
import { Data } from '@angular/router';


@Component({
  selector: 'app-libreria',
  templateUrl: './libreria.component.html',
  styleUrls: ['./libreria.component.css']
})
export class LibreriaComponent implements OnInit{

  public booksData : any
  public selectBooks : any[] = [];

  constructor(private _books : librosService){ }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(){
    this._books.getBooksData().subscribe((result) => {
      this.booksData = result;
    });
  }

  selectBook(book : any){
    this.selectBooks.push(book)
    this.removeBookFromBooksData(book)
  }

  removeBook(selectedBook: any) {
    const index = this.selectBooks.indexOf(selectedBook);
    if (index !== -1) {
      this.selectBooks.splice(index, 1);
      this.booksData.library.push(selectedBook);
    }
  }

  removeBookFromBooksData(book: any) {
    const index = this.booksData.library.indexOf(book);
    if (index !== -1) {
      this.booksData.library.splice(index, 1);
    }
  } 
}
