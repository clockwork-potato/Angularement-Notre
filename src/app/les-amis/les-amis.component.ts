import { Component } from '@angular/core';


@Component({
  selector: 'app-les-amis',
  templateUrl: './les-amis.component.html',
  styleUrls: ['./les-amis.component.css'],
  
})
export class LesAmisComponent {
  amis = [
    { nom: 'Alain Térieur' },
    { nom: 'Jean Bon' },
    { nom: 'Ella Vator' },
    { nom: 'Sarah Croche' },
    { nom: 'Marc Assin' }
  ]
  authorizeAmi:boolean = false;
  showModal: boolean = false;

  constructor() {
    setTimeout(() => {
      this.authorizeAmi = true;
    }, 30);
  }

  toggleModal() {
    this.showModal = !this.showModal;
  }
  addAmiToList(nom: string) {
    this.amis.push({ nom });
  }
  
}
