# CONFigureWCDMaMEASiUESignalULConfig

Module: WCDMA Measurements
Source: ca55cb3396bf4b58.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA Multi-Evaluation Measurement
 > 
Command Reference
 > 
General Measurement Settings
 > 
UE Signal Info
 > 
CONFigure:WCDMa:MEAS<i>:UESignal:ULConfig
CONFigure:WCDMa:MEAS<i>:UESignal:ULConfig 
<ULConfiguration>
Selects the uplink signal configuration.
Parameters:
<ULConfiguration>
QPSK |
 
 WCDMa |
 
 HSDPa |
 
 HSUPa |
 
 HSPA |
 
 HSPLus |
 
 DCHS |
 
 HDUPlus |
 
 DDUPlus |
 
 DHDU |
 
 3CHS |
 
 3DUPlus |
 
 3HDU |
 
 4CHS |
 
 4DUPlus |
 
 4HDU
QPSK
: QPSK signal
WCDMa
: WCDMA R99 signal
HSDPa
: signal with HSDPA-related channels
HSUPa
: signal with HSUPA channels
HSPA
: HSDPA related and HSUPA channels
HSPLus
: HSDPA+ related channels
HDUPlus
: HSDPA+ related and HSUPA channels
DHDU
: dual carrier HSDPA+ and dual carrier HSUPA active
The following values cannot be set, but can be returned while the combined signal path scenario is active:
DCHS
: dual carrier HSDPA+ active
DDUPlus
: dual carrier HSDPA+ and HSUPA active
3CHS
: three carrier HSDPA+ active
3DUPlus
: three carrier HSDPA+ and HSUPA active
3HDU
: three carrier HSDPA+ and dual carrier HSUPA active
4CHS
: four carrier HSDPA+ active
4DUPlus
: four carrier HSDPA+ and HSUPA active
4HDU
: four carrier HSDPA+ and dual carrier HSUPA active
*RST:
WCDM
Example: 
See 
"Specifying Required Settings"
Firmware/Software: 
V1.0.10.1
V3.0.20: added HDUPlus, DCHS and DDUPlus
V3.2.60: added DHDU
V3.5.20: added 3CHS, 3DUPlus, 3HDU, 4CHS, 4DUPlus, 4HDU
Options: 
R&S CMW-KM401 for all HS... values
R&S CMW-KM403 also needed for HSDPA+ (HSPLus, HDUPlus, DCHS, DDUPlus)
R&S CMW-KM405 required for dual carrier HSUPA (DHDU)
Manual operation: 
See 
"UL Configuration"
Top