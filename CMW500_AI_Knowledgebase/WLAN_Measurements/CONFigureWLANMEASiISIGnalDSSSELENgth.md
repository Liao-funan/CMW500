# CONFigureWLANMEASiISIGnalDSSSELENgth

Module: WLAN Measurements
Source: de3c28dd997745da.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
General Measurement Settings
 > 
Input Signal Settings
 > 
CONFigure:WLAN:MEAS<i>:ISIGnal:DSSS:ELENgth
CONFigure:WLAN:MEAS<i>:ISIGnal:DSSS:ELENgth 
<EvaluationLength>[, <SkipPH>]
Specifies the evaluation length of the burst for DSSS signals. Only for R&S
 
CMW100/CMW with MUA.
Parameters:
<EvaluationLength>
Number of payload chips
Range: 
1000  to  362472
*RST:
1000
<SkipPH>
OFF |
 
 ON
OFF
: measure also preamble and header
ON
: skip preamble and header
*RST:
ON
Firmware/Software: 
V3.5.121
Manual operation: 
See 
"Evaluation Length"
Top