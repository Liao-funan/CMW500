# CONFigureBLUetoothSIGNiRFSettingsDTXMODEBRATe

Module: Bluetooth Signaling
Source: 162a5709da944d87.htm

## 原始指令文档说明
Bluetooth
®
 Signaling
 > 
Command Reference
 > 
General Settings
 > 
Dirty Transmitter Settings
 > 
CONFigure:BLUetooth:SIGN<i>:RFSettings:DTX:MODE:BRATe
CONFigure:BLUetooth:SIGN<i>:RFSettings:DTX:MODE:BRATe 
<DTXMode>
CONFigure:BLUetooth:SIGN<i>:RFSettings:DTX:MODE:EDRate 
<DTXMode>
CONFigure:BLUetooth:SIGN<i>:RFSettings:DTX:MODE:LENergy:LRANge 
<DTXMode>
CONFigure:BLUetooth:SIGN<i>:RFSettings:DTX:MODE:LENergy:LE2M 
<DTXMode>
CONFigure:BLUetooth:SIGN<i>:RFSettings:DTX:MODE:LENergy[:LE1M] 
<DTXMode>
Configure the dirty transmitter.
Commands for BR (
...:BRATe...
), EDR (
...:EDRate...
), LE 1M PHY (
...:LE1M...
), LE 2M PHY (
...:LE2M...
), and LE coded PHY (
...:LRANge...
) are available.
Parameters:
<DTXMode>
SINGle values |
 
 SPEC table
SING
: single set of dirty transmitter parameters. No periodic change of the frequency offset, modulation index, and symbol timing error occurs.
SPEC
: settings according to the test specification for Bluetooth wireless technology, see 
"Dirty Tx Mode"
.
*RST:
SPEC
Example: 
See 
"Configure Dirty Transmitter"
Firmware/Software: 
V3.2.30
V3.2.70: added command for LE1M
V3.5.70: added commands for LE2M and LRANge
Options: 
R&S CMW-KS610 for BR/EDR
R&S CMW-KS611 for LE
Plus R&S CMW-KS721 for LE2M and LRANge
Manual operation: 
See 
"Dirty Tx Mode"
Top