import { useEffect, useRef } from 'react'
import RegistrationPage from '../pages/RegistrationPage.jsx'
import SignInPage from '../pages/SignInPage.jsx'

function AuthDialog({ mode, onClose, onModeChange }) {
  const dialogRef = useRef(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (dialog && !dialog.open) dialog.showModal()
  }, [])

  return (
    <dialog
      className="auth-dialog"
      ref={dialogRef}
      aria-labelledby={mode === 'register' ? 'register-title' : 'signin-title'}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) event.currentTarget.close()
      }}
    >
      <button
        className="auth-close"
        type="button"
        aria-label="Close sign in dialog"
        onClick={() => dialogRef.current?.close()}
      >
        <span /><span />
      </button>
      {mode === 'register' ? (
        <RegistrationPage
          onClose={() => dialogRef.current?.close()}
          onModeChange={onModeChange}
        />
      ) : (
        <SignInPage
          onClose={() => dialogRef.current?.close()}
          onModeChange={onModeChange}
        />
      )}
    </dialog>
  )
}

export default AuthDialog
