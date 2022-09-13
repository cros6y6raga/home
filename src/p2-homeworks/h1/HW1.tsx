import React from 'react'
import Message from './Message';

const messageData = {
    avatar: 'https://upload.wikimedia.org/wikipedia/ru/thumb/5/54/Fakel_Voronezh_logo.svg/1200px-Fakel_Voronezh_logo.svg.png',
    name: 'Василенко',
    message: '- Пока парни',
    time: '22:00',
}

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            should work (должно работать)

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1