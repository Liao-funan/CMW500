# CONFigureBLUetoothMEASiMEValuationLISTSEGMentno[SETup]PTYPe

Module: Bluetooth Measurements
Source: bba4d1e63ed94ec6.htm

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
CONFigure:BLUetooth:MEAS<i>:MEValuation:LIST:SEGMent<no>[:SETup]:PTYPe
CONFigure:BLUetooth:MEAS<i>:MEValuation:LIST:SEGMent<no>[:SETup]:PTYPe 
<PacketType>
Specifies the packet type expected in the segment.
Suffix: 
<no>
1..48
Segment number
Parameters:
<PacketType>
DH1 |
 
 DH3 |
 
 DH5 |
 
 E21P |
 
 E23P |
 
 E25P |
 
 E31P |
 
 E33P |
 
 E35P |
 
 RFPHytest |
 
 ADVertiser
DH1, DH3, DH5
: BR packet
E21P, E23P, E25P, E31P, E33P, E35P
: 2-DH1, 2-DH3, 2-DH5, 3-DH1, 3-DH3, 3-DH5 EDR packet
RFPHytest
: LE test packet
ADVertiser
: LE advertiser
*RST:
DH1
Example: 
See 
"Specifying List Mode Settings"
Firmware/Software: 
V3.2.50
V3.7.20: added 
<PacketType> ADVertiser
Options: 
R&S CMW-KM012
R&S CMW-KM611 for <PacketType> RFPHytest and ADVertiser
R&S
 
CMW100/CMW with MUA for <PacketType> ADVertiser
Top