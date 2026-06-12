# CALCulateBLUetoothMEASiMEValuationPVTimeLENergy[LE1M]CURRent

Module: Bluetooth Measurements
Source: 3e7fa22c68984a27.htm

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
Power Measurement Results (LE)
 > 
CALCulate:BLUetooth:MEAS<i>:MEValuation:PVTime:LENergy[:LE1M]:CURRent?
CALCulate:BLUetooth:MEAS<i>:MEValuation:PVTime:LENergy[:LE1M]:CURRent? 
CALCulate:BLUetooth:MEAS<i>:MEValuation:PVTime:LENergy[:LE1M]:AVERage? 
CALCulate:BLUetooth:MEAS<i>:MEValuation:PVTime:LENergy[:LE1M]:MINimum? 
CALCulate:BLUetooth:MEAS<i>:MEValuation:PVTime:LENergy[:LE1M]:MAXimum? 
FETCh:BLUetooth:MEAS<i>:MEValuation:PVTime:LENergy[:LE1M]:CURRent? 
FETCh:BLUetooth:MEAS<i>:MEValuation:PVTime:LENergy[:LE1M]:AVERage? 
FETCh:BLUetooth:MEAS<i>:MEValuation:PVTime:LENergy[:LE1M]:MINimum? 
FETCh:BLUetooth:MEAS<i>:MEValuation:PVTime:LENergy[:LE1M]:MAXimum? 
READ:BLUetooth:MEAS<i>:MEValuation:PVTime:LENergy[:LE1M]:CURRent? 
READ:BLUetooth:MEAS<i>:MEValuation:PVTime:LENergy[:LE1M]:AVERage? 
READ:BLUetooth:MEAS<i>:MEValuation:PVTime:LENergy[:LE1M]:MINimum? 
READ:BLUetooth:MEAS<i>:MEValuation:PVTime:LENergy[:LE1M]:MAXimum? 
Returns the power results for LE 1M PHY (uncoded).
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
<OutofTol>
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
LENergy[:
​
LE1M]:
​
PVTime
.
Range: 
0 %  to  100 %
Default unit: 
%
<AveragePower>
Average power during the carrier-on state
Range: 
-128.0 dBm  to  +30.0 dBm
Default unit: 
dBm
<PeakPower>
Peak power during the carrier-on state
Range: 
-128.0 dBm  to  +30.0 dBm
Default unit: 
dBm
<LeakagePower>
Average power during the carrier-off state
Range: 
-128.0 dBm  to  +30.0 dBm
Default unit: 
dBm
<PeakMinAvgPow>
Peak power minus average power
Range: 
0 dB to 158 dB
Example: 
See 
"Continuous, BR and LE Measurements"
Usage: 
Query only
Firmware/Software: 
V2.1.20
Options: 
R&S CMW-KM611
Top