# CONFigureNIOTMEASiMEValuationLIMitIQOFfset

Module: NBIoT Measurements
Source: c8bb643db3c7453d.htm

## 原始指令文档说明
NB-IoT Measurements
 > 
NB-IoT Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Limits Modulation
 > 
CONFigure:NIOT:MEAS<i>:MEValuation:LIMit:IQOFfset
CONFigure:NIOT:MEAS<i>:MEValuation:LIMit:IQOFfset 
<Enable>, <Offset1>, <Offset2>, <Offset3>
Defines upper limits for the I/Q origin offset. Three different limits can be set for three TX power ranges. For details, see 
"I/Q Origin Offset Limits"
.
Parameters:
<Enable>
OFF |
 
 ON
OFF
: disables the limit check
ON
: enables the limit check
*RST:
ON
<Offset1>
I/Q origin offset limit for high TX power range
Range: 
-256 dBc  to  256 dBc
*RST:
-24.2 dBc
Default unit: 
dBc
<Offset2>
I/Q origin offset limit for intermediate TX power range
Range: 
-256 dBc  to  256 dBc
*RST:
-19.2 dBc
Default unit: 
dBc
<Offset3>
I/Q origin offset limit for low TX power range
Range: 
-256 dBc  to  256 dBc
*RST:
-9.2 dBc
Default unit: 
dBc
Example: 
See 
"Specifying Limits"
Firmware/Software: 
V3.5.10
Top