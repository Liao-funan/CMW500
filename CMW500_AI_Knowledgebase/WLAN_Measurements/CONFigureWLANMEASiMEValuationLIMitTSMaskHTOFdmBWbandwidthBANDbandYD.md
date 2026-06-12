# CONFigureWLANMEASiMEValuationLIMitTSMaskHTOFdmBWbandwidthBANDbandYD

Module: WLAN Measurements
Source: 773f693bd6614176.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Transmit Spectrum Mask Limits: 802.11n
 > 
CONFigure:WLAN:MEAS<i>:MEValuation:LIMit:TSMask:HTOFdm:BW<bandwidth>:BAND<band>:Y:D
CONFigure:WLAN:MEAS<i>:MEValuation:LIMit:TSMask:HTOFdm:BW<bandwidth>:BAND<band>:Y:D 
<TSMLimYRelLevD>
Defines the relative spectral density limit for point D (frequency offset: 1/2*bandwidth + 1 MHz) on the transmit spectrum mask for 802.11n signals with the specified <bandwidth> and the selected <band>.
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
R&S CMW-KM651
Top