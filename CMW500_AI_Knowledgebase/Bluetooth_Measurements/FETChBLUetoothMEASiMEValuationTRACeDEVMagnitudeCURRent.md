# FETChBLUetoothMEASiMEValuationTRACeDEVMagnitudeCURRent

Module: Bluetooth Measurements
Source: 033488ce998f450b.htm

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
FETCh:BLUetooth:MEAS<i>:MEValuation:TRACe:DEVMagnitude:CURRent?
FETCh:BLUetooth:MEAS<i>:MEValuation:TRACe:DEVMagnitude:CURRent? 
FETCh:BLUetooth:MEAS<i>:MEValuation:TRACe:DEVMagnitude:AVERage? 
FETCh:BLUetooth:MEAS<i>:MEValuation:TRACe:DEVMagnitude:MAXimum? 
READ:BLUetooth:MEAS<i>:MEValuation:TRACe:DEVMagnitude:CURRent? 
READ:BLUetooth:MEAS<i>:MEValuation:TRACe:DEVMagnitude:AVERage? 
READ:BLUetooth:MEAS<i>:MEValuation:TRACe:DEVMagnitude:MAXimum? 
Returns the values of the DEVM traces. The results of the current, average minimum and maximum traces can be retrieved. The DEVM traces are available for EDR bursts (
CONFigure:
​
BLUetooth:
​
MEAS<i>:
​
ISIGnal:
​
BTYPe
 
EDR
).
Return values: 
<Reliability>
"Reliability Indicator"
<DEVM_1> ... <DEVM_m>
m DEVM results, depending on the packet type and payload length; see 
"DEVM Trace Points"
.
Range: 
0 %  to  100 %
Default unit: 
%
Usage: 
Query only
Firmware/Software: 
V1.0.10.50
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top