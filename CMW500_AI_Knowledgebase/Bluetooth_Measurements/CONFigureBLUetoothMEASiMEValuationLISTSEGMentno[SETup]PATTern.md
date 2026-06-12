# CONFigureBLUetoothMEASiMEValuationLISTSEGMentno[SETup]PATTern

Module: Bluetooth Measurements
Source: 203a7cf9db9e453f.htm

## 原始指令文档说明
Bluetooth
®
 Measurements
 > 
Command Reference
 > 
Bluetooth Multi-Evaluation Measurement Commands
 > 
List Mode Settings
 > 
CONFigure:BLUetooth:MEAS<i>:MEValuation:LIST:SEGMent<no>[:SETup]:PATTern
CONFigure:BLUetooth:MEAS<i>:MEValuation:LIST:SEGMent<no>[:SETup]:PATTern 
<PatternType>
Specifies the payload pattern type expected in the segment.
Suffix: 
<no>
1..48
Segment number
Parameters:
<PatternType>
ALL1 |
 
 P11 |
 
 OTHer |
 
 ALTernating |
 
 P44
ALL1
: 11111111
P11
: 10101010
OTHer
: any pattern except P11, P44, ALL1
ALTernating
: the periodical change of the pattern P11 and P44
P44
: 11110000
*RST:
OTH
Example: 
See 
"Specifying List Mode Settings"
Firmware/Software: 
V3.2.50
V3.5.30: added pattern 
ALTernating
V3.7.20: added 
ALL1
Options: 
R&S CMW-KM012
R&S
 
CMW100/CMW with MUA for <PatternType> ALL1
Top