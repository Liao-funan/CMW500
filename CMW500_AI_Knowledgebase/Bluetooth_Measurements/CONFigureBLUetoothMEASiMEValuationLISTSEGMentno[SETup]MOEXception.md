# CONFigureBLUetoothMEASiMEValuationLISTSEGMentno[SETup]MOEXception

Module: Bluetooth Measurements
Source: 7c65a790b1db47f1.htm

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
CONFigure:BLUetooth:MEAS<i>:MEValuation:LIST:SEGMent<no>[:SETup]:MOEXception
CONFigure:BLUetooth:MEAS<i>:MEValuation:LIST:SEGMent<no>[:SETup]:MOEXception 
<MeasOnException>
Specifies whether the segment results that the R&S
 
CMW identifies as faulty or inaccurate are rejected.
Suffix: 
<no>
1..48
Segment number
Parameters:
<MeasOnException>
OFF |
 
 ON
ON
: include the erroneous bursts
OFF
: exclude the erroneous bursts
*RST:
OFF
Example: 
See 
"Specifying List Mode Settings"
Firmware/Software: 
V3.2.50
Options: 
R&S CMW-KM012
Top