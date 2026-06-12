# CONFigureWPANMEASiMEValuationSCONdition

Module: LRWPAN Measurements
Source: 52541a748c274c3d.htm

## 原始指令文档说明
LR-WPAN TX Measurement
 > 
Command Reference
 > 
LR-WPAN Multi-Evaluation Measurement Commands
 > 
Measurement Parameters
 > 
CONFigure:WPAN:MEAS<i>:MEValuation:SCONdition
CONFigure:WPAN:MEAS<i>:MEValuation:SCONdition 
<Stop Condition>
Qualifies whether the measurement is stopped after a failed limit check or continued. 
SLFail
 means that the measurement is stopped and reaches the 
RDY
 state as soon as one of the results exceeds the limits.
Parameters:
<Stop Condition>
NONE |
 
 SLFail
NONE:
 continue measurement irrespective of the limit check
SLFail:
 stop measurement on limit failure
*RST:
NONE
Example: 
See 
"Performing Single Shot Measurements"
Firmware/Software: 
V3.5.10
Manual operation: 
See 
"Stop Condition"
Top