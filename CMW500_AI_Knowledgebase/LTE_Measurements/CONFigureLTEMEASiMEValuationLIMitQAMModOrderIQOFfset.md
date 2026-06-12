# CONFigureLTEMEASiMEValuationLIMitQAMModOrderIQOFfset

Module: LTE Measurements
Source: b86449659f6d402f.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Limits (Modulation, 16-QAM / 64-QAM)
 > 
CONFigure:LTE:MEAS<i>:MEValuation:LIMit:QAM<ModOrder>:IQOFfset
CONFigure:LTE:MEAS<i>:MEValuation:LIMit:QAM<ModOrder>:IQOFfset 
<Enable>, <Offset1>, <Offset2>, <Offset3>
Defines upper limits for the I/Q origin offset (16-QAM or 64-QAM modulation). Three different I/Q origin offset limits can be set for three TX power ranges. For details, see 
"I/Q Origin Offset Limits"
.
Suffix: 
<ModOrder>
16, 64
16-QAM or 64-QAM
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
V1.0.10.1
Top