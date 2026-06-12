# CONFigureWLANMEASiMEValuationLIMitMODulationPOFDmEVM

Module: WLAN Measurements
Source: f2ec283026664485.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Modulation Limits: 802.11p OFDM
 > 
CONFigure:WLAN:MEAS<i>:MEValuation:LIMit:MODulation:POFDm:EVM
CONFigure:WLAN:MEAS<i>:MEValuation:LIMit:MODulation:POFDm:EVM 
<BPSK12>, <BPSK34>, <QPSK12>, <QPSK34>, <Q16AM12>, <Q16AM34>, <Q64AM23>, <Q64AM34>
Defines and activates upper limits for the error vector magnitude (EVM) of the data carriers in 802.11p signals.
Parameters:
<BPSK12>
Limit for data rate BPSK modulation and coding rate 1/2
Range: 
-100 dB  to  0 dB
*RST:
-5 dB
Default unit: 
dB
Additional parameters: OFF | ON (disables | enables the limit check)
<BPSK34>
Limit for data rate BPSK modulation and coding rate 3/4
Range: 
-100 dB  to  0 dB
*RST:
-8 dB
Default unit: 
dB
Additional parameters: OFF | ON (disables | enables the limit check)
<QPSK12>
Limit for data rate QPSK modulation and coding rate 1/2
Range: 
-100 dB  to  0 dB
*RST:
-10 dB
Default unit: 
dB
Additional parameters: OFF | ON (disables | enables the limit check)
<QPSK34>
Limit for data rate QPSK modulation and coding rate 3/4
Range: 
-100 dB  to  0 dB
*RST:
-13 dB
Default unit: 
dB
Additional parameters: OFF | ON (disables | enables the limit check)
<Q16AM12>
Limit for data rate 16-QAM modulation and coding rate 1/2
Range: 
-100 dB  to  0 dB
*RST:
-16 dB
Default unit: 
dB
Additional parameters: OFF | ON (disables | enables the limit check)
<Q16AM34>
Limit for data rate 16-QAM modulation and coding rate 3/4
Range: 
-100 dB  to  0 dB
*RST:
-19 dB
Default unit: 
dB
Additional parameters: OFF | ON (disables | enables the limit check)
<Q64AM23>
Limit for data rate 64-QAM modulation and coding rate 2/3
Default unit: 
dB
Additional parameters: OFF | ON (disables | enables the limit check)
<Q64AM34>
Limit for data rate 64-QAM modulation and coding rate 3/4
Default unit: 
dB
Additional parameters: OFF | ON (disables | enables the limit check)
Example: 
See 
"Specifying Modulation Limits (OFDM)"
Firmware/Software: 
V3.2.40
Options: 
R&S CMW-KM655
Top