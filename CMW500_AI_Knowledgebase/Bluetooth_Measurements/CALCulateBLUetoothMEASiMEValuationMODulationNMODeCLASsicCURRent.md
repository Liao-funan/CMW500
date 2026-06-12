# CALCulateBLUetoothMEASiMEValuationMODulationNMODeCLASsicCURRent

Module: Bluetooth Measurements
Source: 48e9be993a04474a.htm

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
Modulation Measurement Results (Normal Mode)
 > 
CALCulate:BLUetooth:MEAS<i>:MEValuation:MODulation:NMODe:CLASsic:CURRent?
CALCulate:BLUetooth:MEAS<i>:MEValuation:MODulation:NMODe:CLASsic:CURRent? 
CALCulate:BLUetooth:MEAS<i>:MEValuation:MODulation:NMODe:CLASsic:AVERage? 
CALCulate:BLUetooth:MEAS<i>:MEValuation:MODulation:NMODe:CLASsic:XMINimum? 
CALCulate:BLUetooth:MEAS<i>:MEValuation:MODulation:NMODe:CLASsic:MAXimum? 
CALCulate:BLUetooth:MEAS<i>:MEValuation:MODulation:NMODe:CLASsic:SDEViation? 
FETCh:BLUetooth:MEAS<i>:MEValuation:MODulation:NMODe:CLASsic:CURRent? 
FETCh:BLUetooth:MEAS<i>:MEValuation:MODulation:NMODe:CLASsic:AVERage? 
FETCh:BLUetooth:MEAS<i>:MEValuation:MODulation:NMODe:CLASsic:XMINimum? 
FETCh:BLUetooth:MEAS<i>:MEValuation:MODulation:NMODe:CLASsic:XMAXimum? 
FETCh:BLUetooth:MEAS<i>:MEValuation:MODulation:NMODe:CLASsic:MAXimum? 
FETCh:BLUetooth:MEAS<i>:MEValuation:MODulation:NMODe:CLASsic:SDEViation? 
READ:BLUetooth:MEAS<i>:MEValuation:MODulation:NMODe:CLASsic:CURRent? 
READ:BLUetooth:MEAS<i>:MEValuation:MODulation:NMODe:CLASsic:AVERage? 
READ:BLUetooth:MEAS<i>:MEValuation:MODulation:NMODe:CLASsic:XMINimum? 
READ:BLUetooth:MEAS<i>:MEValuation:MODulation:NMODe:CLASsic:XMAXimum? 
READ:BLUetooth:MEAS<i>:MEValuation:MODulation:NMODe:CLASsic:MAXimum? 
READ:BLUetooth:MEAS<i>:MEValuation:MODulation:NMODe:CLASsic:SDEViation? 
Returns the current, average, xmin, xmax, max, and standard deviation modulation results for BR/EDR, normal mode, see 
"Statistical Modulation Results (LE)"
.
The values described below are returned by 
FETCh
 and 
READ
 commands. 
CALCulate
 commands return limit check results instead, one value for each result listed below.
Return values: 
<Reliability>
See 
"Reliability Indicator"
<OutOfTol>
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
"Limits (Modulation BR)"
 and 
"Limits (Modulation EDR)"
.
Range: 
0 %  to  100 %
<FreqAccuracy>
Range: 
-0.99999E+6 Hz  to  0.99999E+6 Hz
<FreqDrift>
Range: 
-0.99999E+6 Hz  to  0.99999E+6 Hz
<MaxDrift>
Range: 
-0.99999E+6 Hz  to  0.99999E+6 Hz
Usage: 
Query only
Firmware/Software: 
V3.7.40
Options: 
R&S CMW-KM611
Top