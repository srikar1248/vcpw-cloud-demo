import {
  Field,
  RichText as JssRichText,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
type NewsLetterProps = ComponentProps & {
  fields: {
    description: Field<string>;
  };
};
const NewsLetter = (props: NewsLetterProps): JSX.Element => (
  <JssRichText field={props?.fields?.description as Field<string>} />
);

export default withDatasourceCheck()<NewsLetterProps>(NewsLetter);
