import React, { Component, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || <DefaultFallback />;
    }

    return this.props.children;
  }
}

function DefaultFallback() {
  return (
    <div style={{
      padding: "40px",
      textAlign: "center",
      backgroundColor: "#f8f9fa",
      border: "1px solid #dee2e6",
      borderRadius: "8px",
      margin: "20px"
    }}>
      <h2 style={{ color: "#dc3545" }}>Something went wrong</h2>
      <p style={{ color: "#6c757d" }}>An unexpected error occurred. Please try refreshing the page.</p>
    </div>
  );
}

export default ErrorBoundary;
export { DefaultFallback };