import React from 'react';
import {Link} from 'react-router-dom'
import { Card, Button, CardTitle, CardText, Row, Col, CardImg } from 'reactstrap';
import bedroom from '../assets/bedroom.jpg'
import living from '../assets/livingroom.jpg'
import arrow from '../assets/arrow.jpg'
import coin from '../assets/coin.jpg'
import opt from '../assets/opt.png'
import airbnb from '../assets/airbnb.png'
import styled from "styled-components"

const Div = styled.div`
    width: 90%
`



const Dashboard = (props) => {
  return (
    <Div>
      <Row>
      <Col sx="3">
        <CardTitle>Welcome</CardTitle>
        <Button>Log Out</Button>
        <CardImg src={airbnb} alt="Air bnb logo" />
        </Col>
        <Col sx="3">
        <CardImg top width="100%" src={bedroom} alt="bedroom" />
          <Card body>
            <CardTitle>My Properties</CardTitle>
            <CardText>Manage your propties.</CardText>
            <Button ><Link to="/manage">My Properties</Link></Button>
          </Card>
        </Col>
        <Col sx="3">
        <CardImg top width="100%" src={living} alt="Card image cap" />
          <Card body>
            <CardTitle>Create a New Listing</CardTitle>
            <CardText>List a new propety.</CardText>
            <Button><Link to ="/create">New Listing</Link></Button>
          </Card>
        </Col>
        
      </Row>
    </Div>
  );
};

export default Dashboard;