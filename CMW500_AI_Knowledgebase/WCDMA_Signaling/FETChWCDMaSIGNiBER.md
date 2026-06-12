# FETChWCDMaSIGNiBER

Module: WCDMA Signaling
Source: e0d325bfae614466.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
BER Measurement
 > 
Measurement Results
 > 
FETCh:WCDMa:SIGN<i>:BER?
FETCh:WCDMa:SIGN<i>:BER? 
READ:WCDMa:SIGN<i>:BER? 
CALCulate:WCDMa:SIGN<i>:BER? 
Returns all results of the signaling BER measurement.
The values described below are returned by 
FETCh
 and 
READ
 commands. 
CALCulate
 commands return limit check results instead, one value for each result listed below.
The number to the left of each result parameter is provided for easy identification of the parameter position within the result array.
Return values: 
<1_Reliability>
See 
"Reliability Indicator"
<2_BER>
Bit error rate
Range: 
0 %  to  100 %
Default unit: 
%
<3_BLER>
Block error ratio
Range: 
0 %  to  100 %
Default unit: 
%
<4_DBLER>
Data block error rate
Range: 
0 %  to  100 %
Default unit: 
%
<5_LostBlocks>
Difference between the number of blocks sent and the number of blocks received
Range: 
0  to  <total number of blocks sent>
<6_ULTFCIFaults>
Percentage of transport blocks which the UE receiver detected with a wrong transport format, irrespective of the result of the CRC checks
Range: 
0 %  to  100 %
Default unit: 
%
<7_FDR>
False transport format detection ratio; the percentage of transport blocks which passed the UE receiver’s CRC check but were detected with a wrong transport format
Range: 
0 %  to  100 %
Default unit: 
%
<8_PNDiscontinuity>
Number of transport blocks that the R&S
 
CMW corrected (i.e. reordered) in the PN resync procedure
Range: 
0  to  <total number of blocks sent>
Example: 
See 
"Performing a BER Measurement"
Usage: 
Query only
Firmware/Software: 
V1.0.15.0
V2.0.10: 
CALCulate
 command
Manual operation: 
See 
"Results"
Top