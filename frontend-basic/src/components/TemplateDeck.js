import React from 'react'
import PropTypes from 'prop-types'

import _ from 'underscore'

import { Card, CardDeck } from 'react-bootstrap'

const TemplateDeck = ({ templates, rowSize, selectedState, onSelect, error }) => <>
    {
        _.map(_.chunk(templates, rowSize), (list, idx) =>
            <CardDeck key={`deck-row-${idx}`} style={{ marginTop: 20 }}>
                {_.map(list, template =>
                    <Card key={template.id} style={{ cursor: 'pointer' }}
                        border={_.isEmpty(error) ? (selectedState === template.id ? "primary" : "") : "danger"}
                        onClick={() => onSelect(template.id)}>
                        <Card.Header>
                            <Card.Img variant="top" style={{ width: 64, float: 'left', marginRight: 10 }}
                                src={template.img} />
                            <Card.Title style={{ marginTop: 10 }}>{template.title}</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>{template.text}</Card.Text>
                        </Card.Body>
                    </Card>)}
            </CardDeck>)
    }
    <div className="invalid-feedback" style={{ display: _.isEmpty(error) ? "none" : "block" }}>{error}</div>
</>

TemplateDeck.propTypes = {
    templates: PropTypes.array.isRequired,
    rowSize: PropTypes.number,
    selectedState: PropTypes.any.isRequired,
    onSelect: PropTypes.func.isRequired,
    error: PropTypes.string
};

TemplateDeck.defaultProps = {
    rowSize: 3,
    error: null
};

export default TemplateDeck;