import React from 'react';

const withClass = (WrapperComponent, classes) => {
    return props => (
        <div className={classes}>
            <WrapperComponent {...props}  />
        </div>
    );
};

export default withClass;