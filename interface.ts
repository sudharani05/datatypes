interface payment {
    pay (amount : number):void
} 
class UPI implements payment {
     pay (amount : number):void {
    console.log("payment done through UPI is", amount);
}
}
class CreditCard implements payment{
    pay (amount : number):void{
        console.log("payment done through creditcard is",amount);
    }
}
class netBanking implements payment{
    pay (amount : number):void{
        console.log("payment done through netBanking is",amount);
}
}
const UPIobj = new UPI()
UPIobj.pay(1000)
const creditobj = new CreditCard()
creditobj.pay(3000)
const netobj = new netBanking()
netobj.pay(5000)