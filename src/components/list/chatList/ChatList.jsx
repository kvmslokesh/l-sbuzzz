import React, { useState } from 'react'
import "./chatList.css"
import AddUser from './addUser/AddUser';

const ChatList = () => {

  const [addMode, setAddMode] = useState(false);
  return (
    <div className='chatlist'>
      <div className="search">
        <div className="searchBar">
          <img src="search.png" alt="" />
          <input type="text" placeholder='Search' />
        </div>
        <div>
          <img src={addMode?"./minus.png":"./plus.png"} className='add' alt="" onClick={()=>setAddMode((prev)=>!prev)}/>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Lokesh KVMS</span>
          <p>Moshi Moshi</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Lokesh KVMS</span>
          <p>Moshi Moshi</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Lokesh KVMS</span>
          <p>Moshi Moshi</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Lokesh KVMS</span>
          <p>Moshi Moshi</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Lokesh KVMS</span>
          <p>Moshi Moshi</p>
        </div>
      </div>
      {addMode && <AddUser/>}
    </div>
  )
}

export default ChatList