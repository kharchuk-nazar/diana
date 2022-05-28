import React from 'react';
import Aside from '../components/aside';
import Section from '../components/section';

import './index.css'

const SchoolLifePage = () => {
    return (
        <div className='container'>
        <div>
                <Aside title='Оголошення' content="Увага! 30 травня відбудуться батьківські збори у Google Meet. Посилання розташованне в електроній пошті."/>
                <Aside title='Новини' content="Навчальний рік майже закінчився. Свято останнього дзвоника було скасовано"/>
        </div>
        <Section title=''>
            <h4>
            ДЕНЬ УКРАЇНСЬКОЇ МОВИ І ПИСЕМНОСТІ
            </h4>
            <br/>
            <div>
                <img src='/img/07.jpg'/>
            </div>
            <div className='content_text'>
            День української мови та писемності свято розвитку української мови, яке щороку відзначається в Україні 9 листопада. За православним календарем день вшанування пам'яті Нестора літописця -послідовника творців слов'янської писемності Кирила і Мефонія . Свято запроваджене призедентом Л.Кучмою у 1997р. У цей день у нашій школі відбулося щорічна акція "Радіодиктант національної єдності", у якій взяли участь учнів 1-4 класу, та було проведено літературні читання з нагоди Дня української мови і писемності.  
            </div>
            <br/>
            <div className='school_life_img'>
                <img src='/img/08.jpg'/>
                <img src='/img/09.jpg'/>
            </div>
        </Section>
    </div>
    ); 
}

export default SchoolLifePage