# FETChBLUetoothMEASiMEValuationTRACeSGACp[PTX]

Module: Bluetooth Measurements
Source: 041b54575ca644d5.htm

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
FETCh:BLUetooth:MEAS<i>:MEValuation:TRACe:SGACp[:PTX]?
FETCh:BLUetooth:MEAS<i>:MEValuation:TRACe:SGACp[:PTX]? 
READ:BLUetooth:MEAS<i>:MEValuation:TRACe:SGACp[:PTX]? 
Returns the values of the "Spectrum Gated ACP" tables for EDR packets. The R&S
 
CMW measures the adjacent channel power values P
TX
(f) in line with Bluetooth test specification.
The number of valid results depends on the ACP measurement mode (
CONFigure:
​
BLUetooth:
​
MEAS<i>:
​
MEValuation:
​
SACP:
​
BRATe:
​
MEASurement:
​
MODE
 
CH21 | CH79
):
If "ACP +/- 10 Channels" is selected, the first 21 values contain the results for the relative channels 
–
10, ..., 0, ..., +10; the remaining 58 values are not displayed.
If "ACP 79 Channels" is selected, valid ACP values are available for all channels in the Bluetooth regulatory range.
Return values: 
<Reliability>
"Reliability Indicator"
<ACP_1> ... <ACP_79>
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
V2.0.20
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top