import React from 'react';
import '../App.css';

class Item extends React.Component {
  render() {
    return (
      <div className='ItemCell' onClick={this.Add}>
        <div className='PhotoItem'>
            <img src={this.props.img} height='100%' alt={this.props.alt}/>
        </div>
        <div className='TextItem'>
            <p>{this.props.text}</p>
            <div className='Price'>
                <p>{this.props.price} дублонов</p>
            </div>
        </div>
      </div>
    )
  }
  Add = () => {

    let sum = 0, pow = 0;
    let price = String(this.props.price);
    for (let i = price.length - 1; i >= 0; i--) {
      if ((price[i] < 0 || price[i] > 9) || price[i] === '`') {
        continue;
      }
      sum += price[i] * (Math.pow(10, pow));
      pow++;
    }
    let count = window.localStorage.length;
    window.localStorage.setItem(this.props.text, sum);
    if (count === window.localStorage.length)
      return;
    document.getElementById('sum').textContent = Number(document.getElementById('sum').textContent) + sum;
   
  }
}

export default Item;
