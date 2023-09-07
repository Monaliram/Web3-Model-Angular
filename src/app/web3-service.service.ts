import { Injectable } from '@angular/core';
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/html'
import { configureChains, createConfig } from '@wagmi/core'
import { arbitrum, mainnet, polygon } from '@wagmi/core/chains'
import { getAccount } from '@wagmi/core'
import { writeContract } from '@wagmi/core';
import contractABI from '../abis/contractABI.json'
import Web3 from "web3";
@Injectable({
  providedIn: 'root'
})
export class Web3ServiceService {
  showAddress :boolean =false
  contractAddress :any ='0xF79211b3bD2CeC686F4e564D3ad14fc70254746f';
  web3:any
  contract:any
  walletaddress:any
  usdtDecimal:number =1e6

  constructor() { }
  async openQRCode()
  {
    const projectId = '76890b5d71389081555eff14d447fec3';
    const chains= [polygon];
    const { publicClient } = configureChains(chains, [w3mProvider({projectId})]);
    const wagmiConfig = createConfig({
      autoConnect: true,
      connectors: w3mConnectors({chains,projectId}),
      publicClient
    })
    const ethereumClient = new EthereumClient(wagmiConfig, chains);
    const web3modal = new Web3Modal( {projectId }, ethereumClient);
    web3modal.setTheme({
      themeMode: 'dark',
      themeVariables: {
        '--w3m-font-family': 'Roboto, sans-serif',
        '--w3m-accent-color': '#F5841F'
      }
    })
    await web3modal.openModal();
     const account = await getAccount()
     this.walletaddress=account.address
     console.log(account.address)
     if(account.address){
      this.showAddress =true
     }
     else{
      this.showAddress=false
     }
    console.log(account,'const account = getAccount()')
  }
    async contractMethodCall(){
    this.web3 =await new Web3(
      new Web3.providers.HttpProvider('https://polygon-rpc.com/')
    );
    this.contract = await new this.web3.eth.Contract(contractABI, this.contractAddress);
    console.log(this.walletaddress,'waliuu')
  await   this.contract.methods
    .users(this.walletaddress)
    .call().then((result:any)=>{
      console.log(result,'result')
    })
    
  }
  async sendtranscation(){
    this.web3 =await new Web3(
      new Web3.providers.HttpProvider('https://polygon-rpc.com/')
    );
    this.contract = await new this.web3.eth.Contract(contractABI, this.contractAddress);
    console.log(this.walletaddress,'waliuu')
    let amount =1000
     let usdtAmount = this.web3.utils.toHex(Number(amount) * Number(this.usdtDecimal))
  // await   this.contract.methods
  //   .deposite_USDT(usdtAmount)
  //   .send({from:this.walletaddress}).then((result:any)=>{
  //     console.log(result,'result')
  //   })
  var data = this.contract.methods.deposite_USDT(usdtAmount).encodeABI();
  const transactionParameters: any = {
    to: this.contractAddress,
    from: this.walletaddress,
    value:'0x00',
    data: data,
  };
  // await   Web3Modal.({ method: "eth_sendTransaction",params: [transactionParameters] }).then((result:any)=>{
  //   console.log(result)
  // })
  // Web3Modal.call({})
  
  }
}
