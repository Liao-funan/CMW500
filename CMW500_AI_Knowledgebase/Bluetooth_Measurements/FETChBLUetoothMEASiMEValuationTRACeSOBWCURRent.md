# FETChBLUetoothMEASiMEValuationTRACeSOBWCURRent

Module: Bluetooth Measurements
Source: 2f04ed87c912412c.htm

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
FETCh:BLUetooth:MEAS<i>:MEValuation:TRACe:SOBW:CURRent?
FETCh:BLUetooth:MEAS<i>:MEValuation:TRACe:SOBW:CURRent? 
FETCh:BLUetooth:MEAS<i>:MEValuation:TRACe:SOBW:AVERage? 
FETCh:BLUetooth:MEAS<i>:MEValuation:TRACe:SOBW:MAXimum? 
READ:BLUetooth:MEAS<i>:MEValuation:TRACe:SOBW:CURRent? 
READ:BLUetooth:MEAS<i>:MEValuation:TRACe:SOBW:AVERage? 
READ:BLUetooth:MEAS<i>:MEValuation:TRACe:SOBW:MAXimum? 
Returns current, average and maximum results of the "Spectrum 20 dB Bandwidth" trace. The 20 dB bandwidth values are available for BR bursts (
CONFigure:
​
BLUetooth:
​
MEAS<i>:
​
ISIGnal:
​
BTYPe
).
Return values: 
<Reliability>
"Reliability Indicator"
<OBW_1> ... <OBW_769>
769 bandwidth results, covering a frequency range [
–
1.5 MHz, +1.5 MHz], relative to the peak emission within the measured Bluetooth channel. The spacing between adjacent trace points is 3.906 kHz (
≅
4 MHz/1024).
Range: 
-99.9 dB  to  0.0 dB
Default unit: 
dB
Usage: 
Query only
Firmware/Software: 
V1.0.15.20
V3.7.40: added commands for current and average results
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top