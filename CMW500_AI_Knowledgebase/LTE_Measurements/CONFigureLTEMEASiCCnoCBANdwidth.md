# CONFigureLTEMEASiCCnoCBANdwidth

Module: LTE Measurements
Source: 751dd65a928e4d37.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE Multi-Evaluation Measurement
 > 
Command Reference
 > 
General Measurement Settings
 > 
Common Measurement Control Settings
 > 
CONFigure:LTE:MEAS<i>:CC<no>:CBANdwidth
CONFigure:LTE:MEAS<i>:CC<no>:CBANdwidth 
<ChannelBW>
Selects the channel bandwidth of component carrier CC<no>. Without carrier aggregation, you can omit <no>.
For the combined signal path scenario, use:
CONFigure:
​
LTE:
​
SIGN<i>:
​
CELL:
​
BANDwidth[:
​
PCC]:
​
DL
CONFigure:
​
LTE:
​
SIGN<i>:
​
CELL:
​
BANDwidth:
​
SCC<c>:
​
DL
Suffix: 
<no>
1..3
Parameters:
<ChannelBW>
B014 |
 
 B030 |
 
 B050 |
 
 B100 |
 
 B150 |
 
 B200
B014
: 1.4 MHz
B030
: 3 MHz
B050
: 5 MHz
B100
: 10 MHz
B150
: 15 MHz
B200
: 20 MHz
*RST:
B200
Example: 
See 
"Specifying General and Common Measurement Settings"
Firmware/Software: 
V3.7.30
Manual operation: 
See 
"Channel Bandwidth"
Top