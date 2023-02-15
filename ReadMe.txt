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


dotnet sitecore index list --environment-name vcpw-cloud-demo-dev

dotnet sitecore serialization pull -n vcpw-cloud-demo-dev

dotnet sitecore connect -n vcpw-cloud-demo-dev