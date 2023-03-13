import React from 'react';

interface Props {
    children?: React.ReactNode;
    message?: string;
}

interface State {
    hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
    state: State = { hasError: false };

    static getDerivedStateFromError(_: Error): State {
        return { hasError: true };
    }

    componentDidCatch(error: Error, info: React.ErrorInfo) {
        console.log(error, info);
    }

    render() {
        const { hasError } = this.state;
        const { message = '發生錯誤', children } = this.props;
        if (hasError) {
            return <h2>{message}</h2>;
        }
        return children;
    }
}

export default ErrorBoundary;
