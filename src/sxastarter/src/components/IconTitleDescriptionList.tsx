import {
  Text,
  Field,
  withDatasourceCheck,
  Item,
  ImageField,
  Image,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
type IconTitleDescriptionListProps = ComponentProps & {
  fields: {
    title: Field<string>;
    description: Field<string>;
    IconTitleDescriptionList: Item[];
    image: ImageField;
  };
};
const IconTitleDescriptionList = (props: IconTitleDescriptionListProps): JSX.Element => (
  <div className="container px-5 my-5">
    <div className="row gx-5">
      <div className="col-lg-4 mb-5 mb-lg-0">
        <Text
          tag="h2"
          className="fw-bolder mb-4 pb-4 line"
          field={props?.fields?.title as Field<string>}
        />
        <Text tag="p" className="mb-0" field={props?.fields?.description as Field<string>} />
      </div>
      <div className="col-lg-8">
        <div className="row gx-5 row-cols-1 row-cols-md-2">
          {props?.fields?.IconTitleDescriptionList?.map((element, index) => {
            return (
              <div key={index} className="col mb-5 h-100">
                <Image
                  className="img-fluid rounded-1 my-1"
                  field={element?.fields?.image as ImageField}
                />
                <div className="line"> </div>
                <Text
                  tag="p"
                  className="display-5 fw-bolder mb-0 mt-4"
                  field={element?.fields?.title as Field<string>}
                />
                <Text
                  tag="p"
                  className="h4 mb-3"
                  field={element?.fields?.SubTitle as Field<string>}
                />
                <Text
                  tag="p"
                  className="mb-0"
                  field={element?.fields?.description as Field<string>}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </div>
);
export default withDatasourceCheck()<IconTitleDescriptionListProps>(IconTitleDescriptionList);
