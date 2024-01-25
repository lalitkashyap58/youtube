import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Message from './Message';
import { addMessage } from '../store/ChatSlice';
import { randomNameGenerator } from '../utils/helper';

const LiveChat = () => {
    const dispatch = useDispatch();
    const [liveChat, setLiveChat] = useState("");

    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log("Api polling");
            dispatch(addMessage({ name: randomNameGenerator(), message: "Hello Doston toh kaise ho aap sab, kasukabe defenese group aapki sath hai" }));
        }, 2000);

        return () => clearInterval(intervalId);
    }, [dispatch]);

    const chatMessages = useSelector(store => store.chat.message);

    const handleSendMessage = () => {
        if (liveChat.trim() !== "") {
            dispatch(addMessage({ name: "developer", message: liveChat }));
            setLiveChat(""); // Clear the input field after sending the message
        }
    };

    return !chatMessages ? (
        <div className='font-bold'>No one is chatting live</div>
    ) : (
        <>
            <div className='border w-full h-full border-black overflow-y-auto flex flex-col-reverse'>
                {chatMessages.map((c, index) => (
                    <Message key={index} name={c.name} message={c.message} />
                ))}
            </div>
            <div className='w-full border h-screen -my-10'>
                <div className='flex'>
                    <input
                        type="text"
                        className='w-3/4 p-2'
                        placeholder='chat here'
                        value={liveChat}
                        onChange={(e) => setLiveChat(e.target.value)}
                    />
                    <button
                        className='font-semibold text-white p-2 w-1/4 bg-red-800'
                        onClick={handleSendMessage}
                    >
                        Submit✅
                    </button>
                </div>
            </div>
        </>
    );
};

export default LiveChat;
