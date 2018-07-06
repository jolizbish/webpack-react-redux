// import PropTypes from 'prop-types';
import React from 'react';
// import { connect } from 'react-redux';
// import { filterTable } from '../actions';
// import ProductTable from '../components/ProductTable';
import { main, logo, hooray, blurbbox, blurb, takemethere, linktext } from '../styles/main.scss';

class Main extends React.Component {
    componentDidMount() {
        setTimeout(() => {
            // this.refs.logo.style.transition = 2000;
            this.refs.logo.style.opacity = 1;
        }, 1000);
        // const cat = this.refs.logo.style;
        // console.log(cat);
    }
    render() {
        return (
          <div className={main}>
            <div className={logo} ref="logo"></div>
            {/* <img id="logo-image" src="../styles/images/white_logo_transparent_background.png" /> */}
            <div className={blurbbox}>
              <p className={hooray}>Hooray!</p>
              <p className={blurb}>You've found your way to my new internet home! This site is currently under construction. It will eventually be the one-stop shop for my everything blog & web development portfolio. Follow the link to my current site on Wordpress below!</p>
              <div className={takemethere}><a className={linktext} href="https://www.wanderlustre.blog" target="_blank">Let's go!</a></div>
            </div>
          </div>
        );
    }
}

// Main.propTypes = {
// };
//
// const mapStateToProps = (state) => {
//     return {
//     };
// };
//
// const mapDispatchToProps = (dispatch) => {
//     return {
//     };
// };
//
// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Main);

export default Main;
