import React, { ReactNode } from 'react';
import { ErrorContainer } from './ErrorBoundaries.style';

type MyProps = {
  children: ReactNode;
};
type MyState = { hasError: boolean };

export class ErrorBoundaries extends React.Component<MyProps, MyState> {
  constructor(props: MyProps | Readonly<MyProps>) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <ErrorContainer className="text-secondary d-flex flex-column align-items-center justify-content-center">
          <h1>Something went wrong.</h1>
          <p className="text-secondary">Try refreshing the page, or try again later</p>
        </ErrorContainer>
      );
    }

    return this.props.children;
  }
}
