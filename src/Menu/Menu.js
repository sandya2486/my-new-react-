import React    from "react";
import template from "./Menu.jsx";

class Menu extends React.Component {
  state={
    menuItem:sessionStorage.menuItem ? sessionStorage.menuItem : 'homr',
    isMobileView:document.body.offsetWidth < 600 ? true:false,
    left:-140
}
constructor(){
  super()
  let flag=true;
  let timeoutId;
  window.addEventListener('resize',()=>{
      if(flag){
          this.fnUpdateWindowWidth()
          flag=false
      }
      clearTimeout(timeoutId)
      timeoutId=setTimeout(()=>{
          this.fnUpdateWindowWidth()
      },100)
      
  })
}

fnUpdateWindowWidth(){
  console.log('called')
  let width=document.body.offsetWidth
      this.setState({
          isMobileView:width<600?true:false
      })
    }
    fnMenuClick=(eve)=>{
      eve.stopPropagation()
      const {tagName,id}=eve.target
      if(tagName!='A')return;
      sessionStorage.menuItem=id;
      this.setState({
          menuItem:id,
          
      })
  }
  fnMobileMenuBtnClick=()=>{
      this.setState({
          left:this.state.left==0 ? -140 : 0
      })
  }
  render() {
    return template.call(this);
  }
}

export default Menu;
