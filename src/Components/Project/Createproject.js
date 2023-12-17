import React, { useState } from 'react';
import { createProject } from '../../store/actions/projectActions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import swal from 'sweetalert';

export function CreateP(props){

    const { t } =useTranslation();
    const [ project,setProject ] = useState({
        title: '',
        content: '',
        date: new Date(),
        select: [],

    });

    const handleChange = (e) => {
        setProject({...project,
            [e.target.id]: e.target.value
        });
    } 
    const handleSubmit = () => {
        props.createProject(project);
        props.history.push('/');
        cancelCourse();
    } 

    const cancelCourse = () => { 
         document.querySelector(".whiteForemka").reset();
    }

    const error = (e) => {
        e.preventDefault();
        swal({
            title: t('Basket.Att'),
            text: t('Basket.All'),
            icon: "error",
            button: "OK!"
          });
    }

    
        const { auth } = props;
        if(!auth.uid) return <Redirect to="/signin" />
        return (
            <div className="container FormKamil">
                <form>
                    <form className="whiteForemka"> 
                        <h5>Zgłoś usterkę swojego sprzętu !</h5>
                        <div className="input-field">
                            <label htmlFor="title"> Model sprzętu </label>
                            <input type="text" id="title" onChange={handleChange} />
                        </div>

                        <div className="input-field">
                            <label htmlFor="content">Co sie dokładnie wydarzyło? </label>
                            <textarea type="text" id="content" onChange={handleChange}/>
                        </div>

                        <div className="input-field">
                            <label htmlFor="select">Oczekuje: </label>
                            <select id="select" onChange={handleChange}>
                                <option>Wymiana Ekranu</option>
                                <option>Wymiana Baterii</option>
                                <option>Wymiana innych Podzespołów</option>
                                <option>Płukanie po zalaniu</option>
                                <option>Nie do końca wiem</option>
                                <option>Inne</option>
                            </select>
                        </div> 
 
                        <div className="input-field">
                            
                            { ( project.title && project.content && project.select)?
                            <div>
                                <button className="btn btn-success" onClick={handleSubmit}>{t('Send')}</button>
                            </div> 
                            : 
                            <div>
                                <button className="btn btn-danger" onClick={error}>{t('Send')}</button>
                            </div>  
                            }
                        </div>

                        
                    </form>

                </form>
                
            </div>
        )
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

export default connect(mapStateToProps,mapDispatchToProps)(CreateP)
