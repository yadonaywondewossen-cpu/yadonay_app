import { useState } from 'react'
import ArrowIcon from '../components/ArrowIcon.jsx'

function SignInPage({ onClose, onModeChange }) {
  const [notice, setNotice] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    setNotice("This portfolio preview doesn't have an account service connected, so your details were not sent.")
  }

  return (
    <>
    
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            placeholder="Your password"
            autoComplete="current-password"
            required
          />
        </label>
        <button className="auth-submit" type="submit">
          Sign in <ArrowIcon />
        </button>
        {notice && <p className="auth-notice" role="status">{notice}</p>}
      </form>
      <p className="auth-switch">
        New around here?{' '}
        <button type="button" onClick={() => onModeChange('register')}>Create an account</button>
      </p>
      <p className="auth-privacy">Preview only — this form does not send or store your details.</p>
    </>
  )
}

export default SignInPage
