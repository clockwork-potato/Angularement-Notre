import { Component } from '@angular/core';

@Component({
  selector: 'app-tp-directives',
  templateUrl: './tp-directives.component.html',
  styleUrls: ['./tp-directives.component.css']
})
export class TpDirectivesComponent {
  show: boolean = false;
  items: number[] = [];

  toggle(): void {
    this.show = !this.show;
    this.items.push(this.items.length + 1);
  }
}