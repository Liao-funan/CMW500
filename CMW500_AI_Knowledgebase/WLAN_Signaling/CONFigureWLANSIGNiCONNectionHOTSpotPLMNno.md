# CONFigureWLANSIGNiCONNectionHOTSpotPLMNno

Module: WLAN Signaling
Source: f3f74ec7281848fe.htm

## 原始指令文档说明
WLAN Signaling
 > 
Command Reference
 > 
Connection Settings
 > 
Hotspot 2.0 Settings
 > 
CONFigure:WLAN:SIGN<i>:CONNection:HOTSpot:PLMN<no>
CONFigure:WLAN:SIGN<i>:CONNection:HOTSpot:PLMN<no> 
<State>, <MCC>, <MNC>, <NumOfDigits>
Defines a list of 3GPP networks that the hotspot provides service for.
The MCC and MNC of the first PLMN can also be defined via 
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
HSPar
.
Suffix: 
<no>
1..5
List item no
Parameters:
<State>
OFF |
 
 ON
Disables/enables the list entry
*RST:
Entry 1 ON, other entries OFF
<MCC>
Mobile country code
Range: 
1  to  999
*RST:
1
<MNC>
Mobile network code
Range: 
Depends on <NumOfDigits>
*RST:
1
<NumOfDigits>
TWDigits |
 
 THDigits
Length of the MNC
TWDigits
: two digits (1 to 99)
THDigits
: three digits (1 to 999)
*RST:
TWD
Example: 
See 
"Configuring Connection Settings"
Firmware/Software: 
V3.5.20
Options: 
R&S CMW-KS660
Manual operation: 
See 
"PLMN"
Top