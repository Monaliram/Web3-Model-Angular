import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'web3model';
  showAddress :boolean =false
  contractAddress :any ='0xF79211b3bD2CeC686F4e564D3ad14fc70254746f';
  web3:any
  contract:any
  walletaddress:any

constructor(){

}

}
