# CONFigureWLANMEASiMEValuationLIMitTSMaskVHTofdmBWbandwidthYD

Module: WLAN Measurements
Source: a540b1e027014f37.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Transmit Spectrum Mask Limits: 802.11ac
 > 
CONFigure:WLAN:MEAS<i>:MEValuation:LIMit:TSMask:VHTofdm:BW<bandwidth>:Y:D
CONFigure:WLAN:MEAS<i>:MEValuation:LIMit:TSMask:VHTofdm:BW<bandwidth>:Y:D 
<TSMLimYRelLevD>
Defines the relative spectral density limit for point D (center frequency offset: 1/2*bandwidth + 1 MHz) on the transmit spectrum mask for 802.11ac signals with the specified <bandwidth>.
See 
"Transmit Spectrum Mask OFDM, Default Masks"
 for background information.
Suffix: 
<bandwidth>
20, 40, 80, 160, 8080
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
V3.7.10
Options: 
R&S CMW-KM656
Top