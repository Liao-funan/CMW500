# FETChGPRFMEASiPOWerIQDataBIN

Module: GPRF Measurements
Source: de0a13f7be0d4d9e.htm

## 原始指令文档说明
GPRF Measurements
 > 
Command Reference
 > 
Power Measurement Commands
 > 
Results for List Mode
 > 
FETCh:GPRF:MEAS<i>:POWer:IQData:BIN?
FETCh:GPRF:MEAS<i>:POWer:IQData:BIN? 
<ListIndex>[, <ResultIndex>]
Returns the results of the I/Q data measurement in a particular frequency/level step <index> in binary data format.
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
I and Q amplitudes (binary) in alternating order. See 
Table "Returned <IQData>"
 below. The values depend on the selected magnitude unit (
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
-160.0 to 160.0 if magnitude unit is VOLT, -32768.0 to 32767.0 if magnitude unit is RAW
Example: 
See 
"Performing an I/Q Data Measurement"
Usage: 
Query only
Firmware/Software: 
V3.2.10
Returned <IQData>
Parameter
Description
#L
Number of digits of the following counter N
N
Total number of the following data bytes (N=8*n)
<I_1><Q_1> ...
<I_n><Q_n>
I and Q amplitudes in alternating order. Each amplitude value consists of 4 bytes.
EOS
End of string character
See also 
"ASCII and Binary Data Formats"
.
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top