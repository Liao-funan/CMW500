# CONFigureBLUetoothMEASiMEValuationLISTSEGMentnoSCOunt

Module: Bluetooth Measurements
Source: 5eab146cccbe4973.htm

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
CONFigure:BLUetooth:MEAS<i>:MEValuation:LIST:SEGMent<no>:SCOunt
CONFigure:BLUetooth:MEAS<i>:MEValuation:LIST:SEGMent<no>:SCOunt 
<ModStatCount>, <PowerStatCount>, <SpecOBWStatCnt>, <SpecACPStatCnt>, <SpecGACPStatCnt>
Defines the statistic count for the particular measurement type in the segment.
Suffix: 
<no>
1..48
Segment number
Parameters:
<ModStatCount>
Statistic count for the statistical modulation measurement
Range: 
1  to  1000
*RST:
10
<PowerStatCount>
Statistic count for the statistical power measurement
Range: 
1  to  1000
*RST:
10
<SpecOBWStatCnt>
Statistic count for the spectrum 20 dB bandwidth measurement (BR)
Range: 
1  to  1000
*RST:
10
<SpecACPStatCnt>
Statistic count for the spectrum ACP measurement (BR, LE)
Range: 
1  to  1000
*RST:
10
<SpecGACPStatCnt>
Statistic count for the spectrum gated ACP measurement (EDR)
Range: 
1  to  1000
*RST:
10
Example: 
See 
"Specifying List Mode Settings"
Firmware/Software: 
V3.2.50
Options: 
R&S CMW-KM012
Top