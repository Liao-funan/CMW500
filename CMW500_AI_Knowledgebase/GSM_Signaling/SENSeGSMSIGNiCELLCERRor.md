# SENSeGSMSIGNiCELLCERRor

Module: GSM Signaling
Source: 6dbbcc6448bf4cef.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
Network Settings
 > 
Cell
 > 
SENSe:GSM:SIGN<i>:CELL:CERRor?
SENSe:GSM:SIGN<i>:CELL:CERRor? 
SENSe:GSM:SIGN<i>:CELL:PSWitched:CERRor? 
Returns error information related to the active CS/PS connection.
Return values: 
<ConnectionError>
NERRor |
 
 REJected |
 
 RLTimeout |
 
 PTIMeout |
 
 STIMeout |
 
 IGNored |
 
 ATIMeout
NERRor
: no error
REJected
: connection rejected
RLTimeout
: radio link timeout
PTIMeout
: paging timeout
STIMeout
: signaling timeout
IGNored
: connection ignored
ATIMeout
: alerting timeout
Example: 
See 
"Configuring Cell Parameters"
Usage: 
Query only
Firmware/Software: 
V3.2.30
V3.2.70: added 
ATIM
Manual operation: 
See 
"Connection Error (CS and PS)"
Top