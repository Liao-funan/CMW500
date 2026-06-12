# CONFigureLTEMEASiENBMEValuationLIMitSEMaskLIMitnoCBANdwidthBand

Module: LTE eNodeB Measurements
Source: 5f870812492a4195.htm

## 原始指令文档说明
LTE eNodeB Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Limits (Spectrum)
 > 
CONFigure:LTE:MEAS<i>:ENB:MEValuation:LIMit:SEMask:LIMit<no>:CBANdwidth<Band>
CONFigure:LTE:MEAS<i>:ENB:MEValuation:LIMit:SEMask:LIMit<no>:CBANdwidth<Band> 
<Enable>, <FrequencyStart>, <FrequencyEnd>, <LevelAbsolute>, <SlopeAbsolute>, <LevelRelative>, <RBW>
Defines emission mask area number <no>. The emission mask applies to the channel bandwidth <Band>.
See also 
"Spectrum Emission Mask"
.
Suffix: 
<Band>
14, 30, 50, 100, 150, 200
Channel bandwidth in 0.1 MHz
<no>
1..10
Number of the emission mask area
Parameters:
<Enable>
OFF |
 
 ON
Disables / enables the limit check for the emission mask area
*RST:
ON (<no> = 1 to 3) / OFF (<no> = 4 to 10)
<FrequencyStart>
Start frequency of the area, relative to the edges of the channel bandwidth
Range: 
0 MHz to (35.91 - <Band>/20) MHz
*RST:
depends on <no> and <Band>
Default unit: 
Hz
<FrequencyEnd>
Stop frequency of the area, relative to the edges of the channel bandwidth
Range: 
0 MHz to (35.91 - <Band>/20) MHz
*RST:
depends on <no> and <Band>
Default unit: 
Hz
<LevelAbsolute>
Power component for calculation of the upper absolute limit line of the area
Range: 
-256 dBm  to  256 dBm
*RST:
depends on <no> and <Band>
Default unit: 
dBm
<SlopeAbsolute>
Slope component for calculation of the upper absolute limit line of the area
Range: 
-1000 dB/MHz  to  1000 dB/MHz
*RST:
depends on <no> and <Band>
Default unit: 
dB/MHz
<LevelRelative>
Upper relative limit of the area
Range: 
-256 dB  to  256 dB
*RST:
-52 dB (<no> = 3) / OFF (<no> ≠ 3)
Default unit: 
dB
Additional parameters: OFF | ON (disables | enables the relative limit)
<RBW>
K030 |
 
 K100 |
 
 M1
Resolution bandwidth to be used for the area
K030
: 30 kHz
K100
: 100 kHz
M1
: 1MHz
*RST:
K100 (<no> = 1, 2) / M1 (<no> = 3 to 10)
Example: 
See 
"Specifying Limits"
Firmware/Software: 
V3.0.20
Top