import { useState } from 'react'
import './App.css'
import AuthDialog from './components/AuthDialog.jsx'
import HomePage from './pages/HomePage.jsx'

function App() {
  const [authMode, setAuthMode] = useState(null)

  return (
    <>
      <HomePage
        onSignIn={() => setAuthMode('signin')}
        onRegister={() => setAuthMode('register')}
      />
      {authMode && (
        <AuthDialog
          mode={authMode}
          onClose={() => setAuthMode(null)}
          onModeChange={setAuthMode}
        />
      )}
    </>
  )
}

export default App
