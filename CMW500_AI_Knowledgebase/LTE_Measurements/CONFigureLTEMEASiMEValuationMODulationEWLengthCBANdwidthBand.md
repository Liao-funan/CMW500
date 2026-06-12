# CONFigureLTEMEASiMEValuationMODulationEWLengthCBANdwidthBand

Module: LTE Measurements
Source: 9d283da4ae574018.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Modulation Measurement Settings
 > 
CONFigure:LTE:MEAS<i>:MEValuation:MODulation:EWLength:CBANdwidth<Band>
CONFigure:LTE:MEAS<i>:MEValuation:MODulation:EWLength:CBANdwidth<Band> 
<CycPrefixNormal>, <CycPrefixExtend>
Specifies the EVM window length in samples for a selected channel bandwidth, depending on the cyclic prefix (CP) type.
Suffix: 
<Band>
14, 30, 50, 100, 150, 200
Channel bandwidth in 0.1 MHz
Parameters:
<CycPrefixNormal>
Samples for normal CP
Range: 
see below
*RST:
see below
<CycPrefixExtend>
Samples for extended CP
Range: 
see below
*RST:
see below
Example: 
See 
"Specifying Measurement-Specific Settings"
Firmware/Software: 
V1.0.10.1
Manual operation: 
See 
"EVM Window Length"
<Band>
Range
<CycPrefixNormal>
*RST
<CycPrefixNormal>
Range
<CycPrefixExtend>
*RST
<CycPrefixExtend>
14
1 to 9
5
1 to 32
28
30
1 to 18
12
1 to 64
58
50
1 to 36
32
1 to 128
124
100
1 to 72
66
1 to 256
250
150
1 to 108
102
1 to 384
374
200
1 to 144
136
1 to 512
504
Top