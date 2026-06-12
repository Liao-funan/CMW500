# CONFigureWLANMEASiMEValuationLIMitTSMaskHEOFdmBWbandwidthYD

Module: WLAN Measurements
Source: a336b315590f4534.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Transmit Spectrum Mask Limits: 802.11ax
 > 
CONFigure:WLAN:MEAS<i>:MEValuation:LIMit:TSMask:HEOFdm:BW<bandwidth>:Y:D
CONFigure:WLAN:MEAS<i>:MEValuation:LIMit:TSMask:HEOFdm:BW<bandwidth>:Y:D 
<TSMLimYRelLevD>
Defines the relative spectral density limit for point D (center frequency offset: 1/2*bandwidth + 1 MHz) on the transmit spectrum mask for 802.11ax signals with the specified <bandwidth>.
See 
"Transmit Spectrum Mask OFDM, Default Masks"
 for background information.
Suffix: 
<bandwidth>
20, 40, 80, 160
Parameters:
<TSMLimYRelLevD>
Range: 
-90 dB to 10 dB
*RST:
-20 dB
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