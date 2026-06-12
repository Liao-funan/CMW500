# CONFigureLTEMEASiMEValuationLIMitSEMaskLIMitnoADDitionalTableCBANdwidthBand

Module: LTE Measurements
Source: 22a604987821421d.htm

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
CONFigure:LTE:MEAS<i>:MEValuation:LIMit:SEMask:LIMit<no>:ADDitional<Table>:CBANdwidth<Band>
CONFigure:LTE:MEAS<i>:MEValuation:LIMit:SEMask:LIMit<no>:ADDitional<Table>:CBANdwidth<Band> 
<Enable>, <FrequencyStart>, <FrequencyEnd>, <Level>, <RBW>
Defines additional requirements for the emission mask area <no>. The activation state, the area borders, an upper limit and the resolution bandwidth must be specified.
The emission mask applies to the channel bandwidth <Band>. Several tables of additional requirements are available.
Suffix: 
<Band>
14, 30, 50, 100, 150, 200
Channel bandwidth in 0.1 MHz
<no>
1..12
Number of the emission mask area
<Table>
1..5
Selects the table via its number
Each table is applicable for certain NS_xx values:
1 = NS_03/11/20/21, 2 = NS_04
3 = NS_06/07, 4 = NS_27, 5 = NS_35
Parameters:
<Enable>
OFF |
 
 ON
OFF
: disables the check of these requirements
ON
: enables the check of these requirements
*RST:
depends on channel bandwidth, area number and set of requirements
<FrequencyStart>
Start frequency of the area, relative to the edges of the channel bandwidth
Range: 
see table below
*RST:
depends on channel bandwidth, area number and set of requirements
Default unit: 
Hz
<FrequencyEnd>
Stop frequency of the area, relative to the edges of the channel bandwidth
Range: 
see table below
*RST:
depends on channel bandwidth, area number and set of requirements
Default unit: 
Hz
<Level>
Upper limit for the area
Range: 
-256 dBm  to  256 dBm
*RST:
depends on channel bandwidth, area number and set of requirements
Default unit: 
dBm
<RBW>
K030 |
 
 K050 |
 
 K100 |
 
 K150 |
 
 K200 |
 
 M1
Resolution bandwidth to be used for the area
Only a subset of the values is allowed, depending on <Table> and <Band>, see table below
K030
: 30 kHz
K050
: 50 kHz
K100
: 100 kHz
K150
: 150 kHz
K200
: 200 kHz
M1
: 1 MHz
*RST:
depends on area number and set of requirements
Example: 
See 
"Specifying Limits"
Firmware/Software: 
V2.0.20
V3.2.10: table 1 valid for NS_11
V3.2.80: <no> of areas enhanced to 12
V3.2.82: table 1 valid for NS_20 and NS_21
V3.7.10: added table 4 and RBW K050, K150, K200
V3.7.20: added table 5
Frequency ranges
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
Resolution bandwidths
<Table>
<Band>
Supported <RBW>
1 to 3, 5
14, 30, 50, 100, 150, 200
K030, K100, M1
4
14, 30
K030, K100, M1
50, 100
K050, K100, M1
150
K050, K150, M1
200
K050, K200, M1
Top