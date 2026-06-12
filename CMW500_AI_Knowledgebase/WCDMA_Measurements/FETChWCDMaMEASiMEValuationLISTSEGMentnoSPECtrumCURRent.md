# FETChWCDMaMEASiMEValuationLISTSEGMentnoSPECtrumCURRent

Module: WCDMA Measurements
Source: 3a2f276591f04a0c.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
List Mode Results (One Segment)
 > 
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SEGMent<no>:SPECtrum:CURRent?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SEGMent<no>:SPECtrum:CURRent? 
[<ACLRMode>]
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SEGMent<no>:SPECtrum:AVERage? 
[<ACLRMode>]
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SEGMent<no>:SPECtrum:MAXimum? 
[<ACLRMode>]
Returns the ACLR power and spectrum emission single value results for segment <no> in list mode.
The number to the left of each result parameter is provided for easy identification of the parameter position within the result array.
Suffix: 
<no>
1..1000
Query parameters: 
<ACLRMode>
ABSolute |
 
 RELative
ABSolute
: ACLR power displayed in dBm as absolute value
RELative
: ACLR power displayed in dB relative to carrier power
Return values: 
<1_Reliability>
"Reliability Indicator"
In list mode, a zero reliability indicator indicates that the results in all measured segments are valid. A non-zero value indicates that an error occurred in at least one of the measured segments.
<2_ReturnCode>
Reliability indicator for the segment. The meaning of the returned values is the same as for the common reliability indicator, see previous parameter.
<3_CarrierPower>
Power at the nominal carrier UL frequency
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
<4_ACLRminus2> <5_ACLRminus1> <6_ACLRplus1> <7_ACLRplus2>
Power of the adjacent channels (±1
st
 adjacent channels at ±5 MHz from the UL frequency, ±2
nd
 adjacent channels at ±10 MHz from the UL frequency)
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
<8_OBW>
Occupied bandwidth
Range: 
0 MHz  to  10 MHz
Default unit: 
Hz
<9_MarginAB> <10_MarginBC> <11_MarginCD> <12_MarginEF> <13_MarginFE> <14_MarginDC> <15_MarginCB> <16_MarginBA>
Limit line margin values in the 8 emission mask areas. A positive result indicates that the trace is located above the limit line, i.e. the limit is exceeded.
Range: 
-100 dB  to  90 dB
Default unit: 
dB
<17_UEpower>
User equipment power
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
<18_MarginHAD> <19_MarginHDA>
Limit line margin values for limit line H. A positive result indicates that the trace is located above the limit line, i.e. the limit is exceeded.
Range: 
-130 dB  to  130 dB
Default unit: 
dB
Example: 
See 
"Using WCDMA List Mode"
Usage: 
Query only
Firmware/Software: 
V1.0.10.1
V3.2.10: increased number of segments
V3.2.70: added 
<ACLRMode>
Options: 
R&S CMW-KM012
Top