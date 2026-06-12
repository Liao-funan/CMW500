# FETChBLUetoothMEASiMEValuationTRACeSACPCURRent

Module: Bluetooth Measurements
Source: f24cf373751d42ff.htm

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
FETCh:BLUetooth:MEAS<i>:MEValuation:TRACe:SACP:CURRent?
FETCh:BLUetooth:MEAS<i>:MEValuation:TRACe:SACP:CURRent? 
FETCh:BLUetooth:MEAS<i>:MEValuation:TRACe:SACP:AVERage? 
FETCh:BLUetooth:MEAS<i>:MEValuation:TRACe:SACP:MAXimum? 
READ:BLUetooth:MEAS<i>:MEValuation:TRACe:SACP:CURRent? 
READ:BLUetooth:MEAS<i>:MEValuation:TRACe:SACP:AVERage? 
READ:BLUetooth:MEAS<i>:MEValuation:TRACe:SACP:MAXimum? 
Returns the current, average and maximum values of the "Spectrum ACP" traces for BR and LE packets.
The number of returned values depends on the current burst type.
For 
BR
 bursts, the trace returns 79 values.
The number of valid ACP results depends on the ACP measurement mode (
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
):
–
In 
CH21
 mode ("ACP +/- 10 Channels"), the first 21 ACP values contain results for the relative channels 
–
10, ..., 0, ..., +10; the remaining 58 values are not displayed.
–
In 
CH79
 mode ("ACP 79 Channels"), valid ACP values are available for all 79 Bluetooth channels (2402 MHz, 2403 MHz, ..., 2480 MHz)
For 
LE
 bursts, the trace returns 81 values.
The number of valid ACP results depends on the ACP measurement mode (
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
LENergy:
​
LE2M:
​
MEASurement:
​
MODE
):
–
In 
CH10
 mode ("ACP +/- 5 Channels"), the first 21 ACP values contain results for the 1 MHz channels centered at f
TX
 – 10 MHz, f
TX
 – 9 MHz, ..., f
TX
 + 10 MHz. The remaining 58 values are invalid (
NAV
).
This mode is applicable to all types of LE bursts.
–
In 
CH40
 mode ("LE All Channels"), ACP values 1 to 81 contain results for the 1 MHz channels centered at 2401 MHz, 2402 MHz, ..., 2481 MHz
This mode is only applicable to test packets using LE 1M PHY or LE 2M PHY.
Return values: 
<Reliability>
"Reliability Indicator"
<ACP>
79 ACP values for 
BR
, 81 ACP vlaues for 
LE
 bursts
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