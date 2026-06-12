# CONFigureWLANMEASiMEValuationLIMitSFLatnessVHTofdmBWbandwidthLOWer

Module: WLAN Measurements
Source: 78b8550c0b0c47fe.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Spectrum Flatness Limits: 802.11ac
 > 
CONFigure:WLAN:MEAS<i>:MEValuation:LIMit:SFLatness:VHTofdm:BW<bandwidth>:LOWer
CONFigure:WLAN:MEAS<i>:MEValuation:LIMit:SFLatness:VHTofdm:BW<bandwidth>:LOWer 
<Center>, <Side>
Defines lower limits for the spectrum flatness of the center subcarriers and the side subcarriers for 802.11ac signals with the specified <bandwidth>.
The lower limits must be smaller than the upper limit.
Suffix: 
<bandwidth>
20, 40, 80, 160, 8080
Parameters:
<Center>
Range: 
-20 dB  to  4 dB
*RST:
-4 dB
Default unit: 
dB
<Side>
Range: 
-20 dB  to  4 dB
*RST:
-6 dB
Default unit: 
dB
Example: 
See 
"Specifying Spectrum Flatness Limits (OFDM)"
Firmware/Software: 
V3.7.10
Options: 
R&S CMW-KM656
Top