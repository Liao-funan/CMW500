# CONFigureLTEMEASiMEValuationLIMitQPSKIQOFfset

Module: LTE Measurements
Source: 98760fe16e7a47e3.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Limits (Modulation, QPSK)
 > 
CONFigure:LTE:MEAS<i>:MEValuation:LIMit:QPSK:IQOFfset
CONFigure:LTE:MEAS<i>:MEValuation:LIMit:QPSK:IQOFfset 
<Enable>, <Offset1>, <Offset2>, <Offset3>
Defines upper limits for the I/Q origin offset (QPSK modulation). Three different I/Q origin offset limits can be set for three TX power ranges. For details, see 
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
V1.0.10.1
Top