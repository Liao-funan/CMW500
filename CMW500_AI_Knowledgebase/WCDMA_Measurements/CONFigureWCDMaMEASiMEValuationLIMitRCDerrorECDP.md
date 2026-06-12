# CONFigureWCDMaMEASiMEValuationLIMitRCDerrorECDP

Module: WCDMA Measurements
Source: 3e5c9d8895ce45aa.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Limits (Code Domain)
 > 
CONFigure:WCDMa:MEAS<i>:MEValuation:LIMit:RCDerror:ECDP
CONFigure:WCDMa:MEAS<i>:MEValuation:LIMit:RCDerror:ECDP 
<ThresholdBPSK1>, <ThresholdBPSK2>, <LimitBPSK1>, <LimitBPKS2>, <Threshold4PAM1>, <Threshold4PAM2>, <Limit4PAM1>, <Limit4PAM2>
Defines upper limits for the relative CDE (RCDE) of BPSK and 4PAM modulated channels. For each modulation type, two requirements are defined.
Parameters:
<ThresholdBPSK1>
Lower ECDP threshold for BPSK requirement 1
Range: 
-50 dB  to  0 dB
*RST:
-21 dB
Default unit: 
dB
<ThresholdBPSK2>
Lower ECDP threshold for BPSK requirement 2
Range: 
-50 dB  to  0 dB
*RST:
-30 dB
Default unit: 
dB
<LimitBPSK1>
RCDE limit for BPSK requirement 1
Range: 
-50 dB  to  0 dB
*RST:
-15.5 dB
Default unit: 
dB
<LimitBPKS2>
RCDE limit for BPSK requirement 2 (limit = this value minus ECDP)
Range: 
-50 dB  to  0 dB
*RST:
-36.5 dB
Default unit: 
dB
<Threshold4PAM1>
Lower ECDP threshold for 4PAM requirement 1
Range: 
-50 dB  to  0 dB
*RST:
-25.5 dB
Default unit: 
dB
<Threshold4PAM2>
Lower ECDP threshold for 4PAM requirement 2
Range: 
-50 dB  to  0 dB
*RST:
-30 dB
Default unit: 
dB
<Limit4PAM1>
RCDE limit for 4PAM requirement 1
Range: 
-50 dB  to  0 dB
*RST:
-17.5 dB
Default unit: 
dB
<Limit4PAM2>
RCDE limit for 4PAM requirement 2 (limit = this value minus ECDP)
Range: 
-50 dB  to  0 dB
*RST:
-43 dB
Default unit: 
dB
Example: 
See 
"Specifying Limits"
Firmware/Software: 
V1.0.15.0
Manual operation: 
See 
"Limits"
Top