import React from 'react';
import '../App.css';

class ItemTrans extends React.Component {
  render() {
    return (
      <div className='ItemCell'>
        <div className='PhotoItem'>
            <img src={this.props.img} height='100%' alt={this.props.alt}/>
        </div>
        <div className='TextItem'>
            <p>{this.props.text}</p>
            <div className='Price'>
                <div className='inputInline'><input id={this.props.id} className='input' inputMode='numeric' pattern="[0-9]*" maxlength="6" minLength='1' onChange={this.Input}/>  дублонов</div>
                <button className='but'onClick={this.Add}><p className='plus'>+</p></button>
            </div>
        </div>
      </div>
    )
  }
  Add = () => {
    if (document.getElementById(this.props.id).value != '') {
      window.localStorage.setItem(this.props.text, document.getElementById(this.props.id).value);
      document.getElementById(this.props.id).value =  '';
      document.getElementById(this.props.id).classList.remove('success');
      
      let sum = 0;
      for(let i = 0; i < window.localStorage.length; i++) {
        sum += Number(window.localStorage.getItem(window.localStorage.key(i)));
      }
      document.getElementById('sum').textContent = sum;
    } 
  }
  Minus() {
    let str ='', start = ''; start = document.getElementById(this.props.id).value;
    for (let i =0; i < start.length - 1; i++) {
      str+=start[i];
    }
    return str;
  };
  Input = () => {

    let str = ''; str = document.getElementById(this.props.id).value;

    if (str[str.length - 1] >=0 && str[str.length - 1] <=9)
    {}
    else {

      document.getElementById(this.props.id).value = this.Minus();
      str = this.Minus();
    }

    if (str.length == 0) {
      document.getElementById(this.props.id).classList.remove('success');
    }
    else {
      document.getElementById(this.props.id).classList.add('success');
    }
    
  }
  
}

export default ItemTrans;