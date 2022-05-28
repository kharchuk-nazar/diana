import React from 'react';

const StatementTable = ({data, titles}) => {

    const tableHeaders = titles.map((el, idx) => {
        return (
            <th key={`${el}-${idx}`}>
                {el}
            </th>
        )
    })

    const tableBody = data.map((el, idx) => {

        const bodyData = []

        for (const k in el) {
            if (!k.includes('id')) {
                if (k === "parents") {
                    const parents = el.parents.map((par, i) => {
                        if (el.parents.length-1 === i) {
                            return <span key={par}>{par}</span>
                        }
                        return (
                            <span key={par}>
                                {par}
                                <br/>
                            </span>
                        )
                    })
                    bodyData.push(<td key={k}>{parents}</td>)
                    continue
                }
                bodyData.push(
                    <td key={k}>{el[k]}</td>
                )
            }
        }

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
              {tableHeaders}
          </tr>
        </thead>

        <tbody>
          {tableBody}
        </tbody>
      </table>
    ); 
}

export default StatementTable