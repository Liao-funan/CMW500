# FETChBLUetoothMEASiMEValuationMODulationBRATeMINimum

Module: Bluetooth Measurements
Source: 79c16622c7f3467e.htm

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
Modulation Measurement Results (BR)
 > 
FETCh:BLUetooth:MEAS<i>:MEValuation:MODulation:BRATe:MINimum?
FETCh:BLUetooth:MEAS<i>:MEValuation:MODulation:BRATe:MINimum? 
READ:BLUetooth:MEAS<i>:MEValuation:MODulation:BRATe:MINimum? 
CALCulate:BLUetooth:MEAS<i>:MEValuation:MODulation:BRATe:MINimum? 
Returns the minimum modulation results for BR packets.
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
MODulation
) exceeding the specified limits, see 
"BR"
.
Range: 
0 %  to  100 %
Default unit: 
%
<3_Δf2 99.9%>
Range: 
0 Hz  to  +250.0 kHz
Default unit: 
Hz
<4_Δf1 avg>
Frequency deviation results
Range: 
0 Hz  to  +250.0 kHz
Default unit: 
Hz
<5_Δf1 min>
Range: 
0 Hz  to  +250.0 kHz
Default unit: 
Hz
<6_Δf1 max>
Range: 
0 Hz  to  +250.0 kHz
Default unit: 
Hz
<7_Δf2 avg>
Range: 
0 Hz  to  +250.0 kHz
Default unit: 
Hz
<8_Δf2 min>
Range: 
0 Hz  to  +250.0 kHz
Default unit: 
Hz
<9_Δf2 max>
Range: 
0 Hz  to  +250.0 kHz
Default unit: 
Hz
<10_Nominal Pow>
Average power during the carrier-on state
Range: 
-128.0 dBm  to  +30.0 dBm
Default unit: 
dBm
<11_ModRatio>
Modulation ratio Δf2 avg / Δf1 avg
Range: 
0 to >1
Example: 
See 
"Continuous, BR and LE Measurements"
Usage: 
Query only
Firmware/Software: 
V1.0.10.1 (modulation ratio added in V2.0.20)
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top