import React from 'react'

interface State {
  hasError: boolean
}

export class ErrorBoundary extends React.Component<{ children: React.ReactNode }, State> {
  constructor(props: { children: React.ReactNode }) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error) {
    console.error('App recovered from error:', error)
  }

  render() {
    if (this.state.hasError) {
      // Auto-recover after a brief moment
      setTimeout(() => this.setState({ hasError: false }), 100)
      return null
    }
    return this.props.children
  }
}
