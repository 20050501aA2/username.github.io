let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
let myImage = document.querySelector('img'); /*获取元素类型 img  放到mylmage*/

myImage.onclick = function() {   /*点击 图片 事故变量onclick   放在匿名函数看*/
    let mySrc = myImage.getAttribute('src');  /*getAttribute 获取  mymage属性  src 放进mysrc*/
    if(mySrc === 'images/th.jpg') {     /*mysrc 属性等于 本图片*/
      myImage.setAttribute('src', 'images/th2.jpg');/*setAttribute 改变  其他图片地址*/
    } else {
      myImage.setAttribute('src', 'images/th.jpg');    /*不等于本图片  改成本图片地址*/
    }
}
function setUserName() {
  let myName = prompt('请输入你的名字。');  /*prompt 弹出对话框*/
  if(!myName || myName === null) {     /*输入的 没有值 或者为空*/
   setUserName();    /*重新操作*/
  }else{
  localStorage.setItem('name', myName);   /*localStorage.setItem创建一个name数据项 并把myname复制 */
  myHeading.textContent = 'Mozilla 酷毙了，' + myName;  /*引用标题myHeading.textContent 属性设置 并添加 输入的''*/
  }
}
if(!localStorage.getItem('name')) { /* ！localStorage.setItem 没有name 则调用下命令 创建*/
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}myButton.onclick = function() {  /*点击引用切换用户执行下命令重新创建 名字*/
   setUserName();
}