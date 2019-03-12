import { speakers } from './speakers';
const speakersMap = new Map();
speakers.forEach((speaker, id) => {
    speakersMap.set(id, Object.assign({ speaker: speaker.name }, speaker.talk, speaker.picture, { id }));
});

export const talks = [
    {
        time: '9h',
        talk: {
            title: 'Credenciamento',
            description: '',
            // tslint:disable-next-line:max-line-length
            url: 'https://images.unsplash.com/photo-1512486754243-f38ddb8e53b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
            alt: 'Foto de um cacto a direita, um café, um celular e uma blusa'
        }
    },
    {
        time: '10h',
        talk: speakersMap.get(1)
    },
    {
        time: '11h',
        talk: speakersMap.get(2)
    },
    {
        time: '12h',
        talk: {
            title: 'Almoço',
            description: 'Hora da comida',
            // tslint:disable-next-line:max-line-length
            url: 'https://images.unsplash.com/photo-1485451456034-3f9391c6f769?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
            alt: 'Foto de um sanduíche'
        }
    },
    {
        time: '13h',
        talk: speakersMap.get(5)
    },
    {
        time: '14h',
        talk: speakersMap.get(0)
    },
    {
        time: '14h30min',
        talk: speakersMap.get(6)
    },
    {
        time: '15h',
        talk: {
            speaker: 'Fernando Silva e Thiago Guirotto',
            title: 'Autenticando aplicações no Azure AD',
            description: `Nesta palestra, será demonstrado como integrar a autenticação de aplicações web no Azure AD,
            utilizando protocolos de autenticação moderna como SAML, Oauth2 e OIDC.`,
            url: 'https://images.unsplash.com/photo-1484043937869-a468066a4fbd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            alt: 'Correntes e um cadeado'
        }
    },
    {
        time: '15h50min',
        talk: {
            title: 'Encerramento',
            description: 'Agradecimentos, sorteios e distribuição de brindes',
            // tslint:disable-next-line:max-line-length
            url: 'https://images.unsplash.com/photo-1499744937866-d7e566a20a61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
            alt: 'Café e um cartão escrito "Thank you"'
        }
    },
];
