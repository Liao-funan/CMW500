# CONFigureWLANSIGNiETOEIRListIPRaddressn

Module: WLAN Signaling
Source: d9bc534a26e7487f.htm

## 原始指令文档说明
WLAN Signaling
 > 
Command Reference
 > 
Data End-to-End
 > 
CONFigure:WLAN:SIGN<i>:ETOE:IRList:IPRaddress<n>
CONFigure:WLAN:SIGN<i>:ETOE:IRList:IPRaddress<n> 
<State>, <Ip4_1>, <Ip4_2>, <Ip4_3>, <Ip4_4>, <Ip4Netmask>, <Ip6Prefix>, <Ip6Netmask>
Configures an entry of the routes list. The routes list defines destination addresses for which the DAU routes packets to the DUT.
Suffix: 
<n>
1..5
Entry number
Parameters:
<State>
OFF |
 
 ON
Entry disabled or enabled
*RST:
OFF
<Ip4_1>
First octet of the IPv4 destination address
Range: 
0  to  255
<Ip4_2>
Second octet
Range: 
0  to  255
<Ip4_3>
Third octet
Range: 
0  to  255
<Ip4_4>
Fourth octet
Range: 
0  to  255
<Ip4Netmask>
Number of subnet bits for the IPv4 address
Range: 
1  to  32
<Ip6Prefix>
IPv6 prefix as string, for example "fc01:abab:cdcd:efe0::"
<Ip6Netmask>
Number of subnet bits for the IPv6 address
Range: 
1  to  128
Example: 
See 
"Configuring DAU Parameters"
Firmware/Software: 
V3.5.40
Manual operation: 
See 
"IP Routes List"
Top