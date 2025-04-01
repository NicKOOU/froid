import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3001', {
    transports: ['websocket'],
    reconnection: true,
    reconnectionAttempts: 5,
});

function TeamDashboard() {
    const [clients, setClients] = useState([]); // Liste des clients connectés
    const [selectedClient, setSelectedClient] = useState(null); // Client sélectionné
    const [allMessages, setAllMessages] = useState([]); // Tous les messages reçus
    const [response, setResponse] = useState(''); // Réponse de l’admin

    useEffect(() => {
        socket.on('connect', () => {
            console.log('TeamDashboard connecté au serveur:', socket.id);
            socket.emit('adminConnected'); // Notifie les clients qu’un admin est connecté
        });

        socket.on('notifyTeam', (data) => {
            console.log('Message reçu pour l’équipe:', data);
            // Ajoute le client à la liste s’il n’existe pas
            setClients((prev) => {
                const exists = prev.some((client) => client.id === data.clientId);
                if (!exists) {
                    return [...prev, { id: data.clientId, name: `Client ${data.clientId.slice(0, 5)}` }];
                }
                return prev;
            });
            // Stocke tous les messages avec leur clientId
            setAllMessages((prev) => [...prev, data]);
        });

        socket.on('connect_error', (error) => {
            console.error('Erreur de connexion TeamDashboard:', error);
        });

        return () => {
            socket.off('connect');
            socket.off('notifyTeam');
            socket.off('connect_error');
        };
    }, []);

    const sendResponse = () => {
        if (response.trim() && selectedClient) {
            console.log('Envoi de la réponse au client', selectedClient, ':', response);
            socket.emit('teamResponse', { clientId: selectedClient, message: response });
            setResponse('');
        } else {
            console.log('Aucun client sélectionné ou réponse vide');
        }
    };

    // Filtrer les messages pour le client sélectionné
    const filteredMessages = selectedClient
        ? allMessages.filter((msg) => msg.clientId === selectedClient)
        : [];

    return (
        <div className="team-dashboard">
            <h2>Notifications de l'équipe</h2>
            <div className="client-selector">
                <label>Choisir un client :</label>
                <select
                    value={selectedClient || ''}
                    onChange={(e) => setSelectedClient(e.target.value || null)}
                >
                    <option value="">Sélectionnez un client</option>
                    {clients.map((client) => (
                        <option key={client.id} value={client.id}>
                            {client.name}
                        </option>
                    ))}
                </select>
            </div>
            {selectedClient ? (
                <>
                    <div className="messages">
                        {filteredMessages.length > 0 ? (
                            filteredMessages.map((msg, index) => (
                                <div key={index} className="message">
                                    <p>{msg.message} - {new Date(msg.timestamp).toLocaleTimeString()}</p>
                                </div>
                            ))
                        ) : (
                            <p>Aucun message pour ce client pour l’instant.</p>
                        )}
                    </div>
                    <textarea
                        value={response}
                        onChange={(e) => setResponse(e.target.value)}
                        placeholder="Répondez ici..."
                    />
                    <button onClick={sendResponse}>Envoyer</button>
                </>
            ) : (
                <p>Veuillez sélectionner un client pour voir ses messages.</p>
            )}
        </div>
    );
}

export default TeamDashboard;