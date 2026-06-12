# CONFigureWLANMEASiMEValuationLIMitTSMaskVHTofdmBWbandwidthYC

Module: WLAN Measurements
Source: 41b59ce821684057.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Transmit Spectrum Mask Limits: 802.11ac
 > 
CONFigure:WLAN:MEAS<i>:MEValuation:LIMit:TSMask:VHTofdm:BW<bandwidth>:Y:C
CONFigure:WLAN:MEAS<i>:MEValuation:LIMit:TSMask:VHTofdm:BW<bandwidth>:Y:C 
<TSMLimYRelLevC>
Defines the relative spectral density limit for point C (frequency offset: 1*bandwidth) on the transmit spectrum mask for 802.11ac signals with the specified <bandwidth>.
See 
"Transmit Spectrum Mask OFDM, Default Masks"
 for background information.
Suffix: 
<bandwidth>
20, 40, 80, 160, 8080
Parameters:
<TSMLimYRelLevC>
Range: 
-90 dB to 10 dB
*RST:
-28 dB
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