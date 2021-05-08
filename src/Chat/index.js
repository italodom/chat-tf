import {useEffect, useState} from 'react';
import {Container, Wrapper} from "./style";
import {io} from 'socket.io-client'

const socket = io('/', {transports: ['websocket']});

const Chat = () => {
    const [mensagens, setMensagens] = useState([]);
    const [usuario, setUsuario] = useState('Italo');
    const [mensagem, setMensagem] = useState('');

    useEffect(() => {

        socket.on('previousMessages', (messages) => {
            setMensagens(messages);
        });

        socket.on('receivedMessage', (message) => {
            setMensagens([...mensagens, message]);
        });

    });

    const enviar = (event) => {
        if (event) {
            event.preventDefault();
        }

        const mensagemObject = {
            usuario: usuario,
            mensagem: mensagem
        };
        mensagens.push(mensagemObject);
        setMensagens(mensagens);
        setMensagem('');

        socket.emit('sendMessage', mensagemObject);
    };

    return (
        <Container>
            <Wrapper>
                <form onSubmit={enviar}>
                    <input value={usuario} onChange={(e) => setUsuario(e.target.value)} type="text" />
                    <div>
                        {mensagens.map((mensagem, key) => (
                            <div key={key}><strong>{mensagem.usuario}</strong> {mensagem.mensagem}</div>
                        ))}
                    </div>
                    <input type="text" value={mensagem} onChange={(e) => setMensagem(e.target.value)} />
                    <button onClick={enviar}>Enviar</button>
                </form>
            </Wrapper>
        </Container>
    );
};

export default Chat;
