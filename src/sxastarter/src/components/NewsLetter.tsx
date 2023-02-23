/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Field,
  RichText as JssRichText,
  Text as JssText,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { useState } from 'react';
import axios from 'axios';
type NewsLetterProps = ComponentProps & {
  fields: {
    title: Field<string>;
    description: Field<string>;
    privacyNote: Field<string>;
    signUpButton: Field<string>;
  };
};
interface FormData {
  email: string;
}

const postData = async (data: any) => {
  const contact = {
    email_address: data as string,
    status: 'subscribed',
    merge_fields: { FNAME: 'User', LNAME: 'B' },
    tags: ['dargroup'],
  }; // Add the contact to the list
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const response = await axios.post('api/test', contact, config);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

const NewsLetter = (props: NewsLetterProps): JSX.Element => {
  const [formData, setFormData] = useState<FormData>({ email: '' });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Send form data to server or API
    console.log(formData.email);
    postData(formData.email);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
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
            <form onSubmit={handleSubmit}>
              <div className="input-group mb-2">
                <input
                  name="email"
                  className="form-control"
                  type="email"
                  id="txtemail"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email address..."
                  aria-label="Email address..."
                  aria-describedby="button-newsletter"
                  required
                />
                <button className="btn btn-outline-light" id="button-newsletter" type="submit">
                  <JssText field={props?.fields?.signUpButton as Field<string>} />
                </button>
              </div>
            </form>
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
};

export default withDatasourceCheck()<NewsLetterProps>(NewsLetter);
