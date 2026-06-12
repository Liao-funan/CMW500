# CONFigureNIOTMEASiMEValuationLIMitIBEIQOFfset

Module: NBIoT Measurements
Source: b6a872247ca7414a.htm

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
CONFigure:NIOT:MEAS<i>:MEValuation:LIMit:IBE:IQOFfset
CONFigure:NIOT:MEAS<i>:MEValuation:LIMit:IBE:IQOFfset 
<Offset1>, <Offset2>, <Offset3>
Defines I/Q origin offset values used for calculation of an upper limit for the inband emissions. Three different values can be set for three TX power ranges, see 
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
V3.5.10
Top