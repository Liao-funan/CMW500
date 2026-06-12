# CONFigureBLUetoothMEASiMEValuationLISTSEGMentnoSCOuntMSCalar

Module: Bluetooth Measurements
Source: 2ca57185a4434b1e.htm

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
CONFigure:BLUetooth:MEAS<i>:MEValuation:LIST:SEGMent<no>:SCOunt:MSCalar
CONFigure:BLUetooth:MEAS<i>:MEValuation:LIST:SEGMent<no>:SCOunt:MSCalar 
<ModStatCount>
CONFigure:BLUetooth:MEAS<i>:MEValuation:LIST:SEGMent<no>:SCOunt:PSCalar 
<PowerStatCount>
CONFigure:BLUetooth:MEAS<i>:MEValuation:LIST:SEGMent<no>:SCOunt:SACP 
<SpecACPStatCnt>
CONFigure:BLUetooth:MEAS<i>:MEValuation:LIST:SEGMent<no>:SCOunt:SGACp 
<SpecGACPStatCnt>
CONFigure:BLUetooth:MEAS<i>:MEValuation:LIST:SEGMent<no>:SCOunt:SOBW 
<SpecOBWStatCnt>
Defines the statistic count in the segment. The last mnemonic denotes the measurement type: statistical modulation measurement, statistical power measurement, spectrum ACP measurement (BR, LE), spectrum gated ACP measurement (EDR), spectrum 20 dB bandwidth (occupied bandwidth) measurement (BR).
Suffix: 
<no>
1..48
Parameters:
<StatCount>
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