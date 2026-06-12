# CONFigureWLANMEASiMEValuationLIMitTSMaskHTOFdmBWbandwidthBANDbandYA

Module: WLAN Measurements
Source: ccbf49831d8245b2.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Transmit Spectrum Mask Limits: 802.11n
 > 
CONFigure:WLAN:MEAS<i>:MEValuation:LIMit:TSMask:HTOFdm:BW<bandwidth>:BAND<band>:Y:A
CONFigure:WLAN:MEAS<i>:MEValuation:LIMit:TSMask:HTOFdm:BW<bandwidth>:BAND<band>:Y:A 
<TSMLimYRelLevA>
Defines the relative spectral density limit for point A (frequency offset: 2*bandwidth) on the transmit spectrum mask for 802.11n signals with the specified <bandwidth> and the selected <band>.
See 
"Transmit Spectrum Mask OFDM, Default Masks"
 for background information.
Suffix: 
<bandwidth>
20, 40
<band>
2, 5
2.4-GHz band or 5-GHz band
Parameters:
<TSMLimYRelLevA>
Range: 
-90 dB to 10 dB
*RST:
depends on <band>
Default unit: 
dB
Example: 
See 
"Specifying Transmit Spectrum Masks (OFDM)"
Firmware/Software: 
V3.7.10
Options: 
R&S CMW-KM651
Top