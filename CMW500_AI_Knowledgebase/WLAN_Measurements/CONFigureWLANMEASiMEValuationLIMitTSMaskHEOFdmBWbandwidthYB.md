# CONFigureWLANMEASiMEValuationLIMitTSMaskHEOFdmBWbandwidthYB

Module: WLAN Measurements
Source: 900479be862544d0.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Transmit Spectrum Mask Limits: 802.11ax
 > 
CONFigure:WLAN:MEAS<i>:MEValuation:LIMit:TSMask:HEOFdm:BW<bandwidth>:Y:B
CONFigure:WLAN:MEAS<i>:MEValuation:LIMit:TSMask:HEOFdm:BW<bandwidth>:Y:B 
<TSMLimYRelLevB>
Defines the relative spectral density limit for point B (frequency offset: 3/2*bandwidth) on the transmit spectrum mask for 802.11ax signals with the specified <bandwidth>.
See 
"Transmit Spectrum Mask OFDM, Default Masks"
 for background information.
Suffix: 
<bandwidth>
20, 40, 80, 160
Parameters:
<TSMLimYRelLevB>
Range: 
-90 dB to 10 dB
*RST:
-40 dB
Default unit: 
dB
Example: 
See 
"Specifying Transmit Spectrum Masks (OFDM)"
Firmware/Software: 
V3.7.20
Options: 
R&S CMW-KM657
Top