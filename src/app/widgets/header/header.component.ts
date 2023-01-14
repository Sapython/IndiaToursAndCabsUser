import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  links:Link[] = [
    {
      icon: "ri-pencil-line",
      text: "Edit",
      link: "/edit"
    },
    {
      icon: "ri-pencil-line",
      text: "Edit",
      link: "/edit"
    },
    {
      icon: "ri-pencil-line",
      text: "Edit",
      link: "/edit"
    },
    {
      icon: "ri-pencil-line",
      text: "Edit",
      link: "/edit"
    },
    {
      icon: "ri-pencil-line",
      text: "Edit",
      link: "/edit"
    },
  ]
  userName= "Saptam"
  userImage = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
  sidebarOpen: boolean = false;
  ngOnInit(): void {
  }

}

type Link = {
  icon:string,
  text:string,
  link:string
}