# CONFigureDATACONTrolIMS2VIRTualsubvMEDiaendpoin

Module: Data Application Unit
Source: 555fe61672a94e08.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Services Command Reference
 > 
IMS Service
 > 
Virtual Subscriber Settings
 > 
Basic Profile Settings
 > 
CONFigure:DATA:CONTrol:IMS2:VIRTualsub<v>:MEDiaendpoin
CONFigure:DATA:CONTrol:IMS2:VIRTualsub<v>:MEDiaendpoin 
<MediaEndpoint>
Configures the media endpoint.
Suffix: 
<v>
1..20
Parameters:
<MediaEndpoint>
LOOPback |
 
 FORWard |
 
 AUDioboard |
 
 PCAP
LOOPback
: Loop back to the DUT
FORWard
: Route to an external media endpoint
AUDioboard
: Route to the speech codec of the audio board
PCAP
: Play a PCAP file
*RST:
LOOP
Example: 
See 
"Configuring virtual subscriber profiles"
Firmware/Software: 
V3.5.10
V3.5.30: added PCAP
Manual operation: 
See 
"Media Endpoint"
Top