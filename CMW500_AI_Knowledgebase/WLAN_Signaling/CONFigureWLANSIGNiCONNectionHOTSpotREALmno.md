# CONFigureWLANSIGNiCONNectionHOTSpotREALmno

Module: WLAN Signaling
Source: b252511abdb5470b.htm

## 原始指令文档说明
WLAN Signaling
 > 
Command Reference
 > 
Connection Settings
 > 
Hotspot 2.0 Settings
 > 
CONFigure:WLAN:SIGN<i>:CONNection:HOTSpot:REALm<no>
CONFigure:WLAN:SIGN<i>:CONNection:HOTSpot:REALm<no> 
<State>, <Name>, <Sim>, <TLS>, <TTLS>, <AKA>, <AKAprime>
Defines a list of NAI realms that are reachable via the hotspot.
The first realm can also be defined via 
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
HSSPar
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
<Name>
Realm name as string
<Sim>
OFF |
 
 ON
Realm supports EAP-SIM
*RST:
ON for realm 1, OFF for others
<TLS>
OFF |
 
 ON
Realm supports EAP-TLS
*RST:
OFF
<TTLS>
OFF |
 
 ON
Realm supports EAP-TTLS
*RST:
OFF
<AKA>
OFF |
 
 ON
Realm supports EAP-AKA
*RST:
OFF
<AKAprime>
OFF |
 
 ON
Realm supports EAP-AKA'
*RST:
OFF
Example: 
See 
"Configuring Connection Settings"
Firmware/Software: 
V3.5.20
Options: 
R&S CMW-KS660
Manual operation: 
See 
"Realm"
Top