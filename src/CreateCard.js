
import React from 'react';

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button,
    Container, Row, Col
} from 'reactstrap'



const CreateCard = (store, button) => {
    
    return (
        <Card>
            <Container>
                <Row>
                    <Col xs="6">
                        <CardBody>
                            <CardTitle>{store.title}</CardTitle>

                            <CardText>{store.description}</CardText>
                            <Button id="name" onClick={() => button()} >Edit</Button>
                        </CardBody>
                    </Col>
                    <Col xs="6">
                        <CardImg top width="100%" src={store.media} alt="Card image cap" />
                    </Col>
                </Row>
            </Container>
        </Card>
    )
}

export default CreateCard
