# CONFigureWLANMEASiMEValuationLIMitMODulationVHTofdmEVMall

Module: WLAN Measurements
Source: f5d7156af7a847f9.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Modulation Limits: 802.11ac
 > 
CONFigure:WLAN:MEAS<i>:MEValuation:LIMit:MODulation:VHTofdm:EVMall
CONFigure:WLAN:MEAS<i>:MEValuation:LIMit:MODulation:VHTofdm:EVMall 
<EVMBR12>, <EVMQR12>, <EVMQR34>, <EVM16QAM12>, <EVM16QAM34>, <EVM64QAM12>, <EVM64QAM34>, <EVM64QAM56>, <EVM256QAM34>, <EVM256QAM56>[, <EVM1024QAM34>, <EVM1024QAM56>]
Defines and activates upper limits for the error vector magnitude (EVM) of 802.11ac data carriers.
Parameters:
<EVMBR12>
Limits for BPSK, coding rate 1/2
Range: 
-100 dB  to  0 dB
*RST:
-5 dB
Default unit: 
dB
Additional parameters: OFF | ON (disables | enables the limit check)
<EVMQR12>
Limits for QPSK, coding rate 1/2
Range: 
-100 dB  to  0 dB
*RST:
-10 dB
Default unit: 
dB
Additional parameters: OFF | ON (disables | enables the limit check)
<EVMQR34>
Limits for QPSK, coding rate 3/4
Range: 
-100 dB  to  0 dB
*RST:
-13 dB
Default unit: 
dB
Additional parameters: OFF | ON (disables | enables the limit check)
<EVM16QAM12>
Limits for 16-QAM, coding rate 1/2
Range: 
-100 dB  to  0 dB
*RST:
-16 dB
Default unit: 
dB
Additional parameters: OFF | ON (disables | enables the limit check)
<EVM16QAM34>
Limits for 16-QAM, coding rate 3/4
Range: 
-100 dB  to  0 dB
*RST:
-19 dB
Default unit: 
dB
Additional parameters: OFF | ON (disables | enables the limit check)
<EVM64QAM12>
Limits for 64-QAM, coding rate 1/2
Range: 
-100 dB  to  0 dB
*RST:
-22 dB
Default unit: 
dB
Additional parameters: OFF | ON (disables | enables the limit check)
<EVM64QAM34>
Limits for 64-QAM, coding rate 3/4
Range: 
-100 dB  to  0 dB
*RST:
-25 dB
Default unit: 
dB
Additional parameters: OFF | ON (disables | enables the limit check)
<EVM64QAM56>
Limits for 64-QAM, coding rate 5/6
Range: 
-100 dB  to  0 dB
*RST:
-27 dB
Default unit: 
dB
Additional parameters: OFF | ON (disables | enables the limit check)
<EVM256QAM34>
Limits for 256-QAM, coding rate 3/4
Range: 
-100 dB  to  0 dB
*RST:
-30 dB
Default unit: 
dB
Additional parameters: OFF | ON (disables | enables the limit check)
<EVM256QAM56>
Limits for 256-QAM, coding rate 5/6
Range: 
-100 dB  to  0 dB
*RST:
-32 dB
Default unit: 
dB
Additional parameters: OFF | ON (disables | enables the limit check)
<EVM1024QAM34>
Limits for 1024-QAM, coding rate 3/4
Range: 
-100 dB  to  0 dB
*RST:
-35 dB
Default unit: 
dB
Additional parameters: OFF | ON (disables | enables the limit check)
<EVM1024QAM56>
Limits for 1024-QAM, coding rate 5/6
Range: 
-100 dB  to  0 dB
*RST:
-35 dB
Default unit: 
dB
Additional parameters: OFF | ON (disables | enables the limit check)
Example: 
See 
"Specifying Modulation Limits (OFDM)"
Firmware/Software: 
V3.5.121
Options: 
R&S CMW-KM656
Top