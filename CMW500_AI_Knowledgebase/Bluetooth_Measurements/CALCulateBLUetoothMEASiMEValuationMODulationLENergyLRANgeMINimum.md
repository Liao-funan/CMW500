# CALCulateBLUetoothMEASiMEValuationMODulationLENergyLRANgeMINimum

Module: Bluetooth Measurements
Source: 3f3bcc5b79c546b4.htm

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
CALCulate:BLUetooth:MEAS<i>:MEValuation:MODulation:LENergy:LRANge:MINimum?
CALCulate:BLUetooth:MEAS<i>:MEValuation:MODulation:LENergy:LRANge:MINimum? 
FETCh:BLUetooth:MEAS<i>:MEValuation:MODulation:LENergy:LRANge:MINimum? 
READ:BLUetooth:MEAS<i>:MEValuation:MODulation:LENergy:LRANge:MINimum? 
Returns current, average and maximum modulation results for LE coded PHY, see 
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
-0.99999E+6 Hz  to  0.99999E+6 Hz
Default unit: 
Hz
<4_Δf1 avg>
Frequency deviation results
Range: 
-0.99999E+6 Hz  to  0.99999E+6 Hz
Default unit: 
Hz
<5_Δf1 min>
Range: 
-0.99999E+6 Hz  to  0.99999E+6 Hz
Default unit: 
Hz
<6_Δf1 max>
Range: 
-0.99999E+6 Hz  to  0.99999E+6 Hz
Default unit: 
Hz
<7_Nominal Pow>
Range: 
-99.99 dBm  to  99.99 dBm
Default unit: 
dBm
Usage: 
Query only
Firmware/Software: 
V3.5.70
Options: 
R&S CMW-KM721
Top