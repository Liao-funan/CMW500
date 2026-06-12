# CALCulateBLUetoothMEASiMEValuationMODulationLENergy[LE1M]SDEViation

Module: Bluetooth Measurements
Source: 8d13c23bb4fb4e74.htm

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
CALCulate:BLUetooth:MEAS<i>:MEValuation:MODulation:LENergy[:LE1M]:SDEViation?
CALCulate:BLUetooth:MEAS<i>:MEValuation:MODulation:LENergy[:LE1M]:SDEViation? 
FETCh:BLUetooth:MEAS<i>:MEValuation:MODulation:LENergy[:LE1M]:SDEViation? 
READ:BLUetooth:MEAS<i>:MEValuation:MODulation:LENergy[:LE1M]:SDEViation? 
CALCulate:BLUetooth:MEAS<i>:MEValuation:MODulation:LENergy:LE2M:SDEViation? 
FETCh:BLUetooth:MEAS<i>:MEValuation:MODulation:LENergy:LE2M:SDEViation? 
READ:BLUetooth:MEAS<i>:MEValuation:MODulation:LENergy:LE2M:SDEViation? 
Returns the standard deviation of the modulation results for LE uncoded PHY (LE 1M PHY, LE 2M PHY), see 
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
<3_Δf2 99.9%>
Range: 
-0.99999E+6 Hz  to  0.99999E+6 Hz
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
-0.99999E+6 Hz  to  0.99999E+6 Hz
Default unit: 
Hz
<7_NominalPower>
Average power during the carrier-on state
Range: 
-99.99 dBm  to  99.99 dBm
Default unit: 
dBm
<8_ModRatio>
Range: 
0 to >1
<9_Freq. Offset>
Range: 
-0.99999E+6 Hz  to  0.99999E+6 Hz
Default unit: 
Hz
<10_Initial Freq. Drift>
Range: 
-0.99999E+6 Hz  to  0.99999E+6 Hz
Default unit: 
Hz
Usage: 
Query only
Firmware/Software: 
V3.5.70
Options: 
R&S CMW-KM611
R&S CMW-KM721 for LE2M
Top