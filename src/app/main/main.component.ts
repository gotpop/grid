import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'gp-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [
    trigger('myAwesomeAnimation', [
      state('small', style({
        transform: 'scale(1)',
      })),
      state('large', style({
        transform: 'scale(1.2)',
      })),
      transition('small <=> large', animate('300ms ease-in', keyframes([
        style({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
        style({ opacity: 1, transform: 'translateY(35px)', offset: 0.5 }),
        style({ opacity: 1, transform: 'translateY(0)', offset: 1.0 })
      ])))
    ]),
  ]
})

export class MainComponent implements OnInit {

  state: string = 'small';


  public articles: Array<Object> = [{
    title: "An Article",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    colour: "red",
    value: "#f00"
  },
  {
    title: "A Story",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    colour: "green",
    value: "#0f0"
  },
  {
    title: "Latest News",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    colour: "blue",
    value: "#00f"
  },
  {
    title: "Another Story",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    colour: "cyan",
    value: "#0ff"
  },
  {
    title: "This Article",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    colour: "magenta",
    value: "#f0f"
  },
  {
    title: "A Story",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    colour: "yellow",
    value: "#ff0"
  },
  {
    title: "More News",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    colour: "black",
    value: "#000"
  }
  ];

  constructor() { }

  ngOnInit() {
  }

  animateMe() {
    this.state = (this.state === 'small' ? 'large' : 'small');
  }

}

