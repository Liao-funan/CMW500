# FETChBLUetoothMEASiMEValuationTRACePDIFferenceCURRent

Module: Bluetooth Measurements
Source: 8ec4b5c228374c85.htm

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
FETCh:BLUetooth:MEAS<i>:MEValuation:TRACe:PDIFference:CURRent?
FETCh:BLUetooth:MEAS<i>:MEValuation:TRACe:PDIFference:CURRent? 
FETCh:BLUetooth:MEAS<i>:MEValuation:TRACe:PDIFference:AVERage? 
FETCh:BLUetooth:MEAS<i>:MEValuation:TRACe:PDIFference:MAXimum? 
READ:BLUetooth:MEAS<i>:MEValuation:TRACe:PDIFference:CURRent? 
READ:BLUetooth:MEAS<i>:MEValuation:TRACe:PDIFference:AVERage? 
READ:BLUetooth:MEAS<i>:MEValuation:TRACe:PDIFference:MAXimum? 
Returns the values of the phase difference traces. The results of the current, average minimum and maximum traces can be retrieved. The phase difference traces are available for EDR bursts (
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
<PDiff_1> ... <PDiff_m>
m phase difference results, depending on the packet type and payload length; see 
"Phase Difference Trace Points"
.
Range: 
–1.00 rad/π  to  +1.00 rad/π
Default unit: 
rad/π
Usage: 
Query only
Firmware/Software: 
V1.0.10.50
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top