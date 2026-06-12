# TRIGgerLTEMEASiMEValuationLISTMODE

Module: LTE Measurements
Source: bc8b6be08d2842d1.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
List Mode Settings
 > 
TRIGger:LTE:MEAS<i>:MEValuation:LIST:MODE
TRIGger:LTE:MEAS<i>:MEValuation:LIST:MODE 
<Mode>
Specifies the trigger mode for list mode measurements. For configuration of retrigger flags, see 
CONFigure:
​
LTE:
​
MEAS<i>:
​
MEValuation:
​
LIST:
​
SEGMent<no>:
​
SETup
.
Parameters:
<Mode>
ONCE |
 
 SEGMent
ONCE:
 A trigger event is only required to start the measurement. As a result, the entire range of segments to be measured is captured without additional trigger event. The retrigger flag of the first segment is evaluated. The other retrigger flags are ignored.
SEGMent:
 The retrigger flag of each segment is evaluated. It defines whether the measurement waits for a trigger event before capturing the segment, or not.
*RST:
ONCE
Example: 
See 
"Specifying List Mode Settings"
Firmware/Software: 
V2.0.10
Options: 
R&S CMW-KM012
Top