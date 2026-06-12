# CONFigureLTEMEASiMEValuationLIMitQPSKIBE

Module: LTE Measurements
Source: d7342691e17507.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Limits (Modulation, QPSK)
 > 
CONFigure:LTE:MEAS<i>:MEValuation:LIMit:QPSK:IBE
CONFigure:LTE:MEAS<i>:MEValuation:LIMit:QPSK:IBE 
<Enable>, <Minimum>, <EVM>, <RBPower>, <IQImage>
Defines parameters used for calculation of an upper limit for the inband emission (QPSK modulation), see 
"Inband Emissions Limits"
.
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
17.5 %
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