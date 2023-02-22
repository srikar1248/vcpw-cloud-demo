import React from "react";
import { withSitecoreContext } from "@sitecore-jss/sitecore-jss-react";
import SitecoreIconsMap from "./sitecoreIconsMap";

const SitecoreIcon = ({ icon, alt, className, sitecoreContext, ...props }) => {
  let src = SitecoreIconsMap.get(icon);
  if (src) {
    src = src.replace("{theme}", sitecoreContext.site.name);
  }

  return src ? (
    <img
      src={src}
      alt={alt}
      {...props}
    />
  ) : null;
};

export default withSitecoreContext()(SitecoreIcon);
