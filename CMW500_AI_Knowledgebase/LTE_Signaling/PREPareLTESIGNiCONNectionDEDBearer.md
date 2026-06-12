# PREPareLTESIGNiCONNectionDEDBearer

Module: LTE Signaling
Source: 435ae95ffc034a2c.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Connection Control and States
 > 
Connect/Disconnect Preparation
 > 
PREPare:LTE:SIGN<i>:CONNection:DEDBearer
PREPare:LTE:SIGN<i>:CONNection:DEDBearer 
<DefBearerID>, <Profile>, <TFTportLow>, <TFTportHigh>
Configures dedicated bearer settings as a preparation for a bearer setup via 
CALL:LTE:SIGN:PSWitched:ACTion CONNect
.
The same port range is used for the uplink and for the downlink.
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
<TFTportLow>
Selects the lower end of the port range, for which traffic is routed to the dedicated bearer
Range: 
1  to  65535
*RST:
1
<TFTportHigh>
Selects the upper end of the port range
Range: 
1  to  65535
*RST:
65535
Example: 
See 
"Connecting/Releasing Dedicated Bearers"
Firmware/Software: 
V3.2.80
Options: 
R&S CMW-KS510
Manual operation: 
See 
"Connect"
Top