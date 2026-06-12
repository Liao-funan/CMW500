# FETChBLUetoothMEASiMEValuationTRACeSGACpCURRent

Module: Bluetooth Measurements
Source: 1b31c00802af4d4b.htm

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
FETCh:BLUetooth:MEAS<i>:MEValuation:TRACe:SGACp:CURRent?
FETCh:BLUetooth:MEAS<i>:MEValuation:TRACe:SGACp:CURRent? 
FETCh:BLUetooth:MEAS<i>:MEValuation:TRACe:SGACp:AVERage? 
FETCh:BLUetooth:MEAS<i>:MEValuation:TRACe:SGACp:MAXimum? 
READ:BLUetooth:MEAS<i>:MEValuation:TRACe:SGACp:CURRent? 
READ:BLUetooth:MEAS<i>:MEValuation:TRACe:SGACp:AVERage? 
READ:BLUetooth:MEAS<i>:MEValuation:TRACe:SGACp:MAXimum? 
Returns the results of the "Spectrum Gated ACP" traces for EDR packets. The R&S
 
CMW measures the current, average and maximum adjacent channel power values.
The number of valid results depends on the ACP measurement mode (
CONFigure:
​
BLUetooth:
​
MEAS<i>:
​
MEValuation:
​
SGACp:
​
EDRate:
​
MEASurement:
​
MODE
 
CH21 | CH79
):
If 
CH21
 mode ("ACP +/- 10 Channels") is selected, the first 21 values contain the results for the relative channels 
–
10, ..., 0, ..., +10; the remaining 58 values are not displayed.
If 
CH79
 mode ("ACP 79 Channels") is selected, valid ACP values are available for all channels in the Bluetooth regulatory range.
Return values: 
<Reliability>
"Reliability Indicator"
<ACP>
79 ACP results
Range: 
-128.0 dBm  to  +30.0 dBm
Default unit: 
dBm
Example: 
See 
"Spectrum Measurements"
Usage: 
Query only
Firmware/Software: 
V3.7.40
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top