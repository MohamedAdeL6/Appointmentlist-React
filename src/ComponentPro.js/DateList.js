import React from 'react'
import { Col, Row } from 'react-bootstrap'

const DateList = ({ personData }) => {

  return (
    <div className='w-100'>
      <Row className='justify-content-center py-4 w-100 m-0'>
        <Col sm="8" >
          <div className='rectangle p-2 w-100'>
            <table className='w-100'>
              <thead>
                <th className='border border-2 p-4 text-danger fw-bold fs-5'> Image </th>
                <th className='border border-2 p-4 text-danger fw-bold fs-5'>  Name  </th>
                <th className='border border-2 p-4 text-danger fw-bold fs-5'>  Email </th>
                <th className='border border-2 p-4 text-danger fw-bold fs-5'>  Appointment </th>
              </thead>
              <tbody >
                {personData.length > 0 ? personData.map(person => {
                  return (
                    <tr key={person.id}>
                      <td className='border border-2 p-3 text-center'> <img src={person.image} alt='...' className='img' /> </td>
                      <td className='border border-2 p-3'> {person.name}  </td>
                      <td className='border border-2 p-3'> {person.email} </td>
                      <td className='border border-2 p-3'>  {person.date} </td>
                    </tr>
                  )
                }
                ) : <h1 className='massage'> There is no Appointment today</h1>
                }
              </tbody>
            </table>
            <div>

            </div>

          </div>
        </Col>
      </Row>

    </div>
  )
}

export default DateList
