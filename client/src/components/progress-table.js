import React from 'react';

const ProgressTable = ({data}) => {

    const tableHeaders = data.subjects.map((el, idx) => {
        return (
            <th key={`${el}-${idx}`}>
                {el.name}
            </th>
        )
    })

    const tableBody = data.students.map((el, idx) => {
        const bodyData = []
        bodyData.push(
            <td key={`-${idx}`}>{el.name}</td>
        );

        data.subjects.map((s, i) => {
            for (const mark of el.marks) {
                if (s.sub_id === mark.sub_id) {
                    bodyData.push(
                        <td key={`${mark.mark}-${i}`}>{mark.mark}</td>
                    );
                }
            }
        })

        return (
            <tr key={`${el}-${idx}`}>
                <td>{idx+1}</td>
                {bodyData}
            </tr>
        )
    })

    return (
        <table className='striped'>
        <thead>
          <tr>
              <th>№</th>
              <th>Учні</th>
              {tableHeaders}
          </tr>
        </thead>

        <tbody>
          {tableBody}
        </tbody>
      </table>
    ); 
}

export default ProgressTable