import './App.css';

function App() {
  
  
  return (
    <main>
      <h1>100<span>.00</span></h1>
      <form>
        <div className='basic'>
          <input type='text' placeholder='Purchased Item'></input>
          <input type='datetime-local'></input>
        </div>
        <div>
          <input type='text' placeholder='Add a Note'></input>
        </div>
        <button>Add New Transaction</button>
      </form>
      <div className='transactions'>
        <div className='transaction'>
          <div className='left'>
            <div className='name'>Name</div>
            <div className='description'>Description</div>
            </div>
          <div className='right'>
            <div className='pos-price'>$100</div>
            <div className='date'>10/9/2001</div>
          </div>
        </div>
        <div className='transaction'>
          <div className='left'>
            <div className='name'>Name</div>
            <div className='description'>Description</div>
            </div>
          <div className='right'>
            <div className='neg-price'>$100</div>
            <div className='date'>10/9/2001</div>
          </div>
        </div>
        <div className='transaction'>
          <div className='left'>
            <div className='name'>Name</div>
            <div className='description'>Description</div>
            </div>
          <div className='right'>
            <div className='price'>$100</div>
            <div className='date'>10/9/2001</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
