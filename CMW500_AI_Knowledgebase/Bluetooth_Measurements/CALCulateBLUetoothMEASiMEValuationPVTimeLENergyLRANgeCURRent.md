# CALCulateBLUetoothMEASiMEValuationPVTimeLENergyLRANgeCURRent

Module: Bluetooth Measurements
Source: 10a5a1a7bd4f4123.htm

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
CALCulate:BLUetooth:MEAS<i>:MEValuation:PVTime:LENergy:LRANge:CURRent?
CALCulate:BLUetooth:MEAS<i>:MEValuation:PVTime:LENergy:LRANge:CURRent? 
CALCulate:BLUetooth:MEAS<i>:MEValuation:PVTime:LENergy:LRANge:AVERage? 
CALCulate:BLUetooth:MEAS<i>:MEValuation:PVTime:LENergy:LRANge:MINimum? 
CALCulate:BLUetooth:MEAS<i>:MEValuation:PVTime:LENergy:LRANge:MAXimum? 
FETCh:BLUetooth:MEAS<i>:MEValuation:PVTime:LENergy:LRANge:CURRent? 
FETCh:BLUetooth:MEAS<i>:MEValuation:PVTime:LENergy:LRANge:AVERage? 
FETCh:BLUetooth:MEAS<i>:MEValuation:PVTime:LENergy:LRANge:MINimum? 
FETCh:BLUetooth:MEAS<i>:MEValuation:PVTime:LENergy:LRANge:MAXimum? 
READ:BLUetooth:MEAS<i>:MEValuation:PVTime:LENergy:LRANge:CURRent? 
READ:BLUetooth:MEAS<i>:MEValuation:PVTime:LENergy:LRANge:AVERage? 
READ:BLUetooth:MEAS<i>:MEValuation:PVTime:LENergy:LRANge:MINimum? 
READ:BLUetooth:MEAS<i>:MEValuation:PVTime:LENergy:LRANge:MAXimum? 
CALCulate:BLUetooth:MEAS<i>:MEValuation:PVTime:LENergy:LE2M:CURRent? 
CALCulate:BLUetooth:MEAS<i>:MEValuation:PVTime:LENergy:LE2M:AVERage? 
CALCulate:BLUetooth:MEAS<i>:MEValuation:PVTime:LENergy:LE2M:MINimum? 
CALCulate:BLUetooth:MEAS<i>:MEValuation:PVTime:LENergy:LE2M:MAXimum? 
FETCh:BLUetooth:MEAS<i>:MEValuation:PVTime:LENergy:LE2M:CURRent? 
FETCh:BLUetooth:MEAS<i>:MEValuation:PVTime:LENergy:LE2M:AVERage? 
FETCh:BLUetooth:MEAS<i>:MEValuation:PVTime:LENergy:LE2M:MINimum? 
FETCh:BLUetooth:MEAS<i>:MEValuation:PVTime:LENergy:LE2M:MAXimum? 
READ:BLUetooth:MEAS<i>:MEValuation:PVTime:LENergy:LE2M:CURRent? 
READ:BLUetooth:MEAS<i>:MEValuation:PVTime:LENergy:LE2M:AVERage? 
READ:BLUetooth:MEAS<i>:MEValuation:PVTime:LENergy:LE2M:MINimum? 
READ:BLUetooth:MEAS<i>:MEValuation:PVTime:LENergy:LE2M:MAXimum? 
Returns the power results for LE 2M PHY (
...:LE2M...
) and LE coded PHY (
...:LRANge...
).
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
LENergy:
​
LE2M:
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
LENergy:
​
LRANge:
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
-128 dBm to 30 dBm
Default unit: 
dBm
<PeakPower>
Peak power during the carrier-on state
Range: 
-128 dBm to 30 dBm
Default unit: 
dBm
<LeakagePower>
Average power during the carrier-off state
Range: 
-128 dBm to 30 dBm
Default unit: 
dBm
<PeakMinAvgPow>
Peak power minus average power
Range: 
0 dB to 158 dB
Default unit: 
dB
Usage: 
Query only
Firmware/Software: 
V3.5.70
Options: 
R&S CMW-KM721
Top