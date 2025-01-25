import ReactDOM from 'react-dom';
import Card from '../src/components/Card';


const cardsInfo = [
    {
        name: 'Adriana Feijó',
        state: 'CE',
        imageUrl: '../public/foto.png',
        description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        linkedinUrl: '',
        githubUrl: '',
        externalUrl: ''
    },
    {
        name: 'Adriana Feijó',
        state: 'CE',
        imageUrl: '../public/foto.png',
        description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        linkedinUrl: '',
        githubUrl: '',
        externalUrl: ''
    },
    {
        name: 'Adriana Feijó',
        state: 'CE',
        imageUrl: '../public/foto.png',
        description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        linkedinUrl: '',
        githubUrl: '',
        externalUrl: ''
    },
    {
        name: 'Adriana Feijó',
        state: 'CE',
        imageUrl: '../public/foto.png',
        description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        linkedinUrl: '',
        githubUrl: '',
        externalUrl: ''
    },
    {
        name: 'Adriana Feijó',
        state: 'CE',
        imageUrl: '../public/foto.png',
        description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        linkedinUrl: '',
        githubUrl: '',
        externalUrl: ''
    },
    {
        name: 'Adriana Feijó',
        state: 'CE',
        imageUrl: '../public/foto.png',
        description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        linkedinUrl: '',
        githubUrl: '',
        externalUrl: ''
    },
]

const rootElement = document.getElementById('root');
if (rootElement) {
    ReactDOM.render(
    <div>
    {cardsInfo.map((cardInfo, index) => (
            <Card key={index} {...cardInfo} />
        ))}
    </div>,
    rootElement);
}