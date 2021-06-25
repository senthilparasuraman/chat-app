import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'frontend';
  public roomId: string;
  public messageText : string;
  public messageArray: {user: string, message: string} [] = [];


  public phone: string;
  public currentUser;
  public selectedUser;
  public userList = [
    {
      id: 1,
      name: 'Senthil',
      phone: '1231231234',
      roomId: {
        2: 'room-1',
        3: 'room-2',
        4: 'room-3'
      }
    },{
      id: 2,
      name: 'Saravanan',
      phone: '4449993434',
      roomId: {
        1: 'room-1',
        3: 'room-4',
        4: 'room-5'
      }
    },
    {
      id: 3,
      name: 'Ridhanya',
      phone: '2233445566',
      roomId: {
        1: 'room-2',
        2: 'room-4',
        4: 'room-6'
      }
    },
    {
      id: 4,
      name: 'Lakshitha',
      phone: '1112222333',
      roomId: {
        1: 'room-3',
        2: 'room-5',
        3: 'room-6'
      }
    }


  ];

  constructor(){
    private chatService: ChatService
  }

  ngOnInit(): void{

  }
}
