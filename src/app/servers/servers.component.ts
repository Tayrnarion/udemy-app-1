import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = false;
  isEmpty = true;
  serverCreationStatus = "No server was created";
  serverName = "TestServer";
  userName = "";

  constructor () {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit() {

  }

  onCreateServer() {
    this.serverCreationStatus = "Server was created! Name is " + this.serverName;
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onUpdateUserName(event: any) {
    if (this.userName != "") {
      this.isEmpty = false;
    } else {
      this.isEmpty = true;
    }
  }

  onReset() {
    this.userName = "";
    this.isEmpty = true;
  }
}
