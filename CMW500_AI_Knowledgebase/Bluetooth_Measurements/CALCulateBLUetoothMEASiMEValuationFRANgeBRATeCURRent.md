# CALCulateBLUetoothMEASiMEValuationFRANgeBRATeCURRent

Module: Bluetooth Measurements
Source: e07cd5c9227d42b9.htm

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
Spectrum Measurement Results (BR)
 > 
CALCulate:BLUetooth:MEAS<i>:MEValuation:FRANge:BRATe:CURRent?
CALCulate:BLUetooth:MEAS<i>:MEValuation:FRANge:BRATe:CURRent? 
FETCh:BLUetooth:MEAS<i>:MEValuation:FRANge:BRATe:CURRent? 
READ:BLUetooth:MEAS<i>:MEValuation:FRANge:BRATe:CURRent? 
Returns the "Frequency Range" results for BR.
The values described below are returned by 
FETCh
 and 
READ
 commands. 
CALCulate
 commands return limit check results instead, one value for each result listed below.
Return values: 
<Reliability>
"Reliability Indicator"
<BurstOutOfTol>
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
FRANge
) exceeding the specified limits, see 
CONFigure:
​
BLUetooth:
​
MEAS<i>:
​
MEValuation:
​
LIMit:
​
FRANge
.
Additional ON/OFF enables/disables the out of tolerance evaluation.
Range: 
0 %  to  100 %
<NominalPower>
Average power during the carrier-on state
Range: 
-128 dBm to 30 dBm
Default unit: 
dBm
<fL>
Lowest frequency at which spectral power density drops below specified threshold
Range: 
-1 MHz to +1 MHz
Default unit: 
Hz
<fH>
Highest frequency at which spectral power density drops below specified threshold
Range: 
-1 MHz to +1 MHz
Default unit: 
Hz
Example: 
See 
"Spectrum Measurements"
Usage: 
Query only
Firmware/Software: 
V3.2.50
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top