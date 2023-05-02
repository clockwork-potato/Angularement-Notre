import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-un-ami',
  templateUrl: './un-ami.component.html',
  styleUrls: ['./un-ami.component.css']
})
export class UnAmiComponent {
  @Input() childAmi: any;

  constructor() { }

  ngOnInit(): void {
  }
}
