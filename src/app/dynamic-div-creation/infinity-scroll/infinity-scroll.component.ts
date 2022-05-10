import { Component } from '@angular/core';

@Component({
  selector: 'app-infinity-scroll',
  templateUrl: './infinity-scroll.component.html',
  styleUrls: ['./infinity-scroll.component.css']
})
export class InfinityScrollComponent {
  public showDialog:boolean = false;
  public divNo :string = ''; 
  public posts:any[] = ' '.repeat(100).split('').map((s, i) => i + 1);
  
  constructor() { }

  public onScroll(): void {
    const length = this.posts.length;
    setTimeout(() => {
      const p = ' '.repeat(100).split('').map((s, i) => i + 1 + length);
      while(p.length) this.posts.push(p.shift())
    }, 1000)
  }

  public openDialog(clickedDiv:string): void{
    this.divNo = clickedDiv;
    this.showDialog = true;
  }

}
