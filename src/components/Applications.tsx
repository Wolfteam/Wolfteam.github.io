import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import GithubApp from '../models/githubapp.model';
import Application from './Application';

//Assets
import MiraiNotes from '../assets/imgs/mirainotes.png';
import TibiaInfo from '../assets/imgs/tibia_info.png';
import TimeIt from '../assets/imgs/timeit.png';
import CastIt from '../assets/imgs/casit.png';
import MyExpenses from '../assets/imgs/myexpenses.png';
import Shiori from '../assets/imgs/Shiori.png';

const apps: GithubApp[] = [
    {
        name: 'Mirai Notes',
        description: 'A uwp / android notes app with Google Task sync. and can be also used offline..',
        img: MiraiNotes,
        link: 'https://github.com/Wolfteam/MiraiNotes'
    },
    {
        name: 'My Expenses',
        description: 'An Android app that helps you to keep track of your expenses',
        img: MyExpenses,
        link: 'https://github.com/Wolfteam/MyExpenses'
    },
    {
        name: 'CastIt',
        description: 'WPF casting app made for my personal use',
        img: CastIt,
        link: 'https://github.com/Wolfteam/CastIt'
    },
    {
        name: 'TibiaInfo',
        description: 'A simple Tibia web app that provides data in a convenient way.',
        img: TibiaInfo,
        link: 'https://github.com/Wolfteam/TibiaInfo'
    },
    {
        name: 'TimeIt',
        description: 'A timer app made with Xamarin.Forms (Android & UWP).',
        img: TimeIt,
        link: 'https://github.com/Wolfteam/TimeIt'
    },
    {
        name: 'Shiori',
        description: 'A Genshin Impact database kinda app',
        img: Shiori,
        link: 'https://github.com/Wolfteam/Shiori'
    }
];

function Applications() {
    const elements = apps.map(app => {
        return <Application key={app.name} description={app.description} img={app.img} name={app.name} link={app.link} />
    });

    return <section id="apps" className="download-section content-section text-center">
        <Container>
            <Row>
                <Col md={12}>
                    <h2>Applications</h2>
                </Col>
            </Row>
            <Row className="mb-2 align-items-center">
                {elements}
            </Row>
        </Container>
    </section>;
}

export default Applications;