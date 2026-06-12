# CALCulateWCDMaMEASiOOSYnc

Module: WCDMA Measurements
Source: c356999b1e02430e.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA Out-Of-Sync Handling Measurement
 > 
Command Reference
 > 
Out-Of-Sync Handling Measurement Commands
 > 
Results
 > 
CALCulate:WCDMa:MEAS<i>:OOSYnc?
CALCulate:WCDMa:MEAS<i>:OOSYnc? 
FETCh:WCDMa:MEAS<i>:OOSYnc? 
READ:WCDMa:MEAS<i>:OOSYnc? 
Return the results of out-of-synchronization handling measurement.
Return values: 
<Reliability>
See 
"Reliability Indicator"
<OutPowABmax>
Maximal output power measured in interval A-B
Default unit: 
dBm
<OutPowABmin>
Minimal output power measured in interval A-B
Default unit: 
dBm
<OutPowCcurrent>
Output power measured for point C
Default unit: 
dBm
<OutPowCState>
OFF |
 
 NOFF
State of output power for point C
OFF
: UE transmitter off
NOFF
: UE transmitter not off
<OutPowCDmax>
Maximal output power measured in interval C-D
Default unit: 
dBm
<OutPowCDmin>
Minimal output power measured in interval C-D
Default unit: 
dBm
<OutPowDEmax>
Maximal output power measured in interval D-E
Default unit: 
dBm
<OutPowDEmin>
Minimal output power measured in interval D-E
Default unit: 
dBm
<OutPowFCurrent>
Output power measured for point F
Default unit: 
dBm
<OutPowFState>
ON |
 
 NON
State of output power for point F
ON
: UE transmitter on
NON
: UE transmitter not on
Example: 
See 
"Performing Measurements"
Usage: 
Query only
Firmware/Software: 
V3.5.50
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top