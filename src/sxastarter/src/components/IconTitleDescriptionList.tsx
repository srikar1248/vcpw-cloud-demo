import {
  Text,
  Field,
  withDatasourceCheck,
  Item,
  ImageField,
  NextImage,
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
  <section className="py-5" id="features">
    <div className="container px-5 my-5">
      <div className="row gx-5">
        <div className="col-lg-4 mb-5 mb-lg-0">
          <Text tag="h2" className="fw-bolder mb-0" field={props?.fields?.title as Field<string>} />
          <Text tag="p" className="mb-0" field={props?.fields?.description as Field<string>} />
        </div>
        <div className="col-lg-8">
          <div className="row gx-5 row-cols-1 row-cols-md-2">
            {props?.fields?.IconTitleDescriptionList?.map((element, index) => {
              return (
                <div key={index} className="col mb-5 h-100">
                  <NextImage classsName="img-fluid rounded-3 my-5" field={element?.fields?.image} />
                  <Text tag="h1" className="h1" field={element?.fields?.title as Field<string>} />
                  <Text tag="p" className="h3" field={element?.fields?.SubTitle as Field<string>} />
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
  </section>
);
export default withDatasourceCheck()<IconTitleDescriptionListProps>(IconTitleDescriptionList);
