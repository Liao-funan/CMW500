# FETChBLUetoothMEASiMEValuationTRACeSACP[PTX]

Module: Bluetooth Measurements
Source: af6885e7620a4ba3.htm

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
FETCh:BLUetooth:MEAS<i>:MEValuation:TRACe:SACP[:PTX]?
FETCh:BLUetooth:MEAS<i>:MEValuation:TRACe:SACP[:PTX]? 
READ:BLUetooth:MEAS<i>:MEValuation:TRACe:SACP[:PTX]? 
Returns the values of the "Spectrum ACP" table for BR and LE packets in line with Bluetooth test specification.
Note that the number of returned values depends on the current burst type.
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
 mode, the first 21 ACP values contain results for the relative channels 
–
10, ..., 0, ..., +10; the remaining 58 values are not displayed.
–
In 
CH79
 mode, valid ACP values are available for all 79 Bluetooth channels (2402 MHz, 2403 MHz, ..., 2480 MHz)
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
 ("ACP +/- 5 Channels") mode, the first 21 ACP values contain results for the 1 MHz channels centered at f
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
<ACP_1> ... <ACP_N>
As explained above, for 
BR
 bursts the trace returns N=79, and for 
LE
 bursts it returns N=81 values.
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
V2.0.10
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top