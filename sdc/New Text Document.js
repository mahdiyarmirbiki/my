// let k = [
//     { id: 1, name: "a" , pas:"1" },
//     { id: 2, name: "b" , pas:"2" },
//     { id: 3, name: "c" , pas:"3" },
//     { id: 4, name: "d" , pas:"4" }
// ]
// let r = prompt("f")
// let y = k.find(function (user) {
//     return user.name == r
// })
// alert(y.pas);
// let i = +prompt("min")
// let o = +prompt("sco")
// let u=setInterval(function()  {
//     if (o <= 0 ){
//         i=i-1
//         o=60
//     }else{
//         o--
//     }
//     console.log(i + " " + o);
//     if (i<=0 && o<=0){
//         console.log("تمام")
//         var audio = new Audio("Male crowd scream 01.wav");
//         audio.play();
//         clearInterval(u)
//     }
// },1000);
////////////////////////////////////////////////////////
// ?var 1 = document.querySelector('')// .name of class , # name of id
// ?var 2 = document.querySelectorAll('')// مثل 1 است ولی همه را انتخاب میکند وخروجی ارایه دارد 
// ?var 3 = document.getElementById('')// فقط ای دی را میگیرد و نیازی به # نیست
// ?var 4 = document.getElementsByClassName('')//  کلاس را میگیرد و نیازی به . نیست 
// ?var 6 = document.getElementsByTagName('')// نام تگ را مینویسیم
///////////////////////////////////////////////////////
// *var o = document.getElementById()
// *console.log(o.getAttribute("class"));
// *console.log(o.setAttribute("id","hh"));
//////////////////////////////////////////////////////
// !var o = document.getElementById('text')
// !console.log(o);
/////////////////////////////////////////////////////
// ?var o = document.getElementById('text')
// ?console.log(o.innerHTML);
// ?console.log(o.textContent);
// ?console.log(o.innerHTML='bn');
///////////////////////////////////////// ')
// *o.setAttribute('class','dhdsjdds')
// *o.style.color ="blue"
////////////////////////////////////////////////////
// *var o = document.getElementById('n')
// *let u = prompt("df")
// *console.log(o.innerHTML)
// *console.log(o.innerHTML += "kdood")//اضافه کردن
// *o.innerHTML += '<h1>'+u+'</h1>'
// *console.log(o.value)
////////////////////////////////////////////////////////////
// !let div1 =document.getElementById('l')
////////////////////////////////////////////////////////////
// ?document.createElement('div').style.color= 'blue'

// ?let o = document.createElement('div')
// ?o.style.color= 'blue'
/////////////////////////////////////////////////////////////
// let div = document.createElement('div')
// div.setAttribute('class', 'class')
// div.style.color="pink"
// div.innerHTML = 'mghdar'
// console.log(div);
// let l = document.querySelector('#l')
// l.append(div)// چند ورودی میشود وارد کرد
// l.appendChild(div)// یک ورودی اضافه میکند
// l.append(div)// ورودی استرینگ میگیرد
// l.appendChild(div)// ورودی استرینگ نمی گیرد
// let p = l.append(div)l.appendChild(div)//در متغیر ذخیره نمیشود
// let  p =l.appendChild(div)//در متغیر ذخیر میشود
//////////111111111111111111111111111////////
// function h() {
//     alert("dcv")
// }
/////////2222222222222222222222222222////////
// let on = document.querySelector(".s")
// on.addEventListener('click',function ma(){
//     alert("sdf")
//     on.style.color = "blue"
// })
////////3333333333333333333333333333/////////
// let y =  document.querySelector("#fname")
// y.addEventListener("change",function () {
//     let x = document.querySelector("#fname")
//     x.value = x.value.toUpperCase();
// })
///////44444444444444444444444444444//////////
// let i = prompt("1")
// let o = prompt("2")
// if(i===o){
//   alert()
// }

///////////////////////////5/////////////////
// function  l(params) {
//     console.log(params);
// }
// function a(params) {
//     alert(params)
// }
// let d = document
// let y = d.querySelector(".d")
// y.addEventListener("load",function() {
//     l("loadided")
// })
// let x = d.querySelector("#h")
// x.addEventListener("click",function () {
//     x.remove()
// })
// let u = d.querySelector(".h")
// window.addEventListener("scroll",function () {
//     console.log(document.documentElement.scrollTop)
//     // scrollTo
//     // scrollBy

// })
// let btnelm = document.querySelector(".btn")
// let h1elm = document.querySelector(".title")
// btnelm.addEventListener("click",function () {
//     document.documentElement.scrollBy(0,40)
//     // document.documentElement.scrollTo(0,0)
// })
// const audio = document.querySelector(".g")
// const playbtn=document.querySelector(".play-btn")
// const pausebtn=document.querySelector(".pause-btn")
// const playbackratebtn25=document.querySelector(".backrate-btn25")
// const playbackratebtn50=document.querySelector(".backrate-btn50")
// const playbackratebtn1=document.querySelector(".backrate-btn1")
// const playbackratebtn2=document.querySelector(".backrate-btn2")
// playbtn.addEventListener("click",function () {
//     audio.playbackRate=1
//     audio.play()
// })
// pausebtn.addEventListener("click",function () {
//     audio.playbackRate=1
//     audio.pause()
// })
// playbackratebtn25.addEventListener("click",function () {
//     audio.play()
//     audio.playbackRate=0.25
// })
// playbackratebtn50.addEventListener("click",function () {
//     audio.play()
//     audio.playbackRate=0.5
// })
// playbackratebtn1.addEventListener("click",function () {
//     audio.play()
//     audio.playbackRate=1
// })
// playbackratebtn2.addEventListener("click",function () {
//     audio.play()
//     audio.playbackRate=2
// })
// let cart = [];
// let total = 0;

// function addToCart(name, price) {
//   cart.push({ name, price });
//   total += price;
//   updateCart();
// }

// function removeFromCart(index) {
//   total -= cart[index].price;
//   cart.splice(index, 1);
//   updateCart();
// }

// function updateCart() {
//   const cartList = document.getElementById("cart");
//   cartList.innerHTML = "";
//   cart.forEach((item, index) => {
//     const listItem = document.createElement("li");
//     listItem.innerHTML = `${item.name} - $${item.price} <button onclick="removeFromCart(${index})">Remove</button>`;
//     cartList.appendChild(listItem);
//   });
//   document.getElementById("total").innerText = `Total: $${total}`;
// }
// let h1elm =document.




// let locationserchparam = new URLSearchParams(location.search)
// console.log(locationserchparam.get("id"));
// console.log(location);



