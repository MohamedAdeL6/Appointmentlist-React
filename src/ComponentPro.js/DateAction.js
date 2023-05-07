import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'

const DateAction = ({deleteData, viewData}) => {

  return (
    <div className='w-100'>
          <Row className='justify-content-center py-4 w-100'>
            <Col sm="8" className='d-flex justify-content-between'>
          <Button className='px-5' onClick={deleteData}> Delete Appointment  </Button>
          <Button className='px-5' onClick={viewData}>   Show Appointment </Button>
            </Col>
          </Row>

    </div>
  )
}

export default DateAction
