import React from 'react'

interface State {
  hasError: boolean
  errorMessage: string
}

export class ErrorBoundary extends React.Component<{ children: React.ReactNode }, State> {
  constructor(props: { children: React.ReactNode }) {
    super(props)
    this.state = { hasError: false, errorMessage: '' }
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, errorMessage: error.message }
  }

  componentDidCatch(error: Error) {
    console.error('ErrorBoundary caught:', error.message)
  }

  handleReset = () => {
    this.setState({ hasError: false, errorMessage: '' })
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ background: '#050505', color: '#fff', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1rem', padding: '2rem', textAlign: 'center' }}>
          <h2>Algo salió mal</h2>
          {this.state.errorMessage && (
            <p style={{ color: '#888', fontSize: '0.85rem', maxWidth: '500px' }}>{this.state.errorMessage}</p>
          )}
          <button
            onClick={this.handleReset}
            style={{ padding: '0.8rem 2rem', background: '#00d4ff', color: '#000', border: 'none', borderRadius: '100px', cursor: 'pointer', fontWeight: 600 }}
          >
            Intentar de nuevo
          </button>
        </div>
      )
    }
    return this.props.children
  }
}
