import { Component, OnInit } from '@angular/core';
import { ServeService } from '../serve.service';
import { filter, map, concatMap } from 'rxjs/operators';
import { IServe } from '../serve';

@Component({
  selector: 'app-serve',
  templateUrl: './serve.component.html',
  styleUrls: ['./serve.component.css']
})

export class ServeComponent implements OnInit {

  public serveList;

  constructor(private serveService: ServeService) { }

  ngOnInit(): void {

    this.serveService.getData().subscribe((response: any) => {
      this.serveList = response;
      console.log(this.serveList)

      const filter = this.serveList.filter(data => data["username"].length > 6)
      console.log(filter)

      const map = this.serveList.map(data => "Name:" + data.name)
      console.log(map)


      const serve = this.serveList.pop();
      console.log(serve)

      const array = this.serveList.splice(0, 1);
      console.log(array)

      const s = this.serveList.shift();
      console.log(s)

      const r = this.serveList.unshift("xyz");
      console.log(r)


      const z = this.serveList.push("abc");
      console.log(z)

      this.serveList = this.serveList
        .forEach((element => console.log(element)));
    })
  }
}