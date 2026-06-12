# FETChGSMMEASiMEValuationPVTimeRSTiming

Module: GSM Measurements
Source: 5db69a8b3cf54263.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Power vs. Time Results (Single Values)
 > 
FETCh:GSM:MEAS<i>:MEValuation:PVTime:RSTiming?
FETCh:GSM:MEAS<i>:MEValuation:PVTime:RSTiming? 
Returns the slot timing for all measured timeslots, relative to the timing of the "Measurement Slot". The relative slot timing of the "Measurement Slot" is always zero. The relative slot timing of the other timeslots is the deviation of the measured relative timing from the nominal timing. The nominal timing is based on a timeslot length of 156.25 symbol durations.
The command returns 8 values, irrespective of the "No. of Slots" measured (
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
<RelSlotTiming>
Range: 
-1500 Sym  to  1500 Sym
Default unit: 
Symbols
Example: 
See 
"Performing Single-Shot Measurements"
Usage: 
Query only
Firmware/Software: 
V2.0.10
Top