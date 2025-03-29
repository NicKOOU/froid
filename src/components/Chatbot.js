import React, { useState, useEffect } from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import io from 'socket.io-client';
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';

const socket = io('http://localhost:3001', {
    transports: ['websocket'],
    reconnection: true,
    reconnectionAttempts: 5,
});

function ChatbotComponent() {
    const [isOpen, setIsOpen] = useState(false);
    const [isTeamNotified, setIsTeamNotified] = useState(false);
    const [adminConnected, setAdminConnected] = useState(false);
    const [chatMessages, setChatMessages] = useState([
        { id: 1, message: '您好！欢迎体验我们的冷库助手，有什么我可以帮您的吗？', type: 'bot' },
    ]);

    useEffect(() => {
        socket.on('connect', () => {
            console.log('Chatbot connecté au serveur:', socket.id);
        });

        socket.on('adminConnected', () => {
            console.log('Admin connecté');
            setAdminConnected(true);
            setChatMessages((prev) => [
                ...prev,
                { id: Date.now(), message: '团队成员已连接，将为您提供人工服务！', type: 'bot' },
            ]);
        });

        socket.on('teamResponse', (response) => {
            console.log('Réponse de l’équipe reçue:', response);
            setChatMessages((prev) => [
                ...prev,
                { id: Date.now(), message: response, type: 'bot' },
            ]);
        });

        socket.on('connect_error', (error) => {
            console.error('Erreur de connexion Chatbot:', error);
        });

        return () => {
            socket.off('connect');
            socket.off('adminConnected');
            socket.off('teamResponse');
            socket.off('connect_error');
        };
    }, []);

    const config = {
        initialMessages: chatMessages,
        botName: '冷库助手',
        customStyles: {
            botMessageBox: { backgroundColor: '#40C4FF' },
            chatButton: { backgroundColor: '#01579B' },
        },
    };

    const handleUserMessage = (message) => {
        console.log('Message utilisateur envoyé:', message); // Debug
        setChatMessages((prev) => [
            ...prev,
            { id: Date.now(), message, type: 'user' },
        ]);

        if (!isTeamNotified && !adminConnected) {
            console.log('Émission de chatMessage au serveur:', message, 'Client ID:', socket.id);
            socket.emit('chatMessage', { message, clientId: socket.id });
            setIsTeamNotified(true);

            setTimeout(() => {
                if (!adminConnected) {
                    console.log('Aucune réponse admin, réponse automatique');
                    setChatMessages((prev) => [
                        ...prev,
                        { id: Date.now(), message: '抱歉，我们的团队暂时忙碌，我来帮您解决问题吧！', type: 'bot' },
                    ]);
                }
            }, 10000);
        } else if (adminConnected) {
            console.log('Admin connecté, envoi direct au serveur:', message);
            socket.emit('chatMessage', { message, clientId: socket.id });
        }
    };

    return (
        <>
            <button className="chatbot-toggle" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? '关闭' : '💬'}
            </button>
            {isOpen && (
                <div className="chatbot-container">
                    <Chatbot
                        config={{ ...config, initialMessages: chatMessages }}
                        messageParser={MessageParser}
                        actionProvider={ActionProvider}
                        handleUserMessage={handleUserMessage}
                    />
                </div>
            )}
        </>
    );
}

export default ChatbotComponent;