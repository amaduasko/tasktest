import React from 'react'
import { Card, CardBody, CardTitle, CardText, Col } from 'reactstrap'

const CardComponent = ({ title, body, name }) => (
    <Col lg={3} md={4} sm={6} xs={12} className='pt-2 pb-2'>
        <Card>
            <CardBody>
                <CardTitle className='text-primary font-weight-bold'>
                    {title}
                </CardTitle>
                <CardText>{body}</CardText>
                <CardText>
                    <small className='text-muted'>{name}</small>
                </CardText>
            </CardBody>
        </Card>
    </Col>
)

export default CardComponent
