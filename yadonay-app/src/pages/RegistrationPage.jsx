import { useState } from 'react'
import ArrowIcon from '../components/ArrowIcon.jsx'

function RegistrationPage({ onClose, onModeChange }) {
  const [notice, setNotice] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)

    if (formData.get('password') !== formData.get('confirmPassword')) {
      setNotice("Those passwords don't match. Please check and try again.")
      return
    }

    setNotice("This portfolio preview doesn't have an account service connected, so your details were not sent.")
  }

  return (
    <>
      <a className="wordmark auth-wordmark" href="#home" onClick={onClose} aria-label="Yadonay, home">
        y<span>.</span>
      </a>
      <div className="eyebrow">GOOD TO HAVE YOU HERE</div>
      <h2 id="register-title">Make yourself at home.</h2>
      <p className="auth-description">Create an account to get started.</p>
      <form className="auth-form" onSubmit={handleSubmit}>
        <label>
          Full name
          <input
            type="text"
            name="name"
            placeholder="Your name"
            autoComplete="name"
            required
          />
        </label>
        <label>
          Email address
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            autoComplete="email"
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            placeholder="At least 8 characters"
            autoComplete="new-password"
            minLength={8}
            required
          />
        </label>
        <label>
          Confirm password
          <input
            type="password"
            name="confirmPassword"
            placeholder="Enter your password again"
            autoComplete="new-password"
            minLength={8}
            required
          />
        </label>
        <button className="auth-submit" type="submit">
          Create account <ArrowIcon />
        </button>
        {notice && <p className="auth-notice" role="status">{notice}</p>}
      </form>
      <p className="auth-switch">
        Already have an account?{' '}
        <button type="button" onClick={() => onModeChange('signin')}>Sign in</button>
      </p>
      <p className="auth-privacy">Preview only — this form does not send or store your details.</p>
    </>
  )
}

export default RegistrationPage
