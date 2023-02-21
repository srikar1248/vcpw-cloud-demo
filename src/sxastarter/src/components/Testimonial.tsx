import {
  Field,
  RichText as JssRichText,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
type TestimonialProps = ComponentProps & {
  fields: {
    description: Field<string>;
  };
};
const Testimonial = (props: TestimonialProps): JSX.Element => (
  <JssRichText field={props?.fields?.description as Field<string>} />
);

export default withDatasourceCheck()<TestimonialProps>(Testimonial);
