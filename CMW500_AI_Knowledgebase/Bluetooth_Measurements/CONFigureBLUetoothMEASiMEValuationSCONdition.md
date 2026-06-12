# CONFigureBLUetoothMEASiMEValuationSCONdition

Module: Bluetooth Measurements
Source: d864974e20497.htm

## 原始指令文档说明
Bluetooth
®
 Measurements
 > 
Command Reference
 > 
Bluetooth Multi-Evaluation Measurement Commands
 > 
Measurement Parameters
 > 
CONFigure:BLUetooth:MEAS<i>:MEValuation:SCONdition
CONFigure:BLUetooth:MEAS<i>:MEValuation:SCONdition 
<Stop Condition>
Qualifies whether the measurement is stopped after a failed limit check or continued. 
SLFail
 means that the measurement is stopped and reaches the 
RDY
 state when one of the results exceeds the limits.
Parameters:
<Stop Condition>
NONE |
 
 SLFail
NONE:
 Continue measurement irrespective of the limit check
SLFail:
 Stop measurement on limit failure
*RST:
NONE
Example: 
See 
"Performing Single Shot Measurements"
Firmware/Software: 
V1.0.10.1
Manual operation: 
See 
"Stop Condition"
Top