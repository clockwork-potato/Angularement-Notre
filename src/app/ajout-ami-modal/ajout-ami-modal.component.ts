import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger
} from '@angular/animations';

@Component({
  selector: 'app-ajout-ami-modal',
  templateUrl: './ajout-ami-modal.component.html',
  styleUrls: ['./ajout-ami-modal.component.css'],
  animations: [
    trigger('listAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s', style({ opacity: 1 }))
      ]),
    ]),
  ],
})
export class AjoutAmiModalComponent {
  @Input() showModal: boolean = false ;
  @Output() amiAdded = new EventEmitter<string>();
  newAmiName: string = '' ;
  erreur: string = '' ;

  addAmi()  {
    if(this.newAmiName === ''){
      this.erreur = "Pas bon";
      return;
    }
    this.amiAdded.emit(this.newAmiName);
    this.newAmiName = '';
    this.showModal = false;
  }
  closeModal() {
    this.showModal = false;
  }
}

