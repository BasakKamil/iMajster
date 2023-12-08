import React, { Component } from 'react';
import { createProject } from '../../store/actions/projectActions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export class CreateProject extends Component {
    state = {
        title: '',
        content: '',
        date: new Date(),
        select: [],

    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    } 
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createProject(this.state);
        this.props.history.push('/');
        this.cancelCourse();
    } 

    cancelCourse = () => { 
         document.querySelector(".whiteForemka").reset();
    }

    render() {
        const { auth } = this.props;
        if(!auth.uid) return <Redirect to="/signin" />
        return (
            <div className="container FormKamil">
                <form>
                    <form onSubmit={this.handleSubmit} className="whiteForemka">
                        <h5>Zgłoś usterkę swojego sprzętu !</h5>
                        <div className="input-field">
                            <label htmlFor="title"> Model sprzętu </label>
                            <input type="text" id="title" onChange={this.handleChange} />
                        </div>

                        <div className="input-field">
                            <label htmlFor="content">Co sie dokładnie wydarzyło? </label>
                            <textarea type="text" id="content" onChange={this.handleChange}/>
                        </div>

                        <div className="input-field">
                            <label htmlFor="select">Oczekuje: </label>
                            <select id="select" onChange={this.handleChange}>
                                <option>Wymiana Ekranu</option>
                                <option>Wymiana Baterii</option>
                                <option>Wymiana innych Podzespołów</option>
                                <option>Płukanie po zalaniu</option>
                                <option>Nie do końca wiem</option>
                                <option>Inne</option>
                            </select>
                        </div>

                        <div className="input-field">
                            <button className="btn btn-success">Zaleć!</button>
                        </div>

                        
                    </form>

                </form>
                
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth
    }
} 

const mapDispatchToProps = (dispatch) => {
    return{
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CreateProject)
