# FETChGSMMEASiMEValuationPVTimeBTYPe

Module: GSM Measurements
Source: d35e23827.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Power vs. Time Results (Single Values)
 > 
FETCh:GSM:MEAS<i>:MEValuation:PVTime:BTYPe?
FETCh:GSM:MEAS<i>:MEValuation:PVTime:BTYPe? 
Returns the detected burst type for all measured timeslots. 8 values are returned, irrespective of the "No. of Slots" measured (
CONFigure:
​
GSM:
​
MEAS<i>:
​
MEValuation:
​
MSLots
). If "No. of Slots" < 8, some of the returned values are 
NAN
.
Return values: 
<Reliability>
"Reliability Indicator"
<BurstType>
OFF |
 
 GMSK |
 
 EPSK |
 
 ACCess |
 
 Q16
Detected burst type (8 values):
GMSK:
 Normal burst, GMSK-modulated
EPSK:
 Normal burst, 8PSK-modulated
ACCess:
 Access burst
Q16:
 Normal burst, 16-QAM-modulated
OFF:
 Inactive slot
Example: 
See 
"Performing Single-Shot Measurements"
Usage: 
Query only
Firmware/Software: 
V2.0.10
Options: 
R&S CMW-KM201 (for 16-QAM)
Top