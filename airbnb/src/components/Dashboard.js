import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col, CardImg } from 'reactstrap';
import bedroom from '../assets/bedroom.jpg'
import living from '../assets/livingroom.jpg'
import arrow from '../assets/arrow.jpg'
import coin from '../assets/coin.jpg'
import opt from '../assets/opt.png'
import airbnb from '../assets/airbnb.png'

const Dashboard = (props) => {
  return (
    <Row>
      <Col sx="3">
      <CardImg top width="100%" src={bedroom} alt="bedroom" />
        <Card body>
          <CardTitle>My Properties</CardTitle>
          <CardText>Manage your propties.</CardText>
          <Button>My Properties</Button>
        </Card>
      </Col>
      <Col sx="3">
      <CardImg top width="100%" src={living} alt="Card image cap" />
        <Card body>
          <CardTitle>Create a New Listing</CardTitle>
          <CardText>List a new propety.</CardText>
          <Button>New Listing</Button>
        </Card>
      </Col>
      <Col sx="3">
      <CardImg top width="100%" src={coin} alt="Card image cap" />
      
        <Card body>
        
          <CardText>Get the most money for your properties NOW!.</CardText>
          <Button><CardImg top width="100%" src={opt} alt="Card image cap" /></Button>
        </Card>
      </Col>
    </Row>
  );
};

export default Dashboard;