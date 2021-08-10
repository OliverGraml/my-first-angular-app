import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
  serverID = 10;
  serverStatus: string = 'offline';

  getServerStatus() {
      return this.serverStatus;
  }
}