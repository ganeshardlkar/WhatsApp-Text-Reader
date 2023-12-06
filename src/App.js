import React, {useEffect, useState} from 'react'
import axios from 'axios';
import ChatList from './component/ChatList/ChatList'
import PersonalChat from './component/PersonalChat/PersonalChat'

function App() {
  const [messages, setMessages] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios.get('http://localhost:3001/');
        setMessages(resp.data)
        console.log("data =>", resp.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  console.log(messages)
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <ChatList />
      <PersonalChat messages={messages}/>
    </div>
  )
}

export default App