import React from 'react';
import Toolbar from '../scripts/Toolbar';
import '../App.css';
import Item from '../scripts/Items';
class Payment extends React.Component {
  constructor(props) {
    super(props);
      this.state = {sum: 0}
    
  }
  render() {
    return (
      <div className='All'>
        <Toolbar/>
        <div className='Background'>
          <div className='Prevu'>
            <h1>Платежи</h1>
          </div>
          <div className='MainInfo'>
            <div className='Items'>
              <Item text='Коммунальные услуги' price='1`000'img='/img/jkh.png' alt='ЖКХ'/>
              <Item text='Мобильная связь' price='550' img='/img/mobile.png' alt='Мобильная связь'/>
              <Item text='Ипотека' price='30`000' img='/img/ipoteka.png' alt='Ипотека'/>
              <Item text='Транспорт' price='1`000' img ='/img/Transport.png' alt='Транспорт'/>
              <Item text='Образование' price='10`000' img='/img/Education.png' alt='Образование'/>
              <Item text='Здоровье' price='5`000' img='/img/Health.png' alt='Здоровье'/>
              <Item text='Государство' price='3`000' img='/img/Goverment.png' alt='Государство'/>
              <Item text='Полина' price='1' img='/img/Polina.jpg'/>
            </div>
          </div>
        </div>
      </div>
    )
  }
  componentDidMount() {
    for(let i = 0; i < window.localStorage.length; i++) {
      this.state.sum += Number(window.localStorage.getItem(window.localStorage.key(i)));
    }
    document.getElementById('sum').textContent = this.state.sum;
  }
  
}

export default Payment;
