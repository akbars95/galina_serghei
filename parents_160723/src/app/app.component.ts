import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  personName: string = '';
  weddingDay: number = new Date().getDate();
  weddingMonth: number = new Date().getMonth() + 1;
  weddingYear: number = new Date().getFullYear();
  errorMessageName: string = '';
  errorMessageDateOfWedding: string = '';
  nameVariants = ["Александр", "Валентина", "Саша", "Валя"];
  weddingDate: Date = new Date(1989, 7, 16);
  logInSuccess: boolean = false;

  clear(): void {
    this.personName = '';
    this.weddingDay = new Date().getDate();
    this.weddingMonth = new Date().getMonth() + 1;
    this.weddingYear = new Date().getFullYear();
  }

  logIn(): void {
    let isRightPersonName = false;
    let isRightDateOfWedding = false;

    if (this.nameVariants.find(element => element.toLowerCase() == this.personName.toLowerCase())) {
      isRightPersonName = true;
    } else {
      this.errorMessageName = 'Не правильное имя!';
      this.personName = '';
    }

    if (this.weddingYear == 1989 && this.weddingMonth == 7 && this.weddingDay == 16) {
      isRightDateOfWedding = true;
    } else {
      this.errorMessageDateOfWedding = 'Не правильное день свадьбы!';
      this.weddingDay = new Date().getDate();
      this.weddingMonth = new Date().getMonth() + 1;
      this.weddingYear = new Date().getFullYear();
    }

    if (isRightPersonName && isRightDateOfWedding) {
      this.logInSuccess = true;
    }

  }

}
