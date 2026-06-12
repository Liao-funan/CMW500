# CONFigureWLANMEASiMEValuationLIMitMODulationHTOFdmEVM

Module: WLAN Measurements
Source: e8ed1bd497414449.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Modulation Limits: 802.11n
 > 
CONFigure:WLAN:MEAS<i>:MEValuation:LIMit:MODulation:HTOFdm:EVM
CONFigure:WLAN:MEAS<i>:MEValuation:LIMit:MODulation:HTOFdm:EVM 
<EVMBR12>, <EVMQR12>, <EVMQR34>, <EVMQ1M12>, <EVMQ1M34>, <EVMQ6M12>, <EVMQ6M34>, <EVMQ6M56>
Defines and activates upper limits for the error vector magnitude (EVM) of the data carriers (802.11n).
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
<EVMQ1M12>
Limits for 16-QAM, coding rate 1/2
Range: 
-100 dB  to  0 dB
*RST:
-16 dB
Default unit: 
dB
Additional parameters: OFF | ON (disables | enables the limit check)
<EVMQ1M34>
Limits for 16-QAM, coding rate 3/4
Range: 
-100 dB  to  0 dB
*RST:
-19 dB
Default unit: 
dB
Additional parameters: OFF | ON (disables | enables the limit check)
<EVMQ6M12>
Limits for 64-QAM, coding rate 1/2
Range: 
-100 dB  to  0 dB
*RST:
-22 dB
Default unit: 
dB
Additional parameters: OFF | ON (disables | enables the limit check)
<EVMQ6M34>
Limits for 64-QAM, coding rate 3/4
Range: 
-100 dB  to  0 dB
*RST:
-25 dB
Default unit: 
dB
Additional parameters: OFF | ON (disables | enables the limit check)
<EVMQ6M56>
Limits for 64-QAM, coding rate 5/6
Range: 
-100 dB  to  0 dB
*RST:
-27 dB
Default unit: 
dB
Additional parameters: OFF | ON (disables | enables the limit check)
Example: 
See 
"Specifying Modulation Limits (OFDM)"
Firmware/Software: 
V3.5.121
Options: 
R&S CMW-KM651
Top