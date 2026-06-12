# FETChWCDMaMEASiMEValuationLISTSPECtrumACLRMnoCURRent

Module: WCDMA Measurements
Source: 2cc028c69cc64e56.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
List Mode Results (All Segments, One Result)
 > 
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SPECtrum:ACLR:M<no>:CURRent?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SPECtrum:ACLR:M<no>:CURRent? 
[<ACLRMode>]
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SPECtrum:ACLR:M<no>:AVERage? 
[<ACLRMode>]
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SPECtrum:ACLR:M<no>:MAXimum? 
[<ACLRMode>]
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SPECtrum:ACLR:P<no>:CURRent? 
[<ACLRMode>]
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SPECtrum:ACLR:P<no>:AVERage? 
[<ACLRMode>]
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SPECtrum:ACLR:P<no>:MAXimum? 
[<ACLRMode>]
Return the power of the adjacent channels for all measured list mode segments.
The adjacent channel selected via M<no>/P<no> is at the following frequency relative to the carrier frequency:
M1 = -5 MHz, M2 = -10 MHz
P1 = +5 MHz, P2 = +10 MHz
Suffix: 
<no>
1..2
Query parameters: 
<ACLRMode>
ABSolute |
 
 RELative
ABSolute
: ACLR power displayed in dBm as absolute value
RELative
: ACLR power displayed in dB relative to carrier power
Return values: 
<Reliability>
"Reliability Indicator"
<ACLR>
Comma-separated list of values, one per measured segment
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
Example: 
See 
"Using WCDMA List Mode"
Usage: 
Query only
Firmware/Software: 
V3.0.10
V3.2.70: added 
<ACLRMode>
Options: 
R&S CMW-KM012
Top