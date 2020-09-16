import React, {Component} from 'react';
import Field from '../common/Field';
import {withFormik} from 'formik';

const fields = {
    sections: [
        [
            {name: 'name', elementName: 'input', type: 'text', placeholder: 'Your name*'},
            {name: 'email', elementName: 'input', type: 'text', placeholder: 'Your email*'},
            {name: 'phone', elementName: 'input', type: 'text', placeholder: 'Your phone number*'},
        ],
        [
            {name: 'message', elementName: 'textArea', type: 'text', placeholder: 'Type your message*'},
        ],
    ]
}

class Contact extends Component {



    submitForm = (e) => {
        alert("Form submitted. Thank you very much!");

    }

    render() {
        return (
            <section className="page-section" id="contact">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Contact Us</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <form id="contactForm" name="sentMessage" novalidate="novalidate">
                    <div className="row align-items-stretch mb-5">

                        {fields.sections.map((section, sectionIndex) => {
                            console.log("Rendering section", sectionIndex, "with", section);
                            return (
                                <div className = "col-md-6" key = {sectionIndex}>
                                    {section.map((field, i) => {
                                        return <Field 
                                            {...field} 
                                            key = {i}
                                            value={this.props.values[field.name]}
                                            name = {field.name}
                                            onChange={this.props.handleChange}
                                            onBlur = {this.props.handleBlur}
                                            touched = {(this.props.touched[field.name])}
                                            errors = {this.props.errors[field.name]}
                                        />
                                    })}
                                </div>
                            )
                        })}
                    </div>
                    <div className="text-center">
                        <div id="success"></div>
                        <button 
                        className="btn btn-primary btn-xl text-uppercase" 
                        
                        type="submit"
                        onClick = {e => this.submitForm(e)}
                        >Send Message</button>
                    </div>
                </form>
            </div>
        </section>

        )
    }
}

export default withFormik({
    mapPropsToValues: () => ({
        name: '',
        email: '',
        phone: '',
        message:'',

    }),

    validate: values => {
        const errors = {};
        
        Object.keys(values).map(v => {
            if(!values[v] ){
                errors[v] = "Required";
            }
        })
        return errors;
    },
    handleSubmit: (values, {setSubmitting}) =>{
        console.log("VALUES", values);
        alert("You've submitted the form", JSON.stringify(values));
    }

})(Contact);