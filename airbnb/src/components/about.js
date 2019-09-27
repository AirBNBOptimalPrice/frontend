import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import styled from "styled-components"

const Container = styled.div`
    width: 20%;
    margin: auto;
`
const Image = styled.img`
    width: 100%;
    height: 200px;
    margin: auto;
`

const About = (props) => {
  return (
    <Container>
    <div>
      <Card>
        <Image top width="100%" src="./images/jason.jpg"  alt="Jason Murphy" />
        <CardBody>
          <CardTitle>"Jason Murphy"</CardTitle>
          <CardSubtitle>Project Manager</CardSubtitle>
          <CardText>Project Lead</CardText>
          <Button a href= "https://github.com/biovir3">Github</Button>
        </CardBody>
      </Card>
    </div>

    <div>
      <Card>
        <Image top width="100%" src="./images/Russ.jpg"  alt="Russell Terry" />
        <CardBody>
          <CardTitle>"Russell Terry"</CardTitle>
          <CardSubtitle>WEB UI</CardSubtitle>
          <CardText>
            <ul >
                <li>Collaboratived and worked in a team environment.</li>
                <li>Created React components.</li>
                <li>Used events to add dynamic functionality to app.</li>
                <li>Implemented Post and Get requests using either Axios to display data from our Data Science Team.</li>
                <li> Designed, developed and intgreted Landing page.</li>
            </ul>
          </CardText>
          <Button a href= "https://github.com/Surfsol">Github</Button>
        </CardBody>
      </Card>
    </div>

    <div>
      <Card>
        <Image top width="100%" src="./images/Bradley.jpg"  alt="Bradley Peterson" />
        <CardBody>
          <CardTitle>"Bradley Peterson"</CardTitle>
          <CardSubtitle>>Web UI</CardSubtitle>
          <CardText>
            <ul >
                <li>Implemented crud functionality.</li>
                <li> Implemented User Registration and LogIn.</li>
                <li>Created React components.</li>
                <li>Used events to add dynamic functionality to app.</li>
                <li>Implemented Post and Get requests using either Axios to display data from our Data Science Team.</li>
            </ul>
          </CardText>
          <Button a href= "https://github.com/Boltsnut24">Github</Button>
        </CardBody>
      </Card>
    </div>

    <div>
      <Card>
        <Image top width="100%" src="./images/carlos.png"  alt="Carlos Hernandez" />
        <CardBody>
          <CardTitle>"Carlos Hernandez"</CardTitle>
          <CardSubtitle>Backend</CardSubtitle>
          <CardText>Backend</CardText>
          <Button a href= "https://github.com/ch04937">Github</Button>
        </CardBody>
      </Card>
    </div>

    <div>
      <Card>
        <Image top width="100%" src="./images/rich.jpg"  alt="Richard Tregaro" />
        <CardBody>
          <CardTitle>"Richard Tregaro"</CardTitle>
          <CardSubtitle>Data Science</CardSubtitle>
          <CardText>Price Predictor</CardText>
          <Button a href= "https://github.com/Rtrey29">Github</Button>
        </CardBody>
      </Card>
    </div>

    <div>
      <Card>
        <Image top width="100%" src="./images/Justin.png"  alt="Justin Hsieh" />
        <CardBody>
          <CardTitle>"Justin Hsieh"</CardTitle>
          <CardSubtitle>Data Science</CardSubtitle>
          <CardText></CardText>
          <Button a href= "https://github.com/justin-hsieh">Github</Button>
        </CardBody>
      </Card>
    </div>

    <div>
      <Card>
        <Image top width="100%" src="./images/elliot.jpg"  alt="Elliot Gunn" />
        <CardBody>
          <CardTitle>"Elliot Gunn"</CardTitle>
          <CardSubtitle>Data Science</CardSubtitle>
          <CardText>Flask App</CardText>
          <Button a href= "https://github.com/elliotgunn">Github</Button>
        </CardBody>
      </Card>
    </div>

    <div>
      <Card>
        <Image top width="100%" src="./images/chance.jpg"  alt="Chance Dare" />
        <CardBody>
          <CardTitle>"Chance Dare"</CardTitle>
          <CardSubtitle>Data Science</CardSubtitle>
          <CardText></CardText>
          <Button a href= "https://github.com/ChanceDurr">Github</Button>
        </CardBody>
      </Card>
    </div>
    </Container>
  );
};

export default About;