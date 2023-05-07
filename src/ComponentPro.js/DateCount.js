import React from 'react'
import { Col, Row } from 'react-bootstrap';

 const DateCount = ({person}) => {
  return (
    <div className='w-100'>
        
        <Row className='justify-content-center '>
            <Col sm="8" className='fs-3 p-3 text-primary fw-bold text-center'>
          There is  ( {person.length} )  Appointment Today
            </Col>
          </Row>
    </div>
  )
}
export default DateCount;
