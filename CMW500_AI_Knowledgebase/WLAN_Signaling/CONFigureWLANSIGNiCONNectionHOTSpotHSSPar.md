# CONFigureWLANSIGNiCONNectionHOTSpotHSSPar

Module: WLAN Signaling
Source: 7d87955942fc4b96.htm

## 原始指令文档说明
WLAN Signaling
 > 
Command Reference
 > 
Connection Settings
 > 
Hotspot 2.0 Settings
 > 
CONFigure:WLAN:SIGN<i>:CONNection:HOTSpot:HSSPar
CONFigure:WLAN:SIGN<i>:CONNection:HOTSpot:HSSPar 
<DownlinkSpeed>, <UplinkSpeed>, <IPV6AddField>, <IPV4AddField>, <RealmName>, <EAPType>, <InternetAccess>, <NetAuthTypeInd>
Defines supplementary parameters of the Hotspot 2.0 operation mode.
Parameters:
<DownlinkSpeed>
Range: 
0 kbit/s  to  300000 kbit/s
*RST:
4000 kbit/s
Default unit: 
kbit/s
<UplinkSpeed>
Range: 
0 kbit/s  to  300000 kbit/s
*RST:
4000 kbit/s
Default unit: 
kbit/s
<IPV6AddField>
ATNavailable |
 
 ATAVailable |
 
 AATNknown
Indicates whether an IPv6 address can be allocated to the station
ATNavailable
: address type not available
ATAVailable
: address type available
AATNknown
: availability of the address type is not known
*RST:
ATN
<IPV4AddField>
ATNavailable |
 
 PIAavailable |
 
 PRIaavailabl |
 
 SNPiaavailab |
 
 DNPiaavailab |
 
 PSNiaavailab |
 
 PDNiaavailab |
 
 AATNknown
Indicates whether an IPv4 address can be allocated to the station
ATNavailable
: address type not available
PIAavailable
: public IPv4 address available
PRIaavailabl
: port-restricted IPv4 address available
SNPiaavailab
: single-NATed private IPv4 address available
DNPiaavailab
: double-NATed private IPv4 address available
PSNiaavailab
: port-restricted and single-NATed IPv4 address available
PDNiaavailab
: port-restricted and double-NATed IPv4 address available
AATNknown
: availability of the address type not known
*RST:
PIA
<RealmName>
Name of reachable NAI realm as string
To configure more than one realm, use 
CONFigure:
​
WLAN:
​
SIGN<i>:
​
CONNection:
​
HOTSpot:
​
REALm<no>
.
*RST:
example.org
<EAPType>
SIM |
 
 TTLS |
 
 AKA |
 
 APRime |
 
 TLS
Supported extensible authorization protocol type
EAP-SIM, EAP-TTLS, EAP-AKA, EAP-AKA' or EAP-TLS
To enable multiple EAP types, use 
CONFigure:
​
WLAN:
​
SIGN<i>:
​
CONNection:
​
HOTSpot:
​
REALm<no>
.
*RST:
SIM
<InternetAccess>
OFF |
 
 ON
Specifies whether the hotspot provides internet access
*RST:
OFF
<NetAuthTypeInd>
ATConditions |
 
 OESupported |
 
 HREDirection |
 
 DREDirection
Network authentication type
ATConditions
: acceptance of terms and conditions
OESupported
: on-line enrollment supported
HREDirection
: http/https redirection
DREDirection
: DNS redirection
*RST:
ATC
Example: 
See 
"Configuring Connection Settings"
Firmware/Software: 
V3.2.70, V3.5.20: EAP type TLS added
Options: 
R&S CMW-KS660
Manual operation: 
See 
"Downlink Speed to IPv4 Address Field"
Top