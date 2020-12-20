import React from 'react';
import { Link } from 'react-router-dom';
class Chat extends React.Component {

    componentDidMount() {
        this.props.enterChatroom();
        console.log(this.props.chatReducer.chatList);
    }


    render() {
        return (
            <>
                <div>

                </div>
                <div>
                    <input form="text"></input>
                    <button onClick={this.props.sendChat()}>채팅 보내기</button>
                </div>
                <Link to="/">Go back Home</Link>
            </>
        )
    }
}

export default Chat;