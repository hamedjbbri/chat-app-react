import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';

import './App.css';

const App =()=> {
    return (
        <ChatEngine 
            height="100vh"
            projectID= "4e86842d-6a07-4a6a-b06f-a14bd6121a58"
            userName = "hamed"           
            userSecret = "123123" 
            renderChatFeed= {(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}

export default App;