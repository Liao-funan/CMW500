# CONFigureWCDMaMEASiMEValuationLIMitPCONtrolHSDPcch

Module: WCDMA Measurements
Source: 844ac4ae8a0e48bc.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Limits (Power Control)
 > 
CONFigure:WCDMa:MEAS<i>:MEValuation:LIMit:PCONtrol:HSDPcch
CONFigure:WCDMa:MEAS<i>:MEValuation:LIMit:PCONtrol:HSDPcch 
<Enable>, <DTXtoNACK>, <NACKtoCQI>, <CQItoDTX>[, <TestCase>]
Defines nominal power steps for the HS-DPCCH limit set. Measurements at maximum UE power and below maximum UE power are supported. Separate values can be defined for the boundaries DTX > (N)ACK, (N)ACK > CQI and CQI > DTX. Also the limit check can be enabled or disabled.
See also 
"Power Control Limits"
Parameters:
<Enable>
OFF |
 
 ON
Disables | enables the limit check
*RST:
ON
<DTXtoNACK>
Range: 
-10 dB  to  10 dB
*RST:
6.14 dB
Default unit: 
dB
<NACKtoCQI>
Range: 
-10 dB  to  10 dB
*RST:
-1.38 dB
Default unit: 
dB
<CQItoDTX>
Range: 
-10 dB  to  10 dB
*RST:
-4.76 dB
Default unit: 
dB
<TestCase>
T0DB |
 
 T1DB
T0DB
: measurement below maximum UE power with TPC command = 0 dB
T1DB
: measurement at maximum UE power with TPC command = 1 dB
*RST:
T1DB
Example: 
See 
"Specifying Limits"
Firmware/Software: 
V1.0.4.11
V3.2.60: added <TestCase>
Manual operation: 
See 
"Limits"
Top