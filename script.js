
// <!-- searched items -->
let btn=document.querySelector("#btn");
btn.addEventListener("click",function(event){
   event.preventDefault();
   let gift=document.querySelector("#gift").value;
   async function get4(){
    try{
      let proData= await fetch("https://636dd4b3b567eed48aca5f96.mockapi.io/"+gift)
      .then((res)=>res.json())
      .then((result)=>result)
          proData;
        display4(proData);
    }catch(error){
         console.log(error);
    }
  }
  get4();
});


function display4(data){
  document.querySelector("#toys").innerHTML="";
   data.forEach((element,index) => {
    let div=document.createElement("div");

    let img=document.createElement("img");
    img.setAttribute("src",element.avatar);

    let name=document.createElement("p");
    name.innerText=element.title;

    let cost=document.createElement("h4");
    cost.innerText="$"+element.price;

    let btn=document.createElement("button");
    btn.innerText="Add to Cart";

    div.append(img,name,cost,btn);
    document.querySelector("#toys").append(div);
   });
  
}

// <!-- hottest toys -->
let bag=[];
    async function get(){
      try{
        let proData= await fetch("https://636dd4b3b567eed48aca5f96.mockapi.io/gifts")
        .then((res)=>res.json())
        .then((result)=>result)
            bag=proData
          display(proData);
      }catch(error){
           console.log(error);
      }
    }
    get()
    function display(data){
      document.querySelector("#toys").innerHTML="";
       data.forEach((element,index) => {
        let div=document.createElement("div");

        let img=document.createElement("img");
        img.setAttribute("src",element.avatar);

        let name=document.createElement("p");
        name.innerText=element.title;

        let cost=document.createElement("h4");
        cost.innerText="$"+element.price;

        let btn=document.createElement("button");
        btn.innerText="Add to Cart";
    
        div.append(img,name,cost,btn);
        document.querySelector("#toys").append(div);
       });
      
    }
//  <!-- products section -->
    let bag1=[];
    async function get1(){
      try{
        let data= await fetch("https://636dd4b3b567eed48aca5f96.mockapi.io/products")
        .then((res)=>res.json())
        .then((result)=>result)
            bag1=data
          display1(data);
      }catch(error){
           console.log(error);
      }
    }
    get1()
    function display1(data){
      document.querySelector("#prod").innerHTML="";
       data.forEach((element,index) => {
        let div=document.createElement("div");

        let img=document.createElement("img");
        img.setAttribute("src",element.avatar);

        let name=document.createElement("p");
        name.innerText=element.title;

        let cost=document.createElement("h4");
        cost.innerText="$"+element.price;

        let btn=document.createElement("button");
        btn.innerText="Add to Cart";
    
        div.append(img,name,cost,btn);
        document.querySelector("#prod").append(div);
       });
      
    }
// <!-- beauty products -->
    let bag2=[];
    async function get2(){
      try{
        let data= await fetch("https://636dd4b3b567eed48aca5f96.mockapi.io/beauty")
        .then((res)=>res.json())
        .then((result)=>result)
            bag2=data
          display2(data);
      }catch(error){
           console.log(error);
      }
    }
    get2()
    function display2(data){
      document.querySelector("#beauty").innerHTML="";
       data.forEach((element,index) => {
        let div=document.createElement("div");

        let img=document.createElement("img");
        img.setAttribute("src",element.avatar);

        let name=document.createElement("p");
        name.innerText=element.title;

        let cost=document.createElement("h4");
        cost.innerText="$"+element.price;

        let btn=document.createElement("button");
        btn.innerText="Add to Cart";
    
        div.append(img,name,cost,btn);
        document.querySelector("#beauty").append(div);
       });
      
    }
// <!-- skin care -->
    let bag3=[];
    async function get3(){
      try{
        let data= await fetch("https://636dd4b3b567eed48aca5f96.mockapi.io/skin")
        .then((res)=>res.json())
        .then((result)=>result)
            bag3=data
          display3(data);
      }catch(error){
           console.log(error);
      }
    }
    get3()
    function display3(data){
      document.querySelector("#skin").innerHTML="";
       data.forEach((element,index) => {
        let div=document.createElement("div");

        let img=document.createElement("img");
        img.setAttribute("src",element.avatar);

        let name=document.createElement("p");
        name.innerText=element.title;

        let cost=document.createElement("h4");
        cost.innerText="$"+element.price;

        let btn=document.createElement("button");
        btn.innerText="Add to Cart";
    
        div.append(img,name,cost,btn);
        document.querySelector("#skin").append(div);
       });
      
    }
    // electronic page//
    let bag5=[];
    async function get5(){
      try{
        let data= await fetch("https://636e61b1182793016f3f3c40.mockapi.io/electronics")
        .then((res)=>res.json())
        .then((result)=>result)
            bag5=data
          display5(data);
      }catch(error){
           console.log(error);
      }
    }
    get5()
    function display5(data){
      document.querySelector("#elec").innerHTML="";
       data.forEach((element,index) => {
        let div=document.createElement("div");

        let img=document.createElement("img");
        img.setAttribute("src",element.avatar);

        let name=document.createElement("p");
        name.innerText=element.title;

        let cost=document.createElement("h4");
        cost.innerText="$"+element.price;

        let btn=document.createElement("button");
        btn.innerText="Add to Cart";
    
        div.append(img,name,cost,btn);
        document.querySelector("#elec").append(div);
       });
    }
    // under 25//
    let bag6=[];
    async function get6(){
      try{
        let data= await fetch("https://636e61b1182793016f3f3c40.mockapi.io/new")
        .then((res)=>res.json())
        .then((result)=>result)
            bag6=data
          display6(data);
      }catch(error){
           console.log(error);
      }
    }
    get6()
    function display6(data){
      document.querySelector("#und25").innerHTML="";
       data.forEach((element,index) => {
        let div=document.createElement("div");

        let img=document.createElement("img");
        img.setAttribute("src",element.avatar);

        let name=document.createElement("p");
        name.innerText=element.title;

        let cost=document.createElement("h4");
        cost.innerText="$"+element.price;

        let btn=document.createElement("button");
        btn.innerText="Add to Cart";
    
        div.append(img,name,cost,btn);
        document.querySelector("#und25").append(div);
       });
    }
    // under50
    let bag7=[];
    async function get7(){
      try{
        let data= await fetch("https://636e61b1182793016f3f3c40.mockapi.io/new")
        .then((res)=>res.json())
        .then((result)=>result)
            bag7=data
          display7(data);
      }catch(error){
           console.log(error);
      }
    }
    get7()
    function display7(data){
      document.querySelector("#und50").innerHTML="";
       data.forEach((element,index) => {
        let div=document.createElement("div");

        let img=document.createElement("img");
        img.setAttribute("src",element.avatar);

        let name=document.createElement("p");
        name.innerText=element.title;

        let cost=document.createElement("h4");
        cost.innerText="$"+element.price;

        let btn=document.createElement("button");
        btn.innerText="Add to Cart";
    
        div.append(img,name,cost,btn);
        document.querySelector("#und50").append(div);
       });
    }
    // under100//

    let bag8=[];
    async function get8(){
      try{
        let data= await fetch("https://636e61b1182793016f3f3c40.mockapi.io/new")
        .then((res)=>res.json())
        .then((result)=>result)
            bag8=data
          display8(data);
      }catch(error){
           console.log(error);
      }
    }
    get8()
    function display8(data){
      document.querySelector("#und25").innerHTML="";
       data.forEach((element,index) => {
        let div=document.createElement("div");

        let img=document.createElement("img");
        img.setAttribute("src",element.avatar);

        let name=document.createElement("p");
        name.innerText=element.title;

        let cost=document.createElement("h4");
        cost.innerText="$"+element.price;

        let btn=document.createElement("button");
        btn.innerText="Add to Cart";
    
        div.append(img,name,cost,btn);
        document.querySelector("#und25").append(div);
       });
    }