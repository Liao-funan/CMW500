# FETChBLUetoothMEASiMEValuationTRACeFDEViationCURRent

Module: Bluetooth Measurements
Source: aad0b74cf8e84779.htm

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
FETCh:BLUetooth:MEAS<i>:MEValuation:TRACe:FDEViation:CURRent?
FETCh:BLUetooth:MEAS<i>:MEValuation:TRACe:FDEViation:CURRent? 
FETCh:BLUetooth:MEAS<i>:MEValuation:TRACe:FDEViation:AVERage? 
FETCh:BLUetooth:MEAS<i>:MEValuation:TRACe:FDEViation:MINimum? 
FETCh:BLUetooth:MEAS<i>:MEValuation:TRACe:FDEViation:MAXimum? 
READ:BLUetooth:MEAS<i>:MEValuation:TRACe:FDEViation:CURRent? 
READ:BLUetooth:MEAS<i>:MEValuation:TRACe:FDEViation:AVERage? 
READ:BLUetooth:MEAS<i>:MEValuation:TRACe:FDEViation:MINimum? 
READ:BLUetooth:MEAS<i>:MEValuation:TRACe:FDEViation:MAXimum? 
Returns the values of the frequency deviation traces. The results of the current, average minimum and maximum traces can be retrieved. The frequency deviation traces are available for BR and LE bursts (
CONFigure:
​
BLUetooth:
​
MEAS<i>:
​
ISIGnal:
​
BTYPe
 
BR
).
Return values: 
<Reliability>
"Reliability Indicator"
<FDev_1> ... <FDEV_M>
M frequency deviation results, depending on the packet type and payload length; see 
"Trace Points for Basic Rate"
 and 
"Trace Points for Low Energy"
.
Range: 
–2000.0 kHz  to  +2000.0 kHz
Default unit: 
Hz
Usage: 
Query only
Firmware/Software: 
V1.0.10.50
V2.1.20: Support for LE bursts added (option R&S CMW-KM611)
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top