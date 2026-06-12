# CALCulateBLUetoothMEASiMEValuationMODulationLENergyLRANgeCURRent

Module: Bluetooth Measurements
Source: 982ccb7adb964428.htm

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
Modulation Measurement Results (LE)
 > 
CALCulate:BLUetooth:MEAS<i>:MEValuation:MODulation:LENergy:LRANge:CURRent?
CALCulate:BLUetooth:MEAS<i>:MEValuation:MODulation:LENergy:LRANge:CURRent? 
CALCulate:BLUetooth:MEAS<i>:MEValuation:MODulation:LENergy:LRANge:AVERage? 
CALCulate:BLUetooth:MEAS<i>:MEValuation:MODulation:LENergy:LRANge:XMINimum? 
CALCulate:BLUetooth:MEAS<i>:MEValuation:MODulation:LENergy:LRANge:XMAXimum? 
CALCulate:BLUetooth:MEAS<i>:MEValuation:MODulation:LENergy:LRANge:MAXimum? 
FETCh:BLUetooth:MEAS<i>:MEValuation:MODulation:LENergy:LRANge:CURRent? 
FETCh:BLUetooth:MEAS<i>:MEValuation:MODulation:LENergy:LRANge:AVERage? 
FETCh:BLUetooth:MEAS<i>:MEValuation:MODulation:LENergy:LRANge:XMINimum? 
FETCh:BLUetooth:MEAS<i>:MEValuation:MODulation:LENergy:LRANge:XMAXimum? 
FETCh:BLUetooth:MEAS<i>:MEValuation:MODulation:LENergy:LRANge:MAXimum? 
READ:BLUetooth:MEAS<i>:MEValuation:MODulation:LENergy:LRANge:CURRent? 
READ:BLUetooth:MEAS<i>:MEValuation:MODulation:LENergy:LRANge:AVERage? 
READ:BLUetooth:MEAS<i>:MEValuation:MODulation:LENergy:LRANge:XMINimum? 
READ:BLUetooth:MEAS<i>:MEValuation:MODulation:LENergy:LRANge:XMAXimum? 
READ:BLUetooth:MEAS<i>:MEValuation:MODulation:LENergy:LRANge:MAXimum? 
Returns the current, average, absolute min (xmin), absolute max (xmax), and max modulation results for LE coded PHY, see 
"Statistical Modulation Results (LE)"
.
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
"Limits (Modulation LE)"
.
Range: 
0 %  to  100 %
Default unit: 
%
<3_Δf1 99.9%>
Range: 
0 Hz  to  250.0 kHz
Default unit: 
Hz
<4_Freq. Accuracy>
Range: 
-0.99999E+6 Hz  to  0.99999E+6 Hz
Default unit: 
Hz
<5_Freq. Drift>
Range: 
-0.99999E+6 Hz  to  0.99999E+6 Hz
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
-0.99999E+6 Hz  to  0.99999E+6 Hz
Default unit: 
Hz
<8_Δf1 min>
Range: 
-0.99999E+6 Hz  to  0.99999E+6 Hz
Default unit: 
Hz
<9_Δf1 max>
Range: 
-0.99999E+6 Hz  to  0.99999E+6 Hz
Default unit: 
Hz
<10_Nominal Pow>
Range: 
-99.99 dBm  to  99.99 dBm
Default unit: 
dBm
<11_Freq. Offset>
Range: 
-0.99999E+6 Hz  to  0.99999E+6 Hz
Default unit: 
Hz
Example: 
See 
"Continuous, BR and LE Measurements"
Usage: 
Query only
Firmware/Software: 
V3.5.70, V3.7.40 added commands for 
:XMAXimum:
 and 
:XMINimum:
Options: 
R&S CMW-KM721
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top