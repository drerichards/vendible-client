import React, { Component } from 'react'
import './css/Landing.css'
import clothes from '../images/clothes.jpeg'
import elec from '../images/elec.jpeg'
import home from '../images/home.jpg'
import { fetchUserSuccess } from '../actions/index'
import { connect } from 'react-redux'

class Landing extends Component {
    componentDidMount() {
        if (this.props.match.params.userId) {
            localStorage.setItem('userId', this.props.match.params.userId)
            localStorage.setItem('userEmail', this.props.match.params.userEmail)
            this.props.dispatch(fetchUserSuccess(this.props.match.params.userId, this.props.match.params.userEmail))
        } else localStorage.clear()
    }

    renderButton() {
        return !this.props.auth.id ? <a href='https://stormy-fortress-32507.herokuapp.com/auth/google'>
            <button type='button' className='btn btn-primary'>Google Sign In</button></a>
            : <a href="/departments">
                <button type="button" className="btn btn-primary">Shop Now!</button>
            </a>
    }
    renderMobileButton() {
        return !this.props.auth.id ?
            <div className='btn-primary'>Click the &#x2630; to Sign In</div>
            : <a href="/departments">
                <button type="button" className="btn btn-primary">Shop Now!</button>
            </a>
    }
    render() {
        return (
            <div className="landing">
                <main role="main">
                    <header role="banner">
                        <div className="container">
                            <div
                                id="carouselExampleIndicators"
                                className="carousel slide"
                                data-ride="carousel">
                                <ol className="carousel-indicators">
                                    <li
                                        data-target="#carouselExampleIndicators"
                                        data-slide-to="0"
                                        className="active"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                </ol>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img className="d-block w-100 carousel-img" src={clothes} alt="Clothing" />
                                        <div className="carousel-caption d-none d-md-block">
                                            <h1>All the best brands</h1>
                                            <h3>All in one place!</h3>
                                            {this.renderButton()}
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block w-100 carousel-img" src={elec} alt="Electronics" />
                                        <div className="carousel-caption d-none d-md-block">
                                            <h1>More stores. More value.</h1>
                                            <h3>More of what you want!</h3>
                                            {this.renderButton()}
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block w-100 carousel-img" src={home} alt="Furniture" />
                                        <div className="carousel-caption d-none d-md-block">
                                            <h1>Whatever you’ve got in mind</h1>
                                            <h3>We’ve got inside!</h3>
                                            {this.renderButton()}
                                        </div>
                                    </div>
                                </div>
                                <a
                                    className="carousel-control-prev"
                                    href="#carouselExampleIndicators"
                                    role="button"
                                    data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a
                                    className="carousel-control-next"
                                    href="#carouselExampleIndicators"
                                    role="button"
                                    data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                    </header>
                </main>
                <section className="addlCaption">
                    <div className="mobileCaption">
                        <h1>Whatever you’ve got in mind</h1>
                        <h3>We’ve got inside!</h3>
                        {this.renderMobileButton()}
                    </div>
                </section>
            </div>
        )
    }
}

const mapStateToProps = state => ({ auth: state.auth })
export default connect(mapStateToProps)(Landing)
