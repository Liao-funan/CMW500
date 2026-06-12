# FETChBLUetoothMEASiMEValuationSGACpEDRate

Module: Bluetooth Measurements
Source: f67eec0743054227.htm

## 原始指令文档说明
Bluetooth
®
 Measurements
 > 
Command Reference
 > 
Bluetooth Multi-Evaluation Measurement Commands
 > 
Measurement Results
 > 
Spectrum Measurement Results (EDR)
 > 
FETCh:BLUetooth:MEAS<i>:MEValuation:SGACp:EDRate?
FETCh:BLUetooth:MEAS<i>:MEValuation:SGACp:EDRate? 
READ:BLUetooth:MEAS<i>:MEValuation:SGACp:EDRate? 
CALCulate:BLUetooth:MEAS<i>:MEValuation:SGACp:EDRate? 
Returns the "Spectrum Gated ACP" results for EDR packets (single values).
The values described below are returned by 
FETCh
 and 
READ
 commands. 
CALCulate
 commands return limit check results instead, one value for each result listed below.
The number to the left of each result parameter is provided for easy identification of the parameter position within the result array.
Return values: 
<1_Reliability>
"Reliability Indicator"
<2_Out of Tol>
Out of tolerance result, i.e. percentage of measurement intervals of the statistic count (
CONFigure:
​
BLUetooth:
​
MEAS<i>:
​
MEValuation:
​
SCOunt:
​
SGACp
) exceeding the specified limits, see 
"Spectrum Limits"
.
Range: 
0 %  to  100 %
Default unit: 
%
<3_Nominal Pow>
Average power during the carrier-on state
Range: 
-128.0 dBm  to  +30.0 dBm
Default unit: 
dBm
<4_No of Except>
Number of exceptions (channels 
±
3, 
±
4 ... with an ACP above the "Exception PTx" threshold )
Range: 
0  to  74
<5_PTxRef>
Reference power P
TXref
, measured in the center channel
Range: 
-128.0 dBm  to  +30.0 dBm
Default unit: 
dBm
<6_N26ChN1Abs>
Absolute P
TX – 26 dB
 value for channel 
–
1, maximum value
Range: 
-128.0 dBm  to  +30.0 dBm
Default unit: 
dBm
<7_N26ChP1Abs>
Absolute P
TX – 26 dB
 value for channel +1, maximum value
Range: 
-128.0 dBm  to  +30.0 dBm
Default unit: 
dBm
<8_N26ChN1Rel>
Relative P
TX – 26 dB
 value for channel 
–
1, maximum value
Range: 
-99.99 dB  to  +99.99 dB
Default unit: 
dB
<9_N26ChP1Rel>
Relative P
TX – 26 dB
 value for channel +1, maximum value
Range: 
-99.99 dB  to  +99.99 dB
Default unit: 
dB
Example: 
See 
"Spectrum Measurements"
Usage: 
Query only
Firmware/Software: 
V2.0.20
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top