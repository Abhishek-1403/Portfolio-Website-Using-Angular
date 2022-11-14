import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-links',
  templateUrl: './profile-links.component.html',
  styleUrls: ['./profile-links.component.css']
})
export class ProfileLinksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  githubUrl="./assets/github_Icon2.jpg";
  facebookUrl="./assets/Facebook_Icon.png";
  leetcodeUrl="./assets/Leetcode_Icon.png";
  gfgUrl="./assets/GeeksForGeeks_icon.png";
  linkedinUrl="./assets/Linkedin_Icon.png";

  profileLinkUrl="./assets/profileLink_Icon.png";
}
