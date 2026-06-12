# FETChBLUetoothMEASiMEValuationMODulationBRATeCURRent

Module: Bluetooth Measurements
Source: 5dbd58f546d7466a.htm

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
FETCh:BLUetooth:MEAS<i>:MEValuation:MODulation:BRATe:CURRent?
FETCh:BLUetooth:MEAS<i>:MEValuation:MODulation:BRATe:CURRent? 
FETCh:BLUetooth:MEAS<i>:MEValuation:MODulation:BRATe:AVERage? 
FETCh:BLUetooth:MEAS<i>:MEValuation:MODulation:BRATe:XMINimum? 
FETCh:BLUetooth:MEAS<i>:MEValuation:MODulation:BRATe:XMAXimum? 
FETCh:BLUetooth:MEAS<i>:MEValuation:MODulation:BRATe:MAXimum? 
READ:BLUetooth:MEAS<i>:MEValuation:MODulation:BRATe:CURRent? 
READ:BLUetooth:MEAS<i>:MEValuation:MODulation:BRATe:AVERage? 
READ:BLUetooth:MEAS<i>:MEValuation:MODulation:BRATe:MAXimum? 
READ:BLUetooth:MEAS<i>:MEValuation:MODulation:BRATe:XMINimum? 
READ:BLUetooth:MEAS<i>:MEValuation:MODulation:BRATe:XMAXimum? 
CALCulate:BLUetooth:MEAS<i>:MEValuation:MODulation:BRATe:CURRent? 
CALCulate:BLUetooth:MEAS<i>:MEValuation:MODulation:BRATe:AVERage? 
CALCulate:BLUetooth:MEAS<i>:MEValuation:MODulation:BRATe:XMINimum? 
CALCulate:BLUetooth:MEAS<i>:MEValuation:MODulation:BRATe:XMAXimum? 
CALCulate:BLUetooth:MEAS<i>:MEValuation:MODulation:BRATe:MAXimum? 
Returns the current, average, absolute min (xmin), absolute max (xmax), and max modulation results for BR packets.
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
See 
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
<4_Freq. Accuracy>
Range: 
-250.0 kHz  to  +250.0 kHz
Default unit: 
Hz
<5_Freq. Drift>
Range: 
-250.0 kHz  to  +250.0 kHz
Default unit: 
Hz
<6_Max. Drift Rate>
Range: 
-0.99999E+6 Hz/50 μs  to  0.99999E+6 Hz/50 μs
Default unit: 
Hz/50 μs
<7_Δf1 avg>
Frequency deviation results
Range: 
0 Hz  to  +250.0 kHz
Default unit: 
Hz
<8_Δf1 min>
Range: 
0 Hz  to  +250.0 kHz
Default unit: 
Hz
<9_Δf1 max>
Range: 
0 Hz  to  +250.0 kHz
Default unit: 
Hz
<10_Δf2 avg>
Range: 
0 Hz  to  +250.0 kHz
Default unit: 
Hz
<11_Δf2 min>
Range: 
0 Hz  to  +250.0 kHz
Default unit: 
Hz
<12_Δf2 max>
Range: 
0 Hz  to  +250.0 kHz
Default unit: 
Hz
<13_Nominal Pow>
Average power during the carrier-on state
Range: 
-128.0 dBm  to  +30.0 dBm
Default unit: 
dBm
<14_ModRatio>
Modulation ratio Δf2 avg / Δf1 avg
Range: 
0 to >1
Example: 
See 
"Continuous, BR and LE Measurements"
Usage: 
Query only
Firmware/Software: 
V1.0.10.1, V2.0.20 added <14_ModRatio>, V3.7.40 added commands for 
:XMAXimum:
 and 
:XMINimum:
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top