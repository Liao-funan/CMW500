# TRIGgerGSMMEASiMEValuationLISTMODE

Module: GSM Measurements
Source: 8bc8ac1cf69e40de.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
List Mode Settings
 > 
TRIGger:GSM:MEAS<i>:MEValuation:LIST:MODE
TRIGger:GSM:MEAS<i>:MEValuation:LIST:MODE 
<Mode>
Specifies whether a trigger event initiates a measurement of the entire measurement interval (comprising the number of segments defined via 
CONFigure:
​
GSM:
​
MEAS<i>:
​
MEValuation:
​
LIST:
​
LRANge
) or a measurement of single segment.
Parameters:
<Mode>
ONCE |
 
 SEGMent
ONCE:
 A trigger event is only required to start the measurement. The entire range of segments to be measured is captured without additional trigger event. The retrigger flags of the segments are ignored.
SEGMent:
 The retrigger flag of each segment is evaluated. It defines whether the measurement waits for a trigger event before capturing the segment, or not.
*RST:
ONCE
Firmware/Software: 
V1.0.15.0 (retrigger mechanism changed in V2.0.10)
Options: 
R&S CMW-KM012
Top