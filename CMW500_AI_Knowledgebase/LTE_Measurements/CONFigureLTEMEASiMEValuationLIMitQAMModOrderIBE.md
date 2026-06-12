# CONFigureLTEMEASiMEValuationLIMitQAMModOrderIBE

Module: LTE Measurements
Source: 9c85d7fb5a074945.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Limits (Modulation, 16-QAM / 64-QAM)
 > 
CONFigure:LTE:MEAS<i>:MEValuation:LIMit:QAM<ModOrder>:IBE
CONFigure:LTE:MEAS<i>:MEValuation:LIMit:QAM<ModOrder>:IBE 
<Enable>, <Minimum>, <EVM>, <RBPower>, <IQImage>
Defines parameters used for calculation of an upper limit for the inband emission (16-QAM or 64-QAM modulation), see 
"Inband Emissions Limits"
.
Suffix: 
<ModOrder>
16, 64
16-QAM or 64-QAM
Parameters:
<Enable>
OFF |
 
 ON
OFF
: disables the limit check
ON
: enables the limit check
*RST:
ON
<Minimum>
Range: 
-256 dB  to  256 dB
*RST:
-29.2 dB
Default unit: 
dB
<EVM>
Range: 
0 %  to  100 %
*RST:
12.5 % (16-QAM) / 7.5 % (64-QAM)
Default unit: 
%
<RBPower>
Range: 
-256 dBm  to  256 dBm
*RST:
-57 dBm
Default unit: 
dBm
<IQImage>
Range: 
-256 dB  to  256 dB
*RST:
-24.2 dB
Default unit: 
dB
Example: 
See 
"Specifying Limits"
Firmware/Software: 
V1.0.10.1
Top