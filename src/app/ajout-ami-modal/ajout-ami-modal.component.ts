import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-ajout-ami-modal',
  templateUrl: './ajout-ami-modal.component.html',
  styleUrls: ['./ajout-ami-modal.component.css']
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

