import React from 'react';
import logo_cucumber from './assets/Cucumber.png'
import logo_hive from './assets/Hive.png'



import CreateCard from './CreateCard'


import {

    Table,
    Button, Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';

const misSpec = {
    MMFnode: [
        {
            "misison-spec": [
                { "personnel": null },
                { "title": "" },
                { "description": "" },
                { "icon": "" },
                { "tags": "" },
                { "mission-scope": "" }
            ]
        },
        {
            "situation": [
                {
                    "environment": [
                        {
                            "title": "Weather Report",
                            "description": "18:00 Low visibility, heavy overcast with 30% chance of persipitation. Humidity 66%",
                            "media": logo_cucumber
                        },
                        {
                            "title": "Obstacles & Fields of Fire",
                            "description": "",
                            "media": logo_hive,
                        }
                    ]
                },
                {
                    "Forces": [
                        {
                            "blue": "",
                            "red": ""
                        }
                    ]
                }
            ]
        },
        {
            "mission-threads": []
        },
        {
            "personnel": []
        }
    ]
}


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modal: false
        }
    }


    toggle = () => { this.setState({ modal: !this.state.modal }) }

    render() {
        // console.log("--->", misSpec.MMFnode[1].situation[0].environment)
        return (
            <div >
                <Modal isOpen={this.state.modal} toggle={this.toggle} >
                    <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                    <ModalBody>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
                <Table>
                    {
                        misSpec.MMFnode[1].situation[0].environment.map(item => CreateCard(item, this.toggle) )
                    }                   
                </Table>
            </div>
        );
    }
}
export default App;


