# CONFigureWLANMEASiMEValuationLIMitSFLatnessPOFDmBWbandwidthLOWer

Module: WLAN Measurements
Source: fbdcad659cdb4d74.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Spectrum Flatness Limits: 802.11p OFDM
 > 
CONFigure:WLAN:MEAS<i>:MEValuation:LIMit:SFLatness:POFDm:BW<bandwidth>:LOWer
CONFigure:WLAN:MEAS<i>:MEValuation:LIMit:SFLatness:POFDm:BW<bandwidth>:LOWer 
<Center>, <Side>
Defines lower limits for the spectrum flatness of the center subcarriers and the side subcarriers of 802.11p OFDM signals with the specified <bandwidth>.
The lower limits must be smaller than the upper limit.
Suffix: 
<bandwidth>
5, 10, 20
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
R&S CMW-KM655
Top