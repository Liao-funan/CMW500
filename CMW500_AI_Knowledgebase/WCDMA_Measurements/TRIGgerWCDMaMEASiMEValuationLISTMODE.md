# TRIGgerWCDMaMEASiMEValuationLISTMODE

Module: WCDMA Measurements
Source: 047ba9c01f2d4879.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
List Mode Settings
 > 
TRIGger:WCDMa:MEAS<i>:MEValuation:LIST:MODE
TRIGger:WCDMa:MEAS<i>:MEValuation:LIST:MODE 
<Mode>
Specifies the trigger mode for list mode measurements. For configuration of retrigger flags, see 
CONFigure:
​
WCDMa:
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
 A trigger event is only required to start the measurement. As a result, the entire range of segments to be measured is captured without additional trigger event. The retrigger flags of the segments are ignored.
SEGMent:
 The retrigger flag of each segment is evaluated. It defines whether the measurement waits for a trigger event before capturing the segment, or not.
*RST:
ONCE
Example: 
See 
"Using WCDMA List Mode"
Firmware/Software: 
V2.0.11
Options: 
R&S CMW-KM012
Top