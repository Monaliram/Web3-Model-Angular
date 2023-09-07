import { Component } from '@angular/core';
import { Web3ServiceService } from '../web3-service.service';

@Component({
  selector: 'app-web3-model',
  templateUrl: './web3-model.component.html',
  styleUrls: ['./web3-model.component.scss']
})
export class Web3ModelComponent {
  showaddress:boolean =false;
  walletaddress:any

 constructor(private _web3Service:Web3ServiceService){


 }
 connectWalletconnect(){
  this._web3Service.openQRCode();
 this.walletaddress= this._web3Service.walletaddress ;
 if(this.walletaddress){
  this.showaddress=true
 }else{
  this.showaddress=false
 }

 }
 callcontractMethod(){
  this._web3Service.contractMethodCall();
 }
 sendtranscation(){
  this._web3Service.sendtranscation();
 }
}
