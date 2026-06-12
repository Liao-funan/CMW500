# SENSeWLANSIGNiUESinfoDRATe

Module: WLAN Signaling
Source: e454d6c2385145eb.htm

## 原始指令文档说明
WLAN Signaling
 > 
Command Reference
 > 
UE Capabilities
 > 
SENSe:WLAN:SIGN<i>:UESinfo:DRATe?
SENSe:WLAN:SIGN<i>:UESinfo:DRATe? 
Queries information related to the data rate of the DUT signal.
Return values: 
<Format>
NHT |
 
 HT |
 
 VHT |
 
 HE
Frame format
NHT
: non-high throughput format (non-HT)
HT
: high throughput format
VHT
: very high throughput format
HE
: high efficiency format
<Rate>
MB1 |
 
 MB2 |
 
 MB5 |
 
 MB6 |
 
 MB9 |
 
 MB12 |
 
 MB18 |
 
 MB24 |
 
 MB36 |
 
 MB48 |
 
 MB54 |
 
 MCS0 |
 
 MCS1 |
 
 MCS2 |
 
 MCS3 |
 
 MCS4 |
 
 MCS5 |
 
 MCS6 |
 
 MCS7 |
 
 MCS8 |
 
 MCS9 |
 
 MCS10 |
 
 MCS11
MBx
: data rate for NHT in Mbit/s {1, 2, 5.5, 6, 9, 12, 18, 24, 36, 48, 54}
MCSx
: modulation and coding scheme x for HT, VHT and HE
<CBW>
BW20 |
 
 BW40 |
 
 BW80 |
 
 BW88 |
 
 BW16
Channel bandwidth in MHz: 20, 40, 80, 80+80, 160
<NSS>
NSS1 |
 
 NSS2 |
 
 NSS3 |
 
 NSS4 |
 
 NSS5 |
 
 NSS6 |
 
 NSS7 |
 
 NSS8
Number of spatial streams
Example: 
See 
"Querying UE Information"
Usage: 
Query only
Firmware/Software: 
V3.7.10, V3.7.20: added 
<CBW>
 BW80, V3.7.30: added 
<Format>
 HE, 
<CBW>
 BW88, BW16
Options: 
R&S CMW-KS657 for IEEE 802.11ax
Manual operation: 
See 
"Data Rate"
Top