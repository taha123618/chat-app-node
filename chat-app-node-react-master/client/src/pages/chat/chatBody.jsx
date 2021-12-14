import React from 'react';
import Container from "./../../components/container"
import "../../styles/chatMainBody.scss"
import ChatUsers from './chatUser'
import AllUsers from './allUser'
import MessageBody from './messagesBody'
const ChatBody = ()=>{
    return(
        <Container>
        <div className="mainChatBody">
            <div className="user">
                <ChatUsers/>
            </div>
            <div className="message">
                <MessageBody/>
            </div>
            <div className="user">
                <AllUsers/>
            </div>
        </div>
        </Container>
    )
}
export default ChatBody