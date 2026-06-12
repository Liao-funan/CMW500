# CONFigureLTEMEASiMEValuationLIMitQPSKIBEIQOFfset

Module: LTE Measurements
Source: d7342691e17599.htm

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
CONFigure:LTE:MEAS<i>:MEValuation:LIMit:QPSK:IBE:IQOFfset
CONFigure:LTE:MEAS<i>:MEValuation:LIMit:QPSK:IBE:IQOFfset 
<Offset1>, <Offset2>, <Offset3>
Defines I/Q origin offset values used for calculation of an upper limit for the inband emission (QPSK modulation). Three different values can be set for three TX power ranges, see 
"Inband Emissions Limits"
.
Parameters:
<Offset1>
Offset for high TX power range
Range: 
-256 dBc  to  256 dBc
*RST:
-24.2 dBc
Default unit: 
dBc
<Offset2>
Offset for intermediate TX power range
Range: 
-256 dBc  to  256 dBc
*RST:
-19.2 dBc
Default unit: 
dBc
<Offset3>
Offset for low TX power range
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