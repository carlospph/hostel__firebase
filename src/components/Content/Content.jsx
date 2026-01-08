import React from 'react'
import './Content.css'
import ContentResume from '../ContentResume/ContentResume.jsx'
import ContentForm from '../ContentForm/ContentForm.jsx'

const Content = () => {
    return (
        <div>
            <div className="content">
                <ContentForm />
                <ContentResume />
            </div>
        </div>
    )
}

export default Content
