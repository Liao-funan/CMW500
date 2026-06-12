# FETChGPRFMEASiPOWerIQData

Module: GPRF Measurements
Source: 13139740647a41bc.htm

## 原始指令文档说明
GPRF Measurements
 > 
Command Reference
 > 
Power Measurement Commands
 > 
Results for List Mode
 > 
FETCh:GPRF:MEAS<i>:POWer:IQData?
FETCh:GPRF:MEAS<i>:POWer:IQData? 
<ListIndex>[, <ResultIndex>]
READ:GPRF:MEAS<i>:POWer:IQData? 
<ListIndex>[, <ResultIndex>]
Returns the results of the I/Q data measurement in a particular frequency/level step <index> in ASCII format.
With the optional <ResultIndex> parameter, it is also possible to get results for a particular list index repetition.
Query parameters: 
<ListIndex>
Range: 
0 to 3999
<ResultIndex>
Range: 
0 to #repetitions of <ListIndex>
Return values: 
<Reliablity>
See 
"Reliability Indicator"
<IQData>
I and Q amplitudes in alternating order. The values depend on the selected magnitude unit (
CONFigure:
​
GPRF:
​
MEAS<i>:
​
POWer:
​
LIST:
​
MUNit
.
Range: 
-160 V to 160 V
Default unit: 
V
Example: 
See 
"Performing an I/Q Data Measurement"
Usage: 
Query only
Firmware/Software: 
V3.2.10
Top