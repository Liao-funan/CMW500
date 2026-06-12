# CONFigureLTESIGNiCONNectionCSFBTDSCdma

Module: LTE Signaling
Source: 685810be97ec4ed3.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Connection Configuration
 > 
General Connection Settings
 > 
CONFigure:LTE:SIGN<i>:CONNection:CSFB:TDSCdma
CONFigure:LTE:SIGN<i>:CONNection:CSFB:TDSCdma 
<Band>, <DLChannel>
Configures the TD-SCDMA target for MO CSFB.
Parameters:
<Band>
OB1 |
 
 OB2 |
 
 OB3
OB1:
 Band 1 (F), 1880 MHz to 1920 MHz
OB2:
 Band 2 (A), 2010 MHz to 2025 MHz
OB3:
 Band 3 (E), 2300 MHz to 2400 MHz
*RST:
OB1
<DLChannel>
Downlink channel number
The allowed range depends on the frequency band:
OB1: 9400 to 9600
OB2: 10050 to 10125
OB3: 11500 to 12000
*RST:
9400
Example: 
See 
"Configuring General Connection Settings Part 2"
Firmware/Software: 
V3.5.20
Manual operation: 
See 
"CS Fallback (MO)"
Top