# FETChDATAMEASiIPANalysisVOIMsALL

Module: Data Application Unit
Source: 0637541095cc403a.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Measurements Command Reference
 > 
IP Analysis and Security
 > 
Voice over IMS Results
 > 
FETCh:DATA:MEAS<i>:IPANalysis:VOIMs:ALL?
FETCh:DATA:MEAS<i>:IPANalysis:VOIMs:ALL? 
Queries the call table in the upper part of the "Voice Over IMS" view.
The results are returned row by row (call by call):
<Reliability>, {<ConID>, ..., <UserTo>}
call 1
, {...}
call 2
, ..., {...}
call n
Return values: 
<Reliability>
See 
"Reliability Indicator"
<ConID>
Call ID
<FlowsIDs>
String containing a comma-separated list of the flow IDs related to the call (example "1,2" or "128")
<Type>
AUDio |
 
 VIDeo |
 
 EMER |
 
 UNK
Call type audio, video, emergency or unknown
<Origin>
MT |
 
 MO |
 
 UNK
MT
: mobile-terminating call
MO
: mobile-originating call
UNK
: unknown
<State>
RING |
 
 EST |
 
 REL |
 
 HOLD |
 
 UNK
RING
: DUT ringing
EST
: call established
REL
: call released
HOLD
: call on hold
UNK
: unknown
<StartTime>
String indicating the time when the call setup was initiated
<SetupTime>
Duration of the call setup procedure
Default unit: 
s
<Duration>
Duration of the call
Default unit: 
s
<UserFrom>
String with the user ID or phone number of the calling party
<UserTo>
String with the user ID or phone number of the called party
Example: 
See 
"Performing IP Analysis"
Usage: 
Query only
Firmware/Software: 
V3.2.40
Options: 
R&S CMW-KM051
Manual operation: 
See 
"Table (upper part)"
Top