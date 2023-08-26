import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() mytitle : string = '';

  constructor() { }

  ngOnChanges(changes:SimpleChanges)
  {
    console.log("ngOnChanges Invoked");

    console.log(changes);
  }

  ngOnInit(): void {
    console.log("ngOnInit Invoked");
  }

  ngDoCheck()
  {
    console.log("ngDoCheck Invoked");
  }

  ngAfterContentInit()
  {
    console.log("ngAfterContentInit Invoked");
  }

  ngAfterContentChecked()
  {
    console.log("ngAfterContentChecked Invoked");
  }

  ngAfterViewInit()
  {
    console.log("ngAfterViewInit Invoked");
  }

  ngAfterViewChecked()
  {
    console.log("ngAfterViewChecked Invoked");
  }

  ngOnDestroy()
  {
    console.log("ngOnDestroy Invoked");
  }

}
