import {
  Text,
  Field,
  withDatasourceCheck,
  LinkField,
  Link as JssLink,
  RichText as JssRichText,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
type TitleWithTwoColumnDescriptionProps = ComponentProps & {
  fields: {
    title: Field<string>;
    description: Field<string>;
    description2: Field<string>;
    link: LinkField;
  };
};
const TitleWithTwoColumnDescription = (props: TitleWithTwoColumnDescriptionProps): JSX.Element => (
  <section className="py-5 bg-light">
    <div className="container px-5 my-5">
      <div className="row gx-5">
        <div className="col-lg-4 mb-5 mb-lg-0">
          <Text
            tag="h2"
            className="fw-bolder mb-4 pb-4 line"
            field={props?.fields?.title as Field<string>}
          />
        </div>
        <div className="col-lg-8">
          <div className="row gx-5 row-cols-1 row-cols-md-2">
            <div className="col mb-5 h-100">
              <JssRichText
                tag="p"
                className="mb-0"
                field={props?.fields?.description as Field<string>}
              />
            </div>
            <div className="col mb-5 h-100">
              <JssRichText
                tag="p"
                className="mb-0"
                field={props?.fields?.description2 as Field<string>}
              />
              <JssLink className="mb-0" field={props?.fields?.link}></JssLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default withDatasourceCheck()<TitleWithTwoColumnDescriptionProps>(
  TitleWithTwoColumnDescription
);
