# FETChWCDMaSIGNiERGCh

Module: WCDMA Signaling
Source: 9f08ca0ba1214bc8.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
E-RGCH Measurement
 > 
Measurement Results
 > 
FETCh:WCDMa:SIGN<i>:ERGCh?
FETCh:WCDMa:SIGN<i>:ERGCh? 
READ:WCDMa:SIGN<i>:ERGCh? 
Return all single value results of the E-RGCH measurement. "Missed Up", "Missed Down" and "Missed Hold" test refers to wizard settings, see 
"Using the WCDMA Wizards"
.
The number to the left of each result parameter is provided for easy identification of the parameter position within the result array.
Return values: 
<1_Reliability>
See 
"Reliability Indicator"
<2_MeasFrames>
Number of already measured HSUPA subframes
<3_HappyHappyBits>
Number of detected happy happy bits
<4_MissedUp>
Number of relative grant values that the UE received in error during "Missed Up" test
<5_MissedDown>
Number of relative grant values that the UE received in error during "Missed Down" test
<6_CorrectUp>
Number of relative grant values that the UE received correctly during "Missed Up" test
<7_CorrectDown>
Number of relative grant values that the UE received correctly during "Missed Down" test
<8_AllValidUp>
Sum of the missed and the correct events during "Missed Up" test
<9_AllValidDown>
Sum of the missed and the correct events during "Missed Down" test
<10_MsdUpRatio>
<4_MissedUp> events / <8_AllValidUp> events
<11_MsdDownRatio>
<5_MissedDown> events / <9_AllValidDown> events
<12_MissedHold>
Number of relative grant values that the UE received in error during "Missed Hold" test
<13_CorrectHold>
Number of relative grant values that the UE received correctly during "Missed Hold" test
<14_AllValidHold>
Sum of the missed and the correct events during "Missed Hold" test
<15_MsdHoldRatio>
<12_MissedHold> events / <14_AllValidHold> events
Example: 
See 
"E-RGCH Tests"
Usage: 
Query only
Firmware/Software: 
V3.5.20
Options: 
R&S CMW-KS401
Top