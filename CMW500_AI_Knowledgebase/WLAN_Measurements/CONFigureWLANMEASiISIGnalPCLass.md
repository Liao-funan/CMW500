# CONFigureWLANMEASiISIGnalPCLass

Module: WLAN Measurements
Source: 265b6668d9c94088.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
General Measurement Settings
 > 
Input Signal Settings
 > 
CONFigure:WLAN:MEAS<i>:ISIGnal:PCLass
CONFigure:WLAN:MEAS<i>:ISIGnal:PCLass 
<PowerClass>
Sets the STA transmit power class for standard IEEE 802.11p and selects the transmit spectrum mask to be applied.
Parameters:
<PowerClass>
CLA |
 
 CLB |
 
 CLCD |
 
 USERdefined
CLA
: class A transmit spectrum mask
CLB
: class B transmit spectrum mask
CLCD
: class C or D, no transmit spectrum limit check
USERdefined
: user-defined transmit spectrum mask
*RST:
CLA
Firmware/Software: 
V3.2.40
V3.7.10 added USERdefined
Options: 
R&S CMW-KM655
Manual operation: 
See 
"Power Class"
Top