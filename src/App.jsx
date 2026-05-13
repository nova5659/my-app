import React from 'react';

function OrderUp({ order }) {
  return (
    <div style={{ marginBottom: '10px' }}>
      {order === 1 ? (
        <div>
          <h3 style={{ margin: '5px 0' }}>일반 세트 :</h3>
          <p style={{ margin: '5px 0' }}>치즈버거 1개 / 콜라 1개 + (이벤트) 프렌치 프라이 2개</p>
        </div>
      ) : order === 2 ? (
        <div>
          <h3 style={{ margin: '5px 0' }}>패밀리 세트 :</h3>
          <p style={{ margin: '5px 0' }}>치즈버거 2개 / 콜라 2개 + (이벤트) 프렌치 프라이 4개</p>
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
      padding: '40px', 
      textAlign: 'center',
      minWidth: '500px'
    }}>
      <h2 style={{ borderBottom: '1px solid #555', paddingBottom: '15px' }}>
        치즈버거 세트 메뉴를 주문하세요.
      </h2>
      
      <OrderUp order={1} />
      <OrderUp order={2} />
      
      <p style={{ marginTop: '20px', color: '#aaa' }}>이용해 주셔서 감사합니다.</p>
    </div>
  );
}

export default function App() {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '100vh',
      backgroundColor: '#222' 
    }}>
      <Kiosk />
    </div>
  );
}