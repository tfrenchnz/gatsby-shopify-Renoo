import React from 'react'
import { Link } from 'gatsby'

import SEO from '~/components/seo'

const ContactForm = () => (
    <>
        <SEO title="Contact" />
        <h1>Please send us a message!</h1>
        <form name="contact" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
            <p>
                <label>Your Name: <input type="text" name="name" /></label>
            </p>
            <p>
                <label>Your Email: <input type="email" name="email" /></label>
            </p>
            <p>
                <label>Your Role: <select name="role[]" multiple>
                    <option value="leader">Leader</option>
                    <option value="follower">Follower</option>
                </select></label>
            </p>
            <p>
                <label>Message: <textarea name="message"></textarea></label>
            </p>
            <p>
                <button type="submit">Send</button>
            </p>
        </form>
        <Link to="/">Go back to the homepage</Link>
    </>
)

export default ContactForm