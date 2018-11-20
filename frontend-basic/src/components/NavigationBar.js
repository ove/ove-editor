import React from 'react'
import PropTypes from 'prop-types'

import {Nav} from 'react-bootstrap'

class NavigationBar extends React.Component {
    render() {
        let {menu, hashRouter} = this.props;

        return <Nav variant="pills" defaultActiveKey="/">
            {menu.map(elem =>
                <Nav.Item key={"nav_" + elem.id}>
                    <Nav.Link eventKey={elem.href} key={"nav_link_" + elem.id}
                              target={elem.external ? "_blank" : ""}
                              href={(hashRouter && !elem.external ? "/#" : "") + elem.href}>
                        {elem.img && <img alt="" src={elem.img}/>}{' '}{elem.name}
                    </Nav.Link>
                </Nav.Item>)}
        </Nav>;
    }
}

NavigationBar.propTypes = {
    hashRouter: PropTypes.bool.isRequired,
    menu: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired,
        img: PropTypes.string,
        component: PropTypes.any,
        external: PropTypes.bool,
        exact: PropTypes.bool
    })).isRequired
};

NavigationBar.defaultValues = {hashRouter: true};

export default NavigationBar
