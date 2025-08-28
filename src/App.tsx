
import { useState } from 'react';
import './App.css'
import ProductFields from './components/productForm/ProductField'



function App() {
  const [abal, setAball] = useState(false);

  // const LoginHandler = () => {
  //   setAball(true);
  // };

  // const logoutHandler = () => {
  //   setAball(false);
  // };
  const LoginHandler1 = () => {
    setAball(true);
  };

  const logoutHandler1 = () => {
    setAball(false);
  };

  if (abal) {
    return (
      <>
        {/* <button onClick={logoutHandler}>Выход</button> */}
        <form className="productForm">
         <div className="productForm_inputs">
        <div className="productForm_field">
            <ProductFields 
              labelText='Заголовок' 
              placeholder="Напишите название расхода" 
              id="zagolovok" 
              type='text'
            />
  </div>
     <div className="productForm_field">
            <ProductFields 
              labelText='Цена' 
              placeholder="Напишите цену расхода" 
              id="cena" 
              type='number'
            />
</div>
 <div className="productForm_field">
            <ProductFields
              labelText='Дата'
              placeholder="дд.мм.гггг"
              type='date' 
              id='date'
            />
</div>
            <div className='productForm_button' onClick={logoutHandler1}>
              <button className='knopca' type="button">
                Отмена
              </button>
              <button className='submit-btn' type="submit" >
                Добавить расходы
              </button>
            </div>
          </div>
        </form>
      </>
    )
  }
  return (
    <div className="app-container">
    <button id='dobavit' className='sumbit-btn' onClick={LoginHandler1}>
      Добавить расходы
    </button>
     </div> 
  )
  // return <button onClick={LoginHandler}>Войти</button>
}

export default App;

