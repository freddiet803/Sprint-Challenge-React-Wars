import React from 'react';

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
  Col
} from 'reactstrap';

export default function starWarsCard(props) {
  return (
    <Row>
      <Col sm={{ size: 6, offset: 3 }} md={{ size: 8, offset: 2 }}>
        <Card className='transCard'>
          <CardBody>
            <CardTitle>{props.person.name}</CardTitle>
            <CardSubtitle>
              {props.person.gender === 'n/a' ? 'Robot' : props.person.gender}
            </CardSubtitle>
            <CardText>
              I was born in {props.person.birth_year} and have{' '}
              {props.person.eye_color} eyes
            </CardText>
            <CardText>
              I have {props.person.starships.length} starships and{' '}
              {props.person.vehicles.length} vehicles and according to the scale
              i am {props.person.mass > 100 ? `fat` : 'skinny'}
            </CardText>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
}
