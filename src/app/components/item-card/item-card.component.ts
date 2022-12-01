import { Component } from '@angular/core';

@Component({
  selector: 'philips-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css'],
})
export class ItemCardComponent {
  personagem: any = {
    nome: 'Nick Nelson',
    nomeAtor: 'Kit Connor',
    descricao: 'Golden Retriever',
    imagem: 'https://pbs.twimg.com/media/FRsm_jnXsAIG5HM.jpg:large',
  };
}
