# FETChGPRFMEASiPLOSsEVALFREQuency

Module: GPRF Measurements
Source: 17fc465848734495.htm

## 原始指令文档说明
GPRF Measurements
 > 
Command Reference
 > 
Pathloss Measurement Commands
 > 
Measurement Results
 > 
FETCh:GPRF:MEAS<i>:PLOSs:EVAL:FREQuency?
FETCh:GPRF:MEAS<i>:PLOSs:EVAL:FREQuency? 
<Connector>
Returns the frequency values of the result table for a selected connector.
The order of the list entries is the same as in the command 
FETCh:
​
GPRF:
​
MEAS<i>:
​
PLOSs:
​
EVAL:
​
GAIN?
. Use this command to check at which frequencies the gain values have been measured.
For possible connector values, see 
"Values for RF Path Selection"
.
Query parameters: 
<Connector>
RF connector for which results are queried
Return values: 
<Reliability>
See 
"Reliability Indicator"
<Frequency>
Comma-separated list of frequency values
Default unit: 
Hz
Example: 
See 
"Pathloss Measurement"
Usage: 
Query only
Firmware/Software: 
V3.7.21
Manual operation: 
See 
"Result table view"
Top