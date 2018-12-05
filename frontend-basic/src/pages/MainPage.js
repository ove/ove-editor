import 'react-table/react-table.css'

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Button, Card, Collapse } from 'react-bootstrap'

class OpenProjectComponent extends React.Component {
    constructor() {
        super();
        this.state = { expanded: false };
    }

    render() {
        let self = this;

        return <Card bg="light">
            <Card.Header className="cursor-pointer" onClick={() => self.setState({ expanded: !self.state.expanded })}>
                <h5 style={{ marginBottom: 0 }}><Button variant="primary">Open</Button>&nbsp;existing project</h5>
            </Card.Header>
            <Collapse in={this.state.expanded}>
                <Card.Body>
                    list of existing projects
                </Card.Body>
            </Collapse>
        </Card>
    }
}

OpenProjectComponent.propTypes = {
    id: PropTypes.string
};

class NewProjectComponent extends React.Component {
    constructor() {
        super();
        this.state = { expanded: false };
    }

    render() {
        let self = this;

        return <Card bg="light">
            <Card.Header className="cursor-pointer" onClick={() => self.setState({ expanded: !self.state.expanded })}>
                <h5 style={{ marginBottom: 0 }}>Create&nbsp;<Button variant="info">new</Button>&nbsp;project</h5>
            </Card.Header>
            <Collapse in={this.state.expanded}>
                <Card.Body>
                    <Card style={{ width: '240px', height: '400px', float: 'left', marginRight: '10px' }}>
                        <Card.Img variant="top" src="https://via.placeholder.com/200x100?text=Gallery+Project" />
                        <Card.Body>
                            <Card.Title>Gallery Project</Card.Title>
                            <Card.Text>
                                This will generate a project from multiple images (assets) displayed one by one on the observatory.
                            </Card.Text>
                            <Button style={{position: 'absolute', bottom: 10}} variant="primary">Create</Button>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '240px', height: '400px', float: 'left', marginRight: '10px' }}>
                        <Card.Img variant="top" src="https://via.placeholder.com/200x100?text=Single+Page+Project" />
                        <Card.Body>
                            <Card.Title>Single Page / Single Section Project</Card.Title>
                            <Card.Text>
                                This will generate a project from a single image (asset) displayed as a single section on the observatory.
                            </Card.Text>
                            <Button style={{position: 'absolute', bottom: 10}} variant="primary">Create</Button>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '240px', height: '400px', float: 'left', marginRight: '10px' }}>
                        <Card.Img variant="top" src="https://via.placeholder.com/200x100?text=Single+Page+Project" />
                        <Card.Body>
                            <Card.Title>Single Page / Multiple Sections Project</Card.Title>
                            <Card.Text>
                                This will generate a project from a multiple images (asset) displayed as multiple sections on the observatory.
                            </Card.Text>
                            <Button style={{position: 'absolute', bottom: 10}} variant="primary">Create</Button>
                        </Card.Body>
                    </Card>

                    {/* <Card style={{ width: '240px', height: '400px', float: 'left', marginRight: '10px' , marginTop: '10px'}}>
                        <Card.Img variant="top" src="https://via.placeholder.com/200x100?text=Single+Page+Project" />
                        <Card.Body>
                            <Card.Title>Single Page Project</Card.Title>
                            <Card.Text>
                                This will generate a project from a single image (asset) displayed as a single section on the observatory.
                            </Card.Text>
                            <Button variant="primary">Create</Button>
                        </Card.Body>
                    </Card> */}
                </Card.Body>
            </Collapse>
        </Card>
    }
}

NewProjectComponent.propTypes = {
    id: PropTypes.string
};

const MainPage = () => <div className="startup-container">
    <img src="img/logo-large.png" alt="Logo" />
    <h5>The best editor in town</h5>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel pharetra odio. Phasellus vel neque a metus tristique blandit.
        Etiam commodo tortor vitae nunc dignissim, quis feugiat ipsum rutrum. Donec in imperdiet lectus. Mauris eget tortor at neque
        molestie dictum in et sapien. Aenean pulvinar pharetra dolor, nec elementum ligula commodo vitae. Maecenas euismod sem ut
        orci suscipit, quis viverra odio pretium. Duis in semper lacus, vel feugiat justo. Proin turpis sapien, feugiat id est a,
        suscipit elementum arcu. Donec ultrices commodo velit at gravida. Pellentesque ullamcorper tellus sit amet lectus volutpat,
        ac mollis eros rutrum. In non pretium tortor. Aliquam non dapibus sem. Etiam ornare urna sed eros scelerisque interdum.
    </p>
    <OpenProjectComponent /> <br />
    <NewProjectComponent />
</div>;

MainPage.propTypes = {
};

// const mapStateToProps = (state) => {
//     return {
//         isLoading: state.oveState.isFetching,
//         canvas: state.oveState.state.canvas
//     }
// };

// const mapDispatchToProps = (dispatch) => {
//     return { onMount: () => dispatch(initOveState()) }
// };

export default connect(null, null)(MainPage)
