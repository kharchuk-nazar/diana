import React from 'react';
import Aside from '../components/aside';
import Section from '../components/section';

import './index.css'

const ParentsPage = () => {
    return (
        <div className='container'>
        <div>
        <Aside title='Оголошення' content="Увага! 30 травня відбудуться батьківські збори у Google Meet. Посилання розташованне в електроній пошті."/>
                <Aside title='Новини' content="Навчальний рік майже закінчився. Свято останнього дзвоника було скасовано"/>
        </div>
        <Section title='Інформація на підтримку батькам і дітям'>
            <h4>
            Кібербулінг – що це та як це зупинити?
            </h4>
            <div className='content_text'>
Що таке кібербулінг? <br/>
Кібербулінг – це булінг із застосуванням цифрових технологій. Він може відбуватися в соціальних мережах, платформах обміну повідомленнями (месенджерах), ігрових платформах та мобільних телефонах. Це неодноразова поведінка, спрямована на залякування, провокування гніву чи приниження тих, проти кого він спрямований. Приклади включають:
<br/><br/>
поширення брехні про когось або розміщення фотографій, які компрометують когось, у соціальних мережах;<br/>
надсилання повідомлень або погроз, які ображають когось або можуть завдати комусь шкоди, через платформи обміну повідомленнями;<br/>
видання себе за когось іншого/іншу і надсилання повідомлень іншим людям від його/її імені.<br/>
Особистий булінг та кібербулінг часто пов’язані між собою. Але кібербулінг залишає цифровий слід – записи, який може слугувати доказами, що дозволять зупинити цькування.
            </div>
            <div className='parents_img'>
                <img src='/img/04.jpg'/>
                <img src='/img/05.jpg'/>
                <img src='/img/06.jpg'/>
            </div>
        </Section>
    </div>
    ); 
}

export default ParentsPage