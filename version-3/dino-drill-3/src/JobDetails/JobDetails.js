import React, { Component } from 'react'

class JobDetails extends Component {
    state = {
        job: []
    }
    componentDidMount() {
        fetch('./listing.json')
        .then(response => response.json())
        .then(resp => this.setState({job: resp}))
    }

    render() {
        const {job} = this.state
        return (
            <section id="job-details">
                <h2>Job Details</h2>
                <h4>{job.title}</h4>
                <p>{job.description}</p>
            </section>
        )
    } 

}

export default JobDetails