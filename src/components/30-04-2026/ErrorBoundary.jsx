import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error:", error);
    console.error("Error Info:", errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 p-5">
          <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-xl">
            <h1 className="mb-3 text-3xl font-bold text-red-500">
              Something went wrong
            </h1>

            <p className="mb-5 text-gray-500">
              {this.state.error?.message}
            </p>

            <button
              onClick={this.handleReload}
              className="rounded-xl bg-black px-5 py-3 text-white"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;