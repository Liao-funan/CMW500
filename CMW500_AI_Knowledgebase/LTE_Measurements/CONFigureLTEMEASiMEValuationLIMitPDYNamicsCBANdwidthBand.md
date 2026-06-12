# CONFigureLTEMEASiMEValuationLIMitPDYNamicsCBANdwidthBand

Module: LTE Measurements
Source: 3ceb1c4508604ff6.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Limits (Power)
 > 
CONFigure:LTE:MEAS<i>:MEValuation:LIMit:PDYNamics:CBANdwidth<Band>
CONFigure:LTE:MEAS<i>:MEValuation:LIMit:PDYNamics:CBANdwidth<Band> 
<Enable>, <OnPowerUpper>, <OnPowerLower>, <OffPowerUpper>
Defines limits for the ON power and OFF power determined with the power dynamics measurement. Separate limits can be defined for each channel bandwidth.
Suffix: 
<Band>
14, 30, 50, 100, 150, 200
Channel bandwidth in 0.1 MHz
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
<OnPowerUpper>
Upper limit for the "ON power"
Range: 
-256 dBm  to  256 dBm
*RST:
depends on channel bandwidth, see below
Default unit: 
dBm
<OnPowerLower>
Lower limit for the "ON power"
Range: 
-256 dBm  to  256 dBm
*RST:
depends on channel bandwidth, see below
Default unit: 
dBm
<OffPowerUpper>
Upper limit for the "OFF power" and the "SRS OFF" power
Range: 
-256 dBm  to  256 dBm
*RST:
-48.5 dBm
Default unit: 
dBm
Example: 
See 
"Specifying Limits"
Firmware/Software: 
V2.0.10
<Band>
*RST <OnPowerUpper>
*RST <OnPowerLower>
14
-7.3 dBm
-22.3 dBm
30
-3.3 dBm
-18.3 dBm
50
-1.1 dBm
-16.1 dBm
100
1.9 dBm
-13.1 dBm
150
3.6 dBm
-11.4 dBm
200
4.9 dBm
-10.1 dBm
Top