# CONFigureWLANMEASiMEValuationLIMitMODulationVHTofdmIQOFfsetBWBW

Module: WLAN Measurements
Source: e674ef9fc2a949b4.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Modulation Limits: 802.11ac
 > 
CONFigure:WLAN:MEAS<i>:MEValuation:LIMit:MODulation:VHTofdm:IQOFfset:BW<BW>
CONFigure:WLAN:MEAS<i>:MEValuation:LIMit:MODulation:VHTofdm:IQOFfset:BW<BW> 
<OffsetValue_rel>[, <OffsetValue_abs>]
Defines and activates upper limits for the I/Q origin offset, for 802.11ac and channel bandwidth <BW>.
Suffix: 
<BW>
20, 40, 80, 160, 8080
Channel bandwidth in MHz (8080 means 80+80)
Parameters:
<OffsetValue_rel>
Relative limit
Range: 
-100 dB  to  0 dB
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
V3.5.121
Options: 
R&S CMW-KM656
<BW>
*RST <OffsetValue_rel>
20
-17.48 dB
40
-20.57 dB
80
-23.84 dB
160
-26.85 dB
8080
-32.0 dB, -20.0 dB
Top