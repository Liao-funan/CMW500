# CONFigureNIOTMEASiMEValuationLIMitFERRor

Module: NBIoT Measurements
Source: f80fe6b012374742.htm

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
CONFigure:NIOT:MEAS<i>:MEValuation:LIMit:FERRor
CONFigure:NIOT:MEAS<i>:MEValuation:LIMit:FERRor 
<FreqErrEnable>, <FreqErrLow>, <FreqErrHigh>
Defines upper limits for the carrier frequency error.
Parameters:
<FreqErrEnable>
OFF |
 
 ON
OFF
: disables the limit check
ON
: enables the limit check
*RST:
ON
<FreqErrLow>
Upper limit for frequencies up to 1 GHz
Range: 
0 ppm  to  1 ppm
*RST:
0.2 ppm
<FreqErrHigh>
Upper limit for frequencies above 1 GHz
Range: 
0 ppm  to  1 ppm
*RST:
0.1 ppm
Example: 
See 
"Specifying Limits"
Firmware/Software: 
V3.5.10
Top