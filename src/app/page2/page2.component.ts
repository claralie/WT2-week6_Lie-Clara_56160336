import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DataService } from "../data.service";
import { User } from '../datauser';

@Component({
  selector: "app-page2",
  templateUrl: "./page2.component.html",
  styleUrls: ["./page2.component.css"]
})
export class Page2Component implements OnInit {
  users: User[];
  user = 'posts'
  name = null;

  constructor(private route: ActivatedRoute, private dataService: DataService) {}

  ngOnInit() {
    
    
  }
  
  add(){
    this.dataService.postEmail(this.user).subscribe(data => {
      console.log(data);
      this.name.push(data);
    });
  }
}
