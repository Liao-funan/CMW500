# CONFigureLTEMEASiMEValuationLIMitSEMaskLIMitnoCAGGregationOCOMbination

Module: LTE Measurements
Source: 404417c8ddeb4509.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Limits (Spectrum, with Carrier Aggregation)
 > 
CONFigure:LTE:MEAS<i>:MEValuation:LIMit:SEMask:LIMit<no>:CAGGregation:OCOMbination
CONFigure:LTE:MEAS<i>:MEValuation:LIMit:SEMask:LIMit<no>:CAGGregation:OCOMbination 
<Enable>, <FrequencyStart>, <FrequencyEnd>, <Level>, <RBW>
Defines general requirements for the emission mask area <no>. The activation state, the area borders, an upper limit and the resolution bandwidth must be specified.
The settings apply to all channel bandwidth combinations that are not supported by 
CONFigure:
​
LTE:
​
MEAS<i>:
​
MEValuation:
​
LIMit:
​
SEMask:
​
LIMit<no>:
​
CAGGregation:
​
CBANdwidth<Band1>:
​
CBANdwidth<Band2>
.
Suffix: 
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
OFF
<FrequencyStart>
Start frequency of the area, relative to the edges of the aggregated channel bandwidth
Range: 
0 MHz  to  65 MHz
*RST:
depends on <no>
Default unit: 
Hz
<FrequencyEnd>
Stop frequency of the area, relative to the edges of the aggregated channel bandwidth
Range: 
0 MHz  to  65 MHz
*RST:
depends on <no>
Default unit: 
Hz
<Level>
Upper limit for the area
Range: 
-256 dBm  to  256 dBm
*RST:
depends on <no>
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
K030 (<no> = 1) / M1 (<no> = 2 to 12)
Example: 
See 
"Specifying Limits"
Firmware/Software: 
V3.2.80, V3.7.30 enhanced frequency ranges
Options: 
R&S CMW-KM502/-KM552 for FDD/TDD
Top