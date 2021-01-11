import Message from './Message';

const Messages = (props) => {
    return (
        <div className="messages">
            <Message name='Dima' body='Hello, motherf*cker' />
            <Message name='Alena' body='Hello, mama' />
        </div>
    );
}

export default Messages;
