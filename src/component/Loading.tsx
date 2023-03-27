import * as React from 'react';

interface ILoadingProps {
}

const Loading: React.FunctionComponent<ILoadingProps> = (props) => {
    return (
        <div className="loading-container">
          <div className="lds-ripple">
            <div></div>
            <div></div>
          </div>
        </div>
      );
};

export default Loading;
