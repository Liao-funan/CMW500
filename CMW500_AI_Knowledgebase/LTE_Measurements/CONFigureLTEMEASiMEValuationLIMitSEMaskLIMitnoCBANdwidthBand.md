# CONFigureLTEMEASiMEValuationLIMitSEMaskLIMitnoCBANdwidthBand

Module: LTE Measurements
Source: dd4f6ccb5e2a442d.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Limits (Spectrum, No Carrier Aggregation)
 > 
CONFigure:LTE:MEAS<i>:MEValuation:LIMit:SEMask:LIMit<no>:CBANdwidth<Band>
CONFigure:LTE:MEAS<i>:MEValuation:LIMit:SEMask:LIMit<no>:CBANdwidth<Band> 
<Enable>, <FrequencyStart>, <FrequencyEnd>, <Level>, <RBW>
Defines general requirements for the emission mask area <no>. The activation state, the area borders, an upper limit and the resolution bandwidth must be specified.
The emission mask applies to the channel bandwidth <Band>.
Suffix: 
<Band>
14, 30, 50, 100, 150, 200
Channel bandwidth in 0.1 MHz
<no>
1..12
Number of the emission mask area
Parameters:
<Enable>
OFF |
 
 ON
OFF
: disables the check of these requirements
ON
: enables the check of these requirements
*RST:
depends on channel bandwidth and area number
<FrequencyStart>
Start frequency of the area, relative to the edges of the channel bandwidth
Range: 
see table below
*RST:
depends on channel bandwidth and area number
Default unit: 
Hz
<FrequencyEnd>
Stop frequency of the area, relative to the edges of the channel bandwidth
Range: 
see table below
*RST:
depends on channel bandwidth and area number
Default unit: 
Hz
<Level>
Upper limit for the area
Range: 
-256 dBm  to  256 dBm
*RST:
depends on channel bandwidth and area number
Default unit: 
dBm
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
: 1 MHz
*RST:
K030 (<no> = 1) / M1 (<no> = 2 to 10)
Example: 
See 
"Specifying Limits"
Firmware/Software: 
V1.0.10.1
V3.2.80: <no> of areas enhanced to 12
<Band>
Range for <FrequencyStart> and <FrequencyEnd>
14
0 MHz to 5 MHz
30
0 MHz to 6 MHz
50
0 MHz to 10 MHz
100
0 MHz to 15 MHz
150
0 MHz to 20 MHz
200
0 MHz to 25 MHz
Top