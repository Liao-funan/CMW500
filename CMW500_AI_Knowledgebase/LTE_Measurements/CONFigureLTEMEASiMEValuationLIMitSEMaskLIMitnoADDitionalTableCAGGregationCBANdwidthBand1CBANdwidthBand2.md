# CONFigureLTEMEASiMEValuationLIMitSEMaskLIMitnoADDitionalTableCAGGregationCBANdwidthBand1CBANdwidthBand2

Module: LTE Measurements
Source: 1afa62de9c1e412e.htm

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
CONFigure:LTE:MEAS<i>:MEValuation:LIMit:SEMask:LIMit<no>:ADDitional<Table>:CAGGregation:CBANdwidth<Band1>:CBANdwidth<Band2>
CONFigure:LTE:MEAS<i>:MEValuation:LIMit:SEMask:LIMit<no>:ADDitional<Table>:CAGGregation:CBANdwidth<Band1>:CBANdwidth<Band2> 
<Enable>, <FrequencyStart>, <FrequencyEnd>, <Level>, <RBW>
Defines additional requirements for the emission mask area <no>. The activation state, the area borders, an upper limit and the resolution bandwidth must be specified.
The settings are defined separately for each channel bandwidth combination of the aggregated channels.
Suffix: 
<no>
1..12
Number of the emission mask area
<Band1>
150, 200
First channel bandwidth in 0.1 MHz
<Band2>
50, 100, 150, 200
Second channel bandwidth in 0.1 MHz
For <Band1> = 150, only <Band2> = 150 is allowed
For <Band1> = 200, all <Band2> values are allowed
<Table>
1
Set of additional requirements
1 = CA_NS_04
Parameters:
<Enable>
OFF |
 
 ON
OFF
: disables the check of these requirements
ON
: enables the check of these requirements
*RST:
ON (<no> = 1 to 3) / OFF (<no> = 4 to 12)
<FrequencyStart>
Start frequency of the area, relative to the edges of the aggregated channel bandwidth
Range: 
0 MHz  to  65 MHz
*RST:
depends on the suffixes
Default unit: 
Hz
<FrequencyEnd>
Stop frequency of the area, relative to the edges of the aggregated channel bandwidth
Range: 
0 MHz  to  65 MHz
*RST:
depends on the suffixes
Default unit: 
Hz
<Level>
Upper limit for the area
Range: 
-256 dBm  to  256 dBm
*RST:
depends on the suffixes
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
V3.5.50, V3.7.30 enhanced frequency ranges
Options: 
R&S CMW-KM502/-KM552 for FDD/TDD
Top