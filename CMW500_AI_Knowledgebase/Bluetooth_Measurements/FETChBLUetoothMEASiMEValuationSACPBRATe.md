# FETChBLUetoothMEASiMEValuationSACPBRATe

Module: Bluetooth Measurements
Source: 08f7da607893489e.htm

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
Spectrum Measurement Results (BR)
 > 
FETCh:BLUetooth:MEAS<i>:MEValuation:SACP:BRATe?
FETCh:BLUetooth:MEAS<i>:MEValuation:SACP:BRATe? 
READ:BLUetooth:MEAS<i>:MEValuation:SACP:BRATe? 
CALCulate:BLUetooth:MEAS<i>:MEValuation:SACP:BRATe? 
Returns the "Spectrum ACP" results for BR packets.
The values described below are returned by 
FETCh
 and 
READ
 commands. 
CALCulate
 commands return limit check results instead, one value for each result listed below.
The number to the left of each result parameter is provided for easy identification of the parameter position within the result array.
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
 
CH21 | CH79
):
If "ACP +/- 10 Channels" is selected, the first 21 ACP values contain the results for the relative channels 
–
10, ..., 0, ..., +10; the remaining 58 values are not displayed.
If "ACP 79 Channels" is selected, valid ACP values are available for all channels in the Bluetooth regulatory range.
Return values: 
<1_Reliability>
"Reliability Indicator"
<2_Out of Tol>
Out of tolerance result, i.e. percentage of measurement intervals of the statistic count (
CONFigure:
​
BLUetooth:
​
MEAS<i>:
​
MEValuation:
​
SCOunt:
​
SACP
) exceeding the specified limits, see 
"Spectrum Limits"
.
Range: 
0 %  to  100 %
Default unit: 
%
<3_Nominal Pow>
Average power during the carrier-on state
Range: 
-128.0 dBm  to  +30.0 dBm
Default unit: 
dBm
<4_No of Except>
Number of exceptions (channels 
±
3, 
±
4 ... with an ACP above the "Exception PTx" threshold )
Range: 
0  to  74
<5_ACP_1> ... <83_ACP_79>
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
V2.0.10 (extension to 79 ACP results in V2.0.20)
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top