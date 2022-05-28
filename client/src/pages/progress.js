import React, {useState, useEffect} from 'react';
import StatementTable from '../components/statement-table';
import ProgressTable from '../components/progress-table';

const ProgressPage = () => {

    const userId = JSON.parse(localStorage.getItem('adminData')).userId;

    const [statementData, setStatementData] = useState(null);
    const [progressData, setProgressData] = useState(null);



    useEffect(() => {
        fetch(`/api/school/statement/${userId}`)
        .then(res => res.json())
        .then(json => {
            setStatementData(json.data)
        })

        fetch(`/api/school/progress/${userId}`)
        .then(res => res.json())
        .then(json => {
            setProgressData(json.data)
        })
    }, [])

    

    if (!progressData || !statementData) {
        return(
            <p>
                loading
            </p>
        )
    }

    const st = statementData.length ? <StatementTable data={statementData} titles={["№","Номер", "ПІБ", "Стать", "Дата народження", "ПІБ батьків", "Телефон", "Адреса", ""]} /> : null

    return (
        <div className='my_table'>
            {st}
            <h3>Клас {progressData.classroom}</h3>
            <h5>{progressData.teacher_name}</h5>
            <ProgressTable data={progressData}/>
        </div>
    ); 
}

export default ProgressPage