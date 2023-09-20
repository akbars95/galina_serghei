import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-congratulation',
  templateUrl: './congratulation.component.html',
  styleUrls: ['./congratulation.component.css']
})
export class CongratulationComponent implements OnInit {

  @Input() personName = '';

  nameVariants = ["Doga", "mendelson", "venskii"];
  currentMusic = '';

  ngOnInit(): void {
    let cur = this.nameVariants[this.getRandomInt(this.nameVariants.length - 1)];
    this.currentMusic = `../assets/${cur}.mp3`;
  }

  getRandomInt(max: number): number {
    return Math.floor(Math.random() * max);
  }

}
