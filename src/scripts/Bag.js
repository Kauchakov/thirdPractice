import React, { createElement } from 'react';
import '../App.css';
import Toolbar from '../scripts/Toolbar';

class Bag extends React.Component {
  render() {
    return (
      <div className='All'>
        <Toolbar/>
        <div className='Background'>
          <div className='Prevu'>
            <h1>Корзина</h1>
          </div>
          <div className='MainInfo'>
            <div className='BagStorage' onClick={this.onChan} id='1'>
                <div className='TitleBag'>
                    <div className='Naimenovanie'>Наименование</div>
                    <div className='Cena'>Цена</div>
                </div>
            </div>
            <button className='Oplata' onClick={this.Buy}>
                Оплата
            </button>
          </div>
        </div>
      </div>
    )
  }
  Buy() {
    alert("Ура! С покупкой!");
  }
  componentDidMount() {
    const divMain = document.getElementById('1');
    let sum = 0;
    
        for(let i = 0; i < window.localStorage.length; i++) {
            let div = document.createElement('a');
            div.id = window.localStorage.key(i); 
            div.className = 'erase'
            div.onclick = () => {
                document.getElementById('sum').textContent = Number(document.getElementById('sum').textContent) - Number(window.localStorage.getItem(div.id));
                document.getElementById('AllPrice').textContent = document.getElementById('sum').textContent;
                window.localStorage.removeItem(div.id)
                divMain.removeChild(div);
            }
            div.style.cssText = '  display: flex; position: relative; border: 1px solid #000000; text-align: left; font-size:medium; justify-content:space-between; user-select: none' 
            divMain.appendChild(div); 

            const divLeft = document.getElementById(window.localStorage.key(i));
            let div2 = document.createElement('div');
            div2.style.cssText = 'display: inline-flex; width: calc(75% -10px); padding: 5px'
            div2.innerHTML += window.localStorage.key(i);
            divLeft.appendChild(div2);

            const divRight = document.getElementById(window.localStorage.key(i));
            let div3 = document.createElement('div');
            div3.style.cssText = 'display: inline-flex; width: calc(25%-10px); align-items: right; padding:5px'
            div3.innerHTML += window.localStorage.getItem(window.localStorage.key(i));
            divRight.appendChild(div3);
            sum += Number(window.localStorage.getItem(window.localStorage.key(i)));
        }

        let div = document.createElement('div');
        div.id = 'Итоговая стоимость';
        div.style.cssText = 'display: flex; position: relative; border: 1px solid #000000; text-align: left; font-size:medium; justify-content:space-between; font-weight: 600'
        divMain.appendChild(div);

        const divLeft = document.getElementById('Итоговая стоимость');
        let div2 = document.createElement('div');
        div2.style.cssText = 'display: inline-flex; width: calc(75% -10px); padding: 5px'
        div2.innerHTML += 'Итоговая стоимость';
        divLeft.appendChild(div2);

        const divRight = document.getElementById('Итоговая стоимость');
        let div3 = document.createElement('div');
        div3.id = 'AllPrice';
        div3.style.cssText = 'display: inline-flex; width: calc(25%-10px); align-items: right; padding:5px'
        div3.innerHTML += sum;
        divRight.appendChild(div3);

        document.getElementById('sum').textContent = sum;
  }
}

export default Bag;
