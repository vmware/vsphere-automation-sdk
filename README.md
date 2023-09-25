<div align='center'>
<br/><br/><img src="images/vmware.svg" width="20%"><br/><br/>
<img src="images/vsphere_automation_sdks.png" width="60%">
<h1>Software Development Kits for accessing vSphere, NSX-T &
VMware Cloud Service APIs</h1>
<div align='center'>
<img src="images/github_icon.svg" width="30px" height="30px"><br/>
Fork vSphere Automation SDKs in
</div>
<br/>
<a href="https://github.com/vmware/vsphere-automation-sdk-java">
  <img src="images/Java-blue.svg">
</a>
&nbsp;
<a href="https://github.com/vmware/vsphere-automation-sdk-python">
  <img src="images/Python-blue.svg">
</a>
&nbsp;
<a href="https://github.com/vmware/vsphere-automation-sdk-go">
  <img src="images/Go(beta)-blue.svg">
</a>
</div>

# Overview
The vSphere Automation SDKs bundle client libraries, documentation and sample
code for accessing the below services:

- vSphere Automation End Point in vCenter Server
- VMware Cloud (VMC) on AWS Console APIs*
- NSX-T APIs*
- NSX VMware Cloud on AWS Integration APIs*
- VMware Cloud on AWS Site Recovery APIs*

*All Vmware Cloud and NSX client libraries are available only in Python, Java
and Go(Beta) SDKs.

# Getting the SDKs
The vSphere Automation SDK’s are available from VMware’s GitHub source
repositories. Simply chose the SDK for your preferred language, clone the repo
and follow the instructions in the README.md in the root folder of the repo to
be up and running in minutes!

For more information refer to the vSphere Automation SDK Overview.

# Documentation
#### Python API Documentation:
- [vSphere API Reference 8.0 U2 (latest)](https://vmware.github.io/vsphere-automation-sdk-python/vsphere/8.0.2.0/)
  - Previous vSphere releases:
&nbsp;[8.0 U1](https://vmware.github.io/vsphere-automation-sdk-python/vsphere/8.0.1.0/),
&nbsp;[8.0](https://vmware.github.io/vsphere-automation-sdk-python/vsphere/8.0.0.1/),
&nbsp;[7.0 U3](https://vmware.github.io/vsphere-automation-sdk-python/vsphere/7.0.3.0/),
&nbsp;[7.0 U2](https://vmware.github.io/vsphere-automation-sdk-python/vsphere/7.0.2.0/),
&nbsp;[7.0 U1](https://vmware.github.io/vsphere-automation-sdk-python/vsphere/7.0.1.0/),
&nbsp;[7.0](https://vmware.github.io/vsphere-automation-sdk-python/vsphere/7.0.0.1/),
&nbsp;[6.9.1](https://vmware.github.io/vsphere-automation-sdk-python/vsphere/6.9.1),
&nbsp;[6.7.1](https://vmware.github.io/vsphere-automation-sdk-python/vsphere/6.7.1),
&nbsp;[6.7.0](https://vmware.github.io/vsphere-automation-sdk-python/vsphere/6.7.0),
- [VMware Cloud on AWS vSphere API Reference (latest version)](https://vmware.github.io/vsphere-automation-sdk-python/vsphere/cloud)
- [VMware Cloud on AWS Console API Reference](https://vmware.github.io/vsphere-automation-sdk-python/vmc)
  - [VMware Cloud Disaster Recovery as a Service (VMC DRaaS) API Reference](https://vmware.github.io/vsphere-automation-sdk-python/vmc-draas)
- [NSX API Reference](https://vmware.github.io/vsphere-automation-sdk-python/nsx/nsx)
  - [NSX Policy API Reference](https://vmware.github.io/vsphere-automation-sdk-python/nsx/nsx_policy) -
primary API for managing logical networks
  - [NSX VMC Cloud Service](https://vmware.github.io/vsphere-automation-sdk-python/nsx/nsx_vmc_policy) -
for managing AWS underlay networks
  - [NSX VMC AWS Integration](http://vmware.github.io/vsphere-automation-sdk-python/nsx/nsx_vmc_aws_integration)

#### Java API Documentation:
- [vSphere API Reference 8.0 U2 (latest)](https://vmware.github.io/vsphere-automation-sdk-java/vsphere/8.0.2.0/vcenter-bindings)
  - Previous vSphere releases:
&nbsp;[8.0 U1](https://vmware.github.io/vsphere-automation-sdk-java/vsphere/8.0.1.0/vcenter-bindings),
&nbsp;[8.0](https://vmware.github.io/vsphere-automation-sdk-java/vsphere/8.0.0.1/vsphereautomation-client-sdk),
&nbsp;[7.0 U3](https://vmware.github.io/vsphere-automation-sdk-java/vsphere/7.0.3.0/vsphereautomation-client-sdk),
&nbsp;[7.0 U2](https://vmware.github.io/vsphere-automation-sdk-java/vsphere/7.0.2.0/vsphereautomation-client-sdk),
&nbsp;[7.0 U1](https://vmware.github.io/vsphere-automation-sdk-java/vsphere/7.0.1.0/vsphereautomation-client-sdk),
&nbsp;[7.0](https://vmware.github.io/vsphere-automation-sdk-java/vsphere/7.0.0.1/vsphereautomation-client-sdk),
&nbsp;[6.9.1](https://vmware.github.io/vsphere-automation-sdk-java/vsphere/6.9.1/vsphereautomation-client-sdk),
&nbsp;[6.7.3](https://vmware.github.io/vsphere-automation-sdk-java/vsphere/6.7.3/vsphereautomation-client-sdk),
&nbsp;[6.7.2](https://vmware.github.io/vsphere-automation-sdk-java/vsphere/6.7.2/vsphereautomation-client-sdk),
&nbsp;[6.7.1](https://vmware.github.io/vsphere-automation-sdk-java/vsphere/6.7.1/vsphereautomation-client-sdk),
- [VMware Cloud on AWS vSphere API Reference (latest version)](https://vmware.github.io/vsphere-automation-sdk-java/vsphere/cloud/vsphereautomation-client-sdk)
- [VMware Cloud on AWS Console API Reference](https://vmware.github.io/vsphere-automation-sdk-java/vmc)
  - [VMware Cloud Disaster Recovery as a Service (VMC DRaaS) API Reference](https://vmware.github.io/vsphere-automation-sdk-java/vmc-draas)
- [NSX API Reference](https://vmware.github.io/vsphere-automation-sdk-java/nsx/nsx)
  - [NSX Policy API Reference](https://vmware.github.io/vsphere-automation-sdk-java/nsx/nsx-policy) -
primary API for managing logical networks
  - [NSX VMC Cloud Service](https://vmware.github.io/vsphere-automation-sdk-java/nsx/nsx-vmc-policy) -
for managing AWS underlay networks
  - [NSX VMC AWS Integration](https://vmware.github.io/vsphere-automation-sdk-java/nsx/nsx-vmc-aws-integration)

#### Go API Documentation:
- [VMware Cloud on AWS Console API Reference](https://pkg.go.dev/github.com/vmware/vsphere-automation-sdk-go/services/vmc)
  - [VMware Cloud Disaster Recovery as a Service (VMC DraaS)](https://pkg.go.dev/github.com/vmware/vsphere-automation-sdk-go/services/vmc/draas)
  - [VMware Cloud Autoscaler API Reference](https://pkg.go.dev/github.com/vmware/vsphere-automation-sdk-go/services/vmc/autoscaler)
- [NSX-T API Reference](https://pkg.go.dev/github.com/vmware/vsphere-automation-sdk-go/services/nsxt)
  - [NSX-T Manager API Reference](https://pkg.go.dev/github.com/vmware/vsphere-automation-sdk-go/services/nsxt-mp)
  - [NSX VMC AWS Integration API Reference](https://pkg.go.dev/github.com/vmware/vsphere-automation-sdk-go/services/nsxt-vmc-aws-integration)
  - [NSX-T Global Policy API Reference](https://pkg.go.dev/github.com/vmware/vsphere-automation-sdk-go/services/nsxt-gm)

#### REST API Documentation:
[vSphere API Reference 8.0 U2 (latest)](https://developer.vmware.com/docs/vsphere-automation/latest/)
[VMware Cloud On AWS Console API](https://developer.vmware.com/apis/vmc/latest/)
[NSX VMC Policy](https://developer.vmware.com/apis/nsx-vmc-policy/latest/)
[NSX VMC AWS Integration API](https://developer.vmware.com/apis/600#/)

# Support
The vSphere Automation SDK’s are released as open source software and,
presently, provides community support through our GitHub repositories.
If you encounter an issue or have a question, feel free to reach out via
Github issues.

# Contributors
#### Java
<a href = "https://github.com/vmware/vsphere-automation-sdk-java/graphs/contributors">
  <img src = "https://contrib.rocks/image?repo=vmware/vsphere-automation-sdk-java"/>
</a>

#### Python
<a href = "https://github.com/vmware/vsphere-automation-sdk-python/graphs/contributors">
  <img src = "https://contrib.rocks/image?repo=vmware/vsphere-automation-sdk-python"/>
</a>

#### Go
<a href = "https://github.com/vmware/vsphere-automation-sdk-go/graphs/contributors">
  <img src = "https://contrib.rocks/image?repo=vmware/vsphere-automation-sdk-go"/>
</a>

# Contributing
You are invited to contribute new features, fixes, or updates, large or small;
we are always thrilled to receive
[pull requests](https://help.github.com/articles/creating-a-pull-request), and
do our best to process them as fast as we can. If you have not signed our
Contributor License Agreement (CLA), a "CLA-bot" will take you through the
process and update the issue. If you have questions about the CLA process, see
our CLA [FAQ](https://cla.vmware.com/faq) or just ask for help on your pull
request.

Before you start to code, we recommend discussing your plans through a GitHub
issue or discuss it first with the official project maintainers via Slack,
especially for more ambitious contributions. This gives other contributors a
chance to point you in the right direction, give you feedback on your design,
and help you find out if someone else is working on the same thing. Join
[Slack](https://vmwarecode.slack.com/messages/vsphere-sdks) via
https://code.vmware.com/web/code/join.

# Licenses
VMware’s Automation SDKs are licensed as per the LICENSE(.txt) file found in
the root of each SDK distribution:

&nbsp;&nbsp;
<a href="https://github.com/vmware/vsphere-automation-sdk-java/blob/master/LICENSE">
  <img src="images/MIT-Java-blue.svg">
</a>
&nbsp;&nbsp;
<a href="https://github.com/vmware/vsphere-automation-sdk-python/blob/master/LICENSE">
  <img src="images/MIT-Python-blue.svg">
</a>
&nbsp;&nbsp;
<a href="https://github.com/vmware/vsphere-automation-sdk-go/blob/master/LICENSE.txt">
  <img src="images/BSD_2-Go-blue.svg">
</a>

<div align='right'>© 2022 VMware, Inc.</div>
