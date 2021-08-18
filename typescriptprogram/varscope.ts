var global = 101           

class Demo 
{ 
    // Class Scope
   i = 13;                  //Instance variable 
   static j = 10;           //Class variable 
   
   fun():void 
   { 
      // Local scope
      var local = 14;       
      
      console.log("Value of global : "+global);
      console.log("Value of local : "+local);
      console.log("Value of class variable : "+Demo.j);     // Static members can be accessed using class name
      console.log("Value of Instance variable : "+this.i);  // Non static can be accessed using this.
   } 
} 

console.log("Global variable: "+global)  

console.log(Demo.j)     //static variable  

var obj = new Demo(); 
obj.fun();

console.log("Instance variable: "+obj.i);