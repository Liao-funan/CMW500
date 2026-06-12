# FETChBLUetoothMEASiMEValuationTRACePVTimeCURRent

Module: Bluetooth Measurements
Source: 43bd6d24b3e14cf4.htm

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
Trace Results
 > 
FETCh:BLUetooth:MEAS<i>:MEValuation:TRACe:PVTime:CURRent?
FETCh:BLUetooth:MEAS<i>:MEValuation:TRACe:PVTime:CURRent? 
FETCh:BLUetooth:MEAS<i>:MEValuation:TRACe:PVTime:AVERage? 
FETCh:BLUetooth:MEAS<i>:MEValuation:TRACe:PVTime:MINimum? 
FETCh:BLUetooth:MEAS<i>:MEValuation:TRACe:PVTime:MAXimum? 
READ:BLUetooth:MEAS<i>:MEValuation:TRACe:PVTime:CURRent? 
READ:BLUetooth:MEAS<i>:MEValuation:TRACe:PVTime:AVERage? 
READ:BLUetooth:MEAS<i>:MEValuation:TRACe:PVTime:MINimum? 
READ:BLUetooth:MEAS<i>:MEValuation:TRACe:PVTime:MAXimum? 
Returns the values of the power vs. time traces. The results of the current, average minimum and maximum traces can be retrieved.
Return values: 
<Reliability>
"Reliability Indicator"
<PvT_1> ... <PvT_M>
M power results, depending on the packet type and payload length; see 
"Trace Points for Basic Rate"
, 
"DEVM Trace Points"
 and 
"Trace Points for Low Energy"
.
Range: 
–128.0 dBm  to  +30.0 dBm
Default unit: 
dBm
Usage: 
Query only
Firmware/Software: 
V1.0.10.50
V2.1.20: Support for LE bursts added (option R&S CMW-KM611)
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top