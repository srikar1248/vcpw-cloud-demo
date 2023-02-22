import {
  Text,
  Field,
  useSitecoreContext,
  withDatasourceCheck,
  LinkField,
  Link as JssLink,
  RichText as JssRichText,
  LayoutServiceData,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import * as React from 'react';
import ReactPlayer from 'react-player';
import { useEffect, useState } from 'react';
type VideoBannerProps = ComponentProps & {
  fields: {
    title: Field<string>;
    description: Field<string>;
    link: LinkField;
    videolink: Field<string>;
    layoutData: LayoutServiceData;
  };
};
const VideoBanner = (props: VideoBannerProps): JSX.Element => {
  const { sitecoreContext } = useSitecoreContext();
  const [domLoaded, setDomLoaded] = useState(false);
  useEffect(() => {
    setDomLoaded(true);
  }, []);
  return (
    <header className="bg-light py-5">
      <div className="container px-5">
        <div className="row gx-5 align-items-center justify-content-center">
          <div className="col-lg-4">
            <div className="my-5 text-center text-xl-start">
              <Text
                tag="h2"
                className="fw-bolder mb-4 pb-4 line"
                field={props?.fields?.title as Field<string>}
              />
              <JssRichText
                tag="p"
                className="lead fw-normal mb-4"
                field={props?.fields?.description as Field<string>}
              />
              <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                <JssLink
                  className="btn btn-primary btn-lg px-4 me-sm-3"
                  field={props?.fields?.link}
                ></JssLink>
              </div>
            </div>
          </div>
          <div className="col-xl-8 d-none d-xl-block text-center">
            {domLoaded ? <ReactPlayer url={props?.fields?.videolink.value} width="100%" /> : null}
            {sitecoreContext?.pageEditing ? (
              <Text tag="p" field={props?.fields?.videolink as Field<string>} />
            ) : null}
          </div>
        </div>
      </div>
    </header>
  );
};

export default withDatasourceCheck()<VideoBannerProps>(VideoBanner);
