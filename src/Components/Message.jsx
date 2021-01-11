const Message = (props) => {
    return (
        <div className="message">
            <div className='ava'></div>
            <div className='name'>{props.name}</div>
            <div className='messageBody'>{props.body}</div>
            <div>
                <input className='answerBody' placeholder='Введите сообщение' />
                <button className='postButton'>Отправить сообщение</button>
            </div>
        </div>
    );
}

export default Message;
