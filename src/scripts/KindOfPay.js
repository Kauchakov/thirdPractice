import React from 'react';

import '../App.css';

class KindOfPay extends React.Component {

  render() {
    return (
        <div className='UnitOfPay'>
          <a href='javascript:undefined' className='KindPay'>
            <div>
              {this.props.text}
            </div>
          </a>
        </div>
    )
  }
}

export default KindOfPay;
