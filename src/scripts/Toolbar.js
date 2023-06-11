import React from 'react';
import '../App.css';
import ReactDOM from 'react-dom'
import '../index.css'
import App from '../App';
import Payment from '../scripts/Payment'
import Transactions from '../scripts/Transactions'
import Bag from '../scripts/Bag';
class Toolbar extends React.Component {
  render() {
    return (
        <div  className='toolBar'>
            <div className='icon'>
                <a href='javascript:undefined' onClick={this.Main}>
                    <img src="/img/pngwing.png" height='100%' alt="Иконка"/>
                </a>
            </div>
            <div className='navigation' onClick={this.Pay}>
                <a href='javascript:undefined' className="link">
                    Платежи
                </a>
            </div>
            <div className='navigation' onClick={this.Trans}>
                <a href='javascript:undefined' className="link">
                    Переводы
                </a>
            </div>

            <div className="bag" onClick={this.Bag}>
                <a href='javascript:undefined' id="sum" className='absolute' onClick={this.Bag}/>
                <a href='javascript:undefined'> 
                    <img src="/img/pngegg.png" height="100%" alt="Корзина"/>
                </a>
            </div>
        </div>
        
    )
  }
  Main() {
    ReactDOM.render(<App />, document.getElementById('root'));
  }
  Pay() {
    ReactDOM.render(<Payment />, document.getElementById('root'));
  }
  Trans() {//Ещё импорт нужен
    ReactDOM.render(<Transactions />, document.getElementById('root'));
  }
  Bag() {
    ReactDOM.render(<Bag />, document.getElementById('root'));
  }
}

export default Toolbar;
