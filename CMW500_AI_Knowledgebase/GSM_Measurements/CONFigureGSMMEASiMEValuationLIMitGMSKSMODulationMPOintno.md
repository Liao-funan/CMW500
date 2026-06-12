# CONFigureGSMMEASiMEValuationLIMitGMSKSMODulationMPOintno

Module: GSM Measurements
Source: 409aea89ea3b4e01.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Limits (Spectrum Modulation)
 > 
CONFigure:GSM:MEAS<i>:MEValuation:LIMit:GMSK:SMODulation:MPOint<no>
CONFigure:GSM:MEAS<i>:MEValuation:LIMit:GMSK:SMODulation:MPOint<no> 
<MinPowLevelRel>, <MaxPowLevelRel>, <AbsPowerLevel>, <Enable>
Defines and activates a limit line for the modulation scheme GMSK for a certain frequency offset. The specified limits apply above the high power reference value and below the low power reference value defined by 
CONFigure:
​
GSM:
​
MEAS<i>:
​
MEValuation:
​
LIMit:
​
GMSK:
​
SMODulation:
​
RPOWer
. Between the two reference power values, the limits are determined by linear interpolation.
Suffix: 
<no>
1..20
Number of the frequency offset value.
The offsets are defined by the command 
CONFigure:
​
GSM:
​
MEAS<i>:
​
MEValuation:
​
SMODulation:
​
OFRequence
.
Parameters:
<MinPowLevelRel>
Relative power limit applicable below the low reference power
Range: 
-120 dB  to  31.5 dB
*RST:
<no> = 1 to 3 in dB: 0.5, -30, -33 / <no> = 4 to 20: -60 dB
<MaxPowLevelRel>
Relative power limit applicable above the high reference power
Range: 
-120 dB  to  31.5 dB
*RST:
<no> = 1 to 4 in dB: 0.5, -30, -33, -60 / <no> = 5 to 20: -66 dB
<AbsPowerLevel>
Alternative absolute power limit. If the relative limits are tighter than the absolute limit, the latter applies.
Range: 
-120 dBm  to  31.5 dBm
*RST:
<no> = 1 to 4: -36 dBm / <no> = 5 to 20: -51 dBm
<Enable>
OFF |
 
 ON
ON:
 Enable limits for the given 
<no>
OFF:
 Disable limits for the given 
<no>
*RST:
<no> = 1 to 11: ON / <no> = 12 to 20: OFF
Firmware/Software: 
V1.0.0.4
Manual operation: 
See 
"Spectrum Modulation and Spectrum Switching"
Top