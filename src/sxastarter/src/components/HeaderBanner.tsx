import {
  Text,
  Field,
  withDatasourceCheck,
  LinkField,
  Link as JssLink,
  RichText as JssRichText,
  Image as JssImage,
  ImageField,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
type HeaderBannerProps = ComponentProps & {
  fields: {
    image: ImageField;
    title: Field<string>;
    description: Field<string>;
    getStartedLink: LinkField;
    learnMoreLink: LinkField;
  };
};
const HeaderBanner = (props: HeaderBannerProps): JSX.Element => (
  <header className="bg-dark py-5">
    <div className="container px-5">
      <div className="row gx-5 align-items-center justify-content-center">
        <div className="col-lg-8 col-xl-7 col-xxl-6">
          <div className="my-5 text-center text-xl-start">
            <h1 className="display-5 fw-bolder text-white mb-2">
              <Text field={props?.fields?.title} />
            </h1>
            <p className="lead fw-normal text-white-50 mb-4">
              <JssRichText field={props?.fields?.description} />
            </p>
            <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
              <JssLink
                className="btn btn-primary btn-lg px-4 me-sm-3"
                field={props?.fields?.getStartedLink}
              ></JssLink>
              <JssLink
                className="btn btn-outline-light btn-lg px-4"
                field={props?.fields?.learnMoreLink}
              ></JssLink>
            </div>
          </div>
        </div>
        <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center">
          <JssImage classsName="img-fluid rounded-3 my-5" field={props?.fields?.image} />
        </div>
      </div>
    </div>
  </header>
);

export default withDatasourceCheck()<HeaderBannerProps>(HeaderBanner);
