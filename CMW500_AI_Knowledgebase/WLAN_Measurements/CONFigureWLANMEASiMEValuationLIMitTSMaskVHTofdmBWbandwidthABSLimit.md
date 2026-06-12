# CONFigureWLANMEASiMEValuationLIMitTSMaskVHTofdmBWbandwidthABSLimit

Module: WLAN Measurements
Source: 775f5b1465094c27.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Transmit Spectrum Mask Limits: 802.11ac
 > 
CONFigure:WLAN:MEAS<i>:MEValuation:LIMit:TSMask:VHTofdm:BW<bandwidth>:ABSLimit
CONFigure:WLAN:MEAS<i>:MEValuation:LIMit:TSMask:VHTofdm:BW<bandwidth>:ABSLimit 
<TSMLimAbs>
Defines an absolute power limit for 802.11ac signals with the specified <bandwidth>.
See 
"Transmit Spectrum Mask OFDM, Absolute Limits"
 for background information.
Suffix: 
<bandwidth>
20, 40, 80, 160, 8080
Parameters:
<TSMLimAbs>
Limit value, applies to frequency offsets greater than 3/2*<bandwidth>, measured at 100 kHz RBW
Range: 
-90 dBm to 10 dBm
*RST:
depends on <bandwidth>
Default unit: 
dBm
Example: 
See 
"Specifying Transmit Spectrum Masks (OFDM)"
Firmware/Software: 
V3.7.10
Options: 
R&S CMW-KM656
Top