import { Component, OnInit } from '@angular/core';
// import * as articles from 'articles.json';
import { element } from 'protractor';

@Component({
  selector: 'gp-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {

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

}

