# PREPareLTESIGNiCONNectionDEDBearerSEParate

Module: LTE Signaling
Source: d0bd63182f764ca7.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Connection Control and States
 > 
Connect/Disconnect Preparation
 > 
PREPare:LTE:SIGN<i>:CONNection:DEDBearer:SEParate
PREPare:LTE:SIGN<i>:CONNection:DEDBearer:SEParate 
<DefBearerID>, <Profile>, <TFTportLowDL>, <TFTportHighDL>, <TFTportLowUL>, <TFTportHighUL>
Configures dedicated bearer settings as a preparation for a bearer setup via 
CALL:LTE:SIGN:PSWitched:ACTion CONNect
.
Different port ranges can be set for the uplink and for the downlink.
Parameters:
<DefBearerID>
Bearer ID string, selecting the default bearer, to which the dedicated bearer is mapped.
String example: "5 (cmw500.rohde-schwarz.com)"
To query a list of IDs for all established default bearers, see 
CATalog:
​
LTE:
​
SIGN<i>:
​
CONNection:
​
DEFBearer?
.
<Profile>
VOICe |
 
 VIDeo |
 
 DRAM |
 
 DRUM
Selects a dedicated bearer profile
VOICe
: for voice connections
VIDeo
: for video connections
DRAM
: for data connections with RLC acknowledged mode
DRUM
: for data connections with RLC unacknowledged mode
*RST:
DRUM
<TFTportLowDL>
Selects the lower end of the port range for downlink traffic
Range: 
1  to  65535
*RST:
1
<TFTportHighDL>
Selects the upper end of the port range for downlink traffic
Range: 
1  to  65535
*RST:
65535
<TFTportLowUL>
Selects the lower end of the port range for uplink traffic
Range: 
1  to  65535
*RST:
1
<TFTportHighUL>
Selects the upper end of the port range for uplink traffic
Range: 
1  to  65535
*RST:
65535
Firmware/Software: 
V3.5.30
Options: 
R&S CMW-KS510
Manual operation: 
See 
"Connect"
Top