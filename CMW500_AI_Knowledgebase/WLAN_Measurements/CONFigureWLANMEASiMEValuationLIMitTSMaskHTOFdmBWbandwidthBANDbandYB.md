# CONFigureWLANMEASiMEValuationLIMitTSMaskHTOFdmBWbandwidthBANDbandYB

Module: WLAN Measurements
Source: 747e223aaa69446d.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Transmit Spectrum Mask Limits: 802.11n
 > 
CONFigure:WLAN:MEAS<i>:MEValuation:LIMit:TSMask:HTOFdm:BW<bandwidth>:BAND<band>:Y:B
CONFigure:WLAN:MEAS<i>:MEValuation:LIMit:TSMask:HTOFdm:BW<bandwidth>:BAND<band>:Y:B 
<TSMLimYRelLevB>
Defines the relative spectral density limit for point B (frequency offset: 3/2*bandwidth) on the transmit spectrum mask for 802.11n signals with the specified <bandwidth> and the selected <band>.
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
<TSMLimYRelLevB>
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