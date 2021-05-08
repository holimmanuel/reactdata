import React, { Component } from 'react'
import { Text, View,StyleSheet, Alert } from 'react-native'
import LikeButton from './LikeButton';

export default class Like extends Component {
 

   constructor(props) {
    super(props);
    this.state = {
     gambarLike : this.gambarDefault()
    
    }
   
    
   
   }
   
 isChildPressed = (number) => {
    let dummyArray = [];
       
       if(number %2 === 0 ){
         dummyArray = this.genap();
       
       }else if (this.isPrime(number)){
        dummyArray = this.gambarFibonaci(15);
       }else{
       
       dummyArray = this.ganjil();
       
       }
       
       
      
       this.setState({gambarLike:dummyArray})
   
}
   
   
   componentDidMount() {
   
    let x  = this.ganjil();
    console.log(x);
    
    let y  = this.genap();
    console.log(y);
    
    let z  = this.gambarFibonaci();
    console.log(z);
   
   }

 ganjil() {
        let dummyData = new Array();
   let counter = 0;
   
   for (let i= 0 ; i < 5;i++){
   
    for (let j= 0 ; j <5;j++){
       
       if(counter % 2 !== 0){ 
            dummyData[counter]=1
       }else{
            dummyData[counter]=0
      }
       counter++;
    }
   
   
   }
   
   
   return dummyData;
   
   
   }
   
   
   gambarDefault() {
    let dummyData = new Array();
let counter = 0;

for (let i= 0 ; i < 5;i++){

for (let j= 0 ; j <5;j++){
   
   
        dummyData[counter]=0
  
   counter++;
}


}


return dummyData;


}
   
   
   genap() {
    let dummyData = new Array();
let counter = 0;

for (let i= 0 ; i < 5;i++){

for (let j= 0 ; j <5;j++){
   
   if(counter % 2 == 0){
        dummyData[counter]=1
   }else{
        dummyData[counter]=0
  }
   counter++;
}


}


return dummyData;


}


gambarFibonaci (){

    let dummyData = new Array();
    let counter = 0;
    
    for (let i= 0 ; i < 5;i++){
    
    for (let j= 0 ; j <5;j++){
       
      if(this.listFibonacci(15).includes(counter)){
        dummyData[counter]=1
      
      }else{
        dummyData[counter]=0
      }
      
       counter++;
    }
    
    
    }
    
    
    return dummyData;
    



}

//UTILITY
 isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
  
    // storing the calculated value would be much 
    // better than calculating in each iteration
    var sqrt = Math.sqrt(num);
  
    for (var i = 2; i <= sqrt; i++) 
      if (num % i === 0) return false;
    return true;
  }

  listFibonacci(n) {
    // declare the array starting with the first 2 values of the fibonacci sequence
    // starting at array index 1, and push current index + previous index to the array
    for (var fibonacci = [0, 1], i = 1; i < n; i++) 
      fibonacci.push(fibonacci[i] + fibonacci[i - 1])
  
    return fibonacci
  }
  
  

    
   

    render() {
      return (
      <View style={styles.container2}>{
          this.state.gambarLike.map((data,i)=>{
        return ( 
            <View style={styles.container}>
            <LikeButton jenis = {data} urutan = {i} actionClick = {this.isChildPressed}/>
           </View>
          )
          })
        }
        </View>
    )
      
    }
}


const styles = StyleSheet.create({
    container: {
     
     width:75,
     height:60,
     
     backgroundColor:"red"
     
    },
    container2: {
     
        flexDirection: 'row',
        backgroundColor:"red",
        flexWrap:"wrap"
        
       },
  });