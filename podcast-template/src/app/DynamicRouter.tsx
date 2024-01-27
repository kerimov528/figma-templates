import React, { Suspense } from 'react';

type IProps = {
  component: React.ComponentClass | React.FC;
  componentProps?: object;
};

function DynamicRouter(props: IProps) {
  const { component: Component, componentProps } = props;
  return (
    <Suspense fallback={'Loading...'}>
      <Component {...componentProps} />
    </Suspense>
  );
}

export default DynamicRouter