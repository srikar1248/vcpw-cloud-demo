import { Text, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import ReactPlayer from 'react-player';
import { useEffect, useState } from 'react';

type TestComponentProps = ComponentProps & {
  fields: {
    heading: Field<string>;
    url: Field<string>;
  };
};

const TestComponent = (props: TestComponentProps): JSX.Element => {
  const [domLoaded, setDomLoaded] = useState(false);
  useEffect(() => {
    setDomLoaded(true);
  }, []);
  const url = props.fields.url?.value; //'https://www.youtube.com/watch?v=wWgIAphfn2U';
  return (
    <div>
      <p>TestComponent Component</p>
      <Text field={props.fields.heading} />
      {domLoaded ? <ReactPlayer url={url} /> : null}
    </div>
  );
};

export default withDatasourceCheck()<TestComponentProps>(TestComponent);
