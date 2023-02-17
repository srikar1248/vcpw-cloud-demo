import {
  Text,
  Field,
  withDatasourceCheck,
  Item,
  Image as JssImage,
  ImageField,
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
          <h2 className="fw-bolder mb-0">
            <Text field={props?.fields?.title} />
          </h2>
          <p className="mb-0">{props?.fields?.description?.value}</p>
        </div>
        <div className="col-lg-8">
          <div className="row gx-5 row-cols-1 row-cols-md-2">
            {props?.fields?.IconTitleDescriptionList?.map((element, index) => {
              return (
                <div key={index} className="col mb-5 h-100">
                  <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                    <i className="bi bi-collection"></i>
                  </div>
                  <JssImage classsName="img-fluid rounded-3 my-5" field={element?.fields?.image} />
                  <h1 className="h1">
                    <Text field={element?.fields?.title} />
                  </h1>
                  <p className="h3">
                    <Text field={element?.fields?.SubTitle} />
                  </p>
                  <p className="mb-0">
                    <Text field={element?.fields?.description} />
                  </p>
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
