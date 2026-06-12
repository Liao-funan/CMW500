# FETChBLUetoothMEASiMEValuationTRACeIQABs

Module: Bluetooth Measurements
Source: ab598a2ee7ff4763.htm

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
FETCh:BLUetooth:MEAS<i>:MEValuation:TRACe:IQABs?
FETCh:BLUetooth:MEAS<i>:MEValuation:TRACe:IQABs? 
FETCh:BLUetooth:MEAS<i>:MEValuation:TRACe:IQDiff? 
FETCh:BLUetooth:MEAS<i>:MEValuation:TRACe:IQERr? 
READ:BLUetooth:MEAS<i>:MEValuation:TRACe:IQABs? 
READ:BLUetooth:MEAS<i>:MEValuation:TRACe:IQDiff? 
READ:BLUetooth:MEAS<i>:MEValuation:TRACe:IQERr? 
Returns the values of the traces in the I/Q constellation diagrams. The mnemonics 
IQABs
, 
IQDiff
, and 
IQERr
 denote the absolute, differential and I/Q constellation error results. The I/Q traces are available for EDR packets (
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
<IPhase_1> <QPhase_1> ... <IPhase_m> <QPhase_m>
m in-phase amplitudes (IPhase) and m quadrature-phase (QPhase) amplitudes, where m is equal to the number of processed 50-symbol blocks; see 
"Trace Points for IQ Constellation Diagrams"
.
Range: 
-2.00  to  +2.00
Default unit: 
1
Usage: 
Query only
Firmware/Software: 
V1.0.10.50
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top