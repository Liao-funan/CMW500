# CONFigureWLANMEASiMEValuationLIMitMODulationHEOFdmIQOFfsetBWBW

Module: WLAN Measurements
Source: a0fab62d1d414d1a.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Modulation Limits: 802.11ax
 > 
CONFigure:WLAN:MEAS<i>:MEValuation:LIMit:MODulation:HEOFdm:IQOFfset:BW<BW>
CONFigure:WLAN:MEAS<i>:MEValuation:LIMit:MODulation:HEOFdm:IQOFfset:BW<BW> 
<OffsetValue_rel>[, <OffsetValue_abs>]
Defines and activates upper limits for the I/Q origin offset, for 802.11ax and channel bandwidth <BW>.
Suffix: 
<BW>
20, 40, 80, 160, 8080
Channel bandwidth in MHz (8080 means 80+80)
Parameters:
<OffsetValue_rel>
Relative limit
Range: 
-100 dB  to  0 dB
*RST:
see table below
Default unit: 
dB
Additional parameters: OFF | ON (disables | enables the limit check)
<OffsetValue_abs>
Absolute limit, only for <BW>=8080
Range: 
-100 dBm  to  0 dBm
*RST:
-20 dBm
Default unit: 
dBm
Additional parameters: OFF | ON (disables | enables the limit check)
Example: 
See 
"Specifying Modulation Limits (OFDM)"
Firmware/Software: 
V3.7.20
Options: 
R&S CMW-KM657
<BW>
*RST <OffsetValue_rel>
20
-17.48 dB
40
-20.57 dB
80
-23.84 dB
160
-32.00 dB
8080
-26.85 dB
Top