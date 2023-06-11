import React from 'react';
import Toolbar from './scripts/Toolbar';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className='All'>
        <Toolbar/>
        <div className='Background'>
          <div className='Prevu'>
            <h1>Оплата онлайн услуг</h1>
          </div>
          <div className='MainInfo'>
            <div className='Main'>
              <div className='MainPicture'>
                <img src='/img/money.jpg' width='100%' alt='Оплата'/>
              </div>
              <div className='MainText'>
                <p>ㅤВ наше время практически невозможно обойтись без такой замечательный вещи как интернет.</p>
                <p>ㅤ</p>
                <p>ㅤПомимо быстрой коммуникации и полной тотальной слежки за людьми, люди изобрели онлайн оплату услуг, которыми они ежедневно, и не только, пользуются.</p>
                <p>ㅤ</p>
                <p>ㅤЭто помогло вытеснить быстрорвущиеся, неудобные для транспортировки, бумажные купюры.</p>
              </div>
            </div>
            
            <div className='Main'>
              <div className='MainText'>
                <p>Самым главным в нашем деле является:</p>
                <p>ㅤ</p>
                <p>· Надежность</p>
                <p>· Безопасность</p>
                <p>· Скорость</p>
                <p>ㅤ</p>
                <p>Переходите по вкладкам "Платежи" и "Переводы" для оплаты своих нужд.</p>
              </div>
              <div className='MainPicture'>
                <img src='/img/oplata.jpg' width='100%' alt='Оплата'/>
              </div>
            </div>
          </div>
          <div className='FinalInfo'>
            <div className='Final'>
              Я считаю, это крутая лабораторная работа
            </div> 
           </div>
        </div>
      </div>
    )
  }
  componentDidMount() {
    let sum = 0;
    for(let i = 0; i < window.localStorage.length; i++) {
      sum += Number(window.localStorage.getItem(window.localStorage.key(i)));
    }
    document.getElementById('sum').textContent = sum;
  }
}

export default App;
