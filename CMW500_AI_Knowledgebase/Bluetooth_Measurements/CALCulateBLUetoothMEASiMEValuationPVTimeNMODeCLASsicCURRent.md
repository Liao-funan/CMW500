# CALCulateBLUetoothMEASiMEValuationPVTimeNMODeCLASsicCURRent

Module: Bluetooth Measurements
Source: 5949068966d64c41.htm

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
Power Measurement Results (Normal Mode)
 > 
CALCulate:BLUetooth:MEAS<i>:MEValuation:PVTime:NMODe:CLASsic:CURRent?
CALCulate:BLUetooth:MEAS<i>:MEValuation:PVTime:NMODe:CLASsic:CURRent? 
CALCulate:BLUetooth:MEAS<i>:MEValuation:PVTime:NMODe:CLASsic:AVERage? 
CALCulate:BLUetooth:MEAS<i>:MEValuation:PVTime:NMODe:CLASsic:MINimum? 
CALCulate:BLUetooth:MEAS<i>:MEValuation:PVTime:NMODe:CLASsic:MAXimum? 
FETCh:BLUetooth:MEAS<i>:MEValuation:PVTime:NMODe:CLASsic:CURRent? 
FETCh:BLUetooth:MEAS<i>:MEValuation:PVTime:NMODe:CLASsic:AVERage? 
FETCh:BLUetooth:MEAS<i>:MEValuation:PVTime:NMODe:CLASsic:MINimum? 
FETCh:BLUetooth:MEAS<i>:MEValuation:PVTime:NMODe:CLASsic:MAXimum? 
READ:BLUetooth:MEAS<i>:MEValuation:PVTime:NMODe:CLASsic:CURRent? 
READ:BLUetooth:MEAS<i>:MEValuation:PVTime:NMODe:CLASsic:AVERage? 
READ:BLUetooth:MEAS<i>:MEValuation:PVTime:NMODe:CLASsic:MINimum? 
READ:BLUetooth:MEAS<i>:MEValuation:PVTime:NMODe:CLASsic:MAXimum? 
Returns the current, average, min, and max power results for BR/EDR, normal mode.
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
PVTime
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
BRATe:
​
PVTime
 and 
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
EDRate:
​
PVTime
.
Range: 
0 %  to  100 %
Default unit: 
%
<NominalPower>
Average power during the carrier-on state
Range: 
-99.99 dBm  to  99.99 dBm
Default unit: 
dBm
Usage: 
Query only
Firmware/Software: 
V3.7.40
Top