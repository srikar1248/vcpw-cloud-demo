import {
  Field,
  RichText as JssRichText,
  Text as JssText,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
type NewsLetterProps = ComponentProps & {
  fields: {
    title: Field<string>;
    description: Field<string>;
    privacyNote: Field<string>;
    signUpButton: Field<string>;
  };
};
const NewsLetter = (props: NewsLetterProps): JSX.Element => (
  <div className="container px-5 my-5">
    <aside className="bg-primary bg-gradient rounded-3 p-4 p-sm-5 mt-5">
      <div className="d-flex align-items-center justify-content-between flex-column flex-xl-row text-center text-xl-start">
        <div className="mb-4 mb-xl-0">
          <JssRichText
            tag="div"
            className="fs-3 fw-bold text-white"
            field={props?.fields?.title as Field<string>}
          />
          <JssText
            tag="div"
            className="text-white-50"
            field={props?.fields?.description as Field<string>}
          />
        </div>
        <div className="ms-xl-4">
          <div className="input-group mb-2">
            <input
              className="form-control"
              type="text"
              placeholder="Email address..."
              aria-label="Email address..."
              aria-describedby="button-newsletter"
            />
            <button className="btn btn-outline-light" id="button-newsletter" type="button">
              <JssText field={props?.fields?.signUpButton as Field<string>} />
            </button>
          </div>
          <JssText
            tag="div"
            className="small text-white-50"
            field={props?.fields?.privacyNote as Field<string>}
          />
        </div>
      </div>
    </aside>
  </div>
);

export default withDatasourceCheck()<NewsLetterProps>(NewsLetter);
