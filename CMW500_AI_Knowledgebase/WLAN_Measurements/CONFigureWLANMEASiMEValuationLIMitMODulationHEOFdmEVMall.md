# CONFigureWLANMEASiMEValuationLIMitMODulationHEOFdmEVMall

Module: WLAN Measurements
Source: 58a680e402304a53.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Modulation Limits: 802.11ax
 > 
CONFigure:WLAN:MEAS<i>:MEValuation:LIMit:MODulation:HEOFdm:EVMall
CONFigure:WLAN:MEAS<i>:MEValuation:LIMit:MODulation:HEOFdm:EVMall 
<EVMBR14>, <EVMBR12>, <EVMQR14>, <EVMQR12>, <EVMQR34>, <EVM16QAM14>, <EVM16QAM38>, <EVM16QAM12>, <EVM16QAM34>, <EVM64QAM23>, <EVM64QAM34>, <EVM64QAM56>, <EVM256QAM34>, <EVM256QAM56>[, <EVM1024QAM34>, <EVM1024QAM56>]
Defines and activates upper limits for the error vector magnitude (EVM) of 802.11ax data carriers.
Parameters:
<EVMBR14>
Limits for BPSK, coding rate 1/4, dual carrier modulation (DCM)
Range: 
-100 dB  to  0 dB
*RST:
-5 dB
Default unit: 
dB
Additional parameters: OFF | ON (disables | enables the limit check)
<EVMBR12>
Limits for BPSK, coding rate 1/2
Range: 
-100 dB  to  0 dB
*RST:
-5 dB
Default unit: 
dB
Additional parameters: OFF | ON (disables | enables the limit check)
<EVMQR14>
Limits for QPSK, coding rate 1/4 DCM
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
<EVM16QAM14>
Limits for 16-QAM, coding rate 1/4 DCM
Range: 
-100 dB  to  0 dB
*RST:
-10 dB
Default unit: 
dB
Additional parameters: OFF | ON (disables | enables the limit check)
<EVM16QAM38>
Limits for 16-QAM, coding rate 3/8 DCM
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
<EVM64QAM23>
Limits for 64-QAM, coding rate 2/3
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
-28 dB
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
V3.7.20
Options: 
R&S CMW-KM657
Top