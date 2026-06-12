# CONFigureWLANMEASiMEValuationLIMitMODulationHEOFdmEVMallTBLow

Module: WLAN Measurements
Source: 77b6bb8c14a7452b.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Modulation Limits: 802.11ax
 > 
CONFigure:WLAN:MEAS<i>:MEValuation:LIMit:MODulation:HEOFdm:EVMall:TBLow
CONFigure:WLAN:MEAS<i>:MEValuation:LIMit:MODulation:HEOFdm:EVMall:TBLow 
<EVM_BPSK>, <EVM_QPSK>, <EVM_16QAM>, <EVM_64QAM>, <EVM_256QAM>, <EVM_1024QAM>
Sets EVM limits for HE TB PPDU when transmit power is less than or equal to the maximum power of MCS
 
7. The default values are in line with standard IEEE 802.11ax, table 28-45 Allowed relative constellation error versus constellation size and coding rate.
Parameters:
<EVM_BPSK>
EVM limit for BPSK
Default unit: 
dB
Additional parameters: OFF | ON (disables | enables the limit check)
<EVM_QPSK>
EVM limit for QPSK
Default unit: 
dB
Additional parameters: OFF | ON (disables | enables the limit check)
<EVM_16QAM>
EVM limit for 16-QAM
Default unit: 
dB
Additional parameters: OFF | ON (disables | enables the limit check)
<EVM_64QAM>
EVM limit for 64-QAM
Default unit: 
dB
Additional parameters: OFF | ON (disables | enables the limit check)
<EVM_256QAM>
EVM limit for 256-QAM
Default unit: 
dB
Additional parameters: OFF | ON (disables | enables the limit check)
<EVM_1024QAM>
EVM limit for 1024-QAM
Default unit: 
dB
Additional parameters: OFF | ON (disables | enables the limit check)
Example: 
See 
"Specifying Modulation Limits (OFDM)"
Firmware/Software: 
V3.7.30
Options: 
R&S CMW-KM657
Top