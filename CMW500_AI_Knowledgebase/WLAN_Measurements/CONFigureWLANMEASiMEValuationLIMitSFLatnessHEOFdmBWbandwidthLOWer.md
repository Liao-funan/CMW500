# CONFigureWLANMEASiMEValuationLIMitSFLatnessHEOFdmBWbandwidthLOWer

Module: WLAN Measurements
Source: b85b198a5f9f4a65.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Spectrum Flatness Limits: 802.11ax
 > 
CONFigure:WLAN:MEAS<i>:MEValuation:LIMit:SFLatness:HEOFdm:BW<bandwidth>:LOWer
CONFigure:WLAN:MEAS<i>:MEValuation:LIMit:SFLatness:HEOFdm:BW<bandwidth>:LOWer 
<Center>, <Side>
Defines lower limits for the spectrum flatness of the center subcarriers and the side subcarriers for 802.11ax signals with the specified <bandwidth>.
The lower limits must be smaller than the upper limit.
Suffix: 
<bandwidth>
20, 40, 80, 160
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
V3.7.20
Options: 
R&S CMW-KM657
Top