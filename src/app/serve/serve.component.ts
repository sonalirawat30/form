import { Component, OnInit } from '@angular/core';
import { ServeService } from '../serve.service';
@Component({
  selector: 'app-serve',
  templateUrl: './serve.component.html',
  styleUrls: ['./serve.component.css']
})
export class ServeComponent implements OnInit {
   public serve:any=[];
  constructor( private serveService: ServeService) {}
  ngOnInit(): void {
     this.serveService.getData(this.serve).subscribe((Response:any)=>{
       console.log(Response);
      this.serve = Response.serve;
    })
  
  }

}