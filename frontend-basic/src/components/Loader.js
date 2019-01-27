import React from 'react'
import PropTypes from 'prop-types'
import { ScaleLoader } from "react-spinners";

const Loader = ({ isLoading, children, height, size }) => {
    if (isLoading) {
        return <div style={{ width: '100%', height: height + 'px'}}>
            <div style={{ left: '50%', top: '50%', position: 'relative' }}>
                <ScaleLoader size={size} />
            </div>
        </div>
    } else {
        return <>{children}</>
    }
};

Loader.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    children: PropTypes.any.isRequired,
    size: PropTypes.number,
    height: PropTypes.number,
};

Loader.defaultProps = {
    size: 50,
    height: 300
};

export default Loader
