import React, { Component, PropTypes } from 'react';
import Radium from 'radium';

class SideBarHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { user, name, email, logo, avatar } = this.props;

    if (user) {
      return (
        <header style={[ styles.base ]}>
          <div className="user">
            <img src={ avatar } width="50px" style={[ styles.img ]}/>
            <h1 style={[ styles.h1 ]}>{ name }</h1>
            <h2 style={[ styles.h2 ]}>{ email }</h2>
          </div>
        </header>
      );
    } else if (logo) {
      return (
        <header>
          <img className='logo' src={ logo } width='200px' />
        </header>
      );
    }
  }
}

SideBarHeader.propTypes = {
  user: PropTypes.boolean,
  name: PropTypes.string,
  email: PropTypes.string,
  logo: PropTypes.node,
  avatar: PropTypes.node.isRequired
};

SideBarHeader.defaultProps = {
  user: false
};

var styles = {
  base: {
    width: '100%',
    padding: '1rem'
  },

  img: {
    float: 'left',
    marginRight: '.75rem'
  },
  h1: {
    fontSize: '18px',
    margin: '.5rem 0'
  },
  h2: {
    fontSize: '14px',
    margin: 0
  }
}

SideBarHeader = Radium(SideBarHeader);
export default SideBarHeader;
