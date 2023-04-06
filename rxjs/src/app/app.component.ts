import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rxjs';
  constructor(){
    // this.changeTitle(this.setTitle);
    // this.onComplete().then(this.setTitle);
    this.title$.subscribe(this.setTitle);
  }

  private setTitle = () => {
    let timestamp = new Date().getMilliseconds();
    this.title = `learning angular (${timestamp})`
  }
  title$ = new Observable(observer => {
    setInterval(() => {
      observer.next();
    }, 2000);
  });

  private onComplete(){
    return new Promise<void>((res)=>{
      setInterval(()=>{
        res();
      },2000)
    })
  }
}
