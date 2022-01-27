import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
  }

  newCreditCardSubmited($event:any){
    console.log("Data received:")
    console.log($event);
    this.messageService.add({severity:'success', summary: 'Success', detail: 'Data succesfully submited!'});

  }
}
