# FETChBLUetoothMEASiMEValuationMODulationEDRateCURRent

Module: Bluetooth Measurements
Source: 943744a4f8ec468f.htm

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
FETCh:BLUetooth:MEAS<i>:MEValuation:MODulation:EDRate:CURRent?
FETCh:BLUetooth:MEAS<i>:MEValuation:MODulation:EDRate:CURRent? 
FETCh:BLUetooth:MEAS<i>:MEValuation:MODulation:EDRate:AVERage? 
FETCh:BLUetooth:MEAS<i>:MEValuation:MODulation:EDRate:MAXimum? 
READ:BLUetooth:MEAS<i>:MEValuation:MODulation:EDRate:CURRent? 
READ:BLUetooth:MEAS<i>:MEValuation:MODulation:EDRate:AVERage? 
READ:BLUetooth:MEAS<i>:MEValuation:MODulation:EDRate:MAXimum? 
CALCulate:BLUetooth:MEAS<i>:MEValuation:MODulation:EDRate:CURRent? 
CALCulate:BLUetooth:MEAS<i>:MEValuation:MODulation:EDRate:AVERage? 
CALCulate:BLUetooth:MEAS<i>:MEValuation:MODulation:EDRate:MAXimum? 
Returns the modulation results for EDR packets.
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
0 %  to  100 %
Default unit: 
%
<3_ωi>
Initial center frequency error
Range: 
-240.0 kHz  to  +240.0 kHz
Default unit: 
Hz
<4_ω0 + ωi>
Overall uncompensated frequency error
Range: 
-240.0 kHz  to  +240.0 kHz
Default unit: 
Hz
<5_ω0max>
Maximum compensated frequency error
Range: 
-240.0 kHz  to  +240.0 kHz
Default unit: 
Hz
<6_RMS DEVM>
Differential EVM results
Range: 
0.000  to  1.000
Default unit: 
1
<7_Peak DEVM>
Range: 
0.000  to  1.000
Default unit: 
1
<8_P99 DEVM>
Range: 
0.000  to  1.000
Default unit: 
1
<9_Nominal Pow>
Average power during the carrier-on state
Range: 
-128.0 dBm  to  +30.0 dBm
Default unit: 
dBm
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