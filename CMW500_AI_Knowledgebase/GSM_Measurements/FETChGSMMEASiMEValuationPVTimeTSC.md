# FETChGSMMEASiMEValuationPVTimeTSC

Module: GSM Measurements
Source: 126b692863ca41b0.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Power vs. Time Results (Single Values)
 > 
FETCh:GSM:MEAS<i>:MEValuation:PVTime:TSC?
FETCh:GSM:MEAS<i>:MEValuation:PVTime:TSC? 
Returns the detected training sequence code (TSC) and burst type for all measured timeslots. 8 values are returned, irrespective of the "No. of Slots" measured (
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
<TSC>
OFF |
 
 NB0 |
 
 NB1 |
 
 NB2 |
 
 NB3 |
 
 NB4 |
 
 NB5 |
 
 NB6 |
 
 NB7 |
 
 DUMMy |
 
 AB0 |
 
 AB1 |
 
 AB2 |
 
 AB3 |
 
 AB4 |
 
 AB5 |
 
 AB6 |
 
 AB7
Detected TSC (8 values):
OFF:
 Inactive slot
NB0 ... NB7:
 Normal burst, training sequence TSC0 to TSC7
DUMMY:
 Dummy burst
AB0 ... AB7:
 Access burst, TSC 0 to TSC7
Example: 
See 
"Performing Single-Shot Measurements"
Usage: 
Query only
Firmware/Software: 
V2.0.10
V3.7.10 added 
<TSC> AB3 to AB7
Top