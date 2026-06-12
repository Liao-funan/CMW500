# FETChBLUetoothMEASiMEValuationMODulationBRATeSDEViation

Module: Bluetooth Measurements
Source: 9b42fed8e8144928.htm

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
FETCh:BLUetooth:MEAS<i>:MEValuation:MODulation:BRATe:SDEViation?
FETCh:BLUetooth:MEAS<i>:MEValuation:MODulation:BRATe:SDEViation? 
READ:BLUetooth:MEAS<i>:MEValuation:MODulation:BRATe:SDEViation? 
CALCulate:BLUetooth:MEAS<i>:MEValuation:MODulation:BRATe:SDEViation? 
Returns the standard deviation of the modulation results for BR packets.
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
0 Hz  to  +125.0 kHz
Default unit: 
Hz
<4_Freq. Accuracy>
Range: 
-0.0 kHz  to  +250.0 kHz
Default unit: 
Hz
<5_Freq. Drift>
Range: 
-0.0 kHz  to  +250.0 kHz
Default unit: 
Hz
<6_Max. Drift Rate>
Range: 
0.0E+6 Hz  to  0.99999E+6 Hz/50 μs
Default unit: 
Hz/50 μs
<7_NominalPower>
Average power during the carrier-on state
Range: 
0 dB to 79 dB
Default unit: 
dB
<8_ModRatio>
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