import './App.css';
import { useState } from 'react';
import ParentCallbackRefInput from './components/CallbackRefTextInput/ParentCallbackRefTextInput';
import Category from './components/Category/Category';
import Counter from './components/Counter/Counter';
import ParentForwardingRefButton from './components/ForwardingRef/ParentForwardingRefButton';
import Cat from './components/MouseTracker/Cat';
import MouseTracker from './components/MouseTracker/MouseTracker';
import MouseWithTracker from './components/MouseTracker/MouseWithCat';
import Posts from './components/Posts/Posts';
import ParentRefTextInput from './components/RefTextInput/ParentRefTextInput';
import Sidebar from './components/Sidebar/Sidebar';
import TableFragment from './components/TableFragment/TableFragment';
import UserPropTypes from './components/UserPropTypes/UserPropTypes';

function App() {
  const [showCounter, setShowCounter] = useState(true);

  let userData = {
    name: 'Shubhojit',
    greet: function () {
      return `Hello ${this.name}`;
    },
  };

  let nav = (
    <div>
      <a href="#">Shubhojit Web Dev</a>
      <div>{userData.greet()}</div>
    </div>
  );
  function toggleComponentHandler(e) {
    e.preventDefault();
    setShowCounter(!showCounter);
  }
  
  return (
    <div className='container mx-auto'>
      <div>
        <button
          className='bg-green-600 text-white px-3 py-1 rounded-3xl'
          onClick={toggleComponentHandler.bind(this)}
        >
          Toggle component</button>
      </div>
      {showCounter && <Counter/>}
    </div>
    // <div className='container mx-auto'>
    //   <UserPropTypes/>
    // </div>
    // <div className='container mx-auto'>
    //   <Cat/>
    // </div>
    // <div className="container mx-auto">
    //   <div className='flex'>
    //     <div className='w-1/5'>
    //       <Sidebar name={nav} />
    //     </div>
    //     <div className='w-4/5'>
    //       <div>
    //         <TableFragment/>
    //       </div>
    //       <div>
    //         <ParentForwardingRefButton/>
    //       </div>
    //       <div>
    //         <Category name='category'/>
    //       </div>
    //       <div>
    //         <ParentRefTextInput/>
    //       </div>
    //       <div>
    //         <ParentCallbackRefInput/>
    //       </div>
    //       <div>
    //         <Posts />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default App;
