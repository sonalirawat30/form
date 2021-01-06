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

  public serveList: IServe[];

  constructor( private serveService: ServeService) {}

  ngOnInit(): void {
    this.serveService.getData().subscribe((response: IServe[])=>{
      this.serveList = response;
    })
  }
}