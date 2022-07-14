import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {
texto = '';
mensajesSubscription: Subscription = new Subscription;
  constructor(
    public ChatService: ChatService
  ) { }

  ngOnInit() {
    this.ChatService.getMessages().subscribe
    ( msg =>
    { 
      console.log(msg);
    })
  }
  enviar() {
    this.ChatService.sendMessage(this.texto);
    this.texto='';
  }

  ngOnDestroy(): void {
    this.mensajesSubscription.unsubscribe();
  }

}
