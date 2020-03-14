import React from 'react';
// import logo from './logo.svg';
import logo_cucumber from './Cucumber.png'
import logo_hive from './Hive.png'
import './App.css';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,
  Table,
  UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem,
  Container, Row, Col
} from 'reactstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log("pressed")
    document.getElementById("name").innerHTML = "Opened the editor"
  }
  handleDrop() {

    document.getElementById("drop").innerHTML = "open the editor"
  }
  render() {
    return (
      <div >


        <p>

          <Table>
            <tbody>
              <Card>
                <Container>
                  <Row>
                    <Col xs="6">
                      <CardBody>
                        <CardTitle>Weather Report</CardTitle>

                        <CardText>18:00 Low Visibility, heavy overcast with 30% chance of percipitation. Humudity 66%</CardText>
                        <Button id="name" onClick={this.handleClick} >Edit</Button>
                      </CardBody>
                    </Col>
                    <Col xs="6">
                      <CardImg top width="100%" src={logo_cucumber} width="120" height="90" alt="Card image cap" />
                    </Col>
                  </Row>
                </Container>


              </Card>
            </tbody>
            <Card>
              <Container>
                <Row>
                  <Col xs="6">

                    <CardBody>
                      <CardTitle>Obstacles & Fields of Fire</CardTitle>


                      <UncontrolledDropdown>
                        <DropdownToggle id="drop" caret>
                          Edit card
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem onClick={this.handleDrop}>Edit</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </CardBody>

                  </Col>
                  <Col xs="6">
                    <CardImg top width="100%" src={logo_hive} width="120" height="90" alt="Card image cap" />

                  </Col>

                </Row>
              </Container>

            </Card>
          </Table>

        </p>


      </div>
    );
  }
}

export default App;
