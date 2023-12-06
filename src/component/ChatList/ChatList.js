import React from 'react'
import Header from '../Header/Header'
import SingleChat from '../SingleChat/SingleChat'

function ChatList() {
  var totalChats = 10
  return (
    <div style={{backgroundColor: '#0a1014', height: '700px', width: '400px'}}>
        {/* <Header /> */}
        <div style={{overflowY: 'scroll', height: '700px'}}>
          <SingleChat />
          <SingleChat />
          <SingleChat />
          <SingleChat />
          <SingleChat />
          <SingleChat />
          <SingleChat />
          <SingleChat />
          <SingleChat />
          <SingleChat />
          <SingleChat />
          <SingleChat />
          <SingleChat />
          <SingleChat />
          <SingleChat />
          <SingleChat />
          <SingleChat />
          <SingleChat />
          <SingleChat />
          <SingleChat />
          <SingleChat />
        </div>
    </div>
  )
}

export default ChatList