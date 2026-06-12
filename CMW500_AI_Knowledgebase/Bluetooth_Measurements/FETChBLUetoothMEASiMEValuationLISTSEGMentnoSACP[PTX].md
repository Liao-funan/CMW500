# FETChBLUetoothMEASiMEValuationLISTSEGMentnoSACP[PTX]

Module: Bluetooth Measurements
Source: b620a442ba6c4816.htm

## 原始指令文档说明
Bluetooth
®
 Measurements
 > 
Command Reference
 > 
Bluetooth Multi-Evaluation Measurement Commands
 > 
List Mode Results (One Segment)
 > 
FETCh:BLUetooth:MEAS<i>:MEValuation:LIST:SEGMent<no>:SACP[:PTX]?
FETCh:BLUetooth:MEAS<i>:MEValuation:LIST:SEGMent<no>:SACP[:PTX]? 
Returns spectrum ACP single value results for segment<no> in list mode.
The command returns all parameters listed below, independent of the selected list mode setup. However, only for some of the parameters measured values are available. For the other parameters, only an indicator is returned (e.g. NAV).
The number to the left of each result parameter is provided for easy identification of the parameter position within the result array.
Suffix: 
<no>
1..48
Segment number
Return values: 
<1_Reliability>
"Reliability Indicator"
<2_SegReliability>
Reliability indicator for the segment. The meaning of the returned values is the same as for the common reliability indicator, see previous parameter.
<3_OutOfTol>
Percentage of measured bursts with failed limit check
Range: 
0 %  to  100 %
Default unit: 
%
<4_NominalPower>
Average power during the carrier-on state
Range: 
-99.99 dBm  to  99.99 dBm
Default unit: 
dBm
<5_NoOfExceptions>
Number of exceptions, whose power is above "Exception P
TX
"
Range: 
0  to  99
<6_PTxRef>
Reference power obtained within the center channel (EDR)
Range: 
-99.99 dBm  to  99.99 dBm
Default unit: 
dBm
<7_PTx26ChN1Abs>
The absolute P
TX - 26 dB
 (-1) result (EDR)
Range: 
-99.99 dBm  to  99.99 dBm
Default unit: 
dBm
<8_PTx26ChP1Abs>
The absolute P
TX - 26 dB
 (+1) result (EDR)
Range: 
-99.99 dBm  to  99.99 dBm
Default unit: 
dBm
<9_PTx26ChN1Rel>
The P
TX - 26 dB
 (-1) result relative to the reference power (EDR)
Range: 
-99.99 dBW  to  99.99 dBW
<10_PTx26ChP1Rel>
The P
TX - 26 dB
 (+1) result relative to the reference power (EDR)
Range: 
-99.99 dBW  to  99.99 dBW
<11_ACP> ...
The P
TX
 results for all channels
21 values for ACP +/-10 channels mode (BR, EDR)
11 values for ACP +/-5 channels mode (LE)
Range: 
-99.99 dBm  to  99.99 dBm
Default unit: 
dBm
Example: 
See 
"Performing Single-Shot Measurements"
Usage: 
Query only
Firmware/Software: 
V3.2.50
Options: 
R&S CMW-KM012
Top