import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'

import { Container, Row, Col } from 'react-bootstrap'
import { OpenProjectComponent } from '../containers/dialogue/OpenProjectModal';
import NewProjectComponent from '../containers/dialogue/NewProjectModal';

const MainPage = ({canvas}) => {
    if (canvas) {
        // canvas exists
        return <Redirect to="/designer" />
    }

    return <Container>
        <Row>
            <Col md={{ span: 10, offset: 1 }} xs={{ span: 12 }} sm={{ span: 12 }}><img src="img/logo-large.png" alt="Logo" /></Col>
        </Row>
        <Row>
            <Col md={{ span: 10, offset: 1 }} xs={{ span: 12 }}>
                <h5>The best editor in town</h5>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel pharetra odio. Phasellus vel neque a metus tristique blandit.
                    Etiam commodo tortor vitae nunc dignissim, quis feugiat ipsum rutrum. Donec in imperdiet lectus. Mauris eget tortor at neque
                    molestie dictum in et sapien. Aenean pulvinar pharetra dolor, nec elementum ligula commodo vitae. Maecenas euismod sem ut
                    orci suscipit, quis viverra odio pretium. Duis in semper lacus, vel feugiat justo. Proin turpis sapien, feugiat id est a,
                    suscipit elementum arcu. Donec ultrices commodo velit at gravida. Pellentesque ullamcorper tellus sit amet lectus volutpat,
                    ac mollis eros rutrum. In non pretium tortor. Aliquam non dapibus sem. Etiam ornare urna sed eros scelerisque interdum.
            </p>
            </Col>
        </Row>
        <Row>
            <Col md={{ span: 4, offset: 2 }} xs={{ span: 12 }} sm={{ span: 12 }}>
                <OpenProjectComponent />
            </Col>

            <Col md={{ span: 4 }} xs={{ span: 12 }} sm={{ span: 12 }}>
                <NewProjectComponent />
            </Col>
        </Row>
    </Container>
};

const mapStateToProps = (state) => {
    return {
        canvas: state.oveState.project.canvas
    }
};

export default connect(mapStateToProps, null)(MainPage);