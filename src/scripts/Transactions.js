import React from 'react';
import '../App.css';
import '../index.css'
import ItemTrans from '../scripts/ItemTrans';
import Toolbar from '../scripts/Toolbar';
class Transactions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {sum :0}
  }
  render() {
    return (
        <div className='All'>
        <Toolbar/>
        <div className='Background'>
          <div className='Prevu'>
            <h1>Переводы</h1>
          </div>
          <div className='MainInfo'>
            <div className='Items'>
              <ItemTrans text='Перевод между банком' price='' img='/img/inside.png' alt='Банк' id='1'/>
              <ItemTrans text='Перевод по СБП' price='' img='/img/xz.png' alt='СБП' id='2'/>
              <ItemTrans text='Перевод по номеру карты' price='' img='/img/card.png' alt='Карта' id='3'/>
            </div>
          </div>
        </div>
      </div>
    )
    }
    componentDidMount() {
    this.sum = 0;
    for(let i = 0; i < window.localStorage.length; i++) {
      this.sum += Number(window.localStorage.getItem(window.localStorage.key(i)));
    }
    document.getElementById('sum').textContent = this.sum;
  }
}
export default Transactions;
