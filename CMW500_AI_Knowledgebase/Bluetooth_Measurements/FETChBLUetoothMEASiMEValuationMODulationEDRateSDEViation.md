# FETChBLUetoothMEASiMEValuationMODulationEDRateSDEViation

Module: Bluetooth Measurements
Source: 7d1891d9f45f459d.htm

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
Modulation Measurement Results (EDR)
 > 
FETCh:BLUetooth:MEAS<i>:MEValuation:MODulation:EDRate:SDEViation?
FETCh:BLUetooth:MEAS<i>:MEValuation:MODulation:EDRate:SDEViation? 
READ:BLUetooth:MEAS<i>:MEValuation:MODulation:EDRate:SDEViation? 
CALCulate:BLUetooth:MEAS<i>:MEValuation:MODulation:EDRate:SDEViation? 
Returns the standard deviation of the modulation results for EDR packets.
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
"EDR"
.
Range: 
0 %  to  50 %
Default unit: 
%
<3_ωi>
Standard deviation of the initial center frequency error
Range: 
-0.0 kHz  to  +240.0 kHz
Default unit: 
Hz
<4_ω0 + ωi>
Standard deviation of the overall uncompensated frequency error
Range: 
-0.0 kHz  to  +240.0 kHz
Default unit: 
Hz
<5_ω0max>
Standard deviation of the maximum compensated frequency error
Range: 
-0.0 kHz  to  +240.0 kHz
Default unit: 
Hz
<6_RMS DEVM>
Standard deviation of the differential EVM results
Range: 
0.000  to  0.500
Default unit: 
1
<7_Peak DEVM>
Range: 
0.000  to  0.500
Default unit: 
1
<8_P99 DEVM>
Range: 
0.000  to  0.500
Default unit: 
1
<9_Nominal Pow>
Standard deviation of the average power during the carrier-on state
Range: 
0.0 dB  to  +79.0 dB
Default unit: 
dB
Example: 
See 
"Performing Single Shot Measurements"
Usage: 
Query only
Firmware/Software: 
V1.0.10.1
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top