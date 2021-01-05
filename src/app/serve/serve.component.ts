import { Component, OnInit } from '@angular/core';
import { ServeService } from '../serve.service';
import { filter} from 'rxjs/operators';
import { IServe } from  '../serve';
@Component({
  selector: 'app-serve',
  templateUrl: './serve.component.html',
  styleUrls: ['./serve.component.css']
})
export class ServeComponent implements OnInit {
   public serve:IServe[];
  constructor( private serveService: ServeService) {}
  ngOnInit(): void {
    
     this.serveService.getData().subscribe((Response:any)=>{
      console.log(Response);
      // this.serve = Response.serve;
      filter(data=>data.id<10)
      
    })
  }
}