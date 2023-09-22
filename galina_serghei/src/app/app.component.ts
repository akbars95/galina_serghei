import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public static readonly COOKIE_NAME = "rememberMeGS";
  personName: string = '';
  weddingDay: number = new Date().getDate();
  weddingMonth: number = new Date().getMonth() + 1;
  weddingYear: number = new Date().getFullYear();
  errorMessageName: string = '';
  errorMessageDateOfWedding: string = '';
  nameVariants = ["Сергей", "Галина", "Серёжа", "Сережа", "Галя"];
  logInSuccess: boolean = false;

  ngOnInit(): void {
    if (document.cookie.length > 0) {
      console.log('document.cookie', document.cookie)
      let cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
        let cookieCurrent = cookies[i].split("=");
        if (cookieCurrent.length == 2) {
          if (cookieCurrent[0].trim() == AppComponent.COOKIE_NAME) {
            this.personName = cookieCurrent[1].trim();
            if (this.personName && this.personName.length > 0) {
              this.logInSuccess = true;
              console.log("true")
              break;
            }
          }
        }
      }
    }
  }

  clear(): void {
    this.personName = '';
    this.weddingDay = new Date().getDate();
    this.weddingMonth = new Date().getMonth() + 1;
    this.weddingYear = new Date().getFullYear();
  }

  logIn(): void {
    if (!this.logInSuccess) {
      console.log("log in")
      let isRightPersonName = false;
      let isRightDateOfWedding = false;

      if (this.nameVariants.find((element) => element.toLowerCase() == this.personName.toLowerCase())) {
        isRightPersonName = true;
      } else {
        this.errorMessageName = 'Не правильное имя!';
        this.personName = '';
      }

      if (this.weddingYear == 1984 && this.weddingMonth == 9 && this.weddingDay == 22) {
        isRightDateOfWedding = true;
      } else {
        this.errorMessageDateOfWedding = 'Не правильное день свадьбы!';
        this.weddingDay = new Date().getDate();
        this.weddingMonth = new Date().getMonth() + 1;
        this.weddingYear = new Date().getFullYear();
      }

      if (isRightPersonName && isRightDateOfWedding) {
        this.logInSuccess = true;
        let tempDate = new Date();
        tempDate.setHours(tempDate.getHours() + 1);
        document.cookie = `${AppComponent.COOKIE_NAME}=${this.personName}; expires=${tempDate}; path=/`;
      }
    }
  }

  logOut() {
    let tempDate = new Date();
    tempDate.setFullYear(tempDate.getFullYear() - 1);
    document.cookie = `${AppComponent.COOKIE_NAME}=;${tempDate};path=/`;
    this.logInSuccess = false;
    this.personName = '';
    console.log("Log out!")
  }

}
