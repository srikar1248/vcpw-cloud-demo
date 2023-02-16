.\init.ps1 -InitEnv -LicenseXmlPath "D:\Projects\XMCloud\travelapp\vcpw-cloud-demo\license.xml" -AdminPassword "Abcd@123"

https://xmcloudcm.localhost/sitecore/api/layout/render/jss?item=/&sc_apikey={7636BFE7-2FE2-4C7E-AF05-3C7DAC25D78B}&sc_site=sxastarter&sc_mode=normal

*******************************************Serialization: Pull from local and push to cloud******************************
## Named Sitecore environment to use. Connect to local XM instance
dotnet sitecore connect --ref xmcloud --cm https://xmcloudcm.localhost --allow-write true -n default

#Specify module configurations to include. (for ex, sxastarter.module.json)
dotnet sitecore ser info -i sxastarter


#All Sitecore items from the module sxastarter.module.json are pushed to the Sitecore instance.
dotnet sitecore ser push -i sxastarter

#All Sitecore items from the module sxastarter.module.json and configurations are serialized on disk.
dotnet sitecore ser pull -i sxastarter

*************************************************************************************************************************

******************Cloud project and environment list**************************

dotnet sitecore cloud project list
dotnet sitecore cloud environment list --project-id 6l2s98nb2CK8RtxUtft5Lq
******************************************************************************

dotnet sitecore cloud login

dotnet sitecore index list --environment-name vcpw-cloud-demo-dev

dotnet sitecore serialization pull -n vcpw-cloud-demo-dev

dotnet sitecore serialization push -n vcpw-cloud-demo-dev

dotnet sitecore connect -n vcpw-cloud-demo-dev

**************Edge Token************************
{ "X-GQL-Token" : "Y3k5TmNtenFydXQwNXpBcW12RVR0cTZpSDlTaldtblUwTkI3QTJxNE1TTT18d3VuZGVybWFuLXZjcHdjbG91ZGRlbW8tdmNwd2Nsb3VkZGUzNjkxLTBlMjI=" } 
****************************************************************************************************

vcpw-cloud-demo Project detailed information:
Organization Name : wunderman
Organization Id   : org_DkpDmI4J4ytL3kVe
Project Id        : 6l2s98nb2CK8RtxUtft5Lq
Project name      : vcpw-cloud-demo
Region            : eus (East US)
Created by        : srikaracharya.vatkanambi@ogilvy.com
Created at        : 12-02-2023 05:34:11
Last updated by   : srikaracharya.vatkanambi@ogilvy.com
Last updated at   : 12-02-2023 05:34:11
vcpw-cloud-demo-dev Environment detailed information:
Organization Id                   : org_DkpDmI4J4ytL3kVe
Organization Name                 : wunderman
Project Id                        : 6l2s98nb2CK8RtxUtft5Lq
Project name                      : vcpw-cloud-demo
Environment Id                    : 7zaH1yu53pljWkcHL1l6OI
Environment Name                  : vcpw-cloud-demo-dev
Environment Host                  : xmc-wunderman-vcpwclouddemo-vcpwcloudde3691.sitecorecloud.io
Environment Type                  : nonprod
Created by                        : srikaracharya.vatkanambi@ogilvy.com
Created at                        : 12-02-2023 05:34:13
Last updated by                   : srikaracharya.vatkanambi@ogilvy.com
Last updated at                   : 15-02-2023 09:40:10
Provisioning status               : Complete
Provisioning last failure message :



GraphQL Query:
-------------
query {
  layout(language: "en", routePath: "/", site: "sxastarter") {
    item {
      rendered
    }
  }
  site {
    siteInfoCollection {
      name
      routes(first: 10, language: "en") {
        results {
          routePath
          route {
            id
          }
        }
      }
    }
  }
}