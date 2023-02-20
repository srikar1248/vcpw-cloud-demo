import {
  Text,
  Field,
  withDatasourceCheck,
  Item,
  ImageField,
  NextImage,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
type RoundedCircleIconTitleDescriptionProps = ComponentProps & {
  fields: {
    title: Field<string>;
    description: Field<string>;
    IconTitleDescriptionList: Item[];
    image: ImageField;
  };
};
const RoundedCircleIconTitleDescription = (
  props: RoundedCircleIconTitleDescriptionProps
): JSX.Element => (
  <section className="py-5 bg-light">
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
                <div key={index} className="col mb-5 mb-5 mb-xl-0">
                  <div className="text-center">
                    <NextImage
                      className="img-fluid rounded-circle mb-4 px-4"
                      field={element?.fields?.image}
                    />
                    <Text
                      tag="h5"
                      className="fw-bolder"
                      field={element?.fields?.title as Field<string>}
                    />
                    <Text
                      tag="p"
                      className="fst-italic text-muted"
                      field={element?.fields?.SubTitle as Field<string>}
                    />
                    <Text
                      tag="p"
                      className="fst-italic text-muted"
                      field={element?.fields?.description as Field<string>}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default withDatasourceCheck()<RoundedCircleIconTitleDescriptionProps>(
  RoundedCircleIconTitleDescription
);
