import React from 'react';
import Aside from '../components/aside';
import Section from '../components/section';

import './index.css'


const DocsPage = () => {
    return (
        <div className='container'>
        <div>
        <Aside title='Оголошення' content="Увага! 30 травня відбудуться батьківські збори у Google Meet. Посилання розташованне в електроній пошті."/>
                <Aside title='Новини' content="Навчальний рік майже закінчився. Свято останнього дзвоника було скасовано"/>
        </div>
        <Section title=''>
            <div className='docs'>
                <h5>Свято мами</h5>
                <div>
                    <img src='/img/10.jpg'/>
                </div>
                <h5>Свято Великодня і наші умілі ручки</h5>
                <div>
                    <img src='/img/11.jpg'/>
                    <img src='/img/12.jpg'/>
                    <img src='/img/13.jpg'/>
                    <img src='/img/14.jpg'/>
                </div>
                <h5>Наше шкільне життя повне екскурсій</h5>
                <div>
                    <img src='/img/15.jpg'/>
                    <img src='/img/16.jpg'/>
                    <img src='/img/17.jpg'/>
                </div>
            </div>
        </Section>
    </div>
    ); 
}

export default DocsPage