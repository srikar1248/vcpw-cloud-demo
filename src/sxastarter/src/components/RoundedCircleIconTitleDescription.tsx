import {
  Text,
  Field,
  withDatasourceCheck,
  Item,
  ImageField,
  Image,
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
      <div className="text-center">
        <Text tag="h2" className="fw-bolder" field={props?.fields?.title as Field<string>} />
        <Text
          tag="p"
          className="lead fw-normal text-muted mb-5"
          field={props?.fields?.description as Field<string>}
        />
      </div>
      <div className="row gx-5 row-cols-1 row-cols-sm-2 row-cols-xl-4 justify-content-center">
        {props?.fields?.IconTitleDescriptionList?.map((element, index) => {
          return (
            <div key={index} className="col mb-5 mb-5 mb-xl-0">
              <div className="text-center">
                <Image
                  field={element?.fields?.image as ImageField}
                  height="100%"
                  width="100%"
                  className="img-fluid rounded-circle mb-4 px-4"
                />
                <Text
                  tag="h5"
                  className="fw-bolder mb-0"
                  field={element?.fields?.title as Field<string>}
                />
                <Text
                  tag="div"
                  className="fst-italic text-muted pb-3 border-bottom"
                  field={element?.fields?.SubTitle as Field<string>}
                />
                <Text
                  tag="div"
                  className="fst-italic text-muted pb-1 pt-1 border-bottom"
                  field={element?.fields?.description as Field<string>}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);
export default withDatasourceCheck()<RoundedCircleIconTitleDescriptionProps>(
  RoundedCircleIconTitleDescription
);
