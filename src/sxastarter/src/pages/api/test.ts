/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

// eslint-disable-next-line
import axios from 'axios';
export default function handler(req: any, res: any) {
  const mailchimpUrl = 'https://us9.api.mailchimp.com/3.0/lists/2714849106/members/';
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Basic YXBpa2V5Ojc3YzU2YWU1YjIzMmM2NzE3OTViMjRkYTAxZWYzM2Y5',
    },
    withCredentials: true,
  };

  try {
    axios
      .post(mailchimpUrl, req.body, config)
      .then(function (response) {
        console.log(response);
        res.status(200).json({ mailchimpSuccess: response.data });
      })
      .catch(function (error) {
        console.log(error);
        res.status(500).json({ mailchimpError: error });
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mailchimpError: error });
  }
}
