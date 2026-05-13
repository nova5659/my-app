import React from 'react';

function OrderUp({ order }) {
  return (
    <div style={{ marginBottom: '20px' }}>
      {order === 1 ? (
        <div>
          <h3>일반 세트 :</h3>
          <p>치즈버거 1개 / 콜라 1개 + (이벤트) 프렌치 프라이 2개</p>
        </div>
      ) : order === 2 ? (
        <div>
          <h3>패밀리 세트 :</h3>
          <p>치즈버거 2개 / 콜라 2개 + (이벤트) 프렌치 프라이 4개</p>
        </div>
      ) : null}
    </div>  
  );
}

function Kiosk() {
  return (
    <div style={{ 
      backgroundColor: 'black',     
      color: 'white', 
      padding: '30px', 
      textAlign: 'center',
      borderRadius: '10px',
      width: 'fit-content',
      margin: '0 auto'
    }}>
      <h2>치즈버거 세트 메뉴를 주문하세요.</h2>
      
      <OrderUp order={1} />
      <OrderUp order={2} />
      
      <p style={{ marginTop: '20px' }}>이용해 주셔서 감사합니다.</p>
    </div>
  );
}

export default function App() {
  return (
    <div style={{ marginTop: '50px' }}>
      <Kiosk />
    </div>
  );
}