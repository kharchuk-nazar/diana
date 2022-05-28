import React, {useState} from "react";
import "./index.css"

const G = () => {

    const n = ["Галяновська Анна Іванівна", "Кушнір Олександр Сергійович", "Кушнір Володимир Сергійович", "Польгуль Богдан Ігорович", "Маринич Анна Петрівна"]
    const s = ["Українська мова і літературне навчання", "Англійська мова", "Математика", "Я досліджую світ (інтегрований курс)", "Інформатика", "Музичне мистецтво", "Образотворче мистецтво", "Фізкультура"]

    const onGen = async () => {
        const clr = {
            classroom: 4,
            teacher_id: 3,
            teacher_name: 'Лаба Світлана Анатоліївна',
            subjects: [],
            class_id: 3,
            students: []
        }
        for (let index = 0; index < n.length; index++) {
            let obj = {
                name: n[index],
                stud_id: index,
                marks: [], 
            }
            for (let i = 0; i < s.length; i++) {
                let mark;
                let sub_id = i;
                let num = Math.floor(Math.random() * 2);
                if (num === 0) {
                    mark = "добре"
                } else {
                    mark = "відмінно"
                }
                obj.marks.push({
                    sub_id,
                    mark
                })
            }
            clr.students.push(obj)
        }

        s.forEach((element, i) => {
            clr.subjects.push({
                name: element,
                sub_id: i
            })
        });

        const response = await fetch('/api/school/generate', {
            method: "POST",
            body: JSON.stringify(clr),
            headers: new Headers(
                {
                  "Content-Type": "application/json",
                  "Accept":"application/json"
                }
            ),
        })

        const data = await response.json()
    }
    return (
        <div>

            <button onClick={onGen}>go</button>
        </div>
    );
}

export default G